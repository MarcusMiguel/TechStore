import React, { useState, useEffect, FC } from 'react';
// import { commerce } from './lib/commerce';
// import { Cart } from '@chec/commerce.js/types/cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import axios from "axios";
import { useAppDispatch } from './redux/hooks/hooks';
import { setProducts } from './redux/slices/productsSlice';

import { Navbar, ProductList, Cart } from './components';
import { Home, CartPage, Success, SignIn, SignUp } from './pages';
import { setCart } from './redux/slices/cartSlice';
import Login from './pages/SignIn/SignIn';

const App: FC = () => {

  const dispatch = useAppDispatch();

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/product"
      );
      dispatch(setProducts(res.data));
    } catch (err) { }
  }

  const fetchCart = async () => {
    // dispatch(setCart({ products: [], total: 0 }));
  }

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, [])

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
};

export default App;
