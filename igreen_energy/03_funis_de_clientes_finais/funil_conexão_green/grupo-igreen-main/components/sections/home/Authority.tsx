"use client";

import { motion } from "framer-motion";

export function Authority() {
    return (
        <section id="authority" className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Referência em <span className="text-primary italic">Energia</span>
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto font-bold">
                            Parcerias sólidas com os maiores grupos energéticos do Brasil.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            <span className="text-4xl font-black text-slate-900 tracking-widest leading-none">VIBRA</span>
                            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Líder Nacional</span>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-emerald-50 border border-emerald-100 transition-all duration-500"
                        >
                            <span className="text-4xl font-black text-emerald-900 tracking-widest leading-none italic">iGreen</span>
                            <span className="text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase">Ecosystem 2025</span>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            <span className="text-4xl font-black text-slate-900 tracking-widest leading-none">COMERC</span>
                            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Maior Gestora</span>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-16 p-10 md:p-14 rounded-[3rem] bg-slate-50 border border-slate-100 max-w-4xl mx-auto"
                    >
                        <p className="text-xl md:text-2xl text-slate-600 font-bold leading-relaxed italic">
                            "Ao escolher a iGreen, você não está comprando apenas tecnologia. Você está adquirindo a segurança jurídica e financeira de um grupo consolidado no mercado de energia."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
