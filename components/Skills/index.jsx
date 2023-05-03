import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Section } from '../index.js';
import Card from './Card.jsx';

export default function Skills() {
  const [skillTypes, setSkillTypes] = useState([]);

  useEffect(() => {
    axios('/api/skillTypes')
      .then(({ data }) => setSkillTypes(data))
      .catch((err) => console.log('error fetching skill types', err));
  }, []);

  return (
    <Section title='Skills' subtitle='What I Can Do'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
        { skillTypes.map(skillType =>
          <Card key={skillType} skillType={skillType}/>
        )}
      </div>
    </Section>
  )
}