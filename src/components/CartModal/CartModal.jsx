import React, { useEffect } from "react";
import "./CartModal.css"; // Импортируем стили

const CartModal = ({ items, total, onClose }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  if (!items.length) return null; // Если корзина пуста, ничего не отображаем

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-button" onClick={onClose}>
          <span className="icon">×</span>
        </button>
        <div className="modal-inner-content">
          <h2>Ваша корзина</h2>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>
                {item.quantity} × {item.price} ₽
              </span>
            </div>
          ))}
          <h3>Итого: {total ? total : "0"} ₽</h3>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
