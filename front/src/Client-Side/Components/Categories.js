import '../Styles/Categories.css'
import Category from '../Components/Category.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Categories = (prop) => {

  const [existingCategoryData, setExistingCategoryData] = useState([]);
  const [catId, setCatId] = useState('');

  // callback function tio get category id
  const handleCategoryId = (id)=>{
    setCatId(id)
  }
  // console.log("from catgories:",catId)
  useEffect(() => {
    axios.get('https://abadaibeirut.onrender.com/api/categories/')
      .then((response) => {
        
        setExistingCategoryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  prop.callBack(catId)
  
  return (
    <div className='MOTHER'>
      <h1 className='Categories-title'>Our <span>Categories</span></h1>
      <div className="flex-container">
        {existingCategoryData.map((category) => (
          <Category handleCategoryId={handleCategoryId} categoryId={category._id} name={category.name} image = {`https://abadaibeirut.onrender.com/${category.image.split("public")[1]}`}/>
        ))}
      </div>
    </div>
  );
  }
            

export default Categories;