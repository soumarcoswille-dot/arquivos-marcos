import { HeroSection } from "@/components/landing/HeroSection";
import { FinancialLogic } from "@/components/landing/FinancialLogic";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conexão Solar - iGreen Energy | Energia Limpa para sua Empresa",
    description: "Otimize os custos da sua empresa com energia solar em alta tensão. Sustentabilidade e economia real para o seu negócio.",
    openGraph: {
        title: "Conexão Solar - iGreen Energy | Soluções Corporativas em Energia",
        description: "Gestão energética inteligente para empresas. Reduza custos e adote uma postura sustentável.",
        url: 'https://grupoigreen.com.br/conexao-solar',
        siteName: 'iGreen Energy',
        images: [{
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Conexão Solar - iGreen Energy'
        }],
        locale: 'pt_BR',
        type: 'website',
    },
};

export default function ConexaoSolarPage() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased text-foreground">
            <LandingHeader />
            <main>
                <HeroSection />
                <FinancialLogic />
                <ComparisonSection />
                <BenefitsSection />
            </main>
            <LandingFooter />
        </div>
    );
}
