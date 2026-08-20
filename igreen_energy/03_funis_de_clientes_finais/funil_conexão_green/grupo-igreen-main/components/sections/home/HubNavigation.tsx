"use client";

import { motion } from "framer-motion";
import { Zap, Sun, PanelsTopLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { gtmEvents } from "@/lib/gtm";

const services = [
    {
        id: "green",
        title: "Conexão Green",
        tag: "ECONOMIA IMEDIATA",
        description: "Desconto direto na sua conta de luz sem investimento. Ative em 5 minutos.",
        icon_3d: "/home/icon-green-3d-v2.png",
        cta: "Quero Desconto",
        href: "/conexao-green",
        color: "bg-white",
        textColor: "text-emerald-900",
        tagColor: "bg-emerald-100 text-emerald-700",
        ringColor: "ring-emerald-400/50",
        gridSpan: "lg:col-span-1"
    },
    {
        id: "solar",
        title: "Conexão Solar",
        tag: "INVESTIMENTO",
        description: "Rentabilidade em usinas solares.",
        icon_3d: "/home/icon-solar-3d-v2.png",
        cta: "Investir Agora",
        href: "/conexao-solar",
        color: "bg-white",
        textColor: "text-orange-950",
        tagColor: "bg-orange-100 text-orange-700",
        ringColor: "ring-orange-400/50",
        gridSpan: "lg:col-span-1"
    },
    {
        id: "placas",
        title: "Conexão Placas",
        tag: "AUTONOMIA",
        description: "Seu próprio sistema solar fotovoltaico com parcelas que cabem no bolso.",
        icon_3d: "/home/icon-placas-3d-v2.png",
        cta: "Fazer Orçamento",
        href: "/conexao-placas",
        color: "bg-white",
        textColor: "text-blue-950",
        tagColor: "bg-blue-100 text-blue-700",
        ringColor: "ring-blue-400/50",
        gridSpan: "lg:col-span-2"
    }
];

export function HubNavigation() {
    return (
        <section id="hub" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-5">
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
                        >
                            Escolha sua <span className="text-primary italic">Conexão</span>
                        </motion.h2>
                        <p className="text-slate-500 text-lg md:text-xl max-w-xl font-bold">
                            Tecnologia e sustentabilidade unidas para transformar sua relação com a energia.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${service.gridSpan} group relative flex flex-row lg:flex-col items-center lg:items-center justify-between p-4 md:p-8 rounded-[1rem] ${service.color} ring-2 ${service.ringColor} border-none overflow-hidden hover:shadow-2xl transition-all duration-500 min-h-[140px] lg:min-h-[340px]`}
                        >
                            {/* Text Content */}
                            <div className="relative z-10 flex flex-col justify-center lg:justify-between h-full flex-1 pr-2 lg:pr-0 lg:w-full">
                                <div className="flex justify-between items-start mb-2 lg:mb-auto">
                                    <span className={`text-[9px] md:text-[10px] lg:text-xs font-black tracking-widest px-2 py-1 lg:px-3 lg:py-1 rounded-full ${service.tagColor}`}>
                                        {service.tag}
                                    </span>
                                </div>

                                <div className="space-y-1 md:space-y-4 mb-3 lg:mb-auto lg:mt-6 lg:max-w-[65%]">
                                    <h3 className={`text-xl md:text-3xl lg:text-4xl font-black leading-tight ${service.textColor}`}>
                                        {service.title}
                                    </h3>
                                    <p className="hidden md:block text-sm md:text-base lg:text-base text-slate-600 font-bold leading-relaxed">
                                        {service.description}
                                    </p>
                                    <p className="md:hidden text-xs text-slate-600 font-bold leading-tight">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-auto lg:mt-auto">
                                    <Button
                                        asChild
                                        size="sm"
                                        className={`rounded-full px-4 lg:px-8 h-8 lg:h-12 font-black text-xs lg:text-lg gap-2 bg-orange-600 hover:bg-orange-700 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 whitespace-nowrap`}
                                    >
                                        <Link
                                            href={service.href}
                                            onClick={() => gtmEvents.ctaClick(service.title, "hub_navigation")}
                                            className="flex items-center gap-2 whitespace-nowrap"
                                        >
                                            <span>{service.cta}</span>
                                            <ArrowRight className="w-3 h-3 lg:w-5 lg:h-5 flex-shrink-0" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* 3D Icon Asset - Flex on Mobile, Absolute Centered on Desktop */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                                className="relative lg:absolute z-0 w-24 md:w-32 lg:w-60 aspect-square flex-shrink-0 lg:flex-shrink pointer-events-none -mr-4 lg:mr-0 lg:right-4 lg:top-1/2 lg:-translate-y-1/2"
                            >
                                <Image
                                    src={service.icon_3d}
                                    alt={service.title}
                                    width={250}
                                    height={250}
                                    className="object-contain mix-blend-multiply scale-110 lg:scale-100"
                                    style={{
                                        filter: 'brightness(1.05) contrast(1.05)'
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
