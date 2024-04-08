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
            icon: one,
            text: 'Arithmetic',
            body: 'Introductory'
        },
        {
            id: 'radio_2',
            icon: two,
            text: 'Basic Algebra',
            body: 'Foundational'
        },
        {
            id: 'radio_3',
            icon: three,
            text: 'Intermediate Algebra',
            body: 'Intermediate'
        },
        {
            id: 'radio_4',
            icon: four,
            text: 'Calculus',
            body: 'Advanced'
        },
    ];

    return (
        <div className="flex flex-col w-full h-3/5 items-center justify-between pt-10 md:pt-20 gap-10">
            <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold">What is your math comfort level?</p>
                <p className="text-stone-600 text-sm md:text-base mt-2">Choose the highest level you feel confident in - you can always adjust later.</p>
            </div>

            <form className="flex flex-col gap-6 overflow-x-scroll md:overflow-hidden md:flex-row md:gap-4 md:h-56 md:mt-10">
                {Bars.map((bars) => (
                    <div key={bars.id}>
                        <input
                            className="hidden"
                            id={bars.id}
                            type="radio"
                            name="radio"
                            checked={selectedOption === bars.id}
                            onChange={handleOptionChange}
                        />
                        <label
                            className={`flex flex-col items-center justify-center p-5 md:p-7 gap-3 rounded-lg border border-gray-200 cursor-pointer ${selectedOption === bars.id ? 'border-yellow-500' : ''
                                }`}
                            htmlFor={bars.id}
                        >
                            <img src={bars.icon} alt={bars.icon} className="w-24 md:w-40 cursor-pointer"/>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-sm md:text-base'>{bars.text}</p>
                                <p className='text-xs md:text-sm text-stone-400'>{bars.body}</p>
                            </div>
                        </label>
                    </div>
                ))}
            </form>

            <Buttons onNext={onNext} selectedOption={selectedOption} />
        </div>
    );
}
