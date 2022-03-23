import React, { useState, useEffect, FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import axios from "axios";
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';
import { fetchProducts, setProducts } from './redux/slices/productsSlice';
import { useNavigate, Navigate } from 'react-router-dom';

import { Navbar, ProductList, Cart } from './components';
import { Home, CartPage, Success, SignIn, SignUp } from './pages';
import { fetchCart, setCart } from './redux/slices/cartSlice';

const App: FC = () => {

  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log(currentUser)
    currentUser && dispatch(fetchCart({ currentUser }));
    fetchProducts();
  }, [currentUser])

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={currentUser ? <Home /> : <Navigate to="signin" />} />
        <Route path="/cart" element={currentUser ? <CartPage /> : <Navigate to="signin" />} />
        <Route path="/success" element={currentUser ? <Success /> : <Navigate to="signin" />} />
        <Route path="/signin" element={currentUser ? <Navigate to="/" /> : <SignIn />} />
        <Route path="/signup" element={currentUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </Router>
  )
};

export default App;
