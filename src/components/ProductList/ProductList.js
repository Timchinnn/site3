import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = ({ products, addedItems, onAdd, onRemove, openModal }) => {
  return (
    <div className="products">
      {products.map((product) => {
        const addedItem = addedItems.find((item) => item.id === product.id);
        const quantity = addedItem ? addedItem.quantity : 0;
        return (
          <Product
            key={product.id}
            product={product}
            quantity={quantity}
            onAdd={onAdd}
            onRemove={onRemove}
            openModal={openModal}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
