import { Header } from "@/components/sections/conexao-green/Header";
import { Hero } from "@/components/sections/conexao-green/Hero";
import { TrustBar } from "@/components/sections/conexao-green/TrustBar";
import { HowItWorks } from "@/components/sections/conexao-green/HowItWorks";
import { CalculatorSection } from "@/components/sections/conexao-green/CalculatorSection";
import { Benefits } from "@/components/sections/conexao-green/Benefits";
import { Testimonials } from "@/components/sections/conexao-green/Testimonials";
import { FAQ } from "@/components/sections/conexao-green/FAQ";
import { Footer } from "@/components/sections/conexao-green/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conexão Green - iGreen Energy | Economia Inteligente na Conta de Luz",
    description: "Economize até 15% na sua conta de luz todos os meses com a iGreen Energy. Zero investimento, 100% digital e sustentável. Sem obras e sem fidelidade.",
    openGraph: {
        title: "Conexão Green - iGreen Energy | Economia Sem Investimento",
        description: "Reduza sua conta de luz em até 15% com energia solar compartilhada. Fácil, rápido e sustentável.",
        url: 'https://grupoigreen.com.br/conexao-green',
        siteName: 'iGreen Energy',
        images: [{
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Conexão Green - iGreen Energy'
        }],
        locale: 'pt_BR',
        type: 'website',
    },
};

export default function ConexaoGreenPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <Hero />
            <TrustBar />
            <HowItWorks />
            <CalculatorSection />
            <Benefits />
            <Testimonials />
            <FAQ />
            <Footer />
        </main>
    );
}

