import React, { useEffect, useState } from 'react';
import Icon from './Icon.jsx';

export default function Card({ category, stack }) {

  return (
    <div key={ category } className='max-w-sm rounded overflow-hidden shadow-lg p-4 bg-slate-100 hover:scale-105 ease-in duration-300 h-64 flex flex-col justify-between'>
      <h3 className='uppercase text-lg tracking-widest text-gray-600'>{ category }</h3>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        { stack.slice(0, 4).map(icon => <Icon key={icon.title} icon={icon}/>)}
      </div>
      <div>
        <p className='uppercase text-xs text-gray-500 text-center' >{ stack.length <=4 ? stack.length : 4 } out of { stack.length }</p>
      </div>
    </div>
  )
}