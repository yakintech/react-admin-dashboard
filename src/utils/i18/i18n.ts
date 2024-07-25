import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Products": "Products",
      "Cart": "Cart",
      "Todos": "Todos"
    }
  },
  tr: {
    translation: {
        "Home": "Anasayfa",
        "Products": "Ürünler",
        "Cart": "Sepet",
        "Todos": "Yapılacaklar"
    }
  }
};

let currentLang = localStorage.getItem("lang");

if(currentLang == null){
  currentLang = "en"
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: currentLang,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;