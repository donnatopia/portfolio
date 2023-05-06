import React from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Socials() {

  return (
    <div>
      <p className='uppercase text-gray-500 text-sm text-center'>Connect with Me</p>
      <div className='flex items-center gap-20 justify-center max-w-[330px] m-auto py-4'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          <Link href='https://www.linkedin.com/in/donnawong515/' target='_blank'>
            <FaLinkedinIn />
          </Link>
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          <Link href='https://github.com/donnatopia' target='_blank'>
            <FaGithub />
          </Link>
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          <Link href='mailto:donnaw515.dw@gmail.com' target='_blank'>
            <AiOutlineMail />
          </Link>
        </div>
      </div>
    </div>
  )
}