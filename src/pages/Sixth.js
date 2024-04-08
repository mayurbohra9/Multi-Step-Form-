import React, { useState, useEffect } from "react";

import loader from "../assets/icons/loader.png";
import course from "../assets/icons/course.png";

export default function Sixth() {
  const [stateValue, setStateValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStateValue("New Value");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const Bars = [
    {
      id: "radio_1",
      icon: course,
      text: "Fondation Math",
      body: "Build your foundation skills in algebra, geometry, and probability.",
      badge: "MOST POPULAR",
    },
    {
      id: "radio_2",
      icon: course,
      text: "Mathematical Thinking",
      body: "Build your foundational skills in algebra, geometry, and probability.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between mt-10 lg:mt-28">
      {stateValue === "New Value" ? (
        <>
          <div className="flex flex-col w-full lg:w-3/5 h-auto lg:h-3/5 items-center justify-between gap-8">
            <p className="text-2xl lg:text-4xl font-bold text-center">
              Learning paths based on your answers
            </p>
            <p className="text-sm lg:text-base text-stone-600 text-center">
              Choose one to get started. You can change anytime.
            </p>

            <form className="flex flex-col lg:flex-row gap-4 lg:overflow-x-scroll lg:scroll-smooth lg:h-56 mt-10">
              {Bars.map((bars) => (
                <div key={bars.id} className="relative">
                  <input
                    className="hidden"
                    id={bars.id}
                    type="radio"
                    name="radio"
                    checked={selectedOption === bars.id}
                    onChange={handleOptionChange}
                  />

                  <label
                    className={`flex flex-col lg:flex-row items-center justify-center p-7 gap-6 rounded-lg border-#f0f0f0 cursor-pointer ${
                      selectedOption === bars.id
                        ? "border-yellow-000 border-2"
                        : "border"
                    }`}
                    htmlFor={bars.id}
                  >
                    {bars.badge === "MOST POPULAR" && (
                      <p className="bg-yellow-001 px-4 py-1 rounded-full text-xs font-semibold absolute top-0 left-50 transform -translate-y-full lg:translate-y-0">
                        {bars.badge}
                      </p>
                    )}

                    <div className="flex flex-col gap-1 items-center justify-center lg:w-48">
                      <p className="font-bold text-center lg:text-left">
                        {bars.text}
                        <span className="font-normal">{bars.body}</span>
                      </p>
                    </div>

                    <img
                      src={bars.icon}
                      alt={bars.icon}
                      className="w-24 lg:w-40 cursor-pointer"
                    />
                  </label>
                </div>
              ))}
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-between mt-10 lg:mt-28">
            <img src={loader} alt="pulley" className="w-12 lg:w-20" />

            <p className="text-base lg:text-2xl font-bold w-full lg:w-3/4 text-center">
              Finding learning path recommendations for you based on your
              responses
            </p>
          </div>
        </>
      )}
    </div>
  );
}
