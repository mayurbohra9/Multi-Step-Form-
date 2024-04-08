import React, { useState } from 'react';
import Buttons from "../components/Button/Buttons";

import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import four from '../assets/images/4.png';

export default function Fourth({ onNext }) {

	const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };    

    const Bars = [
      {
        id: 'radio_1',
        icon:one,
        text:'Arithmetic',
        body:'Introductory'
    },
    {
        id: 'radio_2',
        icon:two,
        text:'Basic Algebra',
        body:'Foundational'
    },
    {
        id: 'radio_3',
        icon:three,
        text:'Intermediate Algebra',
        body:'Intermediate'
    },
    {
        id: 'radio_4',
        icon:four,
        text:'Calculus',
        body:'Advanced'
    },
    ];

  return (
    <div className="flex flex-col w-full h-3/5 items-center justify-between mt-5 gap-8">
      
      <p className="text-4xl font-bold">What is your math comfort level?</p>
      <p className="text-stone-600">Choose the highest level you feel confident in - you can always adjust later.</p>


	  <form className="flex flex-row gap-4 overflow-scroll scroll-smooth h-56 mt-10">
            {
                Bars.map((bars) => (
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
                            className={`flex flex-col items-center justify-center p-7 gap-6 rounded-lg border-#f0f0f0 cursor-pointer ${selectedOption === bars.id ? 'border-yellow-000 border-2' : 'border'
                                }`}
                            htmlFor={bars.id}
                        >
                            <img src={bars.icon}  alt={bars.icon} className="w-40 cursor-pointer"/>
                            
                            <div className='flex flex-col gap-1 items-center justify-center'>
                                <p className=''>{bars.text} </p>
                                <p className='text-stone-400 text-xl'>{bars.body}</p>
                            </div>

                        </label>
                    </div>
                ))
            }
        </form>
      
      <Buttons onNext={onNext} selectedOption={selectedOption} />
    </div>
  );
}
