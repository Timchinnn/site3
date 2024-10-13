import React, { useState, useEffect } from "react";
import "./ProfileModal.css";
import arrow from "./arrow.png";
// import b from "./B.png";
// import book from "./book.png";
// import { useNavigate } from "react-router-dom";
import axios from "axios"; // Добавьте импорт axiosimport
import arrowDown from "./arrowDown.png";
import { useNavigate } from "react-router-dom";

const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [products, setProducts] = useState([]); // Добавьте состояние для хранения товаров
  // const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Загрузка товаров при монтировании компонента
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Ошибка при получении товаров:", error));
  }, []);

  // const handleButtonClick = () => {
  //   setIsModalVisible(true);
  // };

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
          {/* ... (остальной код остается без изменений) ... */}

          {/* Добавьте новый блок для отображения названий товаров */}
          <div className="product-names">
            {products.map((product) => (
              <div
                key={product.id}
                className={`product-name-item ${
                  activeItem === product.id ? "active" : ""
                }`}
                onClick={() => setActiveItem(product.id)}
              >
                <p>{product.name}</p>
                <img src={arrowDown} alt="arrowDown" />
                {activeItem === product.id && (
                  <div className="additional-elements">
                    {/* Добавьте здесь новые элементы */}
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
