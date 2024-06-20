/* eslint-disable no-unused-vars */
import React from 'react'
import ProductCard from './ProductCard';

const ProductList = ({productsList,onDeleteProducts,onEditProduct}) => {
  return (
    <div className='cards'>
    {productsList.map(product => {
      return <ProductCard
      key={product.id}
      product = {product}
      onDeleteProducts = {onDeleteProducts}
      onEditProduct = {onEditProduct}
      />
    })}
  </div>
  )
}

export default ProductList