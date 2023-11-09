import React from 'react'
import '../Styles/AddPro.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
export default function EditPro() {

    const { id } = useParams();


    const [existingCategoryNames, setExistingCategoryNames] = useState([]);
    const [existingProductNames, setExistingProductNames] = useState([]);
    const [newName, setNewProductName] = useState('');
    const [newDescription, setNewProductDescription] = useState('');
    const [newPrice, setNewProductPrice] = useState(0);
    const [newImage, setNewProductImage] = useState(null);
    const [newSelectedCategory, setNewSelectedCategory] = useState(''); // State to store selected category ID
    const [categoryId, setCategoryId] = useState(''); // State to store the corresponding categoryId


    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:4000/api/products/');
            const products = response.data;
            console.log('Fetched existing products:', products);
            setExistingProductNames(products);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, []);
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:4000/api/categories/');
            const categories = response.data;
            console.log('Fetched existing categories:', categories);
            setExistingCategoryNames(categories);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, []);
    
      // Set the category ID when a category is selected
      useEffect(() => {
        setCategoryId(newSelectedCategory);
      }, [newSelectedCategory]);
    
      const updateProduct = async (e) => {
        e.preventDefault();
    
        if (existingProductNames.some((product) => product.name === newName)) {
          alert('Product with this name already exists. Please choose a different name.');
          return;
        }
    
        try {
          const formData = new FormData();
          formData.append('name', newName);
          formData.append('description', newDescription);
          formData.append('price', newPrice);
          formData.append('image', newImage);
          formData.append('categoryId', categoryId);
    
          const response = await axios.patch(`http://localhost:4000/api/products/${id}`, formData);
    
          if (response.status === 200) {
            setNewProductName('');
            setNewProductDescription('');
            setNewProductPrice(0);
            setNewProductImage(null);
            setNewSelectedCategory('');
    
            const inputElement = document.getElementById('Product-image');
            inputElement.value = ''; // This clears the selected file
            inputElement.key = Date.now();
          }
        } catch (error) {
          console.error(error);
        }
      }
    
      const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
          setNewProductImage(e.target.files[0]);
        }
      }



    return (
        <>
          <form className="add-pro-form" onSubmit={updateProduct}>
            <div className="add-input-form-container-pro">
              <h3 className="addProTitle">Add a Product Here</h3>
    
              <label htmlFor="Product-name">Product Name</label>
              <input
                type="text"
                id="Product-name"
                placeholder="Hummus"
                value={newName}
                onChange={(e) => setNewProductName(e.target.value)}
                required // Make it required
              />
    
              <label htmlFor="Product-description">Product Description</label>
              <textarea
                id="Product-description"
                placeholder="Hummus"
                value={newDescription}
                onChange={(e) => setNewProductDescription(e.target.value)}
                required // Make it required
              ></textarea>
    
              <label htmlFor="Product-price">Product Price</label>
              <input
                type="number"
                id="Product-price"
                placeholder="2$"
                value={newPrice}
                onChange={(e) => setNewProductPrice(e.target.value)}
                required // Make it required
              />
    
              <label htmlFor="Product-image">Product Image</label>
              <input
                type="file"
                id="Product-image"
                required
                onChange={handleImageChange}
              />
    
              <label htmlFor="CategoryDropDown">Select a Category</label>
              <select
                id="CategoryDropDown"
                value={newSelectedCategory}
                onChange={(e) => setNewSelectedCategory(e.target.value)}
                required // Make it required
              >
                <option value="">Select a category</option>
                {existingCategoryNames.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
    
              <button className="add-pro-btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </>
      );
    }

 