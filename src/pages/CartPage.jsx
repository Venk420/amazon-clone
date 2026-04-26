import { useCart } from "../context2/CartContext.jsx";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Your Cart is Empty</h2>
        <Link to="/products" style={{ color: "blue" }}>
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <span>
            {item.name} (x{item.quantity})
          </span>
          <span>${item.price * item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={clearCart} style={{ marginRight: "10px" }}>
        Clear Cart
      </button>
      <Link to="/checkout" style={{ color: "blue" }}>
        Proceed to Checkout
      </Link>
    </div>
  );
}
