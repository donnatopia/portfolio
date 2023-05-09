import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Socials from '../Contact/Socials.jsx';
import Calendly from '../Contact/Calendly.jsx';

export default function Main() {
  const roles = ['Fullstack Engineer', 'Frontend Developer', 'Backend Developer', 'Software Engineer'];

  return (
    <div className='w-full h-screen mx-auto'>
      <div className='h-full flex-center text-center'>
        <div>
          <p className='uppercase text-sm tracking-widest font-secondary'>hi, my name is</p>
          <div className='left-0'>
            <h1 className='py-4 text-primary title'>Donna Wong</h1>
            <h2 id='role' className='py-2 font-secondary w-screen title'>
              &lt; <span className='text-secondary'><Typewriter words={roles} loop={false} delaySpeed='4500' /></span> /&gt;
            </h2>
          </div>
          <div className='py-8 flex-center flex-col'>
            <Calendly />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  )
};