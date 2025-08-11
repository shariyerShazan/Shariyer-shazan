import React, { useEffect } from 'react'
import Navbar from '../componenets/Navbar'
import { Outlet } from 'react-router'
import ThemeSelector from '../componenets/Theme'
import { useSelector } from 'react-redux';

function MainLayout() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);
  
  return (
    <div className='dark:bg-gray-950 text-text'>
      <Navbar />
       <ThemeSelector />
      <Outlet />
    </div>
  )
}

export default MainLayout
