import React from "react";
import "../App.css";

import LessThanIcon from '../assets/icons/less-than-symbol.png';

export default function Header({ step, onBack}) {
  let result = Math.round((step / 5) * 100);
  return (
    <div className="header flex flex-row justify-center items-center gap-2">
      
      {step === 1 ? (
        <div className="h-6"></div>
      ):(
        <div>
          {onBack && <img src={LessThanIcon} alt="back" className="w-6 cursor-pointer" onClick={onBack}/>}
        </div>
      )}

      {/* progress baar */}

      <div 
        className="h-1 w-4/5 rounded-3xl" 
        style={{
          backgroundColor: "#e7e7e7",
        }}
      >
        <div 
          className={`h-full block ${step === 5 ? ' rounded-3xl' : ' rounded-l-3xl'} `}  
          style={{ 
            width: `${result}%`,
            backgroundColor: "#2c9c80",
          }}
        ></div>

      </div>
    </div>
  );
}
