import SectionHeading from "@/components/Helper/SectionHeading";
import { properties } from "@/data/data";
import React from "react";
import PropertiesCard from "./PropertiesCard";

const Properties = () => {
  return (
    <div className=" py-16 bg-gray-100 ">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Discover Our Properties" />
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
          {properties.map((proprty) => {
            return (
              <div key={proprty.id}>
                <PropertiesCard property={proprty} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Properties;