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
        <Parallax speed={5} translateY={-10}>
            <div className="work-container">
                <h3>Work</h3>
                <p className="header">College and personal projects.</p>

                <motion.div
                    className="work-wrapper"
                    inherit={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="work-box">
                        <div className="mockup-container">
                            <div className="work-box-wrapper">
                                <a
                                    href="#"
                                    onMouseEnter={() => mouseEnter(dispatch)}
                                    onMouseLeave={() => mouseLeave(dispatch)}
                                    className="image-container"
                                >
                                    <img src={Mockup} className="mockup" />

                                    <img src={InstagramCloneMobile} className="mobile" />

                                    <div className="site-container">
                                        <img src={InstagramClone} className="site" />
                                    </div>
                                </a>
                            </div>

                            <div className="info-container">
                                <a href="#" className="title-link">
                                    <h3
                                        className="title"
                                        onMouseEnter={() => mouseEnter(dispatch)}
                                        onMouseLeave={() => mouseLeave(dispatch)}
                                    >
                                        Instagram Clone
                                    </h3>
                                </a>
                                <p className="info">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas adipisci
                                    velit porro nihil rem, incidunt, dolor dolores officiis cumque voluptatum
                                    sequi laudantium obcaecati placeat aperiam vel quisquam amet ab
                                    reiciendis, eligendi nam voluptatem provident consequuntur. Accusantium
                                    molestias hic, consequatur in labore recusandae. Explicabo iusto pariatur
                                    consequuntur odio ab perspiciatis exercitationem?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="work-box">
                        <div className="mockup-container reverse">
                            <div className="work-box-wrapper">
                                <a
                                    href="#"
                                    onMouseEnter={() => mouseEnter(dispatch)}
                                    onMouseLeave={() => mouseLeave(dispatch)}
                                    className="image-container"
                                >
                                    <img src={Mockup} className="mockup" />

                                    <img src={CardGameMobile} className="mobile" />

                                    <div className="site-container">
                                        <img src={CardGame} className="site" />
                                    </div>
                                </a>
                            </div>

                            <div className="info-container">
                                <a href="#" className="title-link">
                                    <h3
                                        className="title"
                                        onMouseEnter={() => mouseEnter(dispatch)}
                                        onMouseLeave={() => mouseLeave(dispatch)}
                                    >
                                        Card Game
                                    </h3>
                                </a>
                                <p className="info">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas adipisci
                                    velit porro nihil rem, incidunt, dolor dolores officiis cumque voluptatum
                                    sequi laudantium obcaecati placeat aperiam vel quisquam amet ab
                                    reiciendis, eligendi nam voluptatem provident consequuntur. Accusantium
                                    molestias hic, consequatur in labore recusandae. Explicabo iusto pariatur
                                    consequuntur odio ab perspiciatis exercitationem?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="work-box">
                        <div className="mockup-container">
                            <div className="work-box-wrapper">
                                <a
                                    href="#"
                                    onMouseEnter={() => mouseEnter(dispatch)}
                                    onMouseLeave={() => mouseLeave(dispatch)}
                                    className="image-container"
                                >
                                    <img src={Mockup} className="mockup" />

                                    <img src={BeatstoreMobile} className="mobile" />

                                    <div className="site-container">
                                        <img src={Beatstore} className="site" />
                                    </div>
                                </a>
                            </div>

                            <div className="info-container">
                                <a href="#" className="title-link">
                                    <h3
                                        className="title"
                                        onMouseEnter={() => mouseEnter(dispatch)}
                                        onMouseLeave={() => mouseLeave(dispatch)}
                                    >
                                        Beatstore
                                    </h3>
                                </a>
                                <p className="info">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas adipisci
                                    velit porro nihil rem, incidunt, dolor dolores officiis cumque voluptatum
                                    sequi laudantium obcaecati placeat aperiam vel quisquam amet ab
                                    reiciendis, eligendi nam voluptatem provident consequuntur. Accusantium
                                    molestias hic, consequatur in labore recusandae. Explicabo iusto pariatur
                                    consequuntur odio ab perspiciatis exercitationem?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="work-box">
                        <div className="mockup-container reverse">
                            <div className="work-box-wrapper">
                                <a
                                    href="#"
                                    onMouseEnter={() => mouseEnter(dispatch)}
                                    onMouseLeave={() => mouseLeave(dispatch)}
                                    className="image-container"
                                >
                                    <img src={Mockup} className="mockup" />

                                    <img src={NetflixMobile} className="mobile" />

                                    <div className="site-container">
                                        <img src={Netflix} className="site" />
                                    </div>
                                </a>
                            </div>

                            <div className="info-container">
                                <a href="#" className="title-link">
                                    <h3
                                        className="title"
                                        onMouseEnter={() => mouseEnter(dispatch)}
                                        onMouseLeave={() => mouseLeave(dispatch)}
                                    >
                                        Netflix Clone
                                    </h3>
                                </a>
                                <p className="info">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas adipisci
                                    velit porro nihil rem, incidunt, dolor dolores officiis cumque voluptatum
                                    sequi laudantium obcaecati placeat aperiam vel quisquam amet ab
                                    reiciendis, eligendi nam voluptatem provident consequuntur. Accusantium
                                    molestias hic, consequatur in labore recusandae. Explicabo iusto pariatur
                                    consequuntur odio ab perspiciatis exercitationem?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="work-box">
                        <div className="mockup-container">
                            <div className="work-box-wrapper">
                                <a
                                    href="#"
                                    onMouseEnter={() => mouseEnter(dispatch)}
                                    onMouseLeave={() => mouseLeave(dispatch)}
                                    className="image-container iphone-container"
                                >
                                    <img src={Iphone} className="mockup iphone" />
                                    <video ref={videoHoverRef} controls={false} autoPlay>
                                        <source src={Weathery} type="video/mp4" />
                                    </video>
                                </a>
                            </div>

                            <div className="info-container">
                                <a href="#" className="title-link">
                                    <h3
                                        className="title"
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
                                        Weathery
                                    </h3>
                                </a>
                                <p className="info">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas adipisci
                                    velit porro nihil rem, incidunt, dolor dolores officiis cumque voluptatum
                                    sequi laudantium obcaecati placeat aperiam vel quisquam amet ab
                                    reiciendis, eligendi nam voluptatem provident consequuntur. Accusantium
                                    molestias hic, consequatur in labore recusandae. Explicabo iusto pariatur
                                    consequuntur odio ab perspiciatis exercitationem?
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 
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
                    </div> */}
                </motion.div>
            </div>
        </Parallax>
    );
};

export default Work;
