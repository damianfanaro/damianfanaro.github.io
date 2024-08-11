import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AboutMe from "./AboutMe";
// import Articles from "./Articles";
import Footer from "./Footer";
import LanguageSwitch from "./LanguageSwitch";
import ProfilePicture from "./ProfilePicture";
import SocialLinks from "./SocialLinks";

const App: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <header className="text-center my-4">
                <LanguageSwitch />
            </header>
            <Container className="align-items-center">
                <Row>
                    <Col md={4} className="text-center">
                        <h1>{t("welcome")}</h1>
                        <ProfilePicture src="../profile.svg" alt="Profile Picture" />
                    </Col>
                    <Col md={8}>
                        <AboutMe />
                        {/* <Articles /> */}
                    </Col>
                    <Col md={4}>
                        <SocialLinks />
                    </Col>
                </Row>
                <Footer />
            </Container>
        </>
    );
};

export default App;
