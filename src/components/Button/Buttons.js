import React from "react";

export default function Buttons({ onNext, selectedOption }) {

  const isButtonDisabled = selectedOption === '';

  return (
    <div className="bottom-8 flex flex-row items-center justify-center  rounded-lg">
      {onNext && (
        <button onClick={onNext} 
          className={`px-10 py-2 rounded-lg  text-white ${selectedOption === '' ? 'bg-gray-000' : ' bg-black'}`}
          disabled={isButtonDisabled}>
          Continue
        </button>
      )}
    </div>
  );
}
