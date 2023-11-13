import React from 'react'
import appetizers from '../Assets/appetizers.png'
import '../Styles/Category.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
function Category(prop) {


    
    let print = async (e)=>{
    
      e.preventDefault()
    
      try{
        
          await axios.get(`https://abadaibeirut.onrender.com/api/categories/${prop.id}`);
          prop.handleCategoryId(prop.id)
          
     
    
      }
    
    
      catch(e){
          console.log(e, "error");
    
      }
    
    }
    
  return (
  
    <button class="flex-item" onClick={print}>
        <img className='categoryimage' alt='alt: appetizers image' src={prop.image}/>
        <p>{prop.name}</p>
    </button>
  )
}

export default Category