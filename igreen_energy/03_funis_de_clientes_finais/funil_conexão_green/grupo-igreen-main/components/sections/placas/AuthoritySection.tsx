"use client";

import Image from "next/image";

export function AuthoritySection() {
    return (
        <section id="authority" className="py-16 bg-green-600">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <p className="text-lg font-semibold text-white text-muted-foreground uppercase tracking-widest mb-8">
                    Com a solidez dos gigantes do setor energético
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder logos - In production we should use real SVGs of Vibra and Comerc */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">vibra</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">comerc</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">iGreen Energy</span>
                    </div>
                </div>


                <div className="mt-12 max-w-3xl mx-auto bg-background p-8 rounded-2xl border border-border/50 shadow-sm">
                    <p className="text-lg text-muted-foreground italic">
                        "Ao escolher a Conexão Placas, você não está comprando apenas equipamentos. Você está adquirindo a segurança jurídica e financeira de um grupo consolidado no mercado de energia."
                    </p>
                </div>
            </div>
        </section>
    );
}
