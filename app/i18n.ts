import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translation_mg from "./locales/mg/translation.json"
import translation_fr from "./locales/fr/translation.json"

// Définir les traductions
const resources = {
  mg: {
    // Langue par défaut : Malagasy
    translation: translation_mg
  },
  fr: {
    // Langue secondaire : Français
    translation: translation_fr
  }
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Intègre i18next à React
  .init({
    resources,
    fallbackLng: 'mg', // Langue par défaut : Malagasy
    debug: true, // Active les logs pour le développement
    interpolation: {
      escapeValue: false // React gère déjà l'échappement XSS
    }
  });

export default i18n;