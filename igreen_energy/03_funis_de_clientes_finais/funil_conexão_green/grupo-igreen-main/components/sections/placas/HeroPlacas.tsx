"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sun, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { gtmEvents } from "@/lib/gtm";

export function HeroPlacas() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-28 pb-24">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-50/50 via-background to-background" />

            <div className="container mx-auto relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6 max-w-2xl order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm font-semibold text-yellow-700 w-fit backdrop-blur-md">
                            <Sun className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <span>Sua Usina, Seu Patrimônio</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                            Pare de alugar energia. <br />
                            <span className="text-primary">Torne-se dono</span> da sua própria usina.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Transforme sua conta de luz em investimento. Valorize seu imóvel, blinde-se da inflação e gere sua própria energia limpa com garantia de 25 anos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button
                                onClick={() => {
                                    gtmEvents.ctaClick("Simular Meu Investimento", "hero_placas");
                                    gtmEvents.scrollToSection("simulador");
                                    document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                size="lg"
                                className="text-lg px-8 h-14 bg-primary text-white hover:bg-primary/90 shadow-[0_0_30px_-5px_var(--primary)] font-bold rounded-full transition-all hover:scale-105"
                            >
                                Simular Meu Investimento
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-primary/20">
                                    <TrendingUp className="h-4 w-4 text-primary" />
                                </div>
                                <span>ROI Garantido</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-primary/20">
                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                </div>
                                <span>25 Anos de Garantia</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-primary/20">
                                    <Sun className="h-4 w-4 text-primary" />
                                </div>
                                <span>Energia 100% Sua</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-white/50 backdrop-blur-sm z-10">
                            <Image
                                src="/casa-com-placas-solares.jpg"
                                alt="Casa moderna com painéis solares na natureza"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
                                priority
                            />
                        </div>

                        {/* Floating ROI Card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:-left-8 md:translate-x-0 z-30 w-64 bg-white/90 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-xl ring-1 ring-black/5"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-semibold uppercase">Valorização</p>
                                    <p className="text-lg font-bold text-foreground">+20% no Imóvel</p>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground leading-tight">
                                Imóveis com energia solar vendem mais rápido e por maior valor.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
