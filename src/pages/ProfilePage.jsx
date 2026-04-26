import { useAuth } from "../context2/AuthContext.jsx";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.isAdmin ? "Admin" : "Customer"}</p>
    </div>
  );
}
