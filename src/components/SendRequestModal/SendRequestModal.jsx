import React, { useState } from "react";
import axios from "axios";
import "./SendRequestModal.css";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import arrow from "./arrow.png";
import { useNavigate } from "react-router-dom";
import vector from "./Vector.png";

const SendRequestModal = ({ onClose }) => {
  const navigate = useNavigate();
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
            <div className="cart-media-good1">
              <p>Заявка принята</p>
              <img src={vector} alt="vector" />
              <button onClick={() => navigate(-1)}>OK</button>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SendRequestModal;
