import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();

  const product = getProductById(id);

  if (!product) {
    return <p style={{ padding: "20px" }}>Product not found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "250px", height: "250px", objectFit: "cover" }}
      />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
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
