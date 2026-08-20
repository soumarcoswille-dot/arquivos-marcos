"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ecosystemItems = [
    {
        title: "iGreen Club",
        tag: "BENEFÍCIOS EXCLUSIVOS",
        description: "Sua conta de luz vira um passaporte de vantagens. Economize em mais de 30.000 estabelecimentos em todo o Brasil.",
        benefits: ["Até 50% de desconto em farmácias", "Cashback em grandes varejistas", "Benefícios em lazer e gastronomia"],
        image: "/aplicativo-igreen.png",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        reverse: false
    },
    {
        title: "iGreen Telecom",
        tag: "CONECTIVIDADE",
        description: "A primeira operadora que converte sua fatura em energia limpa. Planos móveis com cobertura nacional.",
        benefits: ["Chip grátis na portabilidade", "Dados que não expiram", "A melhor cobertura do Brasil"],
        image: "/home/mockup-telecom-v3.png",
        color: "text-orange-600",
        bg: "bg-orange-50",
        reverse: true
    }
];

export function Ecosystem() {
    return (
        <section id="ecosystem" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-24 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                            Ecossistema <span className="text-primary italic">iGreen</span>
                        </h2>
                    </motion.div>
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-bold">
                        Mais do que energia, uma conexão completa com o seu estilo de vida.
                    </p>
                </div>

                <div className="space-y-32">
                    {ecosystemItems.map((item, index) => (
                        <div key={item.title} className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: item.reverse ? 40 : -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 space-y-8"
                            >
                                <div className="space-y-4">
                                    <span className={`inline-block text-[10px] font-black tracking-widest px-4 py-2 rounded-full ${item.bg} ${item.color.replace('text-', 'text-')}`}>
                                        {item.tag}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 leading-relaxed font-bold">
                                        {item.description}
                                    </p>
                                </div>

                                <ul className="space-y-4">
                                    {item.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-center gap-3 group">
                                            <div className={`flex-shrink-0 w-6 h-6 rounded-full ${item.bg} flex items-center justify-center`}>
                                                <CheckCircle2 className={`w-4 h-4 ${item.color}`} />
                                            </div>
                                            <span className="text-slate-700 font-bold">
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Button asChild className="h-12 rounded-full px-8 font-black text-base bg-slate-900 text-white hover:bg-slate-800 transition-all border-none shadow-xl">
                                        <Link href="https://wa.me/5547997838464" target="_blank" className="flex items-center gap-2">
                                            Saiba mais agora
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Image Mockup - Portfolio Style (Ref 3) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="flex-1 relative"
                            >
                                <div className={`absolute inset-0 ${item.bg} rounded-[3rem] blur-3xl opacity-50`} />
                                <div className="relative rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-2xl bg-white p-2">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={800}
                                        height={800}
                                        className="w-full h-100 object-cover rounded-[1.2rem]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
