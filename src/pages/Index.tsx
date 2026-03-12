import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialSection from "@/components/SocialSection";
import NewsSection from "@/components/NewsSection";
import RareItemsSection from "@/components/RareItemsSection";
import PlayerRankingSection from "@/components/PlayerRankingSection";
import ChatSection from "@/components/ChatSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <HeroSection />
      <ChatSection />
      <PlayerRankingSection />
      <RareItemsSection />
      <NewsSection />
      <SocialSection />
      <Footer /> 
    </div>
  );
};

export default Index;
