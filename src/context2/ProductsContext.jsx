import { createContext, useContext, useEffect, useState } from "react";
import productsData from "../data/products.json";

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load static products
    setProducts(productsData);
  }, []);

  const getProductById = (id) =>
    products.find((product) => product.id === Number(id));

  return (
    <ProductsContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
