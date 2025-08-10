import React from 'react'
import {links} from "../data"
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div>
        <nav>
            <div className='fixed bg-container w-full px-14 py-8'>
                <ul>
                    {
                        links.map((data , index)=>{
                             return <li key={index}>
                                <NavLink to={data.path} className={({isActive})=> `flex items-center text-lg gap-2 ${isActive? "" : ""}`} to={data?.path}>
                                     {data?.icon}
                                     {data?.name}
                                </NavLink>
                             </li>
                        })
                    }
                </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
