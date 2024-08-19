import React, { useState } from "react";
import axios from "axios"; // Не забудьте установить axios, если он еще не установлен
import "./ProfileModal.css";
import { useTranslation } from "react-i18next";
// import ".";
import "./i18n";

const ProfileModal = ({
  userData,
  onClose,
  isRegisterFormOpen,
  onRegisterComplete,
  telegramUserId,
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateUser = async (updatedUser) => {
    try {
      const response = await axios.post("/api/users", updatedUser);
      console.log("Пользователь обновлен:", response.data);
      onRegisterComplete(response.data); // Обновляем состояние пользователя в родительском компоненте
      onClose(); // Закрываем модальное окно после успешного обновления
    } catch (error) {
      console.error("Ошибка при обновлении пользователя:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email) {
      const newUser = {
        user_id: telegramUserId,
        ...formData,
      };
      updateUser(newUser);
    } else {
      alert(t("please_fill_all"));
    }
  };

  return (
    <div className="modal">
      {isRegisterFormOpen ? (
        <div className="profile-button">
          <h2>{t("registration")}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                {t("name")}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                {t("phone")}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                {t("email")}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">{t("register")}</button>
          </form>
        </div>
      ) : (
        <div className="profile-button">
          <h2>{t("profile")}</h2>
          {userData ? (
            <>
              <p>
                {t("name")} {userData.name}
              </p>
              <p>
                {t("phone")} {userData.phone}
              </p>
              <p>
                {t("email")} {userData.email}
              </p>
              <p>User ID: {telegramUserId}</p>
            </>
          ) : (
            <p>{t("user_not_found")}</p>
          )}
          <button onClick={onClose}>{t("close")}</button>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
