import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // передаем i18n в react-i18next
  .init({
    resources: {
      en: {
        translation: {
          registration: "Registration",
          name: "Name:",
          phone: "Phone:",
          email: "Email:",
          register: "Register",
          profile: "User Profile",
          userNotFound: "User not found.",
          close: "Close",
        },
      },
      ru: {
        translation: {
          registration: "Регистрация",
          name: "Имя:",
          phone: "Телефон:",
          email: "Email:",
          register: "Зарегистрироваться",
          profile: "Профиль пользователя",
          userNotFound: "Пользователь не найден.",
          close: "Закрыть",
        },
      },
    },
    lng: "ru", // язык по умолчанию
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false, // react уже экранирует
    },
  });

export default i18n;
