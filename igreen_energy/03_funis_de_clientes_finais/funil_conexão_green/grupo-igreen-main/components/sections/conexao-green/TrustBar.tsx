"use client";

import { ShieldCheck, Users, TrendingDown, Award } from "lucide-react";
import { motion } from "framer-motion";

export function TrustBar() {
    const trustItems = [
        {
            icon: ShieldCheck,
            title: "Regulamentado ANEEL",
            description: "Lei nº 14.300/2022 - Marco Legal",
            color: "text-emerald-400",
        },
        {
            icon: Users,
            title: "+100.000 Clientes",
            description: "Economizando todo mês no Brasil",
            color: "text-primary",
        },
        {
            icon: TrendingDown,
            title: "+R$ 50 Mi Economizados",
            description: "Desconto direto na conta de luz",
            color: "text-emerald-400",
        },
        {
            icon: Award,
            title: "Sem Obras ou Fidelidade",
            description: "Processo 100% digital e seguro",
            color: "text-primary",
        },
    ];

    return (
        <section className="py-8 bg-zinc-900 border-y border-zinc-800 relative z-20 text-white shadow-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row items-center md:items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                        >
                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                                <item.icon className={`h-6 w-6 ${item.color}`} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white leading-tight">{item.title}</h4>
                                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
