'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

// ── Preset animation variants ─────────────────────────────────────────────────
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const slideLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

// ── AnimateInView ─────────────────────────────────────────────────────────────
interface AnimateInViewProps {
    children: ReactNode;
    variants?: Variants;
    className?: string;
    threshold?: number;
    duration?: number;
    delay?: number;
    once?: boolean;
}

export default function AnimateInView({
    children,
    variants = fadeUp,
    className,
    threshold = 0.15,
    duration = 0.6,
    delay = 0,
    once = true,
}: AnimateInViewProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration, ease: 'easeOut', delay }}
        >
            {children}
        </motion.div>
    );
}
