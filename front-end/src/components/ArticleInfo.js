import React from 'react';

import { useLocation, useParams } from 'react-router-dom';
import "./ArticleInfo.css"
import Navbar from "./Navbar"
export default function ArticleInfo() {
  const {id} = useParams();
  const location = useLocation();
  return (
   
    <div className='container-fluid info con'>
    
    <Navbar/>
    <div className='row info'>
        <div className='col-8 title'>
            <h1>{location.state.title}</h1>
        </div>
         <div className='col-4 cat'>
          <p className='p'>{location.state.categories.data[0].attributes.name}</p>
          <p  className='p'>{location.state.date}</p>
        </div>
        <img height="300" width="60%" className='row ligneIm mt-5 container' src={location.state.image.data.attributes.name}/>
    </div>
    
 
  <div className='row mt-5'>
    <div className='col-2'>
      <ul>
        <li>
          lien1
        </li>
        <li>
          lien2
        </li>
        <li>
          lien3
        </li>
        <li>
          lien4
        </li>
      </ul>
    </div>
    <div className='col-10'>
    <div className='row title'>
            <h1 className='col-10'>{location.state.title}</h1>
            <button className='btn col-2'>{" -> "}</button>
        </div>
      <img height="300" width="60%" className='row ligneIm mt-5 container' src={location.state.image.data.attributes.name}/>
      <p className='row mt-5'>
      {location.state.description}
      </p>
    </div>
  </div>
     
    </div>
  )
}
