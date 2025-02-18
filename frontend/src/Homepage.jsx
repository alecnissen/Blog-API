import React from 'react'
import { NavLink } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";


export default function Homepage() {
  return (
    <div className='homepage-content-container'>

    <div className='homepage-header-container'> 
      <NavLink to="/"> 
      <button>Login</button>
      </NavLink>

      <h1>Alec&apos;s BLOG API</h1>

      <NavLink to="/Create_User">
      <button>Create User</button>
      </NavLink>

    </div>

    
    </div>
  )
}
