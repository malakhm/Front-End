import React from 'react'
import '../Styles/Category.css'
import axios from 'axios'


function Category(prop) {


    
    let print = async (e)=>{
    
      e.preventDefault()
    
      try{
        
          await axios.get(`https://abadaibeirut.onrender.com/api/categories/${prop.categoryId}`);
          prop.handleCategoryId(prop.categoryId)
          
     
    
      }
    
    
      catch(e){
          console.log(e, "error");
    
      }
    
    }
    
  return (
  
    <button class="flex-item" onClick={()=>print}>
        <img className='categoryimage' alt='alt: appetizers image' src={prop.image}/>
        <p>{prop.name}</p>
    </button>
  )
}

export default Category