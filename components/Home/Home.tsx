import React from "react";
import Hero from "./Hero/Hero";
import AppartementType from "./AppartementType/AppartementType";
import Properties from "./Properties/Properties";
import CityProperties from "./CityProperties/CityProperties";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <AppartementType />
      <Properties />
      <CityProperties />
    </div>
  );
};

export default Home;
