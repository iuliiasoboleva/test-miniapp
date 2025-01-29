import { useEffect } from "react";

const useTelegramTheme = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;

    const setTheme = () => {
      document.documentElement.style.setProperty("--tg-theme-bg-color", tg.themeParams.bg_color || "#ffffff");
      document.documentElement.style.setProperty("--tg-theme-text-color", tg.themeParams.text_color || "#000000");
      document.documentElement.style.setProperty("--tg-theme-hint-color", tg.themeParams.hint_color || "#707070");
      document.documentElement.style.setProperty("--tg-theme-link-color", tg.themeParams.link_color || "#1e90ff");
      document.documentElement.style.setProperty("--tg-theme-button-color", tg.themeParams.button_color || "#0088cc");
      document.documentElement.style.setProperty("--tg-theme-button-text-color", tg.themeParams.button_text_color || "#ffffff");
    };

    setTheme();

    tg.onEvent("themeChanged", setTheme);

    return () => {
      tg.offEvent("themeChanged", setTheme);
    };
  }, []);
};

export default useTelegramTheme;
