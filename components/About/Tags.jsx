import React from 'react';

export default function Tags() {
  const tags = ['fullstack', 'intuitive', 'memorable-ui', 'transformative-ideas', 'high-quality-software'];

  return (
    <div className='font-tertiary max-w-[90%] m-auto flex-center flex-wrap gap-5 py-6'>
      { tags.map((tag, index) => <p key={index} className='tags zoom'>{tag}</p>)}
    </div>
  )
}