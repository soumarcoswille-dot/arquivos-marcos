"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TreeDeciduous } from "lucide-react";
import { gtmEvents } from "@/lib/gtm";

export function CalculatorSection() {
    const [billValue, setBillValue] = useState<string>("");
    const hasTrackedStart = useRef(false);

    const baseValue = parseFloat(billValue.replace(/\D/g, "")) / 100 || 0;

    // Calculations
    const monthlySavings = baseValue * 0.15; // 15% savings
    const annualSavings = monthlySavings * 12;
    // Trees calculation based on R$ 400 = 14 trees ratio (~28.5 factor)
    const treesPreserved = Math.floor(baseValue / 28.5) || 0;

    // Formatting currency
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, "");
        if (rawValue === "") {
            setBillValue("");
            hasTrackedStart.current = false;
            return;
        }
        const numericValue = parseFloat(rawValue) / 100;

        // Track first interaction with simulator
        if (!hasTrackedStart.current && numericValue > 0) {
            gtmEvents.simulatorStart(numericValue);
            hasTrackedStart.current = true;
        }

        setBillValue(formatCurrency(numericValue));
    };

    const generateWhatsAppLink = () => {
        const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5547997838464";

        let message = "";

        if (baseValue > 0 && baseValue < 150) {
            message = `Olá! Acabei de fazer uma simulação no site. Minha conta média é de ${formatCurrency(baseValue)}. Quero saber se consigo desconto para minha faixa de consumo.`;
        } else if (baseValue >= 150) {
            message = `Olá! Acabei de fazer uma simulação no site da iGreen. Minha conta média é de ${formatCurrency(baseValue)}. Vi que posso economizar cerca de ${formatCurrency(annualSavings)} por ano sem investir nada. Gostaria de confirmar se minha região aceita a Conexão Green e garantir esse desconto.`;
        } else {
            message = "Olá! Gostaria de saber mais sobre a iGreen Energy e como economizar na minha conta de luz.";
        }

        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    const handleCtaClick = () => {
        // Track simulator completion and WhatsApp redirect
        if (baseValue > 0) {
            gtmEvents.simulatorComplete(baseValue, monthlySavings);
        }
        gtmEvents.whatsappClick("calculator", baseValue > 0 ? baseValue : undefined);
        window.open(generateWhatsAppLink(), '_blank');
    };

    return (
        <section id="simulador" className="py-24 bg-black relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">

                    {/* Left Column - Input */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
                            Quanto você gasta de luz por mês?
                        </h2>
                        <p className="text-gray-400 mb-6 md:mb-8 text-base md:text-lg">
                            Simule agora e veja quanto dinheiro você está deixando na mesa.
                        </p>

                        <div className="space-y-2 mb-6 md:mb-8">
                            <label className="text-sm font-semibold text-gray-300 ml-1">
                                Valor médio da conta (R$)
                            </label>
                            <input
                                type="text"
                                inputMode="numeric"
                                value={billValue}
                                onChange={handleInputChange}
                                placeholder="R$ 0,00"
                                className="w-full h-14 md:h-16 bg-white/5 border border-white/10 rounded-2xl px-4 md:px-6 text-lg md:text-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all font-medium"
                            />
                        </div>

                        <Button
                            onClick={handleCtaClick}
                            className="w-full h-14 md:h-16 text-base md:text-lg font-bold rounded-full bg-green-500 hover:bg-green-400 text-black transition-all hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] mb-4"
                        >
                            {baseValue > 0
                                ? `Resgatar meus ${formatCurrency(annualSavings)} de economia`
                                : "Simular Economia"
                            }
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <p className="text-xs text-center text-gray-500 max-w-md mx-auto">
                            *Cálculo estimado com base na média de 15% de desconto. O valor final pode variar conforme a concessionária.
                        </p>
                    </div>

                    {/* Right Column - Result Card */}
                    <div className="bg-zinc-950 border border-white/10 rounded-3xl md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 border border-green-500/30 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-green-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-green-500 font-bold tracking-wider text-sm">RESULTADO DA SIMULAÇÃO</span>
                        </div>

                        {/* Values */}
                        <div className="space-y-8 relative z-10">
                            <div>
                                <p className="text-gray-400 mb-1 text-sm">Economia Mensal Estimada</p>
                                <p className="text-4xl font-bold text-white">
                                    {formatCurrency(monthlySavings)}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-400 mb-1 text-sm">Economia Anual (12 meses)</p>
                                <p className="text-6xl font-bold text-green-500 tracking-tight">
                                    {formatCurrency(annualSavings)}
                                </p>
                                {baseValue > 0 && (
                                    <p className="text-green-500/80 text-sm mt-2 font-medium">
                                        Isso equivale a quase 2 contas grátis!
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/10 my-6 md:my-8" />

                        {/* Trees Footer */}
                        <div className="flex items-center gap-4">
                            <div className="bg-green-900/20 p-3 rounded-full border border-green-500/10">
                                <TreeDeciduous className="h-6 w-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white leading-none">
                                    {treesPreserved}
                                </p>
                                <p className="text-sm text-gray-400">
                                    Árvores preservadas por ano
                                </p>
                            </div>
                        </div>

                        {/* Background Gradient */}
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-500/5 to-transparent pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
