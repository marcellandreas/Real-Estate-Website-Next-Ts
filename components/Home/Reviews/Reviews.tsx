import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import ReviewSlider from "./ReviewSlider";

function Reviews() {
  return (
    <div className=" py-16 bg-[#fef7f6]">
      <div className="w-4/5 mx-auto">
        <SectionHeading heading="Our Clients Reviews" />
        <div className=" mt-14">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
