import { useParams } from "react-router-dom";
import { useProducts } from "../context2/productsContext.jsx";

export default function AdminEditProductPage() {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const product = getProductById(id);

  if (!product) {
    return <p style={{ padding: "20px" }}>Product not found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Product</h2>
      <p>
        Editing: <strong>{product.name}</strong>
      </p>
      <p>
        This is a placeholder. In a real app, this would be a form to update product details.
      </p>
    </div>
  );
}
