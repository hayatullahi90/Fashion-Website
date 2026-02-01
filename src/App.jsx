import { useState } from 'react'
import Nav from './Components/Nav'
import {Routes, Route} from "react-router-dom";
import Shop from './Pages/Shop';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Modest from './Pages/Modest';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Components/ShopCategory/ShopCategory';
import men_banner from "./assets/men_banner.jpg"
import women_banner from "./assets/women_banner.jpg"
import kids_banner from "./assets/kids_banner.jpg"
import modest_banner from "./assets/modest_banner.jpg"

function App() {
  
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
        <Route path="/modest" element={<ShopCategory banner={modest_banner} category="modest"/>} />
        <Route path="/product" element={<Product />}>
         <Route path=":productId" element={<Product/>}/>
       </Route>
       <Route path="/cart" element={<Cart/>} />
       <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
