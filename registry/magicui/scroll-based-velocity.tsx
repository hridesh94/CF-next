'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { useScroll, useVelocity, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────
interface ScrollVelocityRowProps {
    children: ReactNode;
    /**
     * Base scrolling speed — higher = faster.
     * Translated to animation duration as `20_000 / baseVelocity` ms.
     */
    baseVelocity?: number;
    /** 1 = left  (default), -1 = right */
    direction?: 1 | -1;
    className?: string;
}

interface ScrollVelocityContainerProps {
    children: ReactNode;
    className?: string;
}

// ── ScrollVelocityRow ─────────────────────────────────────────────────────────
/**
 * A perfectly seamless horizontal marquee.
 *
 * How it works:
 *  - The inner track contains the children TWICE side-by-side.
 *  - A Web Animations API keyframe animates `translateX(0% → -50%)` in an
 *    infinite linear loop. At exactly -50% the view is identical to 0% because
 *    the second copy starts there, so the reset is invisible.
 *  - `updatePlaybackRate()` adjusts speed in real-time (no restart needed),
 *    driven by framer-motion's scroll velocity spring.
 *  - `will-change: transform` hints the browser to promote the layer to the
 *    GPU compositor thread, eliminating main-thread layout thrashing.
 */
export function ScrollVelocityRow({
    children,
    baseVelocity = 10,
    direction = 1,
    className,
}: ScrollVelocityRowProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<Animation | null>(null);

    const { scrollY } = useScroll();
    const rawVelocity = useVelocity(scrollY);
    // Spring-smooth the raw velocity so speed changes feel organic, not snappy
    const smoothVelocity = useSpring(rawVelocity, { damping: 50, stiffness: 400 });

    // ── Start the Web Animations API loop ──────────────────────────────────────
    useEffect(() => {
        const track = trackRef.current;
        if (!track || typeof track.animate !== 'function') return;

        // Duration in ms — higher baseVelocity → shorter duration → faster scroll
        const durationMs = 20_000 / baseVelocity;

        // Direction 1  → left scroll  → 0% to -50%
        // Direction -1 → right scroll → -50% to 0%
        const fromX = direction === 1 ? '0%' : '-50%';
        const toX = direction === 1 ? '-50%' : '0%';

        animRef.current = track.animate(
            [{ transform: `translateX(${fromX})` }, { transform: `translateX(${toX})` }],
            {
                duration: durationMs,
                iterations: Infinity,
                easing: 'linear',
            },
        );

        return () => {
            animRef.current?.cancel();
            animRef.current = null;
        };
    }, [baseVelocity, direction]);

    // ── Adjust playback rate based on scroll velocity ─────────────────────────
    useEffect(() => {
        const unsubscribe = smoothVelocity.on('change', (v) => {
            if (!animRef.current) return;

            // Map scroll velocity to a rate multiplier.
            // Scrolling down speeds up direction-1, slows direction -1 (and vice versa).
            const scrollFactor = (direction * v) / 800;
            // Clamp between 0.3× (almost paused) and 4× (fast)
            const rate = Math.min(Math.max(1 + scrollFactor, 0.3), 4);
            animRef.current.updatePlaybackRate(rate);
        });

        return unsubscribe;
    }, [smoothVelocity, direction]);

    return (
        <div className={cn('overflow-hidden', className)}>
            {/*
       * width: max-content prevents the flex items from wrapping.
       * will-change: transform promotes this element to its own GPU layer.
       * The children are rendered TWICE — the seamless loop depends on
       * the second copy being pixel-identical to the first.
       */}
            <div
                ref={trackRef}
                className="flex"
                style={{ width: 'max-content', willChange: 'transform' }}
                aria-hidden="true"
            >
                <span className="flex shrink-0">{children}</span>
                <span className="flex shrink-0" aria-hidden="true">{children}</span>
            </div>
        </div>
    );
}

// ── ScrollVelocityContainer ───────────────────────────────────────────────────
export function ScrollVelocityContainer({
    children,
    className,
}: ScrollVelocityContainerProps) {
    return (
        <div className={cn('flex w-full flex-col', className)}>{children}</div>
    );
}
