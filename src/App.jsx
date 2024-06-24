import "./App.css";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import ProductList from "./components/ProductList";
import { useEffect } from "react";
import ProductContext from "./context/products";
import ProductCreate from "./components/productCreate";

function App() {
  const { fetchProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []); //mengabil data product json saat refresh saja

  return (
    <>
      <div className="app-title">Car Store</div>
      <ProductCreate />
      <ProductList />
    </>
  );
}

export default App;
