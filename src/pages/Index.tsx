import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import PortfolioSection from "@/components/PortfolioSection";
import TrustSection from "@/components/TrustSection";
import CtaSection from "@/components/CtaSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <BenefitsSection />
    <ServicesSection />
    <GuaranteeSection />
    <ProcessSection />
    <PortfolioSection />
    <TeamSection />
    <TrustSection />
    <CtaSection />
    <ContactsSection />
    <Footer />
  </div>
);

export default Index;
