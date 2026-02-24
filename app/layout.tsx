import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// ── next/font/google for zero-CLS font loading ──────────────────────────────
const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '800', '900'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    variable: '--font-playfair',
    display: 'swap',
});

// ── Root Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    metadataBase: new URL('https://caffeinefactory.np'),
    title: {
        default: 'Caffeine Factory | Professional Barista Training in Kathmandu Valley',
        template: '%s | Caffeine Factory',
    },
    description:
        'Caffeine Factory offers professional barista training across 4 locations in Kathmandu Valley — Kalanki, Hattigauda, Chabahil, and Bhaktapur. SCA-aligned curriculum, industry-grade machines.',
    keywords: [
        'barista training Kathmandu',
        'coffee school Nepal',
        'barista course Kalanki',
        'barista course Hattigauda',
        'barista course Bhaktapur',
        'barista course Chabahil',
        'latte art training Nepal',
        'espresso course Kathmandu',
    ],
    openGraph: {
        type: 'website',
        locale: 'en_NP',
        url: 'https://caffeinefactory.np',
        siteName: 'Caffeine Factory',
        title: 'Caffeine Factory | Professional Barista Training in Kathmandu Valley',
        description:
            'Master the craft of coffee at Caffeine Factory. Professional barista training across 4 branches in Kathmandu Valley.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Caffeine Factory | Professional Barista Training',
        description: 'Master the craft of coffee. 4 branches across Kathmandu Valley.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
};

// ── Root EducationalOrganization JSON-LD ────────────────────────────────────
const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Caffeine Factory',
    url: 'https://caffeinefactory.np',
    logo: 'https://caffeinefactory.np/logo.png',
    telephone: '+977-9818339553',
    email: 'hello@caffeinefactory.np',
    description:
        'Professional barista training school with 4 branches across the Kathmandu Valley, Nepal.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kathmandu',
        addressRegion: 'Bagmati Province',
        addressCountry: 'NP',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Barista Training Courses',
        itemListElement: [
            { '@type': 'Course', name: 'Foundations of Espresso', courseMode: 'In-person' },
            { '@type': 'Course', name: 'Latte Art Mastery', courseMode: 'In-person' },
            { '@type': 'Course', name: 'Brewing Science', courseMode: 'In-person' },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                {/* Material Symbols for icons */}
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
                {/* Root JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
            </head>
            <body className="antialiased bg-background-light text-primary">
                <div className="texture-overlay" aria-hidden="true" />
                {children}
            </body>
        </html>
    );
}
