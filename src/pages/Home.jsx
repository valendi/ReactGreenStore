import { Link } from 'react-router-dom';

import '../styles/home.css'

function Home() {
  return (
    <div className='home-container'>
      <h1>Leaf Cloud</h1>
      <p>¡Welcome to our green paradise! A place where you will find the piece of life that your home needs to feel like heaven.</p>
      <p>Explore our store and fall in love with nature!</p>

  <Link to="/Products">
      <GetStartedBtn />
      </Link>
      
    </div>
  );
}

export function GetStartedBtn() {
  return <button id='getStartedBtn'>See products</button>;
}

export default Home;