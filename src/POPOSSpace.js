// src/Project.js

import React from 'react'
import logo from './logo.svg'

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div>
    <h1>Name...</h1>
    <img src={`${process.env.PUBLIC_URL}images/50-california-st.jpg`}
       width="300"
       height="300"
       alt="50 Califonia St."
     />
      <div>Address...</div>
    </div>
  )
}


export default POPOSSpace
