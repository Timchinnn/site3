import React from "react";
import "./CartModal.css"; // импортируйте стили по желанию

const CartModal = ({ items, onClose }) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Корзина</h2>
        {items.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          <div>
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Цена: {item.price} ₽</p>
                  <p>Количество: {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Итоговая цена: {totalPrice} ₽</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
