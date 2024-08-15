import React from "react";

const ProfileModal = ({
  userData,
  onClose,
  isRegisterFormOpen,
  onRegisterComplete,
}) => {
  return (
    <div className="modal">
      {isRegisterFormOpen ? (
        // Здесь можно разместить вашу форму регистрации
        <div>
          <h2>Регистрация</h2>
          {/* Форма регистрации */}
          <button
            onClick={() => {
              // Здесь должно быть завершение регистрации и отправка данных на сервер
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
          <button onClick={onClose}>Закрыть</button>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
