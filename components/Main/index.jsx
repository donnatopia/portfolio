import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Socials from '../Contact/Socials.jsx';

export default function Main() {
  const roles = ['Fullstack Engineer', 'Frontend Developer', 'Backend Developer', 'Software Engineer'];
  const tags = ['fullstack', 'intuitive', 'memorable-ui', 'transformative-ideas', 'high-quality-software'];

  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>hello world</p>
          <div className='left-0'>
            <h1 className='py-4 text-gray-700'>
              Hi, I&apos;m <span className='text-[#5651e5]'>Donna</span>
            </h1>
            <h2 id='role' className='py-2 text-gray-700'>
              &lt; <span className='text-[#709dff] font-mono'><Typewriter words={roles} loop={false} delaySpeed='4500' /></span> /&gt;
            </h2>
          </div>
          <div className='py-8'>
            <Socials />
          </div>
          <div className='text-gray-600 max-w-[90%] m-auto flex flex-wrap gap-5 justify-center align'>
            { tags.map((tag, index) => <p key={index} className='rounded text-sm bg-slate-300 p-2 max-w-sm max-h-8 overflow-hidden shadow-lg shadow-gray-350 hover:scale-110 ease-in duration-200'>#{tag}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
};