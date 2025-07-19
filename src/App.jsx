import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
