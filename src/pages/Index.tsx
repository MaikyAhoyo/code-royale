import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModulesSection from "@/components/ModulesSection";
import SuccessStories from "@/components/SuccessStories";
import ResourcesSection from "@/components/ResourcesSection";
import TutoringSection from "@/components/TutoringSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ModulesSection />
      <SuccessStories />
      <ResourcesSection />
      <TutoringSection />
      <Footer />
    </div>
  );
};

export default Index;
