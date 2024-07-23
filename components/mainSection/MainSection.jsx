import React from "react";
import HeroSection from "../heroSection/HeroSection";
import LatestNews from "../latestNews/LatestNews";
import MostRead from "../mostRead/MostRead";
import NewsLetter from "../newsLetter/NewsLetter";

const MainSection = () => {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <HeroSection />
        <LatestNews />
        <MostRead />
        <NewsLetter />
      </div>
    </div>
  );
};

export default MainSection;
