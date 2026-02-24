'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimateInView, { fadeUp, staggerContainer } from '@/components/AnimateInView';
import { getAllBranches } from '@/lib/locations';

const mapMarkers = [
    { branch: 'hattigauda', label: 'Hattigauda', top: '30%', left: '40%' },
    { branch: 'bhaktapur', label: 'Bhaktapur', top: '50%', left: '45%' },
    { branch: 'chabahil', label: 'Chabahil', top: '65%', left: '35%' },
    { branch: 'kalanki', label: 'Kalanki', top: '55%', left: '25%' },
];

const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function LocationsSection() {
    const branches = getAllBranches();

    return (
        <section className="py-20 md:py-28 bg-background-light px-6" id="locations" aria-labelledby="locations-heading">
            <div className="max-w-[1280px] mx-auto">

                {/* Header */}
                <AnimateInView variants={fadeUp} className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm">Locations</span>
                    <h2 id="locations-heading" className="text-primary text-3xl md:text-4xl font-bold mt-2 heading-premium">
                        Find Us Across the Valley
                    </h2>
                </AnimateInView>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Map — fades in */}
                    <AnimateInView variants={fadeUp} duration={0.9} className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative min-h-[400px] h-full">
                        <div className="absolute inset-0 bg-[#EBE8E4] opacity-30" aria-hidden="true" />
                        <Image
                            src="https://azmfbhffgqqeqbxmkdqf.supabase.co/storage/v1/object/sign/Images/map.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMGEwNjY0NC0xYWI4LTQ1YWYtYWE0NS1kY2QwNDYzZjc2ZjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvbWFwLnBuZyIsImlhdCI6MTc3MTQyNDk0OSwiZXhwIjoxODAyOTYwOTQ5fQ.blNpFWh9ALhgAkLXFU30nsWM0jxHPfkkK81dUeAROV8"
                            alt="Stylized map of Kathmandu Valley showing Caffeine Factory branch locations"
                            fill
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            className="object-cover opacity-60"
                        />
                        {mapMarkers.map((marker, i) => (
                            <motion.div
                                key={marker.branch}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.15, duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
                                className="absolute flex flex-col items-center cursor-pointer group"
                                style={{ top: marker.top, left: marker.left }}
                            >
                                <Link href={`/locations/${marker.branch}`} aria-label={`View ${marker.label} branch`}>
                                    <span className="material-symbols-outlined text-primary text-4xl drop-shadow-md group-hover:text-accent transition-colors" aria-hidden="true">
                                        location_on
                                    </span>
                                    <span className="bg-primary text-white text-xs px-2 py-1 rounded shadow-md mt-1 font-bold block text-center">
                                        {marker.label}
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimateInView>

                    {/* Branch Cards — stagger */}
                    <motion.div
                        className="flex flex-col gap-4"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {branches.map((branch) => (
                            <motion.article
                                key={branch.id}
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent/50 transition-colors shadow-sm group"
                                variants={cardVariant}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-primary">{branch.shortName}</h3>
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${branch.status === 'Open Now' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                                        {branch.status}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">{branch.address}</p>
                                <div className="flex gap-3 mt-4">
                                    <Link
                                        href={`/locations/${branch.slug}`}
                                        className="text-xs font-bold uppercase tracking-wide text-primary border border-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors w-full text-center"
                                    >
                                        Get Directions
                                    </Link>
                                    <a
                                        href={`tel:${branch.phone[0].replace(/[^0-9+]/g, '')}`}
                                        className="w-10 h-9 border border-gray-200 rounded flex items-center justify-center text-primary hover:border-primary flex-shrink-0"
                                        aria-label={`Call ${branch.shortName}`}
                                    >
                                        <span className="material-symbols-outlined text-base" aria-hidden="true">call</span>
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
