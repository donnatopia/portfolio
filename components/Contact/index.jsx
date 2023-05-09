import React from 'react';
import { Section } from '../index.js';
import Calendly from './Calendly.jsx';
import Socials from './Socials.jsx';

export default function Contact() {
  return (
    <Section id='contact' title='Contact' subtitle='Let&apos;s Stay Connected'>
      <div className='flex flex-col gap-7'>
        <p>Let&apos;s chat all things software and get to know each other! I am open to freelance and full-time positions. Feel free to connect, I am always open to chat!</p>
        <div className='bg-center flex-center flex-col'>
          <Calendly />
          <Socials />
        </div>
      </div>
    </Section>
  )
}