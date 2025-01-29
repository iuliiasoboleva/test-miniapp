import React from "react";
import photoImage from "../../assets/images/ai.jpg";
import "./styles.css";

const HomeSection = () => {
    return (
        <div className="mainBlock">
            <div className="leftSide">
                <img src={photoImage} alt="Neuro Photoshoot" className="home-image" />
            </div>
            <div className="rightSide">
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
                <div className="bottomButton">
                    <div className="videoBtnText" id="youtubeBtn">
                        <a href="#">
                            МЫ В YOUTUBE
                            <div className="button-icon">
                                <i className="bi bi-youtube"></i>
                            </div>
                        </a>
                    </div>
                    <div className="videoBtnText" id="vkBtn">
                        <a href="#">
                            МЫ ВКОНТАКТЕ
                            <div className="button-icon">
                                <i className="fab fa-vk"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
