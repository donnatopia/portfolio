import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Socials from '../Contact/Socials.jsx';
import Menu from './Menu.jsx';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-slate-100'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src='/assets/navLogo.png'
            alt='logo'
            width='70'
            height='50'
          />
        </Link>
        <div>
          <Menu ulClass='hidden md:flex' setNav={ setNav }/>
        </div>
        <div className='md:hidden cursor-pointer'>
          <AiOutlineMenu onClick={ toggleNav } size={ 25 } />
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>
        <div
          className={
            nav
              ? 'fixed-left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-200'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image
                src='/assets/navLogo.png'
                alt='/'
                width='70'
                height='50'
              />
              <div onClick={ toggleNav } className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <Menu liClass='py-4' setNav={ setNav } />
            <div className='pt-40'>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}