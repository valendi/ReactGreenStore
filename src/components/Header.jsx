import { Link } from 'react-router-dom';


function Header() {
  return <header>
      <nav>
        <ul className='navbar'>
        <li><Link to="/"><i class="fa-solid fa-house"></i></Link></li>
        <li><Link to="/products"><i class="fa-solid fa-list"></i></Link></li>
        <li><Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
      </ul>
      </nav>
  </header>;
}

export default Header;