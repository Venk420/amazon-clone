import { Link } from "react-router-dom";
import { useProducts } from "../context2/productsContext.jsx";

export default function AdminProductsPage() {
  const { products } = useProducts();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Products</h2>
      <Link to="/admin/products/new" style={{ display: "inline-block", marginBottom: "10px" }}>
        Add New Product
      </Link>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}{" "}
            <Link to={`/admin/products/${p.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
