
function CartIcon({ cartCount }) {

  return (
    <>
    
    {cartCount > 0 && (
        <span className="cart-count">{cartCount}</span>
      )}

    </>
  );
}

export default CartIcon;

