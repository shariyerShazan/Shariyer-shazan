import React, { useEffect, useState } from 'react'
import Navbar from '../componenets/Navbar'
import { Outlet } from 'react-router'
import ThemeSelector from '../componenets/Theme'
import { useSelector } from 'react-redux';
import Loader from "../componenets/Loader"

function MainLayout() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  useEffect(() => {

    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='dark:bg-gray-950 text-text'>
      <Navbar />
      <ThemeSelector />
      <Outlet />
    </div>
  )
}

export default MainLayout;
