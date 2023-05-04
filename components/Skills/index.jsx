import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Section } from '../index.js';
import Card from './Card.jsx';
import Slider from 'react-slick';

export default function Skills() {
  const [skillTypes, setSkillTypes] = useState([]);

  useEffect(() => {
    axios('/api/skillTypes')
      .then(({ data }) => setSkillTypes(data))
      .catch((err) => console.log('error fetching skill types', err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Section title='Skills' subtitle='What I Can Do'>
      <Slider {...settings}>
        { skillTypes.map(skillType =>(
          <div key={skillType} className='px-4' >
            <Card skillType={skillType}/>
          </div>
        ))}
      </Slider>
    </Section>
  )
}