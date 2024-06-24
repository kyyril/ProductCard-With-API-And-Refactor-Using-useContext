import { createContext, useState } from "react";
import axios from "axios";
import {
  fetchProductsApi,
  editProductsApi,
  createProductsApi,
  deleteProductsApi,
} from "../api/productsApi";

const ProductContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetchProductsApi();
    setProducts(response.data);
  };

  const onEditProduct = async (id, data) => {
    const response = await editProductsApi(id, data);
    const updatedProduct = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...response.data };
      }
      return prod;
    });
    setProducts(updatedProduct);
  };

  const onCreateProducts = async (product) => {
    const response = await createProductsApi(product);

    setProducts([...products, response.data]);
  };

  const onDeleteProducts = async (id) => {
    await deleteProductsApi(id);
    //filter
    const updatedProduct = products.filter((product) => {
      return product.id !== id; //return id yg tidak sama dengan Id
    });
    setProducts(updatedProduct);
  };

  const valueToShare = {
    products,
    onEditProduct,
    onCreateProducts,
    onDeleteProducts,
    fetchProducts,
  };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;
