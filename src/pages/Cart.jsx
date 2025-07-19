import '../styles/cart.css';
import { Link } from 'react-router-dom';

function Cart({ cartItems, onIncrease, onDecrease, onRemove }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Carrito</h1>
      <div className="cart-products">
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-product-item">
                <img src={item.image} alt={item.name} width={120} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>Precio: ${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => onDecrease(item.id)}>-</button>
                    <span id='itemQuant'>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.id)}>+</button>
                  </div>
                  <p>Total: ${item.price * item.quantity}</p>
                  <button className="remove-btn" onClick={() => onRemove(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-total">
          <button className="link-cart">
            <Link to="/products">Seguir comprando</Link>
          </button>
          <h2>Total de la compra: ${totalPrice}</h2>
          <button className="link-cart">Finalizar compra</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;