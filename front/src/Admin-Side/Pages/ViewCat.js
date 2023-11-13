import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Category from '../Components/Category';
import Button from '../../Client-Side/Components/MainButton';
import HeaderAdmin from '../Components/HeaderAdmin';
import SideBar from '../Components/SideBar';
import '../Styles/Categories.css';

async function fetchCategories() {
  try {
    const response = await axios.get('https://abadaibeirut.onrender.com/api/categories/');
    return response.data;
  } catch (error) {
    console.error('Error fetching category data:', error);
    return [];
  }
}

function CategoriesAdmin() {
  const [existingCategoryData, setExistingCategoryData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await fetchCategories();
      setExistingCategoryData(categories);
    }

    fetchData();

  }, []);


  return (
    <div className='adminSideBar'>
    <SideBar/>
    <div className="admin-MOTHER">
      <HeaderAdmin>Categories</HeaderAdmin>
      <Link to="/add-category">
      <Button>Add Category</Button>

      </Link>
      <div className="categories-container-admin">
        {existingCategoryData.map((category) => (
          <Category key={category._id} name={category.name} image={`https://abadaibeirut.onrender.com/${category.image.split("public")[1]}`} categoryId={category._id} />
        ))}
      </div>
</div>
    </div>
  );
}

export default CategoriesAdmin;
