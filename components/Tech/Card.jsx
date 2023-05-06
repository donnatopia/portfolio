import React from 'react';
import Link from 'next/link';
import Icon from './Icon.jsx';

export default function Card({ category, stack }) {
  return (
    <div key={ category } className='max-w-sm rounded-xl shadow-lg p-4 bg-slate-100 hover:scale-105 ease-in duration-300 h-72 flex flex-col justify-between'>
      <h3 className='uppercase text-lg tracking-widest text-gray-600 text-center'>{ category }</h3>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        { stack.slice(0, 4).map(icon => <Icon key={icon.title} icon={icon}/>)}
      </div>
      <div className='uppercase text-xs text-gray-500 text-center'>
        <Link href='/' className='hover:underline'>Learn More</Link>
      </div>
    </div>
  )
}