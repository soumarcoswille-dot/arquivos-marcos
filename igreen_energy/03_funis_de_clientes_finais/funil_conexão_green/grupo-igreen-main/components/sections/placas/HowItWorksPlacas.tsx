"use client";

import { motion } from "framer-motion";
import { FileCheck, Hammer, Lightbulb, UserCheck } from "lucide-react";

export function HowItWorksPlacas() {
    const steps = [
        {
            icon: UserCheck,
            title: "Consultoria Gratuita",
            description: "Analisamos sua conta de luz e desenhamos o projeto ideal para zerar seu consumo.",
        },
        {
            icon: FileCheck,
            title: "Proposta & Financiamento",
            description: "Apresentamos o ROI e as opções de parcelamento que cabem no bolso (troca de conta por parcela).",
        },
        {
            icon: Hammer,
            title: "Instalação & Homologação",
            description: "Nossa engenharia cuida de tudo: instalação técnica e burocracia com a concessionária.",
        },
        {
            icon: Lightbulb,
            title: "Geração Própria",
            description: "Ativamos sua usina. Você passa a gerar sua própria energia e monitora tudo pelo app.",
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Turnkey: Entregamos sua usina <span className="text-primary">pronta.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Cuidamos de 100% do processo, da engenharia até a troca do medidor. Você só precisa aproveitar a economia.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border/50 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-background pt-4 md:pt-0"
                        >
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-background border-4 border-border group-hover:border-primary transition-colors flex items-center justify-center mb-6 relative z-10 shadow-sm">
                                    <step.icon className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
