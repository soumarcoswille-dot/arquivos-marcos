// JSON-LD Structured Data Component for SEO

export function JsonLd() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "iGreen Energy",
        "description": "Empresa de energia solar compartilhada que oferece até 15% de desconto na conta de luz sem investimento inicial.",
        "url": "https://grupoigreen.com.br",
        "logo": "https://grupoigreen.com.br/identidade-visual-igreen/logo-igreen-verde.png",
        "image": "https://grupoigreen.com.br/og-image.png",
        "priceRange": "$$",
        "areaServed": {
            "@type": "Country",
            "name": "Brasil"
        },
        "sameAs": [
            "https://instagram.com/igreenenergy",
            "https://facebook.com/igreenenergy",
            "https://linkedin.com/company/igreenenergy"
        ],
        "offers": {
            "@type": "Offer",
            "name": "Desconto na Conta de Luz",
            "description": "Economia de até 15% na conta de luz com energia solar compartilhada",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1500"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
