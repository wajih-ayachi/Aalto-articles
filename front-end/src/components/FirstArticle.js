import React from 'react'
import './First.css'
import {Link} from 'react-router-dom'
export default function FirstArticle({propss}) {
  return (
    <div className='row first'>
      
       <div className='col-6 im mt-5'>
           <img className='imageF' alt={`p${propss.id}`} src={propss.attributes.image.data.attributes.name}/>
       </div>
       
       <div className='col-6 mt-5'>
        <div className='row'>
            <p>{propss.attributes.categories.data[0].attributes.name}</p>
        </div>
        <div className='row mt-5'>
            <h2>{propss.attributes.title}</h2>
        </div>
        <div className='row mt-5'>
            <p>
                {propss.attributes.description} ...
            </p>
        </div>
        <div className='row mt-5'>
            <div className='col-6'>
                {propss.attributes.date}
            </div>
            <div className='col-6'>
                <Link state={{description:propss.attributes.description , title:propss.attributes.title, categories:propss.attributes.categories , date:propss.attributes.date , image:propss.attributes.image}}  style={{textDecoration:"none", color:"black"}} to={`/${propss.id}`}>lire l'article</Link>
            </div>
        </div>
       </div> 
    </div>
  )
}
