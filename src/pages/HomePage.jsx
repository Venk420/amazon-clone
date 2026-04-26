import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Amazon Clone</h1>
      <p>Browse products, add to cart, and simulate checkout.</p>
      <Link to="/products" style={{ color: "blue", textDecoration: "underline" }}>
        Go to Products
      </Link>
    </div>
  );
}
