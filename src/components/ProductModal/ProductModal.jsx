import React, { useState } from "react";
import "./ProductModal.css";

const ProductModal = ({
  product,
  onClose,
  onAdd,
  onRemove,
  productCount,
  setProductCount,
}) => {
  const [quantity, setQuantity] = useState(1); // State для количества товара

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10) || 1); // Ограничиваем ввод только числами
  };

  const handleAddToCart = () => {
    onAdd(product, quantity); // Передаем количество товара в onAdd
    setProductCount(productCount + quantity); // Обновляем счетчик в родительском компоненте
    onClose(); // Закрываем модальное окно
  };

  const handleRemoveFromCart = () => {
    onRemove(product);
    setProductCount(productCount - quantity); // Обновляем счетчик в родительском компоненте
    onClose(); // Закрываем модальное окно
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-details">
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <div className="product-price">
            Цена: {product.price} руб.
          </div>
          <div className="product-count">
            {Количество: ${productCount}} {/* Отображение количества товара */}
          </div>
          <div className="quantity-selector">
            <label htmlFor="quantity">Количество:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="buttons">
            {productCount > 0 && (
              <button className="remove-button" onClick={handleRemoveFromCart}>
                Удалить из корзины
              </button>
            )}
            <button className="add-button" onClick={handleAddToCart}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
