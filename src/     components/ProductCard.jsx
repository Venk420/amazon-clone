import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        width: "220px",
        textAlign: "center"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <Link
        to={`/products/${product.id}`}
        style={{
          display: "block",
          marginBottom: "10px",
          color: "blue",
          textDecoration: "underline"
        }}
      >
        View Details
      </Link>

      <button
        onClick={() => addToCart(product)}
        style={{
          background: "#f0c14b",
          border: "1px solid #a88734",
          padding: "8px 12px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
