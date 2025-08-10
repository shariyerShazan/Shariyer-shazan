import React, { useState } from "react";
import { links } from "../data";
import { NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { themes } from "./themes"; // তোমার থিম ফাইল থেকে ইমপোর্ট

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  return (
    <>
      {/* Theme Selector */}
      <div className="flex gap-2 p-4">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setActiveTheme(theme)}
            style={{ backgroundColor: theme.color }}
            className={`w-8 h-8 rounded-full border-2 ${
              activeTheme.id === theme.id ? "border-black" : "border-transparent"
            }`}
            aria-label={`Select theme ${theme.id}`}
          />
        ))}
      </div>

      <nav className="relative">
        {/* Desktop Sidebar */}
        <div
          className="hidden lg:flex flex-col items-center fixed right-0 top-1/2 -translate-y-1/2 gap-4 p-4 rounded-l-xl shadow-lg"
          style={{ backgroundColor: activeTheme.color + "20" }} // 20 hex opacity approx
        >
          {links.map((data, index) => (
            <NavLink
              key={index}
              to={data.path}
              className={({ isActive }) =>
                `group flex items-center gap-2 border p-3 rounded-full transition-all duration-300 hover:pr-6`
              }
              style={{
                borderColor: activeTheme.color,
                backgroundColor: isActive ? activeTheme.color : "transparent",
                color: isActive ? "#fff" : "#333",
              }}
            >
              <span className="text-xl">{data?.icon}</span>
              <span
                className={`whitespace-nowrap transition-all duration-300 ${
                  "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                }`}
                style={{ color: isActive ? "#fff" : "#333" }}
              >
                {data?.name}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Mobile / Tablet Navbar */}
        <div
          className={`lg:hidden fixed w-64 h-full px-6 py-8 transition-transform duration-500`}
          style={{
            backgroundColor: activeTheme.color + "20",
            transform: showMenu ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <ul className="flex flex-col gap-4">
            {links.map((data, index) => (
              <li key={index}>
                <NavLink
                  to={data.path}
                  className={({ isActive }) =>
                    `flex items-center text-lg gap-2 border-b pb-2`
                  }
                  style={{
                    borderColor: activeTheme.color,
                    color: isActive ? activeTheme.color : "#333",
                  }}
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
          className="lg:hidden fixed top-5 left-5 z-50 p-2 rounded-full cursor-pointer text-white"
          onClick={() => setShowMenu(!showMenu)}
          style={{ backgroundColor: activeTheme.color }}
        >
          <FiMenu size={20} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
