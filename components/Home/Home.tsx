import React from "react";
import Hero from "./Hero/Hero";
import AppartementType from "./AppartementType/AppartementType";
import Properties from "./Properties/Properties";
import CityProperties from "./CityProperties/CityProperties";
import BuildingFeature from "./BuildingFeature/BuildingFeature";
import Reviews from "./Reviews/Reviews";
import Blog from "./Blog/Blog";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <AppartementType />
      <Properties />
      <CityProperties />
      <BuildingFeature />
      <Reviews />
      <Blog />
    </div>
  );
};

export default Home;
