import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/Home">Home</Link> | 
      <Link to="/Products">Products</Link> | 
      <Link to="/Cart">Cart</Link>
    </nav>
  );
}

export default NavBar;