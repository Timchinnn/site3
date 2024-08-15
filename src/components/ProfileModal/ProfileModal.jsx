import React, { useState } from "react";
import "./ProfileModal.css";

const ProfileModal = ({
  userData,
  onClose,
  isRegisterFormOpen,
  telegramUserId,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    // Пакуем данные
    const newUser = {
      user_id: telegramUserId,
      name,
      phone,
      email,
    };

    // Сначала нужно получить текущие данные пользователя
    fetch(`http://217.18.62.19:3000/api/users?user_id=${telegramUserId}`)
      .then((response) => response.json())
      .then((data) => {
        // Предполагая, что API возвращает массив
        const userProfile = data.find(
          (user) => user.user_id === telegramUserId
        );

        if (userProfile) {
          // Если пользователь найден, обновляем его данные
          return fetch(`http://217.18.62.19:3000/api/users/${userProfile.id}`, {
            // Предполагая, что у вас есть идентификатор для обновления
            method: "PUT", // Используйте PUT для обновления данных
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          });
        } else {
          // Если не нашли, то создаем нового пользователя
          return fetch(`http://217.18.62.19:3000/api/users`, {
            method: "POST", // Используем метод POST для создания нового пользователя
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          });
        }
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Ошибка при обновлении данных пользователя");
      })
      .then((data) => {
        console.log("Данные пользователя успешно обновлены:", data);
        onRegisterComplete(data); // Вызов функции для обработки успешной регистрации
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="modal">
      {isRegisterFormOpen ? (
        <div>
          <h2>Регистрация</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button onClick={handleRegister}>Зарегистрироваться</button>
        </div>
      ) : (
        <div>
          <h2>Профиль пользователя</h2>
          {userData ? (
            <>
              <p>Имя: {userData.name}</p>
              <p>Телефон: {userData.phone}</p>
              <p>Email: {userData.email}</p>
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
