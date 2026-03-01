'use client';

import Image from 'next/image';
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from '@/registry/magicui/scroll-based-velocity';

// ── Gallery images ────────────────────────────────────────────────────────────
// All from lh3.googleusercontent.com / supabase — no external CDN timeouts
const IMAGES_ROW_A = [
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7pLJ1-3hd_VWi7UJrfHLbwMtVEF2GoKe0GQpW0JD5lDqDL-6lBlOq87kAk-YBx66sRSML2MqeupWuWqLBXIULRcLTf1bpjzkNvirw3g4QBKE5bKiFUZOx0bcG06QYURAvwGOa1t7pCDpCMZKwhBowJCcdBVgV9sehTcaBa-R50TvK6Hi5elAJm5lP9zQlso-aeO5UbuOMVfJpQ2XDmhMaLyWQTN_XNxHUaUZnBkG5iwZJlLpN9w8_Alts74z_UA-geTua1sWAZg',
        alt: 'Cozy coffee shop interior with warm lighting at Caffeine Factory',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg3xH1hTcdLhNoKF7Zj63cPK_xPtmOHVU373bxWPLxIsh9gr3lgMq4uKBU40JMYz9skI3dmCZUEfGZNgrWvq4-5Vu__g4IOssp0VNTtJouIfFN5ALjIws7rIkzJH5BI6X1Sff7KkcMF5DY3BgozbtbN4ppYsjBWnRw2q7Sqy44hM9oZ9wZP6r6cfMu-gEQXhDV1x1yid2Idb0NYV9NMPj8DBJRvPPvkE2oXvQgFE48IabOJAF_wTMdJHaRqwZIIJrVtDKhqC9yJA',
        alt: 'Close up of latte art being poured at Caffeine Factory',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMiKW1tZ0_uPK1JDedWjwMJlG-uA3MrTQnITAvG7mMQz5fEH8ILDrl_v-dLD3eCTYF_0BzTlCQpY0IugO9pLolnBfHH6RIhxNu_mL6FVnVsH_AGKz3Kr_sw3mEAllUcQZ92UKzrXOHagh24-XLC5Nx6goks0tkwTEpixyyjomZTODhnl1sEFP7EkxbPCLpwiI4fNzzD_E34qsgCmuFbQv91-Ui0A5g6d1EFf5iuyX6aVRdsacQycBhIVPYhu3ktRSEK80hBKPxCw',
        alt: 'Barista smiling while working at espresso machine',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJuQaNG2-kA7W0O3O9O-5lH94x1y-a3ffDPtQ0eNWHkegJ5gMPIOj8j8A1bSYnKCJcyu1G_rTnHSeH_X1CCD28aPTt6Z_ZwFCA61wf3WOxDLUtxQsN7_o9T-rasJBFfuyWBx9cSKAcXHVa_CB8mCYyZt3gtGkTx25w1nLu9lKnc8uRQqLiEBL5m_bfMSY9XkoiMvvHP-kQlZ3zT5MytLtAPLZKwgQRMZ3Z8UUhILrVbo3BjYpTrnTlvbfJdTmQkbSlIfpUOulO8Q',
        alt: 'Overhead shot of coffee cups on wooden table',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO3XQf0hFTQcoJvo5CL5Dp7lwUPZXoRQ9SCm9H-ls9FEyRf68vAYQXllVlnHl2zTf5LbdSX0o5iKS7IREdukJEC_8_kNXPsxRKV77TKfyN9HTpMKJF38HGsn-4IyrMKsqs-wzUb315G7KjGTOrZ_WOMPdVw8ynWi9qNbjM1erqNpBhhwPcEn1OJV6ZNCTVOfXpImY8Uq4hFUY7s4fcA7CM912tdBcb59f5JtUf75UqxYiY_PgJJSHachSsUsTupiJ9ttISMl-ySg',
        alt: 'Barista holding a portafilter with fresh ground coffee',
    },
];

// Row B — reverse direction, reordered for visual variety
const IMAGES_ROW_B = [
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO3XQf0hFTQcoJvo5CL5Dp7lwUPZXoRQ9SCm9H-ls9FEyRf68vAYQXllVlnHl2zTf5LbdSX0o5iKS7IREdukJEC_8_kNXPsxRKV77TKfyN9HTpMKJF38HGsn-4IyrMKsqs-wzUb315G7KjGTOrZ_WOMPdVw8ynWi9qNbjM1erqNpBhhwPcEn1OJV6ZNCTVOfXpImY8Uq4hFUY7s4fcA7CM912tdBcb59f5JtUf75UqxYiY_PgJJSHachSsUsTupiJ9ttISMl-ySg',
        alt: 'Foundations of Espresso course at Caffeine Factory',
    },
    {
        src: 'https://azmfbhffgqqeqbxmkdqf.supabase.co/storage/v1/object/sign/Images/Whisk_0000i0msk01m1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMGEwNjY0NC0xYWI4LTQ1YWYtYWE0NS1kY2QwNDYzZjc2ZjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvV2hpc2tfMDAwMGkwbXNrMDFtMS5wbmciLCJpYXQiOjE3NzE4MzY2NTIsImV4cCI6MTgwMzM3MjY1Mn0.oRHqCKZe0mQ6zZQsyoWCi6BkN-ehYdn3Ji4mA3dK9qY',
        alt: 'Intricate latte art being poured into a ceramic cup',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7pLJ1-3hd_VWi7UJrfHLbwMtVEF2GoKe0GQpW0JD5lDqDL-6lBlOq87kAk-YBx66sRSML2MqeupWuWqLBXIULRcLTf1bpjzkNvirw3g4QBKE5bKiFUZOx0bcG06QYURAvwGOa1t7pCDpCMZKwhBowJCcdBVgV9sehTcaBa-R50TvK6Hi5elAJm5lP9zQlso-aeO5UbuOMVfJpQ2XDmhMaLyWQTN_XNxHUaUZnBkG5iwZJlLpN9w8_Alts74z_UA-geTua1sWAZg',
        alt: 'Warm ambience inside Caffeine Factory training space',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMiKW1tZ0_uPK1JDedWjwMJlG-uA3MrTQnITAvG7mMQz5fEH8ILDrl_v-dLD3eCTYF_0BzTlCQpY0IugO9pLolnBfHH6RIhxNu_mL6FVnVsH_AGKz3Kr_sw3mEAllUcQZ92UKzrXOHagh24-XLC5Nx6goks0tkwTEpixyyjomZTODhnl1sEFP7EkxbPCLpwiI4fNzzD_E34qsgCmuFbQv91-Ui0A5g6d1EFf5iuyX6aVRdsacQycBhIVPYhu3ktRSEK80hBKPxCw',
        alt: 'Student barista learning on a commercial espresso machine',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJuQaNG2-kA7W0O3O9O-5lH94x1y-a3ffDPtQ0eNWHkegJ5gMPIOj8j8A1bSYnKCJcyu1G_rTnHSeH_X1CCD28aPTt6Z_ZwFCA61wf3WOxDLUtxQsN7_o9T-rasJBFfuyWBx9cSKAcXHVa_CB8mCYyZt3gtGkTx25w1nLu9lKnc8uRQqLiEBL5m_bfMSY9XkoiMvvHP-kQlZ3zT5MytLtAPLZKwgQRMZ3Z8UUhILrVbo3BjYpTrnTlvbfJdTmQkbSlIfpUOulO8Q',
        alt: 'Brewing Science course — overhead coffee shot',
    },
];

export default function GallerySection() {
    return (
        <section
            className="py-20 md:py-28 overflow-hidden"
            id="gallery"
            aria-labelledby="gallery-heading"
        >
            {/* Section header */}
            <div className="flex flex-col items-center mb-12 text-center px-6">
                <span className="text-accent font-bold uppercase tracking-wider text-sm">Gallery</span>
                <h2
                    id="gallery-heading"
                    className="text-primary text-3xl md:text-4xl font-bold mt-2 heading-premium"
                >
                    Life at Caffeine Factory
                </h2>
            </div>

            {/* Scroll-velocity image belt */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-0">
                <ScrollVelocityContainer className="w-full">
                    {/* Row A — scrolls left */}
                    <ScrollVelocityRow baseVelocity={1} direction={1} className="py-3">
                        {IMAGES_ROW_A.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative mx-3 h-52 w-80 flex-shrink-0 overflow-hidden rounded-xl shadow-md"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="320px"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </ScrollVelocityRow>

                    {/* Row B — scrolls right */}
                    <ScrollVelocityRow baseVelocity={1} direction={-1} className="py-3">
                        {IMAGES_ROW_B.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative mx-3 h-52 w-80 flex-shrink-0 overflow-hidden rounded-xl shadow-md"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="320px"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>

            </div>
        </section>
    );
}
