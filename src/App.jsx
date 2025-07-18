import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
