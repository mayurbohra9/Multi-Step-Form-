import React, { useState, useEffect } from "react";

import loader from "../assets/icons/loader.png";
import course from "../assets/icons/course.png";

export default function Sixth() {
  const [stateValue, setStateValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStateValue("New Value");
    }, 2000);

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
      body: "Build your foundation skils in algebra, geometry, and probability.",
      badge: "MOST POPULAR",
    },
    {
      id: "radio_2",
      icon: course,
      text: "Mathematical Thinking",
      body: "Build your fondational skills in algebra, geometry, and probability.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between">
      {stateValue === "New Value" ? (
        <>
          <div className="flex flex-col w-full h-3/5 items-center justify-between mt-28 gap-8">
            <p className="text-4xl font-bold">
              Learning paths based on your answers
            </p>
            <p className="text-stone-600">
              Choose one to get started. You can change anytime.
            </p>

            <form className="flex flex-row gap-4 overflow-scroll scroll-smooth h-56 mt-10">
              {Bars.map((bars) => (
                <div>
                  <input
                    className="hidden"
                    id={bars.id}
                    type="radio"
                    name="radio"
                    checked={selectedOption === bars.id}
                    onChange={handleOptionChange}
                  />
                  <label
                    className={`flex flex-row items-center justify-center p-7 gap-6 rounded-lg border-#f0f0f0 cursor-pointer ${
                      selectedOption === bars.id
                        ? "border-yellow-000 border-2"
                        : "border"
                    }`}
                    htmlFor={bars.id}
                  >
                    {bars.badge === "MOST POPULAR" && (
                      <p className="bg-yellow-001 px-4 py-1 rounded-full text-xs font-semibold absolute"
                        style={{
                          marginTop:'-13.3%'
                        }}
                      >
                        {bars.badge}
                      </p>
                    )}

                    <div className="flex flex-col gap-1 items-center justify-center w-48">
                      <p className="font-bold">
                        {bars.text}{" "}
                        <span className="font-normal">{bars.body}</span>
                      </p>
                    </div>

                    <img
                      src={bars.icon}
                      alt={bars.icon}
                      className="w-40 cursor-pointer"
                    />
                  </label>
                </div>
              ))}
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-between mt-56">
            <img src={loader} alt="pulley" className="w-20" />

            <p className="text-2xl font-bold w-3/4 text-center">
              Finding learning path recommendations for you based on your
              responses
            </p>
          </div>
        </>
      )}
    </div>
  );
}
