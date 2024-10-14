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

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/send-request", formData);
      console.log(response.data);
      setRequestSent(true);
      // Optionally close the modal or show a success message
    } catch (error) {
      console.error("Error sending request:", error);
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
                        placeholder="Введите текст..."
                      />
                      <div className="highlight">
                        <p>10</p>
                        <img src={union} alt="union" />
                      </div>
                    </div>

                    <button className="submit-button" onClick={openModal}>
                      сделать предложение
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="window-reg">
              <h1 className="application">ЗАЯВКА</h1>
              <div className="input-container">
                <p>Имя</p>
                <input
                  name="name"
                  className="input-order-profile"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <p>Телефон</p>
                <input
                  name="phone"
                  className="input-order-profile"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <p>Страна</p>
                <input
                  name="country"
                  className="input-order-profile"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <p>Город</p>
                <input
                  name="city"
                  className="input-order-profile"
                  onChange={handleChange}
                />
              </div>
              <input name="message" className="msg" onChange={handleChange} />
              <button className="send-msg" onClick={handleSubmit}>
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
