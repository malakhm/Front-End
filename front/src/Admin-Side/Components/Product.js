import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { MdDelete } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

import { Link } from "react-router-dom";


import {CiStar} from 'react-icons/ci'

import '../Styles/SinglePro.css';

const Product = (props) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [recommended, setRecommended] = useState(props.recommended)


  const handleDeleteClick = () => {
    setConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  const handleConfirmDelete = async () => {
    try {
      // Use the productId prop in the DELETE request URL
      const response = await axios.delete(`http://localhost:4000/api/products/${props.productId}`);

      if (response.status === 200) {
        // Product successfully deleted
        

        // After successful deletion, you can update the UI to remove the deleted product
        setConfirmDelete(false);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  

  var handlStarClickRemove = async (e)=>{
    
    e.preventDefault()
  
    try{
      
        await axios.patch(`http://localhost:4000/api/products/${props.productId}`,{
          recommended:true,
         
         
          
        })
        setRecommended(true)
    
        
         
  
    }
  
  
    catch(e){
        console.log(e);
  
    }
  
  }

  var handlStarClickAdd = async (e)=>{
    
    e.preventDefault()
  
    try{
      
        await axios.patch(`http://localhost:4000/api/products/${props.productId}`,{
          recommended:false,
  
          
        })
        setRecommended(false)
        
        ("from the state add recommended", recommended)
     
       

        
        
  
    }
  
  
    catch(e){
        console.log(e);
  
    }
  
  }



  return (
    <div className="admin-products-component-with-icons">
      <div className="admin-icon-for-products-all">
        <div className="admin-icon-for-products-favorite">
          {recommended?
          
          <FaStar className="admin-icon-for-products-favorite-star" onClick={handlStarClickAdd}/>
          :
          <CiStar className="admin-icon-for-products-favorite-star-empty" onClick={handlStarClickRemove}/>
          }
          
        </div>
        <div className="admin-icon-for-products">
        <Link
            to={{
              pathname: `https://abadaibeirut.netlify.app/edit-product/${props.productId}`, // Specify the target route
              state: { productId: props.productId }, // Pass categoryId as a custom prop
            }} >
        <FontAwesomeIcon icon={faPen} className="products-icon-edit-admin" />
        </Link>
          <MdDelete className="products-icon-delete-admin" onClick={handleDeleteClick} />
        </div>
      </div>

      <div className="admin-product-Cart">
        <img src={props.image} alt={props.name} />
        <p className="Home-Product-Name">{props.name}</p>
        <p className="Home-Product-Description">{props.description}</p>
        <span>Price: {props.price} $</span>

        {confirmDelete && (
          <div className="delete-confirm-dialog">
            <p>Are you sure you want to delete this product?</p>
            <button onClick={handleCancelDelete}>Cancel</button>
            <button onClick={handleConfirmDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
