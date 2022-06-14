import React from "react";
import { useContext } from "react";
import { mouseEnter, mouseLeave } from "../../context/cursorContext/cursorCalls";
import { CursorContext } from "../../context/cursorContext/CursorContext";

import InstagramClone from "../../assets/work/instagram.png";
import InstagramCloneMobile from "../../assets/work/instagram_mobile.png";

import CardGame from "../../assets/work/card_game.png";
import CardGameMobile from "../../assets/work/card_game_mobile.png";

import Beatstore from "../../assets/work/beatstore.png";
import BeatstoreMobile from "../../assets/work/beatstore_mobile.png";

import Netflix from "../../assets/work/netflix.png";
import NetflixMobile from "../../assets/work/netflix_mobile.png";

import Mockup from "../../assets/work/mockup.png";
import "../../style/dist/work.min.css";

const Work = () => {
    const { dispatch } = useContext(CursorContext);

    return (
        <div className="work-container">
            <p className="header">my work. from college to personal projects</p>

            <div className="work-wrapper">
                <div className="work-box">
                    <div
                        className="work-box-wrapper"
                        style={{
                            background: "rgb(254,218,117)",
                            background:
                                "linear-gradient(56deg, rgba(254,218,117,1) 0%, rgba(250,126,30,1) 20%, rgba(214,41,118,1) 50%, rgba(150,47,191,1) 67%, rgba(79,91,213,1) 93%)",
                        }}
                    >
                        <a
                            href="#"
                            onMouseEnter={() => mouseEnter(dispatch)}
                            onMouseLeave={() => mouseLeave(dispatch)}
                        >
                            <div className="image-container">
                                <img src={Mockup} className="mockup" />

                                <img src={InstagramCloneMobile} className="mobile" />
                                <div className="site-container">
                                    <img src={InstagramClone} className="site" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="#">
                        <h3>Instagram Clone</h3>
                    </a>
                </div>

                <div className="work-box">
                    <div className="work-box-wrapper" style={{ background: "#a2231d" }}>
                        <a
                            href="#"
                            onMouseEnter={() => mouseEnter(dispatch)}
                            onMouseLeave={() => mouseLeave(dispatch)}
                        >
                            <div className="image-container">
                                <img src={Mockup} className="mockup" />

                                <img src={CardGameMobile} className="mobile" />
                                <div className="site-container">
                                    <img src={CardGame} className="site" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="#">
                        <h3>Memory Card Game</h3>
                    </a>
                </div>
                <div className="work-box">
                    <div className="work-box-wrapper" style={{ background: "#000" }}>
                        <a
                            href="#"
                            onMouseEnter={() => mouseEnter(dispatch)}
                            onMouseLeave={() => mouseLeave(dispatch)}
                        >
                            <div className="image-container">
                                <img src={Mockup} className="mockup" />

                                <img src={BeatstoreMobile} className="mobile" />
                                <div className="site-container">
                                    <img src={Beatstore} className="site" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="#">
                        <h3>Beatstore</h3>
                    </a>
                </div>

                <div className="work-box">
                    <div
                        className="work-box-wrapper"
                        style={{
                            background: "rgb(0,0,0)",
                            background: "linear-gradient(56deg, rgba(0,0,0,1) 0%, rgba(250,30,30,1) 100%)",
                        }}
                    >
                        <a
                            href="#"
                            onMouseEnter={() => mouseEnter(dispatch)}
                            onMouseLeave={() => mouseLeave(dispatch)}
                        >
                            <div className="image-container">
                                <img src={Mockup} className="mockup" />

                                <img src={NetflixMobile} className="mobile" />
                                <div className="site-container">
                                    <img src={Netflix} className="site" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="#">
                        <h3>Netflix Clone</h3>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Work;
