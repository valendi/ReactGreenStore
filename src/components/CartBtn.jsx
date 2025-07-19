import '../styles/products.css'

import { useState } from 'react';

function CartBtn() {

    const [count, setCount] = useState(0);

  function handleClick() {
    
    setCount(count + 1);
    
    alert('Producto agregado al carrito');

  }
  
  return (
    
    <button id='cartBTN' onClick={handleClick}>Add to cart ({count})</button>
    
  );
  
}

export default CartBtn;

