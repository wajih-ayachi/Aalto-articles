import React from 'react'
import './Article.css'
import {Link} from 'react-router-dom';

export default function Article({info:{title, description ,date,image, categories },id}) {
  return (
    <div className='col-sm-12 col-md-4 col-lg-4 article ' key={id}>
      <div className='container'>
     
      <div className='row  mt-3'>
          <div className='col-6'>
            <p>{categories.data[0].attributes.name}</p>
          </div>
          <div className='col-6'>
            <p>{date}</p>
          </div>
      </div>
      <div className='row mt-3 x'>
         <img className='imgg' alt={`image${id}`} src={image.data.attributes.name}/>
      </div>
      <div className='row  mt-3'>
        <h2>{title}</h2>
      </div>
      <div className='row  mt-3'>
        <p>{description.slice(0,120).concat(" ...")}</p>
      </div>
      <div className='row mt-3 mb-3'>
        <div className='col-4'></div>
        <Link  style={{textDecoration:"none", color:"black"}} state={{description:description , title:title, categories:categories , date:date , image:image}} className='col-4' to={`/${id}`}>lire l'article</Link>
        <div className='col-4'></div>
      </div>
    </div>
    </div>
  )
}
