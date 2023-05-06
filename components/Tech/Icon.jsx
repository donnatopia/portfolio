import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Icon({ icon }) {
  return (
    <Link href={ icon.link } target='_blank'>
      <div className='p-3 gap-3 flex flex-col items-center justify-center hover:bg-slate-200 rounded-xl'>
        <Image
          src={ icon.logo }
          alt={ icon.title }
          width='45'
          height='45'
          title={ icon.title }
        />
      </div>
    </Link>
  )
}