import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import SkillCard from './SkillCard.jsx'

export default function Skills() {
  const [skillTypes, setSkillTypes] = useState([]);

  useEffect(() => {
    axios('/api/skillTypes')
      .then(({ data }) => setSkillTypes(data))
      .catch((err) => console.log('error fetching skill types', err));
  }, []);

  return (
    <div className='w-full lg:h-screen p-8'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
        <h2 className='py-5'>What I Can Do</h2>
        <div className='grid grid-cols-4 gap-4 justify-center items-center'>
          { skillTypes.map(skillType => <SkillCard key={skillType} skillType={skillType}/>)}
        </div>
      </div>
    </div>
  )
}