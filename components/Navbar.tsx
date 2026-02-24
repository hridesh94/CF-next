'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
    { href: '/#courses', label: 'Courses' },
    { href: '/#locations', label: 'Branches' },
    { href: '/#about', label: 'About' },
    { href: '/#gallery', label: 'Gallery' },
];



export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-40 transition-all duration-300 flex flex-col ${scrolled ? 'shadow-md' : ''}`}
            aria-label="Main navigation"
        >

            {/* ── Main Navbar ──────────────────────────────────────────── */}
            <div className="w-full glass-nav transition-all duration-300 relative">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-[88px] flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center" aria-label="Caffeine Factory — Home">
                        <Image
                            src="/logo.svg"
                            alt="Caffeine Factory"
                            width={160}
                            height={160}
                            className="w-[140px] sm:w-[180px] md:w-[220px] h-auto object-contain transform -translate-x-2"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8" role="menubar">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium hover:text-accent transition-colors"
                                role="menuitem"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Right Side */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6">
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 lg:gap-4 text-primary">
                            <a href="#" className="hover:text-accent transition-colors flex items-center group/item" aria-label="Facebook">
                                <svg className="w-4 h-4 lg:w-[18px] lg:h-[18px] fill-current group-hover/item:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-accent transition-colors flex items-center group/item" aria-label="Instagram">
                                <svg className="w-4 h-4 lg:w-[18px] lg:h-[18px] fill-current group-hover/item:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-accent transition-colors flex items-center group/item" aria-label="YouTube">
                                <svg className="w-4 h-4 lg:w-[18px] lg:h-[18px] fill-current group-hover/item:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                        <Link
                            href="/#courses"
                            className="bg-primary hover:bg-primary-light text-cream text-sm font-bold py-2 px-5 lg:py-2.5 lg:px-6 rounded-full transition-all duration-300 shadow-lg shadow-primary/20"
                        >
                            Enroll Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        id="mobile-menu-btn"
                        className="md:hidden text-primary p-2"
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((o) => !o)}
                    >
                        <span className="material-symbols-outlined text-3xl">{mobileOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>

                {/* ── Mobile Menu ────────────────────────────────────────── */}
                <div
                    id="mobile-menu"
                    className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-primary/5 absolute top-full left-0 w-full shadow-xl transition-all duration-300 origin-top ${mobileOpen ? 'block' : 'hidden'
                        }`}
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-primary hover:text-accent transition-colors py-2 border-b border-primary/5"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/#courses"
                            className="bg-primary text-cream text-base font-bold py-3 px-6 rounded-full mt-2 shadow-lg text-center"
                            onClick={() => setMobileOpen(false)}
                        >
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
