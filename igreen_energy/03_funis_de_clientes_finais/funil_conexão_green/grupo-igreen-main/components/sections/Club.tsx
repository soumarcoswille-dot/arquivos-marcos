"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Coffee, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";
import { gtmEvents } from "@/lib/gtm";

const clubCategories = [
    {
        icon: Heart,
        title: "Saúde & Bem-estar",
        description: "Até 70% OFF em farmácias como Drogasil e Raia.",
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20"
    },
    {
        icon: ShoppingBag,
        title: "Varejo & Tech",
        description: "Descontos exclusivos Magalu, Netshoes e Apple.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: Coffee,
        title: "Gastronomia",
        description: "BK, Domino's e Cinemark com preços especiais.",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        icon: GraduationCap,
        title: "Educação",
        description: "Bolsas de estudo e cursos com condições únicas.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
];

export function Club() {
    return (
        <section id="club" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary w-fit">
                            <span>Clube de Vantagens</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                            Sua conta paga a sua <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">própria conta.</span>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            O iGreen Club é nosso ecossistema exclusivo. A economia que você gera no dia a dia pode superar o valor da sua fatura de energia.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {clubCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-4 rounded-xl border ${category.border} bg-white hover:bg-muted/50 transition-colors shadow-sm`}
                                >
                                    <div className="flex items-center gap-3 mb-1">
                                        <div className={`w-8 h-8 rounded-lg ${category.bg} flex items-center justify-center`}>
                                            <category.icon className={`h-4 w-4 ${category.color}`} />
                                        </div>
                                        <h4 className="font-bold text-foreground text-sm">{category.title}</h4>
                                    </div>
                                    <p className="text-xs text-muted-foreground pl-[44px] -mt-1">{category.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <Button
                            onClick={() => {
                                gtmEvents.ctaClick("Ver Todos os Benefícios", "club");
                                gtmEvents.scrollToSection("simulador");
                                document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200 font-bold px-8 rounded-full h-12 shadow-lg shadow-white/5"
                        >
                            Ver Todos os Benefícios
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>

                    {/* New Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-[2rem] transform rotate-3 blur-2xl opacity-40" />
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-square">
                            <Image
                                src="/aplicativo-igreen.png"
                                alt="Pessoa feliz comprando com descontos"
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Badges */}
                            <div className="absolute top-6 right-6 bg-white text-foreground px-4 py-2 rounded-full font-bold text-sm shadow-xl transform rotate-3 ring-1 ring-border">
                                -30% na Drogasil
                            </div>
                            <div className="absolute bottom-10 left-6 bg-white/90 backdrop-blur-xl border border-secondary/20 text-foreground p-4 rounded-xl shadow-2xl max-w-[200px]">
                                <div className="flex items-center gap-2 mb-1">
                                    <ShoppingBag className="h-4 w-4 text-primary" />
                                    <span className="text-xs font-bold text-muted-foreground">Economia Mensal</span>
                                </div>
                                <p className="text-2xl font-bold text-secondary">R$ 450,00</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
