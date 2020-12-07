import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

const ProductsList = () => {
  return (
    <div className="productlist">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsList;
