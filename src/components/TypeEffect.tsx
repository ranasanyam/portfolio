'use client';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const TypeEffect = () => {
  return (
    <div className='text-xl md:text-2xl font-medium text-gray-200'>
        <TypewriterComponent 
              options={{
                autoStart:true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter.typeString('I develop cool <span style="color: #4BFFA5;"><strong>websites.</strong></span>')
                .pauseFor(2500)
                .deleteAll()
                .typeString('I create efficient <span style="color: #4BFFA5;"><strong>mobile apps.</strong></span>')
                .pauseFor(2500)
                .deleteAll()
                .start();
              }}
              />
    </div>
  )
}

export default TypeEffect;