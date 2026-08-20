"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Zap, PiggyBank } from "lucide-react";

const steps = [
    {
        icon: MousePointerClick,
        title: "1. Adesão Digital",
        description:
            "Você faz seu cadastro online e nós conectamos sua unidade a uma de nossas fazendas solares. Sem obras e custo zero.",
        color: "bg-blue-500",
        textColor: "text-blue-500",
    },
    {
        icon: Zap,
        title: "2. Injeção de Energia",
        description:
            "A energia limpa gerada em nossas usinas é injetada na rede da sua distribuidora local (ex: Cemig, CPFL) em seu nome.",
        color: "bg-amber-500",
        textColor: "text-amber-500",
    },
    {
        icon: PiggyBank,
        title: "3. Desconto na Fatura",
        description:
            "A distribuidora abate os créditos e você recebe o boleto iGreen com desconto garantido. Você paga menos!",
        color: "bg-green-500",
        textColor: "text-green-500",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Economia inteligente em <span className="text-secondary">3 passos</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Processo simples, transparente e 100% digital. Sem burocracia.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (for Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/20 via-amber-500/20 to-green-500/20 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative flex flex-col items-center text-center"
                        >
                            <div className="relative mb-6">
                                <div className={`w-24 h-24 rounded-2xl ${step.color}/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 border border-border`}>
                                    <step.icon className={`h-10 w-10 ${step.textColor}`} />
                                </div>
                                {/* Number Badge */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-sm font-bold text-foreground shadow-lg">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3">{step.title.split('. ')[1]}</h3>
                            <p className="text-muted-foreground leading-relaxed px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Highlight Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-20 max-w-3xl mx-auto"
                >
                    <div className="bg-white border border-border rounded-2xl p-8 md:p-10 text-center shadow-sm">
                        <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Tudo isso sem fidelidade
                        </h4>
                        <p className="text-lg text-muted-foreground">
                            Você é livre para cancelar quando quiser <span className="text-secondary font-semibold">sem multas</span>.
                            Acreditamos que você deve ficar pela qualidade, e não por um contrato.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
