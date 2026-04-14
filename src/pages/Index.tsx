import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AppsGrid from "@/components/AppsGrid";
import ModernSolutions from "@/components/ModernSolutions";
import TechPartners from "@/components/TechPartners";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <AboutSection />
    <AppsGrid />
    <ModernSolutions />
    <TechPartners />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
