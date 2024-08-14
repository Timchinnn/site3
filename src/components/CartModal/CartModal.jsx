import React from "react";
import PropTypes from "prop-types";
import "./CartModal.css"; // Импортируйте стили для модального окна, если нужно

const CartModal = ({ items, onClose }) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <h2>Корзина</h2>
        {items.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.quantity} x {item.price} руб.
                </li>
              ))}
            </ul>
            <h3>Итого: {totalPrice} руб.</h3>
          </>
        )}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

CartModal.propTypes = {
  items: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartModal;
