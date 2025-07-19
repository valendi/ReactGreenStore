import { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

import './App.css'


function AppRoutes({ cartItems, handleAddToCart }) {
  const location = useLocation();

  const showHeader = location.pathname !== '/';

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {showHeader && <Header cartCount={totalCount} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    alert('Artículo agregado al carrito');
  };

  return (
    <Router>
      <AppRoutes cartItems={cartItems} handleAddToCart={handleAddToCart} />
    </Router>
  );
}

export default App;