import React from 'react';
import Link from 'next/link';
import Icon from './Icon.jsx';

export default function Card({ category, stack }) {
  return (
    <div key={ category } className='card max-w-sm h-72 flex flex-col justify-between zoom overflow-hidden'>
      <h3 className='uppercase text-lg tracking-widest font-tertiary text-center'>{ category }</h3>
      <div className='flex-center flex-wrap gap-4'>
        { stack.slice(0, 4).map(icon => <Icon key={icon.title} icon={icon}/>)}
      </div>
      <div className='uppercase text-xs font-tertiary text-center'>
        <Link href='/' className='hover:underline'>Learn More</Link>
      </div>
    </div>
  )
}