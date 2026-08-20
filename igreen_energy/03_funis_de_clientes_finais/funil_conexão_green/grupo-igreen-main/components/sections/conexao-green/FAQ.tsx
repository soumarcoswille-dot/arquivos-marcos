"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "A energia vai continuar chegando pela minha distribuidora?",
        answer:
            "Sim. A distribuição continua sendo feita pela concessionária local (ex: Cemig, CPFL), garantindo a mesma segurança técnica e estabilidade que você já possui hoje.",
    },
    {
        question: "Existe fidelidade ou multa de cancelamento?",
        answer:
            "Não. O modelo Conexão Green não possui fidelidade. O cancelamento é reversível a qualquer momento e sem multas. Acreditamos na liberdade de escolha.",
    },
    {
        question: "Preciso pagar algo para aderir?",
        answer:
            "Não. O modelo é 'Zero Investimento'. Você não paga nada para entrar, não precisa instalar equipamentos e não tem custos de manutenção.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-background border-t border-border">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Dúvidas <span className="text-primary">Frequentes</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Tudo o que você precisa saber sobre a revolução da energia.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-border rounded-xl bg-muted/30 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                            >
                                <span className="text-lg font-medium text-foreground pr-8">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 text-primary">
                                    {openIndex === index ? (
                                        <Minus className="h-5 w-5" />
                                    ) : (
                                        <Plus className="h-5 w-5" />
                                    )}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-5 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
