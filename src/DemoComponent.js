import React, { useState } from "react";
import Header from "./layout/Header";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Fifth from "./pages/Fifth";
import Sixth from "./pages/Sixth";

const steps = {
  1: First,
  2: Second,
  3: Third,
  4: Fourth,
  5: Fifth,
};

const DemoComponent = () => {
  const [step, setStep] = useState(1);

  const Step = steps[step];

  const onNext = () => {
    setStep(step + 1);
  };

  const onBack = () => {
    setStep(step - 1);
  };

  return (
      <div className="p-5">
        {step === 6 ? (
          <>
            <Sixth/>
          </>
        ) : (
          <>
            <Header step={step} onBack={onBack} Step={Step}/>

            <Step onNext={onNext} step={step} />
          </>
        )}
      </div>
  );
}

export default DemoComponent;