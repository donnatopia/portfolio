import React from 'react';

export default function Tags() {
  const tags = ['fullstack', 'intuitive', 'memorable-ui', 'transformative-ideas', 'high-quality-software'];

  return (
    <div className='text-gray-600 max-w-[90%] m-auto flex flex-wrap gap-5 justify-center align py-6'>
      { tags.map((tag, index) => <p key={index} className='rounded text-sm bg-slate-300 p-2 max-w-sm max-h-8 overflow-hidden shadow-lg shadow-gray-350 hover:scale-110 ease-in duration-200'>#{tag}</p>)}
    </div>
  )
}