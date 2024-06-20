import './App.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductList from './components/ProductList';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCreate from './components/productCreate';
import { fetchProductsApi,editProductsApi,createProductsApi,deleteProductsApi } from './api/productsApi';

function App() {
  const [products,setProducts] = useState([]);
  const fetchProducts = async() => {
    const response = await fetchProductsApi()
    setProducts(response.data)
  }
  useEffect(() => {
    fetchProducts()
  },[])//mengabil data product json saat refresh saja

  const onEditProduct = async(id,data) => {
    const response = await editProductsApi(id,data)
    const updatedProduct = products.map((prod) => {
      if (prod.id === id){
        return {...prod, ...response.data};
      }
      return prod;
    })
    setProducts(updatedProduct);
  };
  
  const onCreateProducts =  async (product) => {
    const response =  await createProductsApi(product)

    setProducts([
      ...products,response.data
    ]);
  };

  const onDeleteProducts = async(id) => {
    await deleteProductsApi(id)
    //filter
    const updatedProduct = products.filter((product) => {
      return product.id !== id //return id yg tidak sama dengan Id
    })
    setProducts(updatedProduct)
  }

  return (
    <>
    <div className='app-title'>Car Store</div>
    <ProductCreate ProductCreate={onCreateProducts}/>
    <ProductList productsList={products} 
    onDeleteProducts = {onDeleteProducts} onEditProduct={onEditProduct}/>
    </>
  )
}

export default App;
