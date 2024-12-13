import SectionHeading from "@/components/Helper/SectionHeading";
import { appartmentTypeData } from "@/data/data";
import React from "react";
import AppartementTypeCard from "./AppartementTypeCard";

function AppartementType() {
  return (
    <div className="pt-16 pb-16 ">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Apartment Type" />
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center">
          {appartmentTypeData.map((type) => {
            return (
              <div key={type.id}>
                <AppartementTypeCard type={type} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AppartementType;
