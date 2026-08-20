"use client";

import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gtmEvents } from "@/lib/gtm";

export function RoiSimulator() {
    const [billValue, setBillValue] = useState([500]);
    const hasTrackedStart = useRef(false);

    // Simple estimation logic (illustrative)
    const annualSavings = billValue[0] * 12 * 0.95; // 95% reduction
    const lifetimeSavings = annualSavings * 25; // 25 years
    const estimatedInstallment = billValue[0] * 0.9; // Installment roughly 90% of bill

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setBillValue([value]);

        if (!hasTrackedStart.current && value > 0) {
            gtmEvents.simulatorStart(value);
            hasTrackedStart.current = true;
        }
    };

    const handleCtaClick = () => {
        gtmEvents.simulatorComplete(billValue[0], annualSavings / 12);
        gtmEvents.whatsappClick("roi_simulator_placas", billValue[0]);
    };

    return (
        <section id="simulador" className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/0">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary w-fit mb-5">
                            <Calculator className="h-4 w-4" />
                            <span>Simulador de Economia</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                            Faça as contas. <br />
                            <span className="text-primary">Vale a pena.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-5">
                            Veja quanto você deixará de dar para a concessionária e passará a investir no seu próprio patrimônio.
                        </p>

                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-border space-y-5">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground mb-4 block">
                                    Qual o valor médio da sua conta de luz?
                                </label>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-3xl font-bold text-foreground">R$</span>
                                    <span className="text-5xl font-bold text-primary tracking-tight">{billValue[0]}</span>
                                </div>
                                <div className="relative w-full h-2 bg-secondary/20 rounded-full mb-6">
                                    <div
                                        className="absolute h-full bg-primary rounded-full"
                                        style={{ width: `${((billValue[0] - 100) / (3000 - 100)) * 100}%` }}
                                    />
                                    <input
                                        type="range"
                                        min={100}
                                        max={3000}
                                        step={50}
                                        value={billValue[0]}
                                        onChange={handleSliderChange}
                                        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div
                                        className="absolute w-5 h-5 bg-white border-2 border-primary rounded-full top-1/2 -translate-y-1/2 -ml-2.5 pointer-events-none shadow-md"
                                        style={{ left: `${((billValue[0] - 100) / (3000 - 100)) * 100}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>R$ 100</span>
                                    <span>R$ 3.000+</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dashed">
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-bold">Economia 25 anos</p>
                                    <p className="text-2xl font-bold text-green-600">
                                        ~ {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lifetimeSavings)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-bold">Parcela Estimada</p>
                                    <p className="text-2xl font-bold text-blue-600">
                                        ~ {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(estimatedInstallment)}
                                    </p>
                                </div>
                            </div>

                            <Button asChild size="lg" className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20">
                                <Link
                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5547997838464"}?text=Olá! Gostaria de receber uma proposta detalhada sobre energia solar.`}
                                    target="_blank"
                                    onClick={handleCtaClick}
                                    className="flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    Quero Proposta Detalhada
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative hidden lg:flex h-full min-h-[600px]">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/familia-com-casa-com-placas-solares.jpg"
                                alt="Família feliz em casa com energia solar"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
