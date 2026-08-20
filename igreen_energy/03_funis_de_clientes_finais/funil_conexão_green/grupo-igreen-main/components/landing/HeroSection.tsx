"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gtmEvents } from "@/lib/gtm";

export function HeroSection() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                                Tenha sua Usina Solar sem Investir Renda Própria.
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Troque sua conta de luz cara por uma parcela de leasing menor.
                                Economia imediata com fluxo de caixa positivo.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-lg font-semibold h-12"
                            >
                                <Link
                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5547997838464"}?text=Olá! Gostaria de saber mais sobre a Conexão Solar.`}
                                    target="_blank"
                                    onClick={() => gtmEvents.whatsappClick("solar_hero_cta")}
                                    className="flex items-center gap-2"
                                >
                                    Simular Minha Economia Agora
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end relative">
                        {/* Abstract Background Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl -z-10" />

                        {/* Hero Image */}
                        <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border">
                            <Image
                                src="/assets/conexao-solar/hero.png"
                                alt="Economia Solar na Palma da Mão"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Elements (Mockup) */}
                        <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-border animate-bounce duration-[3000ms]">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-secondary rounded-full" />
                                <span className="text-sm font-bold text-secondary">Economia Aprovada</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
