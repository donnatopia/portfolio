import React from 'react';

export default function Section({ children, title, subtitle, id }) {
  return (
    <div id={ id } className='w-full lg:h-screen p-8 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-primary'>{ title }</p>
        <h2 className='py-5'>{ subtitle }</h2>
        { children }
      </div>
    </div>
  )
}