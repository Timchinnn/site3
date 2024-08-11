import React from "react";
import "./ProductModal.css"; // Создайте файл стилей для модального окна

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <img src={product.photo_url} alt={product.name} />
        <p>{product.description}</p>
        <button class="button" onClick={onClose}>
          <span class="icon">×</span>
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
