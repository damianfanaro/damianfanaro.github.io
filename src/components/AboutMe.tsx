import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about-me">
            <h2>{t("aboutMeHeader")}</h2>
            <p>{t("aboutMeParagraph")}</p>
        </section>
    );
};

export default AboutMe;
