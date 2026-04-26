import LoginPage from "./LoginPage.jsx";

export default function AdminLoginPage() {
  // For now, reuse LoginPage (admin logs in with admin credentials)
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Login</h2>
      <p>Use admin credentials (admin@amazon-clone.com / Admin123!).</p>
      <LoginPage />
    </div>
  );
}
