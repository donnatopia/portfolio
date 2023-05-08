import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Socials from '../Contact/Socials.jsx';
import Calendly from '../Contact/Calendly.jsx';

export default function Main() {
  const roles = ['Fullstack Engineer', 'Frontend Developer', 'Backend Developer', 'Software Engineer'];

  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>hello world</p>
          <div className='left-0'>
            <h1 className='py-4 text-gray-700'>
              Hi, I&apos;m <span className='text-primary'>Donna</span>
            </h1>
            <h2 id='role' className='py-2 text-gray-700 w-screen'>
              &lt; <span className='text-secondary font-mono'><Typewriter words={roles} loop={false} delaySpeed='4500' /></span> /&gt;
            </h2>
          </div>
          <div className='py-8 flex justify-center'>
            <Calendly />
          </div>
          <div className='py-8'>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  )
};