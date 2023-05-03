import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Section } from '../index.js';
import { projects } from '../../utils';
import Card from './Card.jsx';

export default function Projects() {
  return (
    <Section title='Projects' subtitle='What I&apos;ve Built'>
      <div className='grid md:grid-cols-2 gap-8'>
        { projects.map(project => <Card key={ project.title } project={ project } />)}
      </div>
    </Section>
  )
}