import React from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Socials() {

  return (
    <div className='flex items-center justify-between max-w-[250px] m-auto py-4'>
      <Link href='https://www.linkedin.com/in/donnawong515/' target='_blank' className='social'>
        <FaLinkedinIn />
      </Link>
      <Link href='https://github.com/donnatopia' target='_blank' className='social'>
        <FaGithub />
      </Link>
      <Link href='mailto:donnaw515.dw@gmail.com' target='_blank' className='social'>
        <AiOutlineMail />
      </Link>
    </div>
  )
}