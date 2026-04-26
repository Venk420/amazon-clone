import { Link } from "react-router-dom";

export default function AdminDashboardPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <ul>
        <li>
          <Link to="/admin/products">Manage Products</Link>
        </li>
        <li>
          <Link to="/orders">View Orders (placeholder)</Link>
        </li>
      </ul>
    </div>
  );
}
