import '../styles/header.css'
import '../styles/cart.css'

import CartIcon from '../components/CountCart';


import { Link } from 'react-router-dom';


function Header({ cartCount }) {
  return (
    <header>
      <nav>
        <ul className='navbar'>
        <li><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
        <li><Link to="/products"><i className="fa-solid fa-list"></i></Link></li>
        <li><Link to="/cart"><i className="fa-solid fa-cart-shopping"><CartIcon cartCount={cartCount} /></i></Link></li>
      </ul>
      </nav>
  </header>
  );
}

export default Header;