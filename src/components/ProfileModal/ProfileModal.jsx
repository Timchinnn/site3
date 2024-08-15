import React from "react";
import "./ProfileModal.css";

const ProfileModal = ({
  userData,
  onClose,
  isRegisterFormOpen,
  onRegisterComplete,
  telegramUserId,
}) => {
  return (
    <div className="modal">
      {isRegisterFormOpen ? (
        <div>
          <h2>Регистрация </h2>
          {/* Здесь размещаем вашу форму регистрации */}
          <button
            className="profile-button"
            onClick={() => {
              const newUser = {
                user_id: telegramUserId,
                name: "Имя",
                phone: "Телефон",
                email: "Email",
              };
              onRegisterComplete(newUser); // Сохраняем пользователя
            }}
          >
            Зарегистрироваться
          </button>
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
          <button className="profile-button" onClick={onClose}>
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
