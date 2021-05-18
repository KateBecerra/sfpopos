// src/Project.js

import React from 'react'
import { Link } from 'react-router-dom'


function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <div className="POPOSSpace">
    <Link  className="POPOSSpace-title"
      to={`/details/${id}`}>
      <img src={`${process.env.PUBLIC_URL}images/${image}`}
         width="300"
         height="300"
         alt=""
       />
     </Link>

     <h1>
      <Link to={`/details/${id}`}>
        {name}
      </Link>
     </h1>


      <div>{address}</div>
    </div>
  )
}


export default POPOSSpace
