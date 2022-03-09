import React, { useState, useEffect, FC } from 'react';
import { commerce } from './lib/commerce';
import { Product } from '@chec/commerce.js/types/product';
import { Cart } from '@chec/commerce.js/types/cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Products, CartComponent } from './components';
import GlobalStyle from './globalStyles';

const App: FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart>();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
    console.log(products)
  }, [])

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleItemUpdate = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  return (
    <Router>
      <div>
        <GlobalStyle />
        <Navbar totalItems={cart?.total_items} />
        <Routes>
          <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartComponent cart={cart} emptyCart={handleEmptyCart} updateItem={handleItemUpdate} />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;
