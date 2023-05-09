import React from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Socials() {

  return (
    <div>
      <p className='uppercase font-secondary text-sm text-center'>Connect with Me</p>
      <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
        <button className='social'>
          <Link href='https://www.linkedin.com/in/donnawong515/' target='_blank'>
            <FaLinkedinIn />
          </Link>
        </button>
        <button className='social'>
          <Link href='https://github.com/donnatopia' target='_blank'>
            <FaGithub />
          </Link>
        </button>
        <button className='social'>
          <Link href='mailto:donnaw515.dw@gmail.com' target='_blank'>
            <AiOutlineMail />
          </Link>
        </button>
      </div>
    </div>
  )
}