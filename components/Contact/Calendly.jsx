import React from 'react';
import Link from 'next/link';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function Calendly() {
  return (
    <button className='flex gap-3 items-center justify-center'>
      <FaRegCalendarAlt />
      <Link href='https://calendly.com/donnawong-swe/chat-with-donna-wong' target='_blank'>
        Schedule a Meeting
      </Link>
    </button>
  )
}