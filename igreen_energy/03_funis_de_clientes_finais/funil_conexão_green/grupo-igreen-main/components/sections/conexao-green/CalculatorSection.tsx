"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TreeDeciduous, Calculator, Zap, TrendingUp } from "lucide-react";
import { gtmEvents } from "@/lib/gtm";

export function CalculatorSection() {
    // Initial value R$ 500
    const [billValue, setBillValue] = useState(500);
    const hasTrackedStart = useRef(false);

    // Calculations
    const monthlySavings = billValue * 0.15; // 15% savings
    const annualSavings = monthlySavings * 12;
    // Trees calculation based on R$ 400 = 14 trees ratio (~28.5 factor)
    const treesPreserved = Math.floor(billValue / 28.5) || 0;

    // Formatting currency
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setBillValue(newValue);

        // Track first interaction with simulator
        if (!hasTrackedStart.current && newValue > 0) {
            gtmEvents.simulatorStart(newValue);
            hasTrackedStart.current = true;
        }
    };

    const generateWhatsAppLink = () => {
        const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5547997838464";
        let message = "";

        if (billValue < 150) {
            message = `Olá! Acabei de fazer uma simulação no site. Minha conta média é de ${formatCurrency(billValue)}. Quero saber se consigo desconto para minha faixa de consumo.`;
        } else {
            message = `Olá! Acabei de fazer uma simulação no site da iGreen. Minha conta média é de ${formatCurrency(billValue)}. Vi que posso economizar cerca de ${formatCurrency(annualSavings)} por ano sem investir nada. Gostaria de confirmar se minha região aceita a Conexão Green e garantir esse desconto.`;
        }

        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    const handleCtaClick = () => {
        // Track simulator completion and WhatsApp redirect
        gtmEvents.simulatorComplete(billValue, monthlySavings);
        gtmEvents.whatsappClick("calculator", billValue);
        window.open(generateWhatsAppLink(), '_blank');
    };

    return (
        <section id="simulador" className="pt-24 pb-12 md:pt-40 md:pb-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements for "Fresh Tech" feel */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-3 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-3 md:mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs md:text-sm font-semibold text-primary mb-3 md:mb-6"
                    >
                        <Calculator className="h-4 w-4" />
                        <span>Simulador de Economia Inteligente</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-3 md:mb-4 tracking-tight leading-tight"
                    >
                        Descubra quanto você vai <br className="hidden md:block" />
                        <span className="text-primary italic">economizar utilizando energia renovável</span>
                    </motion.h2>

                </div>

                <div className="grid lg:grid-cols-5 gap-5 md:gap-8 items-start max-w-6xl mx-auto">
                    {/* Left side - Control Panel */}
                    <div className="lg:col-span-3 bg-white rounded-[1rem] p-5 md:p-12 shadow-xl shadow-slate-200/60 border border-slate-100 h-full flex flex-col justify-center">
                        <div className="space-y-8 md:space-y-10">
                            <div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 mb-6 md:mb-8">
                                    <label className="text-base md:text-lg font-bold text-slate-800">
                                        Valor médio da sua conta
                                    </label>
                                    <div className="text-left md:text-right">
                                        <div className="text-3xl md:text-5xl font-black text-primary tracking-tight">
                                            {formatCurrency(billValue)}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative w-full h-4 bg-slate-100 rounded-full group">
                                    <div
                                        className="absolute h-full bg-primary rounded-full transition-all duration-150 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                                        style={{ width: `${Math.min(100, (billValue / 3000) * 100)}%` }}
                                    />
                                    <input
                                        type="range"
                                        min={100}
                                        max={3000}
                                        step={50}
                                        value={billValue}
                                        onChange={handleSliderChange}
                                        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div
                                        className="absolute w-8 h-8 bg-white border-4 border-primary rounded-full top-1/2 -translate-y-1/2 -ml-4 pointer-events-none shadow-xl transition-transform group-active:scale-125"
                                        style={{ left: `${Math.min(100, (billValue / 3000) * 100)}%` }}
                                    />
                                </div>
                                <div className="flex justify-between mt-4 text-sm font-bold text-slate-400">
                                    <span>R$ 100</span>
                                    <span>R$ 3.000+</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Button
                                    onClick={handleCtaClick}
                                    size="lg"
                                    className="w-full h-14 md:h-16 text-md md:text-lg font-black rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-200/50 transition-all hover:scale-[1.02] active:scale-95 group"
                                >
                                    Quero meu desconto
                                    <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-xs text-center text-slate-400 font-medium">
                                    *Estimativa baseada em 15% de desconto médio. Sujeito a disponibilidade regional.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Results Card */}
                    <div className="lg:col-span-2 space-y-4 md:space-y-6">
                        {/* Monthly Savings Card */}
                        <div className="bg-emerald-600 rounded-[1rem] p-6 md:p-8 text-white shadow-xl shadow-emerald-200/50 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <TrendingUp className="w-24 h-24 md:w-32 md:h-32" />
                            </div>

                            <div className="relative z-10">
                                <p className="text-emerald-100 font-bold text-[10px] md:text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 fill-emerald-100" /> Sua economia anual
                                </p>
                                <h3 className="text-3xl md:text-6xl font-black tracking-tight mb-2">
                                    {formatCurrency(annualSavings)}
                                </h3>
                                <p className="text-[10px] md:text-sm text-emerald-50 font-medium opacity-90">
                                    Dinheiro que sobra no seu bolso todo ano.
                                </p>
                            </div>
                        </div>

                        {/* Sustainability Card */}
                        <div className="bg-white rounded-[1rem] p-6 md:p-8 border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center gap-4 md:gap-6">
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                            >
                                <TreeDeciduous className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            </motion.div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-none">
                                    {treesPreserved}
                                </h4>
                                <p className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                                    Árvores preservadas/ano
                                </p>
                            </div>
                        </div>

                        {/* Ecosystem Badge */}
                        <div className="bg-slate-900 rounded-[1rem] p-5 md:p-6 text-white flex items-center justify-between group cursor-default">
                            <div className="flex flex-col">
                                <span className="text-[9px] md:text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Upgrade de Vida</span>
                                <span className="text-xs md:text-sm font-bold">100% Sustentável</span>
                            </div>
                            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-xl border border-white/10 text-[9px] md:text-xs font-black">
                                ZERO INVESTIMENTO
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
