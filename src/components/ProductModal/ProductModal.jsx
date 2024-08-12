import React from "react";
import "./ProductModal.css"; // Создайте файл стилей для модального окна

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{product.name}</h2>
        <img
          className="modal-image"
          src={product.photo_url}
          alt={product.name}
        />
        <p className="modal-description">{product.description}</p>
        <button className="modal-close-button" onClick={onClose}>
          <span className="icon">×</span>
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
