import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Section } from '../index.js';
import Card from './Card.jsx';
import Slider from 'react-slick';
import { tech as techStack } from '../../utils';

export default function Tech() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  return (
    <Section id='tech' title='Tech' subtitle='What I Can Do'>
      <div className='p-4'>
        <Slider {...settings}>
          { techStack.map(tech =>(
            <div key={tech.category} className='px-4' >
              <Card category={tech.category} stack={tech.stack}/>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  )
}