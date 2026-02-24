import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import SignatureCourses from '@/components/SignatureCourses';
import WhyChooseUs from '@/components/WhyChooseUs';
import LocationsSection from '@/components/LocationsSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <SocialProof />
                <SignatureCourses />
                <WhyChooseUs />
                <LocationsSection />
                <GallerySection />
            </main>
            <Footer />
        </>
    );
}
