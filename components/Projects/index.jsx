import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Section } from '../index.js';
import { projects } from '../../utils';
import Card from './Card.jsx';
import Slider from 'react-slick';

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Section id='projects' title='Projects' subtitle='Featured Applications'>
      <div className='p-4'>
        <Slider {...settings}>
          { projects.map(project => (
            <div key={ project.title } className='p-6'>
              <Card project={ project } />
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  )
}