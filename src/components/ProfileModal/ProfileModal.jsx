import React, { useState, useEffect } from "react";
import "./ProfileModal.css";
import arrow from "./arrow.png";
import axios from "axios";
import arrowDown from "./arrowDown.png";
import { useNavigate } from "react-router-dom";
import union from "./Union.png";
import vector from "./Vector.png";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import { t } from "i18next";

const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Состояние для хранения текста инпута
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Ошибка при получении товаров:", error));
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Обновление состояния при изменении инпута
  };

  const handlePropose = async (product) => {
    try {
      const tgUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
      const response = await axios.post("/api/propose", {
        productName: product.name,
        message: inputValue,
        tgUserId,
      });
      console.log(response.data);
      setRequestSent(true); // Установка состояния, что запрос отправлен
      setIsModalOpen(false); // Закрытие модального окна
    } catch (error) {
      console.error("Ошибка при отправке предложения:", error);
    }
  };

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
                    <div className="input-container1">
                      <input
                        type="text"
                        className="input-field"
                        placeholder={t("Price")}
                        value={inputValue} // Привязка значения инпута
                        onChange={handleInputChange} // Обработчик изменения инпута
                      />
                      <div className="highlight">
                        <p>{product.quant}</p>
                        <img src={union} alt="union" />
                      </div>
                    </div>
                    <button
                      className="submit-button"
                      onClick={() => handlePropose(product)} // Отправка данных при нажатии на кнопку
                    >
                      {t("propose")}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay1">
          <div className="images-container">
            <img src={bigB} alt="bigB" className="top-left" />
            <img src={bigBContray} alt="bigBContray" className="bottom-right" />
            <div className="parent">
              <img
                className="arrow"
                src={arrow}
                alt="arrow"
                onClick={() => navigate(-1)}
              />
              {requestSent ? (
                <div className="cart-media-good">
                  <p>{t("Accept application")}</p>
                  <img src={vector} alt="vector" />
                  <button onClick={() => navigate(-1)}>OK</button>
                </div>
              ) : (
                <div className="cart-media-good">
                  <p>{t("Accept application")}</p>
                  <img src={vector} alt="vector" />
                  <button onClick={() => navigate(-1)}>OK</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
