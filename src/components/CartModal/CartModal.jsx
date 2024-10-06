import React, { useEffect } from "react";
import axios from "axios";
import "./CartModal.css";
import arrow from "./arrow.png";

const CartModal = ({ items = [], onClose, onAdd, onRemove }) => {
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
      // Optionally close the modal or show a success message
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img className="arrow" src={arrow} alt="arrow" onClick={onClose} />
        <h2 className="cart-head">Корзина</h2>
        <div>
          {items.length === 0 ? (
            <p>Ваша корзина пуста</p>
          ) : (
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
                      <div className="product-quantity">{item.quantity}</div>
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
          )}
          {items.length > 0 && (
            <button className="checkout-button" onClick={handleCheckout}>
              Оформить заказ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
