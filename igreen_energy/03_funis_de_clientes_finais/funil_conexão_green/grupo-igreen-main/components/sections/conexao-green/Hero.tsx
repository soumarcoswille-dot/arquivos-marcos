"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";
import { gtmEvents } from "@/lib/gtm";


export function Hero() {
    return (
        <section className="relative py-20 md:py-32 flex items-center overflow-hidden bg-background">
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
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary w-fit backdrop-blur-md">
                            <Leaf className="h-4 w-4 fill-primary" />
                            <span>Regulamentado ANEEL • Custo Zero de Adesão</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]">
                            Economize até <span className="text-emerald-600 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-500">15%</span> na sua conta de luz, <br />
                            <span className="text-zinc-900">sem obras e sem investir nada.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                            Conecte sua casa ou empresa à nossa rede de usinas solares digitalmente. <strong className="text-zinc-900">Zero custo inicial, zero burocracia e 100% seguro.</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Button
                                onClick={() => {
                                    gtmEvents.ctaClick("Simular Minha Economia Agora", "hero");
                                    gtmEvents.scrollToSection("simulador");
                                    document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                size="lg"
                                className="text-lg px-8 h-14 bg-emerald-500 text-white hover:bg-emerald-600 shadow-[0_4px_25px_-5px_rgba(16,185,129,0.5)] font-bold rounded-full transition-all hover:scale-105"
                            >
                                Simular Minha Economia Agora
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 text-xs md:text-sm font-medium text-zinc-700">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-emerald-100">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                </div>
                                <span>Sem Fidelidade</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-emerald-100">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                </div>
                                <span>100% Digital</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-emerald-100">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                </div>
                                <span>Sem Obras</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-emerald-100">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                </div>
                                <span>Regulado ANEEL</span>
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

                        <div className="relative w-full max-w-[550px]">
                            {/* Video Container - Responsive Embed */}
                            <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/80 backdrop-blur-sm z-10">
                                <iframe
                                    className="w-full h-full object-cover"
                                    src="https://www.youtube.com/embed/0fp_lCqKcec?autoplay=0&rel=0&modestbranding=1"
                                    title="Vídeo Conexão Green - iGreen Energy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Fade to White Gradient at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
        </section>
    );
}
