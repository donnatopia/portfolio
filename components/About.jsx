import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='w-full md:h-screen p-8 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-5'>Who I am</h2>
          <p className='py-4 text-gray-600'>
            I am a full-stack software enginner who got her start in the biochemical and medical field. My journey towards becoming a software engineer was not a straightforward one. Graduating from the University of California, Los Angeles &#40;UCLA&#41;, I started my career within healthcare as a medical scribe. Working in the medical field allowed me to test different functionalities within electronic chart systems and sparked my fascination with software engineering.
          </p>
          <p className='py-4 text-gray-600'>
            I realized that software engineering basics could be applied to a plethora of industries, and I wanted to dive deeper into this field. Through self-study and earning technical certifications in Python, Javascript, and Responsive Web Design, I gained a solid foundation in software engineering.
          </p>
          <p className='py-4 text-gray-600'>
            To expand my knowledge and become a full-stack software engineer, I enrolled in Hack Reactor, an advanced software engineering bootcamp. Since then, I have been able to fully immerse myself in programming logic and implement it in a clean, modular manner.
          </p>
          <p className='py-4 text-gray-600'>
            I find it incredibly fulfilling to see a project come to life through coding and am excited to apply my skills to innovative and modernized solutions that positively impact the community.
          </p>
          <p className='py-4 text-[#5651e5] cursor-pointer hover:underline'>
            Check out some of my latest projects!
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src='/../public/assets/profile.jpg'
            alt='profile'
            width='400'
            height='400'
            className='rounded-xl shadow-xl shadow-gray-400 hover:scale-105 ease-in duration-300'
          />
        </div>
      </div>
    </div>
  )
}

export default About;