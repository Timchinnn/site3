import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import App from "./App";
import "./Main.css";
import bansys from "./bansys.png";
// import toBuy from "./tobuy.png";
import WhyBansysPage from "./components/WhyBansysPage/WhyBansysPage";
import HowToBuyPage from "./components/HowToBuyPage/HowToBuyPage";
import GuaranteePage from "./components/GuaranteePage/GuaranteePage";
import LoyaltyProgramPage from "./components/LoyaltyProgramPage/LoyaltyProgramPage";
import SendRequestPage from "./components/SendRequestModal/SendRequestModal";
import ProfilePage from "./components/ProfileModal/ProfileModal";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import axios from "axios";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  const handleShopButtonClick = async () => {
    if (isAuthenticated) {
      navigate(1);
    } else {
      const userExists = await checkUserExists(); // Проверяем существование пользователя
      console.log(userExists);
      if (userExists) {
        navigate("/app"); // Переходим в магазин
      } else {
        openModal(); // Если пользователь не существует, открываем модальное окно
      }
    }
  };

  // Функция для проверки существования пользователя по userId
  const checkUserExists = async () => {
    const tgUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id; // Получаем userId
    try {
      const response = await axios.get(`/api/users/${tgUserId}`); // Отправляем запрос на сервер
      return response.data.exists; // Предполагается, что сервер возвращает объект с полем `exists`
      // setIsAuthenticated(true); // Если пользователь существует, устанавливаем аутентификацию
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false; // Если произошла ошибка, считаем, что пользователь не существует
    }
  };
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    country: "",
    city: "",
  });
  console.log(requestSent);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Проверка на пустые поля
    if (
      !formData.name ||
      !formData.surname ||
      !formData.phone ||
      !formData.email ||
      !formData.country ||
      !formData.city
    ) {
      alert(t("Please fill in all fields")); // Сообщение об ошибке
      return; // Прекращаем выполнение функции, если есть пустые поля
    }

    try {
      const tgUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
      const dataToSend = {
        ...formData,
        tgUserId,
      };
      const response = await axios.post("/api/send-request", dataToSend);
      console.log(response.data);
      setRequestSent(true);
      // setIsAuthenticated(true);
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
            <div className="header">
              {" "}
              <button onClick={changeLanguage} className="translate-button">
                {i18n.language === "ru" ? "EN" : "RU"}
              </button>
            </div>
            <div>
              <div className="content">
                <img src={bansys} alt="bans" />
                <p className="subtitle">{t("Bansys ATM Terminal")}</p>
              </div>
            </div>
            <div className="footer">
              {/* <img
                src={toBuy}
                alt="toBuy"
                className="shop-button"
                onClick={handleShopButtonClick}
              /> */}
              <button
                className="go-shop-button"
                onClick={handleShopButtonClick}
              >
                {t("shopping")}
              </button>
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
                    <div className="window-reg-main">
                      <h1 className="application">{t("REGISTER")}</h1>
                      <div className="input-container">
                        <p>{t("Name")}</p>
                        <input
                          name="name"
                          className="input-order-profile"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container">
                        <p>{t("Surname")}</p>
                        <input
                          name="surname"
                          className="input-order-profile"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container">
                        <p>{t("Telephone")}</p>
                        <input
                          name="phone"
                          className="input-order-profile"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container">
                        <p>email</p>
                        <input
                          name="email"
                          className="input-order-profile"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container">
                        <p>{t("Country")}</p>
                        <input
                          name="country"
                          className="input-order-profile"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container">
                        <p>{t("City")}</p>
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
                      <button className="send-msg-main" onClick={handleSubmit}>
                        {t("Register")}
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
