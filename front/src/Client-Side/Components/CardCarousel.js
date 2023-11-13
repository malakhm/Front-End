import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Cards'
import React from 'react'
import {Link } from 'react-router-dom';
import '../Styles/carousel.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Button from '../Components/MainButton'
const CardCarousel = ()=> {
  const [dataRecommended, setDataRecommended] = useState([])
 

  useEffect(() => {
  
  
    axios.get(`http://localhost:4000/api/products/bestsellers/recommend`)
   .then((response) => {
     
    setDataRecommended(response.data);

   })
   .catch((error) => {
     console.log(error);
   });
 }, []);

console.log(dataRecommended)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  

  return (  
      <>
        <div className="carousel_div">
        <Carousel
  
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          
        >

          
          {dataRecommended.map((product) => (
          <Card id = {product._id} name={product.name} description={product.description} price={product.price} image = {`http://localhost:4000/${product.image.split("public")[1]}`}><Link to='/Menu'></Card>)
          

  
          )}

          </Carousel>
        </div>
       </>

 
  )
}

export default CardCarousel