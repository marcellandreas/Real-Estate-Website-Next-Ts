import React from "react";
import Hero from "./Hero/Hero";
import AppartementType from "./AppartementType/AppartementType";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <AppartementType />
    </div>
  );
};

export default Home;
