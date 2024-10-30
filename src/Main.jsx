import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import App from "./App";
import "./Main.css";
import bansys from "./bansys.png";
import toBuy from "./tobuy.png";
import WhyBansysPage from "./components/WhyBansysPage/WhyBansysPage";
import HowToBuyPage from "./components/HowToBuyPage/HowToBuyPage";
import GuaranteePage from "./components/GuaranteePage/GuaranteePage";
import LoyaltyProgramPage from "./components/LoyaltyProgramPage/LoyaltyProgramPage";
import SendRequestPage from "./components/SendRequestModal/SendRequestModal";
import ProfilePage from "./components/ProfileModal/ProfileModal";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import axios from "axios";
import { t } from "i18next";

function Main() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(setIsAuthenticated);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const handleShopButtonClick = () => {
    if (isAuthenticated) {
      navigate("/app");
    } else {
      openModal();
    }
  };
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "",
    city: "",
    message: "",
  });
  console.log(requestSent);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const tgUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
      const dataToSend = {
        ...formData,
        tgUserId,
      };
      const response = await axios.post("/api/send-request", dataToSend);
      console.log(response.data);
      setRequestSent(true);
      navigate("/app");
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="menu-container">
            <div className="header"></div>
            <div>
              <div className="content">
                <img src={bansys} alt="bans" />
                <p className="subtitle">Bansys - Банкоматы - Терминалы</p>
              </div>
            </div>
            <div className="footer">
              <img
                src={toBuy}
                alt="toBuy"
                className="shop-button"
                onClick={handleShopButtonClick}
              />
            </div>
            {isModalOpen && (
              <div className="modal-overlay1">
                <div className="images-container">
                  <img src={bigB} alt="bigB" className="top-left" />
                  <img
                    src={bigBContray}
                    alt="bigBContray"
                    className="bottom-right"
                  />
                  <div className="parent">
                    {" "}
                    <div className="window-reg">
                      <h1 className="application">РЕГИСТРАЦИЯ</h1>
                      <div className="input-container">
                        <p>Имя</p>
                        <input
                          name="name"
                          className="input-order-profile"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container">
                        <p>Фамилия</p>
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
                        <p>email</p>
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
                      {/* <input
                        name="message"
                        className="msg"
                        onChange={handleChange}
                      /> */}
                      <button className="send-msg" onClick={handleSubmit}>
                        Зарегистрироваться
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        }
      />
      <Route path="/app" element={<App />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/send-request" element={<SendRequestPage />} />
      <Route path="/why-bansys" element={<WhyBansysPage />} />
      <Route path="/how-to-buy" element={<HowToBuyPage />} />
      <Route path="/guarantee" element={<GuaranteePage />} />
      <Route path="/loyalty-program" element={<LoyaltyProgramPage />} />
    </Routes>
  );
}

export default Main;
