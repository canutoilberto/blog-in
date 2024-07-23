import React from "react";
import HeroSection from "../heroSection/HeroSection";
import LatestNews from "../latestNews/LatestNews";
import MostRead from "../mostRead/MostRead";

const MainSection = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto">
        <HeroSection />
        <LatestNews />
        <MostRead />
      </div>
    </div>
  );
};

export default MainSection;
