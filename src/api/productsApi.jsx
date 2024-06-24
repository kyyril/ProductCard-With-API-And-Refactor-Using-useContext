import axios from "axios";

export const fetchProductsApi = async () => {
  const r = axios.get("http://localhost:3005/product");
  return r;
};

export const editProductsApi = async (id, data) => {
  const r = axios.put(`http://localhost:3005/product/${id}`, data);
  return r;
};

export const createProductsApi = async (product) => {
  const r = axios.post("http://localhost:3005/product", product);
  return r;
};

export const deleteProductsApi = async (id) => {
  const r = axios.delete(`http://localhost:3005/product/${id}`);
  return r;
};
