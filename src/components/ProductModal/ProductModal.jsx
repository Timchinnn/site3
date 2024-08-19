import React, { useState } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose, onAdd, onRemove, quantity }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setCurrentQuantity(newQuantity);
  };

  const handleAdd = () => {
    onAdd(product, currentQuantity);
    onClose();
  };

  const handleRemove = () => {
    onRemove(product);
    setCurrentQuantity(0); // Обновляем количество в модальном окне после удаления из корзины
  };

  return (
    <div className="product-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <div className="price-container">
          <span className="price">{product.price} ₽</span>
          <span className="discount">{product.discount}</span>
        </div>
        {quantity > 0 && (
          <div className="quantity-control">
            <button onClick={handleRemove} className="remove-button">
              {/*  */}
              Удалить из корзины
              {/*  */}
            </button>
            <input
              type="number"
              min="1"
              value={currentQuantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
          </div>
        )}
        {quantity === 0 && (
          <button onClick={handleAdd} className="add-button">
            {/*  */}
            Купить
            {/*  */}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
