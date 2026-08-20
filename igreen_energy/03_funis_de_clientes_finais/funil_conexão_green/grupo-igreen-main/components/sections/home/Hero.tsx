"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, ShieldCheck, TrendingUp } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-28 pb-24">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-50/50 via-background to-background" />

            <div className="container mx-auto relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-8 max-w-2xl order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-black text-emerald-900 uppercase tracking-widest w-fit backdrop-blur-md">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            Sustentável no bolso e no planeta
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                            O Futuro da Energia <br />
                            <span className="text-primary italic drop-shadow-sm">
                                Chegou para Você.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Economia, Sustentabilidade e Tecnologia. <br />
                            <span className="text-emerald-700">Conecte-se à revolução energética</span> com a iGreen Energy.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/90 border border-slate-200 shadow-xl backdrop-blur-md">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-tighter leading-none">
                                    Parceiro <br /> Oficial
                                </div>
                                <div className="h-10 w-px bg-slate-200" />
                                <div className="text-xl font-black text-slate-900">VIBRA + COMERC</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-4 text-sm font-black text-slate-500 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-primary/20">
                                    <Leaf className="h-4 w-4 text-primary" />
                                </div>
                                <span>Energia Limpa</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-primary/20">
                                    <TrendingUp className="h-4 w-4 text-primary" />
                                </div>
                                <span>Até 15% Off</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-primary/20">
                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                </div>
                                <span>Sem Obras</span>
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
                        <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white/50 backdrop-blur-sm z-10 aspect-square lg:aspect-auto">
                            <Image
                                src="/home/hero-fresh-v3.png"
                                alt="Modern Energy Future"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                                style={{
                                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
                                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
                                    filter: 'brightness(1.02) contrast(1.02)'
                                }}
                                priority
                            />
                            {/* Overlay for a "fresher" look */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Decorative Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 z-20 hidden md:block"
                        >
                            <div className="w-24 h-24 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl flex items-center justify-center">
                                <span className="text-5xl drop-shadow-lg">🌿</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-5 -left-10 z-20 hidden md:block bg-white/90 backdrop-blur-md border border-white/40 p-6 rounded-3xl shadow-2xl ring-1 ring-green-500/50 max-w-[240px]"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                                    <Leaf className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Inovação</p>
                                    <p className="text-lg font-black text-slate-900 leading-none">EcoTech</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 font-bold leading-tight">
                                Transformando a forma como o Brasil consome energia.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20"
            >
                <div className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Explore</div>
                <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
