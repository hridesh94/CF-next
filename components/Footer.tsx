'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateInView, { fadeUp, staggerContainer } from '@/components/AnimateInView';

const exploreLinks = [
    { href: '/#courses', label: 'Courses' },
    { href: '/#about', label: 'About Us' },
    { href: '/#locations', label: 'Locations' },
    { href: '/#gallery', label: 'Gallery' },
];

const socialLinks = [
    { href: '#', label: 'Instagram' },
    { href: '#', label: 'Facebook' },
    { href: '#', label: 'TikTok' },
];

const linkVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Footer() {
    return (
        <footer className="bg-primary text-cream pt-20 pb-10 px-6" role="contentinfo">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-cream/10 pb-16">

                    {/* CTA Block — slides up */}
                    <AnimateInView variants={fadeUp} duration={0.7} className="md:w-1/2">
                        {/* Brand logo */}
                        <Image
                            src="/logo.svg"
                            alt="Caffeine Factory"
                            width={56}
                            height={56}
                            className="h-14 w-auto object-contain mb-6 brightness-0 invert opacity-90"
                            loading="lazy"
                        />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-premium">
                            Ready to start your coffee journey?
                        </h2>
                        <p className="text-cream/60 text-lg mb-8 max-w-md">
                            Enroll today and take the first step towards becoming a professional barista.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="/#courses"
                                className="bg-accent hover:bg-[#A86A46] text-white text-base font-bold py-3 px-8 rounded-full transition-all duration-300"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </AnimateInView>

                    {/* Link Grid — staggered columns */}
                    <motion.div
                        className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <nav aria-label="Footer explore links">
                            <motion.h4 variants={linkVariant} className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Explore</motion.h4>
                            <ul className="space-y-3 text-cream/70 text-sm">
                                {exploreLinks.map((link) => (
                                    <motion.li key={link.href} variants={linkVariant}>
                                        <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        <nav aria-label="Footer contact links">
                            <motion.h4 variants={linkVariant} className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Contact</motion.h4>
                            <ul className="space-y-3 text-cream/70 text-sm">
                                <motion.li variants={linkVariant}>
                                    <a href="tel:+97714423456" className="hover:text-white transition-colors">+977 1-4423456</a>
                                </motion.li>
                                <motion.li variants={linkVariant}>
                                    <a href="tel:+9779818339553" className="hover:text-white transition-colors">+977-9818339553</a>
                                </motion.li>
                                <motion.li variants={linkVariant}>
                                    <a href="mailto:hello@caffeinefactory.np" className="hover:text-white transition-colors">hello@caffeinefactory.np</a>
                                </motion.li>
                            </ul>
                        </nav>

                        <nav aria-label="Footer social links">
                            <motion.h4 variants={linkVariant} className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Social</motion.h4>
                            <ul className="space-y-3 text-cream/70 text-sm">
                                {socialLinks.map((link) => (
                                    <motion.li key={link.label} variants={linkVariant}>
                                        <a href={link.href} className="hover:text-white transition-colors" rel="noopener noreferrer">{link.label}</a>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <AnimateInView variants={fadeUp} delay={0.2} className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
                    <p>© {new Date().getFullYear()} Caffeine Factory. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </AnimateInView>
            </div>
        </footer>
    );
}
