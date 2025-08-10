import React from 'react'
import Navbar from '../componenets/Navbar'
import { Outlet } from 'react-router'
import ThemeSelector from '../componenets/Theme'

function MainLayout() {
  return (
    <div>
      <Navbar />
       <ThemeSelector />
      <Outlet />
    </div>
  )
}

export default MainLayout
