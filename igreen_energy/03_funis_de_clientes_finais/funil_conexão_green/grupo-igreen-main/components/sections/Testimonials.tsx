"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { Star, ShieldCheck, Users, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        quote: "Eu achava que precisava instalar placas no telhado. Com a iGreen, tive o desconto no primeiro mês sem gastar nada.",
        author: "Ricardo M.",
        role: "Cliente Residencial",
    },
    {
        quote: "Minha padaria reduziu muito os custos fixos. O atendimento foi impecável e a migração transparente.",
        author: "Ana Paula",
        role: "Comerciante",
    },
    {
        quote: "Processo 100% digital. Só precisei enviar a foto da conta e assinar digitalmente.",
        author: "Carlos E.",
        role: "Cliente Residencial",
    },
];

// Reusable Counter Component
function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { duration: 2500, bounce: 0 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString("pt-BR"));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
    {
        label: "Clientes Ativos",
        value: 380000,
        displayPrefix: "+ ",
        displaySuffix: "",
        icon: Users,
        color: "text-blue-500",
        isNumber: true
    },
    {
        label: "Reputação RA1000",
        value: "Nota 8.8+", // String value
        icon: Star,
        color: "text-yellow-500",
        isNumber: false
    },
    {
        label: "Parceria Sólida",
        value: "Vibra & Comerc", // String value
        icon: Building2,
        color: "text-green-500",
        isNumber: false
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        O que dizem nossos <span className="text-primary">clientes</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white border border-border p-8 rounded-2xl relative shadow-lg"
                        >
                            <div className="absolute -top-4 left-8 text-6xl text-primary font-serif opacity-30">"</div>
                            <p className="text-muted-foreground mb-6 relative z-10 italic">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-sm">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold">{t.author}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="bg-muted/50 border border-border rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center pt-8 md:pt-0 px-4">
                                <stat.icon className={`h-8 w-8 mb-4 ${stat.color}`} />
                                <h4 className="text-3xl font-bold text-foreground mb-1">
                                    {stat.isNumber && typeof stat.value === 'number' ? (
                                        <>
                                            {stat.displayPrefix}
                                            <AnimatedCounter value={stat.value} />
                                            {stat.displaySuffix}
                                        </>
                                    ) : (
                                        stat.value
                                    )}
                                </h4>
                                <p className="text-muted-foreground text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center pt-8 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Parceiros Estratégicos</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Building2 className="text-orange-500" /> Vibra Energia
                            </span>
                            <span className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Building2 className="text-green-600" /> Comerc Energia
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
