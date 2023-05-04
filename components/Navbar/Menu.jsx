import React from 'react';
import Link from 'next/link';

export default function Menu({ ulClass, liClass, setNav }) {
  return (
    <ul className={ ulClass }>
      <Link href='/'>
        <li className={`ml-10 text-sm uppercase hover:text-[#5651e5] ${ liClass }`} onClick={() => setNav(false)}>Home</li>
      </Link>
      <Link href='/#about'>
        <li className={`ml-10 text-sm uppercase hover:text-[#5651e5] ${ liClass }`} onClick={() => setNav(false)}>About</li>
      </Link>
      <Link href='/#skills'>
        <li className={`ml-10 text-sm uppercase hover:text-[#5651e5] ${ liClass }`} onClick={() => setNav(false)}>Skills</li>
      </Link>
      <Link href='/#projects'>
        <li className={`ml-10 text-sm uppercase hover:text-[#5651e5] ${ liClass }`} onClick={() => setNav(false)}>Projects</li>
      </Link>
      <Link href='/#contact'>
        <li className={`ml-10 text-sm uppercase hover:text-[#5651e5] ${ liClass }`} onClick={() => setNav(false)}>Contact</li>
      </Link>
    </ul>
  )
}