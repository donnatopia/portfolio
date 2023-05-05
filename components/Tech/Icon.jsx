import React from 'react';
import Image from 'next/image';

export default function Icon({ icon }) {
  return (
    <div className='p-3 gap-3 flex flex-col items-center justify-center'>
      <Image
        src={ icon.logo }
        alt={ icon.title }
        width='50'
        height='50'
        laoding='lazy'
      />
      <h5 className='text-gray-700 uppercase text-center' >{ icon.title }</h5>
    </div>
  )
}