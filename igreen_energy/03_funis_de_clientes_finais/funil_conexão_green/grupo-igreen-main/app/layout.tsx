import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import { FloatWhatsApp } from "@/components/ui/FloatWhatsApp";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://grupoigreen.com.br'),
  title: {
    default: "iGreen Energy - Economize até 15% na Conta de Luz | Energia Solar",
    template: "%s | iGreen Energy"
  },
  description: "Reduza sua conta de luz em até 15% todos os meses com energia solar compartilhada. Sem obras, sem investimento e sem fidelidade. Assine o iGreen Club e economize!",
  keywords: [
    "energia solar",
    "economia na conta de luz",
    "energia limpa",
    "geração distribuída",
    "iGreen Energy",
    "energia sustentável",
    "conta de luz mais barata",
    "fazenda solar",
    "energia renovável",
    "energia solar compartilhada",
    "desconto conta de luz"
  ],
  authors: [{ name: "iGreen Energy" }],
  creator: "iGreen Energy",
  publisher: "iGreen Energy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://grupoigreen.com.br',
    siteName: 'iGreen Energy',
    title: 'iGreen Energy - Economize até 15% na Conta de Luz',
    description: 'Reduza sua conta de luz em até 15% todos os meses com energia solar compartilhada. Sem obras, sem investimento e sem fidelidade.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'iGreen Energy - Energia Solar Compartilhada'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iGreen Energy - Economize até 15% na Conta de Luz',
    description: 'Reduza sua conta de luz em até 15% com energia solar compartilhada. Sem obras e sem fidelidade.',
    images: ['/og-image.png'],
    creator: '@igreenenergy',
  },
  alternates: {
    canonical: 'https://grupoigreen.com.br',
  },
  icons: {
    icon: "/identidade-visual-igreen/simbolo-igreen-g-verde.png",
    shortcut: "/identidade-visual-igreen/simbolo-igreen-g-verde.png",
    apple: "/identidade-visual-igreen/simbolo-igreen-g-verde.png",
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  return (
    <html lang="pt-BR">
      <head>
        <JsonLd />
      </head>
      <GoogleTagManager gtmId={gtmId} />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          outfit.variable
        )}
      >
        {/* GTM noscript fallback for browsers without JavaScript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <FloatWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
