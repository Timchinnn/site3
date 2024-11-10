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

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Ошибка при получении товаров:", error));
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  const [requestSent] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   country: "",
  //   city: "",
  //   message: "",
  //   tgLink: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const tgLink = window.Telegram?.WebApp?.initDataUnsafe?.user?.username
  //       ? `https://t.me/${window.Telegram.WebApp.initDataUnsafe.user.username}`
  //       : null;

  //     setFormData((prevData) => ({ ...prevData, tgLink }));

  //     const response = await axios.post("/api/send-request", {
  //       ...formData,
  //       tgLink,
  //     });
  //     console.log(response.data);
  //     setRequestSent(true);
  //   } catch (error) {
  //     console.error("Error sending request:", error);
  //   }
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
                      />
                      <div className="highlight">
                        <p>{product.quant}</p>
                        <img src={union} alt="union" />
                      </div>
                    </div>

                    <button className="submit-button" onClick={openModal}>
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
