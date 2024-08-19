import React, { useEffect } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose, onAdd, onRemove, quantity }) => {
  useEffect(() => {
    if (!product) return;

    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [product]);

  if (!product) return null;
  console.log(quantity);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <span className="icon">×</span>
        </button>
        <div className="modal-inner-content">
          <h2 className="modal-title">{product.name}</h2>
          <img
            className="modal-image"
            src={product.photo_url}
            alt={product.name}
          />
          <p className="modal-description">{product.description}</p>
          <div className="product-price-add">
            {quantity > 0 ? (
              <div className="price-controls">
                <button
                  className="add-to-cart-min"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(product);
                  }}
                >
                  -
                </button>
                <div className="product-quantity">{quantity}</div>
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
            ) : (
              <button
                className="add-to-cart"
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd(product);
                }}
              >
                Купить
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
