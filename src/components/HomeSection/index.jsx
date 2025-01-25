import React from "react";
import photoImage from "../../assets/images/ai.jpg"; // Замените на путь к вашему изображению
import { ReactComponent as FacebookIcon } from "../../assets/images/camera.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/play-alt.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/chat-arrow-grow.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/images/paper-plane.svg";
import "./styles.css";

const HomeSection = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-left">
                <p className="home-text">Создавайте личные нейрофотосессии</p>
                <img src={photoImage} alt="Neuro Photoshoot" className="home-image" />
            </div>
            <div className="home-right">
                <ul className="social-list">
                    <li className="social-item">
                        <span>Facebook</span>
                        <FacebookIcon className="social-icon" />
                    </li>
                    <li className="social-item">
                        <span>Twitter</span>
                        <TwitterIcon className="social-icon" />
                    </li>
                    <li className="social-item">
                        <span>Instagram</span>
                        <InstagramIcon className="social-icon" />
                    </li>
                    <li className="social-item">
                        <span>LinkedIn</span>
                        <LinkedInIcon className="social-icon" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HomeSection;
