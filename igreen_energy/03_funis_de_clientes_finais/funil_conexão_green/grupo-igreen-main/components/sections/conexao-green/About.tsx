"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section className="py-24 bg-foreground/5 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -34 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-8 flex flex-col justify-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                            Democratizamos o acesso à <span className="text-primary">energia limpa.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            A iGreen Energy conecta consumidores a usinas de fontes renováveis. Esqueça o modelo antigo e caro ou o alto investimento em obras.
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white border border-border flex gap-4 shadow-sm">
                                <div className="w-1 h-full bg-primary rounded-full min-h-[40px]" />
                                <div>
                                    <h4 className="font-bold text-foreground">Tecnologia de Ponta</h4>
                                    <p className="text-sm text-muted-foreground">Plataforma 100% digital que gerencia sua conexão e economia.</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white border border-border flex gap-4 shadow-sm">
                                <div className="w-1 h-full bg-blue-500 rounded-full min-h-[40px]" />
                                <div>
                                    <h4 className="font-bold text-foreground">Impacto Real</h4>
                                    <p className="text-sm text-muted-foreground">Milhares de toneladas de CO2 evitadas todos os anos.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.0, delay: 0.4 }}
                        className="relative h-full min-h-[400px] w-full"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-30 rounded-full" />
                        <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl h-full w-full">
                            <Image
                                src="/usina-solar-moderna.jpg"
                                alt="Fazenda Solar iGreen Tech"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Grid/Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none" />
        </section>
    );
}
