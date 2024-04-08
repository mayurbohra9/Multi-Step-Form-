import React from "react";
import Buttons from "../components/Button/Buttons";

import pulley from '../assets/icons/pulley.png';

export default function Third({ onNext}) {
  return (
   <div className="flex flex-col items-center justify-between pt-28 gap-20">

      <div className="flex flex-row items-center justify-center w-3/5 gap-40">
        
        <img src={pulley}  alt='pulley' className="w-60"/>

        <div className="flex flex-col items-left justify-center gap-10">

          <p className="text-3xl font-bold">You're in the right place</p>
          <p className="text-justify">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>

        </div>

      </div>


      <Buttons onNext={onNext} />
   </div>
  );
}
