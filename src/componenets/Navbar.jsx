import React, { useState } from 'react'
import { links } from "../data"
import { NavLink } from 'react-router'
import { FiMenu } from "react-icons/fi"


function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return ( 
    <nav className="relative">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col items-center fixed right-0 top-1/2 -translate-y-1/2 gap-4 p-4 bg-container rounded-l-xl shadow-lg">
  {links.map((data, index) => (
    <NavLink
      key={index}
      to={data.path}
      className={({ isActive }) =>
        `group flex items-center gap-2 bg-container border border-border p-3 rounded-full transition-all duration-300 hover:pr-6 ${
          isActive ? `bg-primary text-white` : "text-title"
        }`
      }
    >
      <span className="text-xl">{data?.icon}</span>
      <span
        className={({ isActive }) =>
          `${isActive ? "opacity-100" : ""} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap`
        }
      >
        {data?.name}
      </span>
    </NavLink>
  ))}
</div>


      {/* Mobile / Tablet Navbar */}
      <div
        className={`lg:hidden fixed bg-container w-64 h-full px-6 py-8 transition-transform duration-500 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {links.map((data, index) => (
            <li key={index}>
              <NavLink
                to={data.path}
                className={({ isActive }) =>
                  `flex items-center text-lg gap-2 border-b border-b-border pb-2 ${
                    isActive ? "!text-first" : "text-title"
                  }`
                }
              >
                {data?.icon}
                <p>{data?.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button for Mobile */}
      <div
        className="lg:hidden fixed top-5 left-5 z-50 bg-first text-white p-2 rounded-full cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FiMenu size={20} />
      </div>
    </nav>
  )
}

export default Navbar
