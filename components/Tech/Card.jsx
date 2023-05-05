import React, { useEffect, useState } from 'react';
import Icon from './Icon.jsx';

export default function Card({ category, stack }) {
  return (
    <div key={ category }>
      <div className='max-w-sm rounded overflow-hidden shadow-lg p-4 bg-slate-100 hover:scale-105 ease-in duration-300'>
        <h3 className='uppercase text-lg tracking-widest py-4 text-gray-600'>{ category }</h3>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          { stack.map(icon => <Icon key={icon.title} icon={icon}/>)}
        </div>
      </div>
    </div>
  )
}