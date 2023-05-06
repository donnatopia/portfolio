import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ project }) {
  return (
    <div className='card w-full h-96 flex flex-col items-center justify-center gap-6 zoom'>
      <div className='h-40 overflow-hidden flex items-center justify-center'>
        <Image
          src={ project.media }
          width='400'
          height='400'
          alt={ project.title }
          className='rounded'
        />
      </div>
      <h3 className='uppercase text-lg tracking-wider text-[#709dff] text-center'>
        <a href={project.github} target='_blank'>{ project.title }</a>
      </h3>
      <p className='text-center'>{ project.description }</p>
      <div className='flex gap-3 flex-wrap'>
        { project.tags.map((tag, index) => <p key={index} className='tags'>{ tag }</p>) }
      </div>
    </div>
  )
}