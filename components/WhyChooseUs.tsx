'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateInView, { slideLeft, slideRight, fadeUp, staggerContainer } from '@/components/AnimateInView';

const features = [
    {
        icon: 'coffee',
        title: 'Industry-Grade Machines',
        description: 'Train on La Marzocco and Nuova Simonelli machines used in top cafes worldwide.',
    },
    {
        icon: 'group',
        title: 'Small Batch Classes',
        description: 'Maximum of 6 students per session to ensure personalized attention and ample practice time.',
    },
    {
        icon: 'school',
        title: 'Internationally Recognized',
        description: 'Curriculum aligned with SCA standards, opening doors for global employment.',
    },
];

const featureVariant = {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
};

export default function WhyChooseUs() {
    return (
        <section className="bg-white py-20 md:py-0 overflow-hidden" id="about" aria-labelledby="about-heading">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">

                {/* Image Panel — slides in from left */}
                <AnimateInView
                    variants={slideLeft}
                    duration={0.8}
                    className="w-full md:w-1/2 relative min-h-[500px]"
                >
                    <Image
                        src="https://azmfbhffgqqeqbxmkdqf.supabase.co/storage/v1/object/sign/Images/girl.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMGEwNjY0NC0xYWI4LTQ1YWYtYWE0NS1kY2QwNDYzZjc2ZjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvZ2lybC5wbmciLCJpYXQiOjE3NzE4MzY0OTksImV4cCI6MTgwMzM3MjQ5OX0.8rbdGh2UKzd181UDlvH00Q8nKO2bVXJuOHS1W2WmHHQ"
                        alt="Student barista learning on a commercial espresso machine"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </AnimateInView>

                {/* Content Panel — slides in from right */}
                <AnimateInView
                    variants={slideRight}
                    duration={0.8}
                    className="w-full md:w-1/2 px-8 py-16 md:p-24 flex flex-col justify-center bg-[#FDFCFB]"
                >
                    <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4">
                        Why Caffeine Factory
                    </span>
                    <h2 id="about-heading" className="text-primary text-3xl md:text-5xl font-bold mb-8 heading-premium">
                        Elevating Coffee Standards in Nepal.
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                        We don&apos;t just teach you how to make coffee; we teach you the science, art, and
                        business behind every cup. Join a community of passionate professionals.
                    </p>

                    {/* Features — staggered */}
                    <motion.div
                        className="space-y-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {features.map((feature) => (
                            <motion.div key={feature.title} className="flex gap-4" variants={featureVariant} transition={{ duration: 0.55, ease: 'easeOut' }}>
                                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                                    <span className="material-symbols-outlined" aria-hidden="true">{feature.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimateInView>

            </div>
        </section>
    );
}
