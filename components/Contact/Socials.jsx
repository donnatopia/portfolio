import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Socials() {
  return (
    <div>
      <p className='uppercase text-gray-500 text-sm text-center'>Connect with Me</p>
      <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          <FaLinkedinIn />
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          <FaGithub />
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          <AiOutlineMail />
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          <BsFillPersonLinesFill />
        </div>
      </div>
    </div>
  )
}