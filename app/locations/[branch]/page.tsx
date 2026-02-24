import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllBranches, getBranchBySlug } from '@/lib/locations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BranchPageProps {
    params: Promise<{ branch: string }>;
}

// ── SSG: pre-build all 4 branch pages at deploy time ────────────────────────
export async function generateStaticParams() {
    return getAllBranches().map((b) => ({ branch: b.slug }));
}

// ── Dynamic Hyper-Local Metadata ─────────────────────────────────────────────
export async function generateMetadata({ params }: BranchPageProps): Promise<Metadata> {
    const { branch: branchSlug } = await params;
    const branch = getBranchBySlug(branchSlug);
    if (!branch) return { title: 'Branch Not Found' };

    return {
        title: `${branch.name} | Barista Training in ${branch.city}`,
        description: `Enroll at Caffeine Factory ${branch.shortName}, located at ${branch.address}. Professional barista courses, SCA-aligned curriculum, industry-grade machines.`,
        alternates: {
            canonical: `https://caffeinefactory.np/locations/${branch.slug}`,
        },
        openGraph: {
            title: `${branch.name} | Premier Barista Training`,
            description: `Professional barista training at ${branch.address}. Enroll now.`,
            url: `https://caffeinefactory.np/locations/${branch.slug}`,
            images: [{ url: branch.featuredImage, width: 1200, height: 630, alt: branch.name }],
            type: 'website',
        },
    };
}

// ── Branch Page ───────────────────────────────────────────────────────────────
export default async function BranchPage({ params }: BranchPageProps) {
    const { branch: branchSlug } = await params;
    const branch = getBranchBySlug(branchSlug);
    if (!branch) notFound();

    // Hyper-Local LocalBusiness + EducationalOrganization JSON-LD
    const schema = {
        '@context': 'https://schema.org',
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        name: branch.name,
        image: `https://caffeinefactory.np${branch.featuredImage}`,
        '@id': `https://caffeinefactory.np/locations/${branch.slug}`,
        url: `https://caffeinefactory.np/locations/${branch.slug}`,
        telephone: branch.phone[0],
        email: branch.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: branch.address,
            addressLocality: branch.city,
            addressRegion: 'Bagmati Province',
            addressCountry: 'NP',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: branch.latitude,
            longitude: branch.longitude,
        },
        hasMap: branch.googleMapsUrl,
        description: `Professional barista training at ${branch.address}.`,
        priceRange: '$$',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            <main className="pt-28 pb-20 bg-background-light min-h-[80vh]">
                <div className="max-w-[1280px] mx-auto px-6">

                    {/* Breadcrumbs */}
                    <nav
                        aria-label="Breadcrumb"
                        className="text-sm font-medium text-gray-500 mb-6 flex gap-2 items-center"
                    >
                        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/#locations" className="hover:text-accent transition-colors">Locations</Link>
                        <span aria-hidden="true">/</span>
                        <span className="text-primary" aria-current="page">{branch.shortName}</span>
                    </nav>

                    {/* Page Title */}
                    <div className="flex items-center gap-3 mb-10">
                        <span className="material-symbols-outlined text-accent text-4xl" aria-hidden="true">location_on</span>
                        <h1 className="text-4xl md:text-5xl font-black text-primary heading-premium">
                            {branch.name}
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Branch Details Card */}
                        <article className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                            <h2 className="text-2xl font-bold text-primary mb-6">Branch Information</h2>

                            <ul className="space-y-6 flex-grow" aria-label="Branch contact details">
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-accent pt-1" aria-hidden="true">map</span>
                                    <div>
                                        <h3 className="font-semibold text-primary">Address</h3>
                                        <address className="text-gray-600 leading-relaxed not-italic">
                                            {branch.address}, {branch.city}
                                        </address>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-accent pt-1" aria-hidden="true">call</span>
                                    <div>
                                        <h3 className="font-semibold text-primary">Phone</h3>
                                        <p className="text-gray-600">
                                            {branch.phone.map((p, i) => (
                                                <span key={p}>
                                                    <a href={`tel:${p.replace(/[^0-9+]/g, '')}`} className="hover:text-accent transition-colors">{p}</a>
                                                    {i < branch.phone.length - 1 && ' · '}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-accent pt-1" aria-hidden="true">schedule</span>
                                    <div>
                                        <h3 className="font-semibold text-primary">Status</h3>
                                        <span
                                            className={`inline-block mt-1 px-3 py-1 rounded text-xs font-bold ${branch.status === 'Open Now'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-gray-100 text-gray-600'
                                                }`}
                                        >
                                            {branch.status}
                                        </span>
                                    </div>
                                </li>
                            </ul>

                            {/* Selling Points */}
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h3 className="text-lg font-bold text-primary mb-4">Branch Highlights</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    {branch.sellingPoints.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTAs */}
                            <div className="mt-10 flex gap-4 flex-wrap">
                                <a
                                    href={branch.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary hover:bg-primary-light text-cream font-bold py-3.5 px-8 rounded-full transition-all shadow-lg"
                                >
                                    Get Directions
                                </a>
                                <a
                                    href={`tel:${branch.phone[0].replace(/[^0-9+]/g, '')}`}
                                    className="border border-primary text-primary hover:bg-primary/5 font-bold py-3.5 px-8 rounded-full transition-all"
                                >
                                    Call Branch
                                </a>
                            </div>
                        </article>

                        {/* Map Embed */}
                        <aside
                            className="h-[450px] lg:h-full min-h-[450px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative bg-[#EBE8E4]"
                            aria-label={`Map showing ${branch.name} location`}
                        >
                            <iframe
                                src={branch.mapEmbedUrl}
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`${branch.name} Google Maps`}
                            />
                        </aside>
                    </div>

                    {/* Back Link */}
                    <div className="mt-12">
                        <Link
                            href="/#locations"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
                            View all branches
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
