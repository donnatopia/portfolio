import React from 'react';
import Image from 'next/image';

export default function Icon({ type, skill }) {
  return (
    <div className='p-3 gap-3 flex flex-col items-center justify-center'>
      <Image
        src={`/../public/assets/skills/${type}/${skill}.png`}
        alt={skill}
        width='50'
        height='50'
      />
      <h5 className='text-gray-700 uppercase text-center' >{skill}</h5>
    </div>
  )
}