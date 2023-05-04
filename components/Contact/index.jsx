import React from 'react';
import Image from 'next/image';
import { Section } from '../index.js';
import Socials from './Socials.jsx';

export default function Contact() {
  return (
    <Section title='Contact' subtitle='Get In Touch'>
      <div className='grid lg:grid-cols-5 gap-8'>
        <div className='col-span-3 lg:col-span-2 w-full h0full shadow-xl shadow-gray-400 rounded-xl p-4 bg-slate-100'>
          <div className='lg:p-4 h-full flex flex-col justify-between'>
            <div className='flex justify-center'>
              <Image className='round' src='/assets/navLogo.png' alt='logo' width='200' height='200'/>
            </div>
            <div>
              <h2 className='py-2'>Donna Wong</h2>
              <p className='uppercase text-gray-500 text-sm'>Full Stack Software Engineer</p>
              <p className='py-4'>I am available for freelance or full-time positions. Contact me and let&apos;s chat!</p>
            </div>
            <Socials />
          </div>
        </div>
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 bg-slate-100 rounded-xl lg:p-4'>
          <form>
            <div className='grid gap-4 w-full p-4'>
              <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Name</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='6' name='message' />
              </div>
              <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  )
}