import React from 'react'
import '../Styles/AddCat.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
function EditCat() {
  const [newName, setNewName] = useState('')
  const [newImage, setNewImage] = useState('')
  const { id } = useParams();
  // console.log('id here: ',id)
 
  const [existingCategoryNames, setExistingCategoryNames] = useState([]);

  useEffect(() => {
    // Fetching the data
    axios.get('https://abadaibeirut.onrender.com/api/categories/')
      .then((response) => {
        const categoryNames = response.data.map((category) => category.name);
        // console.log('Fetched existing category names:', categoryNames);
        setExistingCategoryNames(categoryNames);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(existingCategoryNames)

  const updateCategory = async (e) => {
    e.preventDefault();


    if (existingCategoryNames.includes(newName)) {
      alert('Category with this name already exists. Please choose a different name.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', newName);
      formData.append('image', newImage);

      await axios.patch(`https://abadaibeirut.onrender.com/api/categories/${id}`, formData);

      setNewName('');
      setNewImage(null);

      // Reset the file input by creating a new key
      const inputElement = document.getElementById('Category-image');
      inputElement.value = ''; // This clears the selected file
      inputElement.key = Date.now();
    } catch (e) {
      console.log(e);
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setNewImage(e.target.files[0]);
    }
  }


  
  return (
    <>
           
    <form className='add-cat-form' onSubmit={updateCategory}>
    {/* <div className='logo'><img src={Logo}/></div> */}
    <div className='add-input-form-container'>
        <h3>Edit Category Here</h3>

        

        <label for="Category-name">New Category Name</label>
        <input type="text" placeholder="Appetizers" id="Category-name" 
            value={newName}
            onChange={(e) => { setNewName(e.target.value) }} />

        <label htmlFor="Category-image">Category Image</label>
          <input
            type="file"
            id="Category-image"
            required
            onChange={handleImageChange}
          />
          <button className="add-cat-btn" type="submit">Add</button>
   
       </div>
    </form>
</>
  )
}

export default EditCat
