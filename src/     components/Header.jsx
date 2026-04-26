import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Header() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <header style={{ padding: "15px", background: "#232f3e", color: "white" }}>
      <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
          Amazon Clone
        </Link>

        <Link to="/products" style={{ color: "white" }}>Products</Link>
        <Link to="/wishlist" style={{ color: "white" }}>Wishlist</Link>

        <Link to="/cart" style={{ color: "white" }}>
          Cart ({cartCount})
        </Link>

        {user ? (
          <>
            <Link to="/profile" style={{ color: "white" }}>
              Hi, {user.name}
            </Link>

            {user.isAdmin && (
              <Link to="/admin" style={{ color: "white" }}>
                Admin
              </Link>
            )}

            <button
              onClick={logout}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "white" }}>Login</Link>
            <Link to="/register" style={{ color: "white" }}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
