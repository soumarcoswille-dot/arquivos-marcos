"use client";

import { motion } from "framer-motion";
import { Wallet, Unlock, Leaf, Gift } from "lucide-react";
import Image from "next/image";

export function Benefits() {
    const benefits = [
        {
            icon: Wallet,
            title: "Zero Investimento",
            description: "Esqueça o alto custo de compra de placas solares (CAPEX Zero). Nós investimos, você economiza.",
        },
        {
            icon: Unlock,
            title: "Liberdade Total",
            description: "Sem contratos de fidelidade ou multas. Acreditamos que você deve ficar pela qualidade, não pela obrigação.",
        },
        {
            icon: Leaf,
            title: "Sustentabilidade Real",
            description: "Consuma energia 100% renovável e receba certificados de redução de CO2 para sua casa ou empresa.",
        },
        {
            icon: Gift,
            title: "Clube de Benefícios",
            description: "Descontos em Drogasil, Casas Bahia, Netshoes e mais de 30 mil parceiros que superam o valor da conta.",
        },
    ];

    return (
        <section id="benefits" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Por que escolher a <span className="text-primary">iGreen?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Democratizamos o acesso à energia limpa. Conecte-se ao futuro sem gastar nada e com total liberdade.
                        </p>

                        <div className="grid gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <benefit.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-1">{benefit.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full opacity-30" />
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                {/* Zero Investment - Wallet */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="relative bg-white rounded-2xl overflow-hidden border border-border h-64 w-full group shadow-lg"
                                >
                                    <Image
                                        src="/benefits-wallet.png"
                                        alt="Zero Investimento"
                                        fill
                                        className="object-cover opacity-90 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-border shadow-sm">
                                        <Wallet className="h-4 w-4 text-primary inline mr-2" />
                                        <span className="text-xs font-bold text-foreground">Zero Investimento</span>
                                    </div>
                                </motion.div>

                                {/* Freedom - Lock */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="relative bg-white rounded-2xl overflow-hidden border border-border h-48 w-full group shadow-lg"
                                >
                                    <Image
                                        src="/benefits-lock.png"
                                        alt="Liberdade Total"
                                        fill
                                        className="object-cover opacity-90 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-border shadow-sm">
                                        <Unlock className="h-4 w-4 text-primary inline mr-2" />
                                        <span className="text-xs font-bold text-foreground">Sem Fidelidade</span>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="space-y-4">
                                {/* Sustainability - Leaf */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="relative bg-white rounded-2xl overflow-hidden border border-border h-48 w-full group shadow-lg"
                                >
                                    <Image
                                        src="/benefits-leaf.png"
                                        alt="Sustentabilidade"
                                        fill
                                        className="object-cover opacity-90 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-border shadow-sm">
                                        <Leaf className="h-4 w-4 text-secondary inline mr-2" />
                                        <span className="text-xs font-bold text-foreground">100% Renovável</span>
                                    </div>
                                </motion.div>

                                {/* Club - Shopping Person */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="relative bg-white rounded-2xl overflow-hidden border border-border h-64 w-full group shadow-lg"
                                >
                                    <Image
                                        src="/club-benefits.png"
                                        alt="Clube de Benefícios"
                                        fill
                                        className="object-cover opacity-90 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-border shadow-sm">
                                        <Gift className="h-4 w-4 text-primary inline mr-2" />
                                        <span className="text-xs font-bold text-foreground">Benefícios</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
