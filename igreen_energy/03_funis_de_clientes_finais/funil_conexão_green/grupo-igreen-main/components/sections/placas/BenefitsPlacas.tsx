"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Home, Banknote, Zap, Award } from "lucide-react";
import Image from "next/image";

export function BenefitsPlacas() {
    const benefits = [
        {
            icon: TrendingUp,
            title: "Ativo Financeiro",
            description: "Transforme um passivo (conta de luz) em um ativo que coloca dinheiro no seu bolso todos os meses.",
            color: "from-green-500 to-emerald-600",
            iconColor: "text-green-600",
        },
        {
            icon: Home,
            title: "Valorização Imobiliária",
            description: "Estudos mostram que imóveis com energia solar própria valorizam entre 4% a 6% imediatamente.",
            color: "from-blue-500 to-cyan-600",
            iconColor: "text-blue-600",
        },
        {
            icon: ShieldCheck,
            title: "Segurança de 25 Anos",
            description: "Garantia de performance linear. Seus painéis produzirão energia por décadas com o respaldo da nossa engenharia.",
            color: "from-purple-500 to-violet-600",
            iconColor: "text-purple-600",
        },
        {
            icon: Banknote,
            title: "Troca Inteligente",
            description: "Troque o valor da conta de luz pela parcela do seu sistema. Quando quitar, a energia é grátis para sempre.",
            color: "from-orange-500 to-amber-600",
            iconColor: "text-orange-600",
        },
    ];

    const stats = [
        { icon: Zap, value: "95%", label: "Redução na Conta", color: "bg-green-500" },
        { icon: Award, value: "25 Anos", label: "Garantia", color: "bg-blue-500" },
        { icon: TrendingUp, value: "4-6%", label: "Valorização", color: "bg-purple-500" },
    ];

    return (
        <section id="benefits" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-background to-blue-50/30 -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary w-fit mx-auto mb-4"
                    >
                        <TrendingUp className="h-4 w-4" />
                        <span>Vantagens Exclusivas</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-foreground"
                    >
                        Investimento que se paga <span className="text-primary">sozinho.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        A energia solar não é apenas uma economia; é uma decisão financeira inteligente que protege seu capital.
                    </motion.p>
                </div>

                {/* Benefits Grid - Modern Card Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                                {/* Gradient Accent on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Icon Container */}
                                <div className="relative mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}>
                                        <benefit.icon className="h-7 w-7 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-foreground mb-3 relative">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed relative">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats + Image Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                            Resultados que <span className="text-primary">comprovam</span> a eficiência
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center p-4 md:p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all flex md:block items-center gap-4 md:gap-0"
                                >
                                    <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center md:mx-auto md:mb-3 shrink-0`}>
                                        <stat.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="text-left md:text-center">
                                        <div className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{stat.value}</div>
                                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Testimonial Quote */}
                        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                            <p className="text-muted-foreground italic mb-4">
                                "O melhor investimento que fiz para minha casa. O retorno é garantido e a instalação foi impecável."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20" />
                                <div>
                                    <p className="text-sm font-bold text-foreground">Roberto Almeida</p>
                                    <p className="text-xs text-muted-foreground">Cliente Conexão Placas</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] md:h-[500px]"
                    >
                        <Image
                            src="/placa-solar-com-moedas-shadow.png"
                            alt="Investimento Inteligente em Energia Solar"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
