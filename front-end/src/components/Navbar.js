import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='row'>
        <div className='col-8 col-md mt-10'>
          <Link style={{textDecoration:"none", color:"black",fontSize:"30px"}} to='/'> 
          AALTO
          </Link>
        </div>
        <div className='col-2 ml-1'>
            Logo1 {" "}
        </div>
        <div className='col-2 ml-1'>
        Logo2
        </div>
    </div>
  )
}
