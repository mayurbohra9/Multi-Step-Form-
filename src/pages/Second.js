import React, { useState } from 'react';
import Buttons from "../components/Button/Buttons";

import one from '../assets/icons/1.png';
import two from '../assets/icons/2.png';
import three from '../assets/icons/3.png';
import four from '../assets/icons/4.png';
import five from '../assets/icons/5.png';

export default function Second({ onNext }) {

	const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };    

    const Bars = [
        {
            id: 'radio_1',
            icon:one,
            text:'Learning specific skills to advance my career',
        },
        {
            id: 'radio_2',
            icon:two,
            text:"Exploring new topics i'm interested in",
        },
        {
            id: 'radio_3',
            icon:three,
            text:'Refreshing my math foundations',
        },
        {
            id: 'radio_4',
            icon:four,
            text:'Exercising my brain to stay shrap',
        },
        {
            id: 'radio_5',
            icon:five,
            text:'Something else',
        },
    ];

  return (
    <div className="flex flex-col w-full h-3/5 items-center justify-between mt-5 gap-10">
      
      <p className="text-4xl font-bold">Which are the most interested in?</p>
      <p className="text-stone-600">Choose just one. This will help us get you started (but won't limit your experience).</p>


	  <form className="flex flex-col gap-3 w-1/2 overflow-scroll scroll-smooth h-96">
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
                            className={`flex flex-row p-4 gap-4 rounded-lg border-#f0f0f0 cursor-pointer ${selectedOption === bars.id ? 'border-yellow-000 border-2' : 'border'
                                }`}
                            htmlFor={bars.id}
                        >
                            <img src={bars.icon}  alt={bars.icon} className="w-7 cursor-pointer"/>
                            
                            <div className='flex flex-row gap-1 items-center justify-center '>
                                <p className=''>{bars.text} <span className='text-stone-600'>{bars.body}</span></p>
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
