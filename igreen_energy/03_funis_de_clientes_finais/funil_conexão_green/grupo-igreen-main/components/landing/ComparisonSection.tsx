"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gtmEvents } from "@/lib/gtm";

export function ComparisonSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Por que o Conexão Solar é Diferente?
                    </h2>
                    <p className="mt-4 text-xl text-muted-foreground">
                        Compare e veja a vantagem do nosso modelo inteligente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Traditional Way */}
                    <div className="p-8 rounded-3xl border border-border bg-white text-muted-foreground opacity-80 hover:opacity-100 transition-opacity">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-foreground">Compra Tradicional</h3>
                            <p className="text-sm">O modelo antigo de adquirir solar.</p>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <X className="w-5 h-5 text-destructive" />
                                <span>Alto Investimento Inicial (R$ 15k+)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <X className="w-5 h-5 text-destructive" />
                                <span>Risco de Manutenção e Equipamento</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <X className="w-5 h-5 text-destructive" />
                                <span>Retorno do Investimento em 3-5 anos</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <X className="w-5 h-5 text-destructive" />
                                <span>Descapitalização Imediata</span>
                            </li>
                        </ul>
                    </div>

                    {/* Conexão Solar Way - Highlighted */}
                    <div className="relative p-8 rounded-3xl border-2 border-secondary bg-secondary/5 shadow-2xl scale-105 transform z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                            Recomendado
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-secondary-foreground">Conexão Solar</h3>
                            <p className="text-sm text-secondary">A evolução inteligente.</p>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-foreground font-medium">
                                <Check className="w-5 h-5 text-secondary" />
                                <span>Zero Investimento Inicial</span>
                            </li>
                            <li className="flex items-center gap-3 text-foreground font-medium">
                                <Check className="w-5 h-5 text-secondary" />
                                <span>Manutenção e Seguro Inclusos</span>
                            </li>
                            <li className="flex items-center gap-3 text-foreground font-medium">
                                <Check className="w-5 h-5 text-secondary" />
                                <span>Economia Imediata (Mês 1)</span>
                            </li>
                            <li className="flex items-center gap-3 text-foreground font-medium">
                                <Check className="w-5 h-5 text-secondary" />
                                <span>Fluxo de Caixa Positivo</span>
                            </li>
                        </ul>
                        <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full h-12">
                            <Link
                                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5547997838464"}?text=Olá! Gostaria de saber mais sobre a Conexão Solar.`}
                                target="_blank"
                                onClick={() => gtmEvents.whatsappClick("solar_comparison_cta")}
                            >
                                Escolher Conexão Solar
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
