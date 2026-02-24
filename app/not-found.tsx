import Link from 'next/link';
import { getAllBranches } from '@/lib/locations';

export default function NotFound() {
    const branches = getAllBranches();

    return (
        <main className="min-h-screen bg-background-light flex items-center justify-center px-6">
            <div className="max-w-xl w-full text-center">
                <span className="material-symbols-outlined text-accent text-7xl mb-6 block" aria-hidden="true">
                    coffee_maker
                </span>
                <h1 className="text-6xl font-black text-primary heading-premium mb-4">404</h1>
                <h2 className="text-2xl font-bold text-primary mb-4">Page Not Found</h2>
                <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                    Looks like this page got lost on its way to the espresso machine. Let&apos;s get you
                    back on track.
                </p>

                <div className="mb-10">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                        Our Branches
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {branches.map((branch) => (
                            <Link
                                key={branch.slug}
                                href={`/locations/${branch.slug}`}
                                className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-accent hover:text-accent px-4 py-2 rounded-full text-sm font-semibold text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">location_on</span>
                                {branch.shortName}
                            </Link>
                        ))}
                    </div>
                </div>

                <Link
                    href="/"
                    className="bg-primary hover:bg-primary-light text-cream font-bold py-3 px-8 rounded-full transition-all shadow-lg inline-block"
                >
                    Go to Homepage
                </Link>
            </div>
        </main>
    );
}
