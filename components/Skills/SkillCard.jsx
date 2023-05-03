import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export function Skill({ type, skill }) {
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

export default function SkillCard({ skillType }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios({
      url: '/api/skills',
      params: { skillType }
    })
      .then(({ data }) => setSkills(data))
      .catch((err) => console.log('error getting skills by type', err));
  }, [skillType]);

  return (
    <div key={ skillType }>
      <div className='max-w-sm rounded overflow-hidden shadow-lg p-4 bg-slate-100 hover:scale-105 ease-in duration-300'>
        <h3 className='uppercase text-lg tracking-widest py-4 text-gray-600'>{ skillType.replace(/.-/, '') }</h3>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          { skills.map(skill => <Skill key={skill} type={skillType} skill={skill}/>)}
        </div>
      </div>
    </div>
  )
}