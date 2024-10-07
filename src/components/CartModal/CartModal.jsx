import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CartModal.css";
import arrow from "./arrow.png";

const CartModal = ({ items = [], onClose, onAdd, onRemove, onResetCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/checkout", { items });
      console.log("Order placed successfully:", response.data);
      setOrderPlaced(true);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleOk = () => {
    onResetCart(); // Сбрасываем содержимое корзины
    onClose(); // Закрываем модальное окно
    window.history.back(); // Возвращаемся на предыдущую страницу
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img className="arrow" src={arrow} alt="arrow" onClick={onClose} />

        {orderPlaced ? (
          <div className="cart-media">
            <h2>Заказ оформлен</h2>
            <button onClick={handleOk}>OK</button>
          </div>
        ) : (
          <div className="cart-media">
            <h2 className="cart-head">Корзина</h2>
            {items.length === 0 ? (
              <p>Ваша корзина пуста</p>
            ) : (
              <div>
                <ul>
                  {items.map((item) => (
                    <li key={item.id} className="cart-item">
                      <img
                        src={item.photo_url}
                        alt={item.name}
                        className="min-product-img"
                      />
                      <div>
                        <p>{item.name}</p>
                        <div className="price-controls">
                          <button
                            className="add-to-cart-min"
                            onClick={() => onRemove(item)}
                          >
                            -
                          </button>
                          <div className="product-quantity">
                            {item.quantity}
                          </div>
                          <button
                            className="add-to-cart"
                            onClick={() => onAdd(item)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {items.length > 0 && !orderPlaced && (
          <button className="checkout-button" onClick={handleCheckout}>
            Оформить заказ
          </button>
        )}
      </div>
    </div>
  );
};

export default CartModal;
