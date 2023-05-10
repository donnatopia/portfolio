import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../index.js';
import Tags from './Tags.jsx';
import Timeline from './Timeline.jsx';

export default function About() {
  return (
    <Section id='about' title='About' subtitle='Follow My Journey'>
      <div className='max-w-[1240px] md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <Timeline />
          <Link href='/#projects' className='py-6 link'>
            Check out some of my latest projects!
          </Link>
          <Tags />
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src='/assets/profile.jpg'
            alt='profile'
            width='200'
            height='200'
            className='rounded-xl shadow zoom min-w-full'
          />
        </div>
      </div>
    </Section>
  )
}