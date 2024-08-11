import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch: React.FC = () => {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
    };

    return (
        <div id="language-switch">
            <button onClick={toggleLanguage}>{t(i18n.language === "es" ? "switchToEnglish" : "switchToSpanish")}</button>
        </div>
    );
};

export default LanguageSwitch;
