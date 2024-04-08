import React from "react";
import Buttons from "../components/Button/Buttons";

import pulley from '../assets/icons/pulley.png';

export default function Third({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-between pt-10 md:pt-28 gap-10 md:gap-20">
            <div className="flex flex-col items-center justify-center w-full md:w-3/5 gap-10 md:flex-row md:gap-40">
                <img src={pulley} alt='pulley' className="w-40 md:w-60" />
                <div className="flex flex-col items-left md:items-left justify-center gap-5">
                    <p className="text-xl md:text-3xl font-bold md:text-left">You're in the right place</p>
                    <p className="text-sm md:text-base text-center md:text-justify">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
                </div>
            </div>
            <Buttons onNext={onNext} />
        </div>
    );
}
