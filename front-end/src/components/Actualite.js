import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Articles from './Articles'
import FirstArticle from './FirstArticle';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Actualite() {
  const [article , setArticle] = useState([]);
  const [first , setFirst] = useState({});
  const [loading , setLoading] =useState(true);
  
  // useEffect(async ()=>{
  //    await axios.get("http://localhost:1337/api/articles?populate=*").then((res)=>{
  //       setArticle(res.data.data);
  //     }).then(err=>console.log('erreur : ' , err))
  // },[])
  useEffect(() => {
    const fetchData = async () => {

      try {
        const result = await axios("http://localhost:1337/api/articles?populate=*");
        setFirst(result.data.data[0]);
        result.data.data.shift();
        setArticle(result.data.data);
        setLoading(false);
      } catch (error) {
        console.log("error",error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container-fluid '>
      {
        loading ?console.log("loading ...") : (
          <div>
            <Navbar/>
        {console.log(article)}
        {console.log("first : ",first)}
        <FirstArticle propss={first}/>
        <Articles props={article}/> 
        <Footer/>
          </div>
        ) 
      }
        
    </div>
  )
}
