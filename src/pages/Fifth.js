import React from "react";
import Buttons from "../components/Button/Buttons";

import alien from "../assets/icons/alien.png";
import star from "../assets/icons/star.png";

export default function Fifth({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-between pt-28 gap-20">
      <div className="flex flex-row items-center justify-center w-3/5 gap-40">
        <img src={alien} alt="pulley" className="w-60" />

        <div className="flex flex-col items-left justify-center gap-4">
          <p className="text-3xl font-bold mb-10">You're on your way!</p>

          <div className="flex flex-row  gap-2">
            <img src={star} alt="pulley" className="w-6" />
            <img src={star} alt="pulley" className="w-6" />
            <img src={star} alt="pulley" className="w-6" />
            <img src={star} alt="pulley" className="w-6" />
            <img src={star} alt="pulley" className="w-6" />
          </div>

          <p className="text-justify italic">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
            <br />
            <br />- Jacob S.
          </p>
        </div>
      </div>

      <Buttons onNext={onNext} />
    </div>
  );
}
