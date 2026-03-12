import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialSection from "@/components/SocialSection";
import NewsSection from "@/components/NewsSection";
import RareItemsSection from "@/components/RareItemsSection";
import ChatSection from "@/components/ChatSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialSection />
      <NewsSection />
      <RareItemsSection />
      <ChatSection />
      <Footer /> 
    </div>
  );
};

export default Index;
