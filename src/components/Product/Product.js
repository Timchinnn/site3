import React, { useState } from "react";
import "./Product.css";

const Product = ({ product, quantity, onAdd, onRemove, openModal }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCartClick = () => {
    setIsInCart(true);
  };

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
      <div className="product-price-add">
        {!isInCart ? (
          <button className="add-to-cart" onClick={handleAddToCartClick}>
            В корзину
          </button>
        ) : (
          <div className="cart-controls">
            {quantity > 0 && (
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
            <span className="product-quantity">{quantity}</span>
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
        )}
      </div>
    </div>
  );
};

export default Product;
