import React, { useEffect } from "react";
import "./CartModal.css"; // Путь к стилям для модального окна

const CartModal = ({ items, total, onClose }) => {
  useEffect(() => {
    if (items.length === 0) return;

    // Отключение прокрутки при монтировании компонента
    document.body.classList.add("no-scroll");
    return () => {
      // Включение прокрутки при размонтировании компонента
      document.body.classList.remove("no-scroll");
    };
  }, [items]);

  if (items.length === 0) return null; // Если корзина пуста, ничего не отображаем

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Ваша корзина</h2>
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            {/* <img src={item.photo_url} alt={item.name} /> */}
            <span>{item.name}</span>
            <span>
              {item.quantity} × {item.price} ₽
            </span>
          </div>
        ))}
        <h3>Итого: {total} ₽</h3>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default CartModal;
