import React from 'react';

export function TimelineIcon() {
  return (
    <span class="absolute flex-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </span>
  )
}

export function TimelineTag({ tag }) {
  return (
    <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
      { tag }
    </span>
  )
}

export default function Timeline() {
  return (
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-6">
          <TimelineIcon />
          <h3 class="flex items-center mb-1 text-lg font-semibold font-main">
            Software Engineer Freelancer
            <TimelineTag tag='Latest' />
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none font-tertiary">
            March 2023 - Present
          </time>
          <ul className='mb-4 text-base font-normal font-secondary list-disc ml-2'>
            <li>Developed modern websites using state-of-the-art client-side technologies.</li>
            <li>Established effective communication channels with clients to ensure their vision is successfully translated into the final product.</li>
            <li>Transformed outdated websites into modern, refined ones that prioritize the user experience.</li>
          </ul>
      </li>
      <li class="mb-10 ml-6">
          <TimelineIcon />
          <h3 class="mb-1 text-lg font-semibold font-main">
            Hack Reactor
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none font-tertiary">
            December 2022 - March 2023
          </time>
          <ul class="text-base font-normal font-secondary list-disc ml-2">
            <li>12-week software engineering immersive program with 1000+ hours of coding.</li>
            <li>Full-Stack development with JavaScript, React, Express, PostgreSQL, MongoDB, and MySQL in an AGILE environment</li>
            <li>Relevant Coursework: JavaScript, React, Node, Express, jQuery, HTML, CSS, MySQL, MongoDB, AWS, JSON, Mocha, and Chai</li>
          </ul>
      </li>
      <li class="mb-10 ml-6">
          <TimelineIcon />
          <h3 class="mb-1 text-lg font-semibold font-main">
            Healthcare Profession
            <TimelineTag tag='Career Transition' />
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none font-tertiary">
            June 2021 - December 2022
          </time>
          <ul class="text-base font-normal font-secondary list-disc ml-2">
            <li>Worked within the healthcare sector as a medical scribe</li>
            <li>Tested different functionalities within the electronic chart systems, which sparked my fasication with software engineering</li>
            <li>Acquired technical certifications in Python, JavaScript, and Responsive Web Design through self-studying</li>
          </ul>
      </li>
      <li class="mb-10 ml-6">
          <TimelineIcon />
          <h3 class="mb-1 text-lg font-semibold font-main">
            University of California, Los Angeles (UCLA)
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none font-tertiary">September 2017 - June 2021</time>
          <ul class="text-base font-normal font-secondary list-disc ml-2">
            <li>Bachelor of Sciences, Biochemistry</li>
            <li>Film, Television, and Digital Media minor</li>
            <li>Dean&apos;s Honor&apos;s List</li>
          </ul>
      </li>
    </ol>
  )
}