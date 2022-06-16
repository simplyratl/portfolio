import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { mouseEnter, mouseLeave } from "../../context/cursorContext/cursorCalls";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/cursorContext/CursorContext";

import InstagramClone from "../../assets/work/instagram.png";
import InstagramCloneMobile from "../../assets/work/instagram_mobile.png";

import CardGame from "../../assets/work/card_game.png";
import CardGameMobile from "../../assets/work/card_game_mobile.png";

import Beatstore from "../../assets/work/beatstore.png";
import BeatstoreMobile from "../../assets/work/beatstore_mobile.png";

import Netflix from "../../assets/work/netflix.png";
import NetflixMobile from "../../assets/work/netflix_mobile.png";

import Weathery from "../../assets/work/weathery.mp4";

import Mockup from "../../assets/work/mockup.png";
import Iphone from "../../assets/work/iphone.png";

import { Parallax } from "react-scroll-parallax";

import "../../style/dist/work.min.css";

const Work = () => {
    const { dispatch } = useContext(CursorContext);

    const videoHoverRef = useRef();

    return (
        <Parallax speed={5} translateY={-20}>
            <div className="work-container">
                <h3>Work</h3>
                <p className="header">College and personal projects.</p>

                <motion.div
                    className="work-wrapper"
                    inherit={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="work-box">
                        <div className="work-box-wrapper">
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
                        <div className="work-box-wrapper">
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
                        <div className="work-box-wrapper">
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
                        <div className="work-box-wrapper">
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

                    <div className="work-box">
                        <div className="work-box-wrapper">
                            <a
                                href="#"
                                onMouseEnter={() => {
                                    mouseEnter(dispatch);
                                    videoHoverRef.current.play();
                                }}
                                onMouseLeave={() => {
                                    mouseLeave(dispatch);
                                    videoHoverRef.current.pause();
                                    videoHoverRef.current.currentTime = 0;
                                }}
                            >
                                <div className="image-container iphone-container">
                                    <img src={Iphone} className="mockup iphone" />
                                    <video ref={videoHoverRef} controls={false} autoPlay>
                                        <source src={Weathery} type="video/mp4" />
                                    </video>
                                </div>
                            </a>
                        </div>
                        <h3>Weathery</h3>
                    </div>
                </motion.div>
            </div>
        </Parallax>
    );
};

export default Work;
