'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const locationBadges = ['Hattigauda', 'Bhaktapur', 'Chabahil', 'Kalanki'];

export default function HeroSection() {
    const btnRef = useRef<HTMLDivElement>(null);

    // Ripple effect
    useEffect(() => {
        const container = btnRef.current;
        if (!container) return;
        const buttons = container.querySelectorAll<HTMLButtonElement>('.ripple-btn');
        const handlers: Array<[HTMLButtonElement, (e: MouseEvent) => void]> = [];

        buttons.forEach((btn) => {
            const handler = (e: MouseEvent) => {
                const circle = document.createElement('span');
                const diameter = Math.max(btn.clientWidth, btn.clientHeight);
                const radius = diameter / 2;
                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
                circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
                circle.classList.add('ripple');
                btn.querySelector('.ripple')?.remove();
                btn.appendChild(circle);
            };
            btn.addEventListener('click', handler);
            handlers.push([btn, handler]);
        });

        return () => handlers.forEach(([btn, h]) => btn.removeEventListener('click', h));
    }, []);

    return (
        <section
            id="hero"
            className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden"
            aria-label="Hero section"
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                id="hero-bg"
                className="absolute inset-0 z-0 w-full h-full object-cover"
                aria-hidden="true"
            >
                <source
                    src="https://res.cloudinary.com/dj7hwtgxy/video/upload/v1771477013/2909914-uhd_3840_2024_24fps_c9voh5.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 z-10 hero-overlay" aria-hidden="true" />

            {/* Content */}
            <div
                id="hero-content"
                className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center gap-6 max-w-4xl pt-20"
            >
                {/* Location Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 w-full max-w-sm sm:max-w-2xl">
                    {locationBadges.map((branch) => (
                        <Link
                            key={branch}
                            href={`/locations/${branch.toLowerCase()}`}
                            className="group rounded-full bg-white/5 hover:bg-white/15 border border-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 inline-flex items-center transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <span className="text-cream/70 group-hover:text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">location_on</span>
                                <span>{branch}</span>
                            </span>
                        </Link>
                    ))}
                </div>

                <h1 className="text-cream text-5xl md:text-7xl font-black heading-premium drop-shadow-sm leading-tight max-w-5xl mx-auto font-display">
                    Master the{' '}
                    <span className="font-serif italic font-normal aurora-text tracking-normal">Craft</span>{' '}
                    of Coffee
                </h1>

                <p className="text-cream/90 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                    Professional barista training across the valley. From bean to cup, elevate your skills with
                    industry leaders.
                </p>

                <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
                    <Link
                        href="/#courses"
                        className="ripple-btn relative overflow-hidden bg-accent hover:bg-[#A86A46] text-white text-base font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg min-w-[180px] text-center"
                    >
                        Explore Courses
                    </Link>
                    <Link
                        href="/#locations"
                        className="ripple-btn relative overflow-hidden bg-transparent border border-cream/40 hover:bg-cream/10 text-cream text-base font-bold py-3.5 px-8 rounded-full transition-all duration-300 backdrop-blur-sm min-w-[180px] text-center"
                    >
                        Find a Branch
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-cream/60 hidden md:block" aria-hidden="true">
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
        </section>
    );
}
