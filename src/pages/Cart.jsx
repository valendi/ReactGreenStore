import '../styles/cart.css'

function Cart({ cartItems }) {

  const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

  return (
    <div>
      <div className='cart-container'>
        <h1>Carrito</h1>
        <div className='cart-products'>
          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className="cart-product-item">
                  <img src={item.image} alt={item.name} width={120} />
                  <div className='item-info'>
                    <h3>{item.name}</h3>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

      <div className="cart-total">
        <h2>Total de la compra: ${totalPrice}</h2>
      </div>
      
        </div>
      </div>
    </div>
  );
}

export default Cart;


