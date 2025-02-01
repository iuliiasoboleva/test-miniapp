import React, { useState, useEffect } from "react";
import photoImage from "../../assets/images/ai.jpg";
import "./styles.css";

const HomeSection = () => {
    const [showYoutube, setShowYoutube] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowYoutube((prev) => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mainBlock">
            <div className="leftSide">
                <img src={photoImage} alt="Neuro Photoshoot" className="home-image" />
            </div>
            <div className="rightSide">
                <div className="titleButton">
                    Присоединяйтесь
                    <div className="arrowButton"></div>
                </div>
                <div className="buttonSection">
                    <div className="button">
                        <a href="#">
                            TG комьюнити
                            <div className="button-icon">
                                <span className="telegram-icon">
                                    <i className="bi bi-telegram"></i>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="button">
                        <a href="#">
                            TG канал
                            <div className="button-icon">
                                <i className="bi bi-substack"></i>
                            </div>
                        </a>
                    </div>
                    <div className="button">
                        <a href="#">
                            Instagram
                            <div className="button-icon">
                                <i className="bi bi-instagram"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="bottomButton flip-container">
                    <div className={`flipper ${showYoutube ? '' : 'flipped'}`}>
                        <div className="front videoBtnText" id="youtubeBtn">
                            <a href="#">
                                <p>МЫ В YOUTUBE</p>
                                <div className="button-icon">
                                    <i className="bi bi-youtube"></i>
                                </div>
                            </a>
                        </div>
                        <div className="back videoBtnText" id="vkBtn">
                            <a href="#">
                                <p>МЫ ВКОНТАКТЕ</p>
                                <div className="button-icon">
                                    <i className="fab fa-vk"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
