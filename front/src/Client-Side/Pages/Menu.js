
import Categories from "../Components/Categories";
import Button from '../Components/MainButton'
import React from 'react'
import ItemCarousel from '../Components/Products'
import '../Styles/Menu.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

function Menu() {

  const [searchquery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState([])
  const [categoryId, setCategoryId] = useState('');
  const [categorytitle, setCategoryTitle] = useState('');
  const [productByCat, setProductByCat] = useState([])
  // useEffect(() => {
  //   axios.get(`http://localhost:4000/api/products/search?query=${searchquery}`)
  //     .then((response) => {
  //       console.log('Fetched existing category data:', response.data);
  //       setFiltered(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // console.log(filtered)


const handleName =(names)=>{
  setCategoryTitle(names)
}
  const handleCategoryId = (data) =>{
    setCategoryId(data)
  }

  useEffect(() => {
  
  
    axios.get(`http://localhost:4000/api/products/byCategoryId/${categoryId}`)
   .then((response) => {
     
     setProductByCat(response.data);
   })
   .catch((error) => {
     console.log(error);
   });
 }, [categoryId]);
//  console.log("from menu",productByCat)

return (
    <div>
        <Categories callBack={ handleCategoryId} />
        <div className="menu-middle-search-item">
            <span className="menu-separator-span">
                <h3>Items</h3>
            </span>

            <form className="menu-middle-separator-search-form"> 
                <input type="text" placeholder="search" className="menu-search-input-client"
                 onChange={(e) => setSearchQuery(e.target.value)}/>
                <Button>Search</Button>
            </form>
        </div>
       <div className="Menu-item-carousel">
      <ItemCarousel productByCat={productByCat}/>
      </div>
    </div>
  )
}

export default Menu

