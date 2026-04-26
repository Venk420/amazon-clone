import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      <p>Review your order before payment.</p>
      <h3>Items:</h3>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} (x{item.quantity}) - ${item.price * item.quantity}
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <Link to="/payment" style={{ color: "blue" }}>
        Continue to Payment
      </Link>
    </div>
  );
}
