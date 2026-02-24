import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// ── next/font/google — zero-CLS, preloaded automatically ─────────────────────
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

// ── Viewport (separate export — Next.js 15 requirement) ───────────────────────
// Fixes "Mobile Friendliness" audit: injects proper viewport meta tag
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#1b1817',
};

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
    // Canonical URL — prevents duplicate-content penalties
    alternates: {
        canonical: 'https://caffeinefactory.np',
    },
    openGraph: {
        type: 'website',
        locale: 'en_NP',
        url: 'https://caffeinefactory.np',
        siteName: 'Caffeine Factory',
        title: 'Caffeine Factory | Professional Barista Training in Kathmandu Valley',
        description:
            'Master the craft of coffee at Caffeine Factory. Professional barista training across 4 branches in Kathmandu Valley.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Caffeine Factory — Professional Barista Training in Kathmandu Valley',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Caffeine Factory | Professional Barista Training',
        description: 'Master the craft of coffee. 4 branches across Kathmandu Valley.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
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
                {/* ── CDN Preconnects — reduces latency for external resources ── */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="dns-prefetch" href="https://res.cloudinary.com" />
                <link rel="dns-prefetch" href="https://azmfbhffgqqeqbxmkdqf.supabase.co" />
                <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />

                {/* Material Symbols — synchronous so icons are ready at first paint */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
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
