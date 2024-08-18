import React from "react";
import "./Product.css";

const Product = ({ product, quantity, onAdd, onRemove, openModal }) => {
  return (
    <div
      className={`product-card ${quantity > 0 ? "highlight" : ""}`}
      onClick={() => openModal(product)}
    >
      <div className="product-image">
        <img src={product.photo_url} alt={product.name} />
        {quantity > 0 && <div className="quantity-overlay">{quantity}</div>}
      </div>
      <div className="product-title">{product.name}</div>
      <p>{product.description}₽</p>
      <div className="product-price-add">
        {quantity >= 1 && (
          <button
            className="add-to-cart-min"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(product);
            }}
          >
            -
          </button>
        )}
        <div className="product-price">Купить</div>
        {/* <div className="product-price">{product.description}₽</div> */}
        <button
          className="add-to-cart"
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
