import React from 'react';
import Link from 'next/link';

export default function Menu({ ulClass, liClass, setNav, DarkButton }) {
  return (
    <ul className={`${ ulClass }`}>
      <DarkButton />
      <Link href='/'>
        <li className={`nav-item ${ liClass }`} onClick={() => setNav(false)}>Home</li>
      </Link>
      <Link href='/#about'>
        <li className={`nav-item ${ liClass }`} onClick={() => setNav(false)}>About</li>
      </Link>
      <Link href='/#tech'>
        <li className={`nav-item ${ liClass }`} onClick={() => setNav(false)}>Tech</li>
      </Link>
      <Link href='/#projects'>
        <li className={`nav-item ${ liClass }`} onClick={() => setNav(false)}>Projects</li>
      </Link>
    </ul>
  )
}