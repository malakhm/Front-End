import Home from '../src/Client-Side/Pages/Home';
import Menu from '../src/Client-Side/Pages/Menu';
import AboutUs from '../src/Client-Side/Pages/About'
import Header from './Client-Side/Components/Header';
import Footer from './Client-Side/Components/Footer';
import Inbox from '../src/Admin-Side/Pages/Inbox';
import Categoriesadmin from './Admin-Side/Pages/ViewCat';
import Login from '../src/Admin-Side/Pages/Login';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from '../src/Admin-Side/Pages/AddPro';
import AddCategory from '../src/Admin-Side/Pages/AddCat'
import Contact from './Client-Side/Pages/Contact';
import SideBar from '../src/Admin-Side/Components/SideBar';
import ViewProducts from './Admin-Side/Pages/ViewProducts';
import AddProducts from '../src/Admin-Side/Pages/AddPro';

import AdminEditCategory from "../src/Admin-Side/Pages/EditCat"
import AdminEditProduct from '../src/Admin-Side/Pages/EditPro'


import SideBarShow from './NavbarShow/SideBarShow';
import NavbarShow from './NavbarShow/NavbarShow';

import './index.css';

function App() {

  return (
   
    <>

   

  <NavbarShow>

    <Header/>
  
  </NavbarShow>
  <SideBarShow>  <SideBar/></SideBarShow>
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />

       <Route
        path="/Menu"
        element={<Menu />}
        />

      <Route
        path="/About"
        element={<AboutUs />}
        />

      <Route
        path="/Contact"
        element={<Contact />}
        />
    

      <Route
          path="/admin"
          element={<Login />}
          />

      <Route
          path="/admin/home"
          element={<Categoriesadmin />}
          />

      <Route
          path="/admin/products"
          element={<ViewProducts />}
          />

          <Route
          path="/admin/inbox"
          element={<Inbox />}
          />

      <Route
          path="/add-product"
          element={<AddProduct />}
          />

            <Route
            path="/add-category"
            element={<AddCategory/>}
            />
            <Route
            path = "/edit-category:id"
            element={<AdminEditCategory/>}
            />

      </Routes>
      <NavbarShow>
        <Footer/>
      </NavbarShow>

    </>
  );
}

export default App;


// install axious and import axious from axious
// const fetchproduct = async () => {
// var res = await axios.get(`${baseURL}/1`).then((Response) => {
// setPost(response.data);
// });
// }
