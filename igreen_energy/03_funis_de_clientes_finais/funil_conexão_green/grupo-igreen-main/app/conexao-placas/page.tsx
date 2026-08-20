import { Header } from "@/components/sections/placas/Header";
import { Footer } from "@/components/sections/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { HeroPlacas } from "@/components/sections/placas/HeroPlacas";
import { BenefitsPlacas } from "@/components/sections/placas/BenefitsPlacas";
import { HowItWorksPlacas } from "@/components/sections/placas/HowItWorksPlacas";
import { AuthoritySection } from "@/components/sections/placas/AuthoritySection";
import { RoiSimulator } from "@/components/sections/placas/RoiSimulator";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conexão Placas - iGreen Energy | Sua Própria Usina Solar",
    description: "Tenha sua própria usina solar e elimine sua conta de luz. Valorize seu imóvel e invista em um futuro sustentável com a melhor tecnologia do mercado.",
    openGraph: {
        title: "Conexão Placas - iGreen Energy | Investimento Inteligente em Energia",
        description: "Transforme seu telhado em uma fonte de economia. Usina solar própria com parcelas que cabem no seu bolso.",
        url: 'https://grupoigreen.com.br/conexao-placas',
        siteName: 'iGreen Energy',
        images: [{
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Conexão Placas - iGreen Energy'
        }],
        locale: 'pt_BR',
        type: 'website',
    },
};

export default function ConexaoPlacasPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <HeroPlacas />
            <AuthoritySection />
            <BenefitsPlacas />
            <RoiSimulator />
            <HowItWorksPlacas />
            {/* Reusing FAQ as the questions might be general or we can create specific ones later if needed */}
            <FAQ />
            <Footer />
        </main>
    );
}
