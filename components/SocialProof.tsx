'use client';

import { motion } from 'framer-motion';
import AnimateInView, { staggerContainer } from '@/components/AnimateInView';

const stats = [
    { value: '5.0', suffix: '★', label: 'Average Rating' },
    { value: '500+', suffix: '', label: 'Trained Baristas' },
    { value: '23+', suffix: '', label: 'Five-Star Reviews' },
];

const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function SocialProof() {
    return (
        <div className="bg-white border-b border-gray-100 py-8 md:py-10" aria-label="Social proof statistics">
            <motion.div
                className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-center md:justify-around gap-8 md:gap-0 divide-x-0 md:divide-x divide-gray-200"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {stats.map((stat) => (
                    <motion.div
                        key={stat.label}
                        className="flex flex-col items-center px-6"
                        variants={itemVariant}
                        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                        <div className="flex items-center gap-1 text-primary mb-1">
                            <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                            {stat.suffix === '★' && (
                                <span className="material-symbols-outlined text-accent text-xl" aria-hidden="true">star</span>
                            )}
                        </div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
