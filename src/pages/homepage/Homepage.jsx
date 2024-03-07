import React from "react";
import "./Homepage.css";
import { CategoryHome, Hero, TopPicks, TrendingProducts } from "../../components";
import { useHomeContext } from "../../context/home_context";

const Homepage = () => {
  window.scrollTo(0, 0);

  const { homeData, homeCategory } = useHomeContext();
  return (
    <div className="Homepage_main">
      <Hero homeData={homeData} />
      <CategoryHome homeCategory={homeCategory} />
      <TrendingProducts homeData={homeData} />
      <TopPicks homeData={homeData} />
    </div>
  );
};

export default Homepage;
