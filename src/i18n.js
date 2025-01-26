import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ru from "./locales/ru.json";

i18n
  .use(LanguageDetector) // Автоопределение языка пользователя
  .use(initReactI18next) // Подключение к React
  .init({
    lng: "ru", // Установить русский язык по умолчанию
    fallbackLng: "ru", // Резервный язык
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    interpolation: {
      escapeValue: false, // React уже экранирует строки
    },
    detection: {
      // Настройки LanguageDetector
      order: ["querystring", "localStorage", "navigator"], // Порядок определения языка
      caches: ["localStorage"], // Кеширование языка
    },
  });

export default i18n;
