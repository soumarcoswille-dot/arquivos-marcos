"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 pt-24 pb-12 relative overflow-hidden border-t border-slate-200">
            {/* Soft decorative glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 pb-24 border-b border-slate-200">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                            Pronto para começar sua <span className="text-primary italic">Economia?</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-bold max-w-md">
                            Fale agora com um de nossos consultores e descubra como começar a economizar hoje mesmo.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <Button
                            asChild
                            className="w-full max-w-md h-24 rounded-3xl bg-primary text-black hover:bg-primary/90 text-2xl font-black shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 group"
                        >
                            <Link href="https://wa.me/5547997838464" target="_blank" className="flex items-center justify-center gap-4">
                                Falar no WhatsApp
                                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-12 pt-12">
                    <div className="md:col-span-2 space-y-8">
                        <Image
                            src="/identidade-visual-igreen/logo-colorida-igreen.png"
                            alt="iGreen Energy"
                            width={140}
                            height={45}
                            className="h-10 w-auto object-contain"
                        />
                        <p className="text-slate-500 text-base max-w-sm font-bold leading-relaxed">
                            Liderando a revolução da energia sustentável no Brasil. Tecnologia, economia e benefícios reais.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-primary hover:text-black hover:border-primary transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs">Conexões</h4>
                        <ul className="space-y-3">
                            {["Conexão Green", "Conexão Solar", "Conexão Placas"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-500 hover:text-primary transition-colors font-bold text-sm">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs">Empresa</h4>
                        <ul className="space-y-3">
                            {["Sobre Nós", "Privacidade", "Compliance", "Contato"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-500 hover:text-primary transition-colors font-bold text-sm">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 mt-20 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <p>© 2025 iGreen Energy. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <span>CNPJ: 00.000.000/0000-00</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
