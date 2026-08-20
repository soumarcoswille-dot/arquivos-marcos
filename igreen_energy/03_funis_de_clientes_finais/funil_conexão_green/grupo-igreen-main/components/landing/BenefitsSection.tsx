"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { gtmEvents } from "@/lib/gtm";

export function BenefitsSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Block 1 */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 md:order-1">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-muted">
                            <Image
                                src="/assets/conexao-solar/family.png"
                                alt="Família feliz aproveitando o conforto do lar"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h3 className="text-3xl font-bold text-foreground">
                            Pare de alugar energia. <br />
                            <span className="text-secondary">Comece a comprar sua liberdade.</span>
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Todo mês você paga uma conta que nunca diminui. Com o Conexão Solar,
                            esse mesmo valor se transforma em um ativo que será seu. É trocar uma
                            despesa eterna por um investimento finito.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-foreground">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                Sem surpresas na conta no final do mês
                            </li>
                            <li className="flex items-center gap-2 text-foreground">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                Valorização imediata do seu imóvel
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-1 space-y-6">
                        <h3 className="text-3xl font-bold text-foreground">
                            Tecnologia que trabalha <br />
                            <span className="text-primary">enquanto você vive.</span>
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Monitore sua produção e economia em tempo real pelo nosso App.
                            Você tem o controle total da sua energia na palma da mão, sem
                            precisar subir no telhado ou se preocupar com técnica.
                        </p>
                        <Button asChild variant="outline" className="group text-primary border-primary hover:bg-primary/10 rounded-full">
                            <Link
                                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5547997838464"}?text=Olá! Gostaria de solicitar uma demonstração do App.`}
                                target="_blank"
                                onClick={() => gtmEvents.whatsappClick("solar_app_demo")}
                                className="flex items-center gap-2"
                            >
                                Ver demonstração do App <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                    <div className="order-2">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-muted">
                            <Image
                                src="/assets/conexao-solar/app-usage.png"
                                alt="Dashboard do App de Economia Solar"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
