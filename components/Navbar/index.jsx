import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Socials from '../Contact/Socials.jsx';
import Menu from './Menu.jsx';
import Calendly from '../Contact/Calendly.jsx';

export default function Navbar({ DarkButton }) {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] secondary-bg'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src='/assets/logo.png'
            alt='logo'
            width='70'
            height='50'
          />
        </Link>
        <div>
          <Menu ulClass='hidden md:flex' setNav={ setNav } DarkButton={ DarkButton }/>
        </div>
        <div className='md:hidden cursor-pointer'>
          <AiOutlineMenu onClick={ toggleNav } size={ 25 } />
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>
        <div
          className={
            nav
              ? 'fixed-left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen secondary-bg p-10 ease-in duration-200'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-200'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image
                src='/assets/logo.png'
                alt='/'
                width='70'
                height='50'
              />
              <button onClick={ toggleNav } className='rounded-full p-3'>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className='py-4 flex flex-col gap-20'>
            <Menu liClass='py-4' setNav={ setNav } DarkButton={ DarkButton }/>
            <Calendly />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  )
}