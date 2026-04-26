import { createContext, useContext, useState } from "react";
import { getItem, setItem, removeItem } from "../utils/storage.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getItem("user"));

  const login = (email, password) => {
    // Simple demo login
    if (email === "admin@amazon-clone.com" && password === "Admin123!") {
      const admin = { name: "Admin", email, isAdmin: true };
      setUser(admin);
      setItem("user", admin);
      return { success: true };
    }

    const normal = { name: "User", email, isAdmin: false };
    setUser(normal);
    setItem("user", normal);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    removeItem("user");
  };

  const register = (name, email, password) => {
    const newUser = { name, email, isAdmin: false };
    setUser(newUser);
    setItem("user", newUser);
    return { success: true };
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

