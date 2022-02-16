import React from 'react';
import Article from './Article'
export default function Articles({props}) {
   

  return (
    <div className='row'>
     
      
        {props.map(e=>(
          <>
          {
            e.id !== 1 ? (<Article info={e.attributes} id={e.id} />) : console.log("")
          }
          
          </>
        ))}
    </div>
  )
}
