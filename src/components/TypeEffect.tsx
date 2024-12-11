'use client';
import React from 'react';
import { ReactTyped } from 'react-typed';


const TypeEffect = () => {
  return (
    <div className='text-xl md:text-2xl font-medium text-gray-200'>
              <ReactTyped 
              strings={[
                "I develop cool <span style='color: #4BFFA5;'><strong>websites.</strong></span>",
                'I create efficient <span style="color: #4BFFA5;"><strong>mobile apps.</strong></span>'
              ]}
              typeSpeed={100}
              backSpeed={120}
              backDelay={200}
              loop
              ></ReactTyped>
    </div>
  )
}

export default TypeEffect;