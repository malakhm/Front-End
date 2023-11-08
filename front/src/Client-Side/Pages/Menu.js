
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
  useEffect(() => {
    axios.get(`http://localhost:4000/api/products/search?query=${searchquery}`)
      .then((response) => {
        console.log('Fetched existing category data:', response.data);
        setFiltered(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(filtered)





return (
    <div>
        <Categories/>
        <div className="menu-middle-search-item">
            <span className="menu-separator-span">
                <h3>Fararij</h3>
            </span>

            <form className="menu-middle-separator-search-form"> 
                <input type="text" placeholder="search" className="menu-search-input-client"
                 onChange={(e) => setSearchQuery(e.target.value)}/>
                <Button>Search</Button>
            </form>
        </div>
       <div className="Menu-item-carousel">
      <ItemCarousel/>
      </div>
    </div>
  )
}

export default Menu

