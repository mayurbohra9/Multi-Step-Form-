import React from "react";
import Buttons from "../components/Button/Buttons";

import alien from "../assets/icons/alien.png";
import star from "../assets/icons/star.png";

export default function Fifth({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-between pt-10 lg:pt-28 gap-10 lg:gap-20 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-3/5 gap-6 lg:gap-40">
        <img src={alien} alt="pulley" className="w-40 lg:w-60" />

        <div className="flex flex-col items-left justify-center gap-4">
          <p className="text-xl lg:text-3xl font-bold mb-6 lg:mb-10">You're on your way!</p>

          <div className="flex flex-row gap-1 lg:gap-2">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={star} alt="star" className="w-4 lg:w-6" />
            ))}
          </div>

          <p className="text-justify italic text-sm lg:text-base">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real-world problem-solving situations."
            <br />
            <br />- Jacob S.
          </p>
        </div>
      </div>

      <Buttons onNext={onNext} />
    </div>
  );
}
