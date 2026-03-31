import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArtworksSection from "@/components/ArtworksSection";
import ConservationSection from "@/components/ConservationSection";
import JournalSection from "@/components/JournalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ArtworksSection />
        <ConservationSection />
        <JournalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
