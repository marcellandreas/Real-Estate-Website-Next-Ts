import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import CitySlider from "./CitySlider";

function CityProperties() {
  return (
    <div className=" py-16">
      <div className="w-4/5 mx-auto">
        <SectionHeading heading="Explor City Properties" />
        <div className="mt-10 md:mt-16">
          <CitySlider />
        </div>
      </div>
    </div>
  );
}

export default CityProperties;
