import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <AboutSection />
            <ServicesSection />
            <ResourcesSection />
            <FAQSection />
            <ContactSection />
        </>
    );
}
