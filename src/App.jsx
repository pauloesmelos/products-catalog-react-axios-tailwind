import React from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';
import Product from './pages/product/Product';
import Saves from './pages/saves/Saves';
import User from './pages/user/User';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />
          <Route 
            path="/product/:id" 
            element={<Product /> }
          />
          <Route 
            path="/saves" 
            element={<Saves />}
          />  
          <Route 
            path="/cart" 
            element={<Cart />}
          />
          <Route 
            path="/account" 
            element={<User />}
          />
          <Route 
            path="*" 
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;