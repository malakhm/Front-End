import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Product'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen  } from '@fortawesome/free-solid-svg-icons'
import { MdDelete } from "react-icons/md";
import Appertizers from '../../Client-Side/Assets/appetizers.png'
import Button from '../../Client-Side/Components/MainButton'
import HeaderAdmin from '../Components/HeaderAdmin';
import SideBar from '../Components/SideBar';
import '../Styles/Products.css'
function ViewProducts() {
  const [existingProductData, setExistingProductData] = useState([]);

  async function fetchCategories() {
    try {
      const response = await axios.get('https://abadaibeirut.onrender.com/api/products/');
      return response.data;
    } catch (error) {
      console.error('Error fetching category data:', error);
      return [];
    }
  }




  useEffect(() => {
    async function fetchData() {
      const categories = await fetchCategories();
      setExistingProductData(categories);
    }

    fetchData();

  },[]);

    
  
  return (
    <div className='adminSideBar'>
    <SideBar/>
    <div className='admin-MOTHER-products'>
      <HeaderAdmin>Products</HeaderAdmin>
      <Link to="https://abadaibeirut.netlify.app/add-product">
        <Button className="add-product-button-admin">Add Product</Button>
      </Link>
          <div className='products-container-admin'>

      {existingProductData.map((product) => (
          
                console.log(product.image),
                <Card recommended = {product.recommended} name={product.name} description = {product.description} price = {product.price}
                image={`https://abadaibeirut.onrender.com/${product.image.split("public")[1]}`} productId={product._id} />))}
      
      </div>
    </div>
    </div>
  )
}

export default ViewProducts
