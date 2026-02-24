/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': '#3c2b25',
                'primary-light': '#5D453C',
                'accent': '#C17F59',
                'background-light': '#f7f7f6',
                'background-dark': '#1b1817',
                'cream': '#F6F1EB',
                'sage': '#8da399',
                'charcoal': '#2E2E2E',
            },
            fontFamily: {
                display: ['var(--font-inter)', 'sans-serif'],
                body: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-playfair)', 'Georgia', 'serif'],
            },
            borderRadius: {
                DEFAULT: '0.5rem',
                lg: '0.75rem',
                xl: '1rem',
                '2xl': '1.5rem',
                full: '9999px',
            },
        },
    },
    plugins: [],
};
