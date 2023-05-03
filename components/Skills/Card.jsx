import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Icon from './Icon.jsx';

export default function Card({ skillType }) {
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
          { skills.map(skill => <Icon key={skill} type={skillType} skill={skill}/>)}
        </div>
      </div>
    </div>
  )
}