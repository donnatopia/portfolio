import React, { useState } from 'react';
import Switch from 'react-switch';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useMediaQuery } from 'react-responsive';

export default function DarkButton() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(
    useMediaQuery({query: '(prefers-color-scheme: light)'})
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Switch
      onChange={ toggleDarkMode }
      checked={ isDarkMode }
      uncheckedIcon={
        <BsFillSunFill className='m-auto h-7 text-light-main-bg' />
      }
      checkedIcon={
        <BsFillMoonFill className='m-auto h-7 text-light-main-bg' />
      }
      onColor='#5651E5'
      offColor='#709DFF'
    />
  )
}