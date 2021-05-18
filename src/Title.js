// src/Title.js

import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>

      <div>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        exact
        to="/">List</NavLink>

      <NavLink className="nav-link"
        className="nav-link"
        activeClassName="nav-link-active"
        to="/about">About</NavLink>
      </div>

    </div>
  )
}

export default Title
