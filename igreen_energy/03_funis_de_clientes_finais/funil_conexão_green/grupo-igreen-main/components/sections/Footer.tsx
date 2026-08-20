"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { gtmEvents } from "@/lib/gtm";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border pt-24 pb-12 relative overflow-hidden text-foreground">

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Main CTA */}
                <div className="flex flex-col items-center text-center mb-20 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl">
                        Junte-se à revolução energética e comece a <span className="text-secondary">economizar hoje.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Sem obras, sem fidelidade e com benefícios exclusivos.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Button
                            onClick={() => {
                                gtmEvents.ctaClick("Quero Economizar Agora", "footer");
                                gtmEvents.scrollToSection("simulador");
                                document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="h-16 px-10 text-xl font-bold rounded-full bg-primary text-black hover:bg-primary/90 shadow-[0_0_40px_-10px_var(--primary)] animate-pulse hover:animate-none transition-all hover:scale-105"
                        >
                            Quero Economizar Agora
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-12 border-t border-border pt-16 mb-12">
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/identidade-visual-igreen/logo-colorida-igreen.png"
                                alt="iGreen Energy Logo"
                                width={160}
                                height={50}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>

                        <p className="text-muted-foreground max-w-sm">
                            Conectamos pessoas a um futuro mais sustentável e econômico. Energia limpa, tecnologia e benefícios reais.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6">Empresa</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6">Legal</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Regulamentos</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground text-center md:text-left">
                    <p>© {new Date().getFullYear()} iGreen Energy. Todos os direitos reservados.</p>
                    <p>Baseado na Lei Federal 14.300/2022 (Marco Legal da GD)</p>
                </div>

            </div>
        </footer >
    );
}
