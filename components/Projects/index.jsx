import React, { useState } from 'react';
import axios from 'axios';
import { Section } from '../index.js';
import { projects } from '../../utils';
import Card from './Card.jsx';
import Slider from 'react-slick';
import { FiBox } from 'react-icons/fi';
import { BsFillHexagonFill } from 'react-icons/bs';

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);

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
    ],
    customPaging: (i) => (
      <BsFillHexagonFill className={`carousel-dot ${activeSlide === i ? 'active' : ''}`} />
    ),
    beforeChange: (current, next) => setActiveSlide(next),
  }

  return (
    <Section id='projects' title='Projects' subtitle='Featured Applications'>
      <div className='p-4'>
        <Slider {...settings}>
          { projects.map(project => (
            <div key={ project.title } className='py-6 px-2'>
              <Card project={ project } />
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  )
}