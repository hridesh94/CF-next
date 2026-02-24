'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimateInView, { fadeUp, staggerContainer } from '@/components/AnimateInView';

const courses = [
    {
        title: 'Foundations of Espresso',
        duration: '2 Weeks',
        level: 'Beginner Friendly',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBO3XQf0hFTQcoJvo5CL5Dp7lwUPZXoRQ9SCm9H-ls9FEyRf68vAYQXllVlnHl2zTf5LbdSX0o5iKS7IREdukJEC_8_kNXPsxRKV77TKfyN9HTpMKJF38HGsn-4IyrMKsqs-wzUb315G7KjGTOrZ_WOMPdVw8ynWi9qNbjM1erqNpBhhwPcEn1OJV6ZNCTVOfXpImY8Uq4hFUY7s4fcA7CM912tdBcb59f5JtUf75UqxYiY_PgJJSHachSsUsTupiJ9ttISMl-ySg',
        alt: 'Barista holding a portafilter with fresh ground coffee',
        offset: false,
    },
    {
        title: 'Latte Art Mastery',
        duration: '1 Week',
        level: 'Intermediate',
        image:
            'https://azmfbhffgqqeqbxmkdqf.supabase.co/storage/v1/object/sign/Images/Whisk_0000i0msk01m1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMGEwNjY0NC0xYWI4LTQ1YWYtYWE0NS1kY2QwNDYzZjc2ZjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvV2hpc2tfMDAwMGkwbXNrMDFtMS5wbmciLCJpYXQiOjE3NzE4MzY2NTIsImV4cCI6MTgwMzM3MjY1Mn0.oRHqCKZe0mQ6zZQsyoWCi6BkN-ehYdn3Ji4mA3dK9qY',
        alt: 'Intricate latte art being poured into a ceramic cup',
        offset: true,
    },
    {
        title: 'Brewing Science',
        duration: '3 Weeks',
        level: 'Advanced',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDTVNmjW1RMhapfNPwW9soThQcHKvh5euRj8kwTCMvUwCWugsk-DBxz7J4ZzqDbiRQ9W5MrjlP5Kk_H5OIJWJyyW8tlLzzNuow2rYrkxOW5D4upwUWbtTr6Q6CNzBrKOT6CL0UlYNhUDBUsbvoyHJbrlf_WXZbw0ibVwtVzNR0KiG9cxHizYfM9pBvbVF5tTAAKB2lYmLbtLvVvAn__Ok_ay9dH5E5tvkedGYBzZdyHWrq3bsgAQm0IRSgTjCwUmM140d9Dv34Zyg',
        alt: 'Coffee beans being inspected for quality roasting',
        offset: false,
    },
];

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function SignatureCourses() {
    return (
        <section className="py-20 md:py-28 max-w-[1280px] mx-auto px-6" id="courses" aria-labelledby="courses-heading">

            {/* Header */}
            <AnimateInView variants={fadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                    <span className="text-accent font-bold uppercase tracking-wider text-sm">Curriculum</span>
                    <h2 id="courses-heading" className="text-primary text-3xl md:text-4xl font-bold mt-2 heading-premium">
                        Signature Courses
                    </h2>
                </div>
                <Link
                    href="#"
                    className="text-primary font-bold border-b-2 border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors flex items-center gap-1"
                >
                    View All Courses{' '}
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                </Link>
            </AnimateInView>

            {/* Cards — staggered */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {courses.map((course) => (
                    <motion.article
                        key={course.title}
                        className={`group cursor-pointer ${course.offset ? 'mt-0 md:mt-12' : ''}`}
                        variants={cardVariant}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-xl mb-6 shadow-md">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all z-10" />
                            <Image
                                src={course.image}
                                alt={course.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-gray-500 mt-1">{course.duration} • {course.level}</p>
                            </div>
                            <button
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"
                                aria-label={`Learn more about ${course.title}`}
                            >
                                <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_outward</span>
                            </button>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
