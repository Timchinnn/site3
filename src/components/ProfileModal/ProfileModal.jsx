import React, { useState } from "react";
import axios from "axios"; // Не забудьте установить axios, если он еще не установлен
import "./ProfileModal.css";

const ProfileModal = ({
  userData,
  onClose,
  isRegisterFormOpen,
  onRegisterComplete,
  telegramUserId,
}) => {
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
      alert("Пожалуйста, заполните все поля.");
    }
  };

  return (
    <div className="modal">
      {isRegisterFormOpen ? (
        <div className="profile-button">
          <h2>Регистрация</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Имя:
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
                Телефон:
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
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      ) : (
        <div className="profile-button">
          <h2>Профиль пользователя</h2>
          {userData ? (
            <>
              <p>Имя: {userData.name}</p>
              <p>Телефон: {userData.phone}</p>
              <p>Email: {userData.email}</p>
              <p>User ID: {telegramUserId}</p>
            </>
          ) : (
            <p>Пользователь не найден.</p>
          )}
          <button onClick={onClose}>Закрыть</button>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
