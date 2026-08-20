import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { FinancialLogic } from "@/components/landing/FinancialLogic";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Grupo iGreen Energy | Soluções em Energia Sustentável",
    description: "Reduza sua conta de luz e descubra as melhores soluções em energia limpa e renovável da iGreen Energy.",
};

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased text-foreground">
            <LandingHeader />
            <main>
                <HeroSection />
                <BenefitsSection />
                <FinancialLogic />
                <ComparisonSection />
            </main>
            <LandingFooter />
        </div>
    );
}

