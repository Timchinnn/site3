import React, { useState, useEffect } from "react";
import "./ProfileModal.css";
import arrow from "./arrow.png";
import axios from "axios";
import arrowDown from "./arrowDown.png";
import { useNavigate } from "react-router-dom";
import union from "./Union.png";

const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Ошибка при получении товаров:", error));
  }, []);

  return (
    <div>
      <div className="modal-overlay">
        <div className="modal-content">
          <img
            className="arrow"
            src={arrow}
            alt="arrow"
            onClick={() => navigate(-1)}
          />
          <div className="product-names">
            {products.map((product) => (
              <div
                key={product.id}
                className={`product-name-item ${
                  activeItem === product.id ? "active" : ""
                }`}
                onClick={() => setActiveItem(product.id)}
              >
                <div className="product-main-content">
                  <p>{product.name}</p>
                  <img src={arrowDown} alt="arrowDown" />
                </div>
                {activeItem === product.id && (
                  <div className="additional-elements">
                    <div className="input-container">
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Введите текст..."
                      />
                      <div className="highlight">
                        <p>Выделить</p>
                        <img src={union} alt="union" />
                      </div>
                    </div>
                    <button>Подробнее</button>
                    <button>Добавить в корзину</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
