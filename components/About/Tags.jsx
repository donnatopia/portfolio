import React from 'react';

export default function Tags() {
  const tags = ['fullstack', 'intuitive', 'memorable-ui', 'transformative-ideas', 'high-quality-software'];

  return (
    <div className='text-gray-600 max-w-[90%] m-auto flex flex-wrap gap-5 justify-center align py-6'>
      { tags.map((tag, index) => <p key={index} className='tags zoom'>{tag}</p>)}
    </div>
  )
}