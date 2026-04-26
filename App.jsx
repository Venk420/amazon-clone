import Header from "./components/Header.jsx";
import AppRoutes from "./routes.jsx";
import "./styles/layout.module.css";

export default function App() {
  return (
    <div data-testid="app-root">
      <Header />
      <main data-testid="main-content">
        <AppRoutes />
      </main>
    </div>
  );
}
