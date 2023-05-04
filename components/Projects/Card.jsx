import React from 'react';
import Image from 'next/image';

export default function Card({ project }) {
  return (
    <div className='relative flex flex-col gap-4 items-center justify-center h-auto w-full shadow-xl shadow-gray-400 bg-slate-100 rounded p-4 group'>
      <Image
        src={ project.media }
        className='rounded-xl'
        width='400'
        height='400'
        alt={ project.title }
        loading='lazy'
      />
      <h3 className='uppercase'><a href={project.github} target='_blank'>{ project.title }</a></h3>
      <p className='text-center'>{ project.description }</p>
      { project.deployment ? <a href={project.deployment} target='_blank'>Live Site</a> : null }
    </div>
  )
}