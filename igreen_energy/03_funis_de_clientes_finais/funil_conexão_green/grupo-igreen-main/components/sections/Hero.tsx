"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2, Leaf } from "lucide-react";
import Image from "next/image";
import { gtmEvents } from "@/lib/gtm";


export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-32 md:pt-40 lg:pt-32">
            {/* Organic Background Shapes */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/20 rounded-full blur-[100px] opacity-40 animate-pulse" />
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-20" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mask-gradient-to-b" />
            </div>

            <div className="container mx-auto relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6 max-w-2xl order-2 lg:order-1 mt-12 md:mt-0"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary w-fit backdrop-blur-md">
                            <Leaf className="h-4 w-4 fill-secondary" />
                            <span>Energia Limpa e Inteligente</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                            Economize até <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">15%</span> na sua conta de luz, <br />
                            <span className="text-white">garantido todo mês.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            A revolução da energia chegou. Conecte sua casa ou empresa às nossas usinas solares digitalmente. <strong className="text-gray-200">Zero obras. Zero investimento.</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button
                                onClick={() => {
                                    gtmEvents.ctaClick("Quero meu Desconto Agora", "hero");
                                    gtmEvents.scrollToSection("simulador");
                                    document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                size="lg"
                                className="text-lg px-8 h-14 bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_-5px_var(--primary)] font-bold rounded-full transition-all hover:scale-105"
                            >
                                Quero meu Desconto Agora
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-secondary/20">
                                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                                </div>
                                <span>Sem Fidelidade</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-secondary/20">
                                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                                </div>
                                <span>100% Digital</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-secondary/20">
                                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                                </div>
                                <span>Sustentável</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image & Conceptual Cards Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        {/* Abstract Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-500/20 to-primary/20 rounded-full blur-[80px] opacity-60 pointer-events-none" />

                        <div className="relative w-full max-w-[500px]">
                            {/* Main Image Container - clipped */}
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm z-10">
                                <Image
                                    src="/hero-image.png"
                                    alt="Cliente iGreen Satisfeita"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
                                    priority
                                />
                            </div>

                            {/* Floating "Bill Comparison" Card - Z-index higher than image */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -bottom-14 left-[2.5%] w-[95%] md:w-[280px] md:bottom-[5%] md:-left-12 bg-black/60 backdrop-blur-md border-2 border-green-500/30 p-4 md:p-5 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] z-20 origin-bottom-left"
                            >
                                <div className="flex justify-between items-center mb-3 md:mb-4">
                                    <span className="text-sm font-semibold text-white">Comparativo</span>
                                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full border border-emerald-500/20">ECONOMIA GREEN</span>
                                </div>

                                <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:space-y-3">
                                    {/* Traditional Bill */}
                                    <div className="flex items-center justify-between p-2 md:p-3 rounded-xl bg-black/55 border border-zinc-500/55">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-500/55">
                                                <span className="text-[10px] md:text-xs text-gray-600">⚡</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] md:text-[10px] text-gray-400 font-medium uppercase tracking-wider">Convencional</span>
                                                <span className="text-sm md:text-md font-medium text-gray-400 line-through">R$ 550,00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* iGreen Bill */}
                                    <div className="flex items-center justify-between p-2 md:p-3 rounded-xl bg-gradient-to-r from-emerald-950/50 to-emerald-900/20 border border-emerald-500/30 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors" />
                                        <div className="flex items-center gap-2 md:gap-3 relative z-10">
                                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                                <Zap className="h-3 w-3 md:h-4 md:w-4 text-emerald-950 fill-emerald-950" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] md:text-[10px] text-emerald-400 font-bold uppercase tracking-wider">iGreen Club</span>
                                                <span className="text-sm md:text-lg font-bold text-white">R$ 467,50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 md:mt-4 pt-3 border-t border-white/10 flex justify-between items-end">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-300 font-medium">Você economiza</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-xl md:text-2xl font-bold text-emerald-400">R$ 82,50</span>
                                            <span className="text-[10px] text-gray-200 pe-1">/mês</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-emerald-300 bg-emerald-500/30 px-2 py-1 rounded-lg">-15% OFF</span>
                                </div>
                            </motion.div>

                            {/* Floating "Clean Energy" Badge - Outside container to overlap */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-2 -right-2 md:top-[5%] md:-right-12 bg-black/55 backdrop-blur-md border-2 border-primary/30 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 z-30 scale-90 md:scale-100 origin-top-right"
                            >
                                <div className="bg-primary/20 p-2.5 rounded-full ring-1 ring-primary/30">
                                    <Leaf className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white uppercase tracking-wider">Energia 100%</p>
                                    <p className="text-sm font-bold text-primary">Sustentável</p>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Fade to White Gradient at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
        </section>
    );
}
