import React, { useRef } from "react";
import { useContext } from "react";
import { mouseEnter, mouseLeave } from "../../context/cursorContext/cursorCalls";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/cursorContext/CursorContext";

import InstagramClone from "../../assets/work/instagram.webp";
import InstagramCloneMobile from "../../assets/work/instagram_mobile.webp";

import CardGame from "../../assets/work/card_game.webp";
import CardGameMobile from "../../assets/work/card_game_mobile.webp";

import Beatstore from "../../assets/work/beatstore.webp";
import BeatstoreMobile from "../../assets/work/beatstore_mobile.webp";

import Netflix from "../../assets/work/netflix.webp";
import NetflixMobile from "../../assets/work/netflix_mobile.webp";

import Pinterest from "../../assets/work/pinterest.webp";
import PinterestMobile from "../../assets/work/pinterest_mobile.webp";

import Weathery from "../../assets/work/weathery.mp4";

import Mockup from "../../assets/work/mockup.webp";
import Iphone from "../../assets/work/iphone.webp";

import { Parallax } from "react-scroll-parallax";

import Click from "../../assets/animations/click.gif";

import "../../style/dist/work.min.css";

const Work = () => {
    const { dispatch } = useContext(CursorContext);

    const videoHoverRef = useRef();

    return (
        <Parallax speed={5} translateY={-10}>
            <motion.div
                className="work-container"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "ease" }}
            >
                <h3>Work</h3>
                <p className="header">College and personal projects.</p>

                <motion.div
                    className="work-wrapper"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <motion.div
                        className="work-box"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mockup-container">
                            <div className="work-box-wrapper">
                                <a
                                    href="https://github.com/simplyratl/instagram-clone"
                                    className="image-container"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={Mockup} className="mockup" alt="mockup" />

                                    <img src={InstagramCloneMobile} className="mobile" alt="mobile" />

                                    <div className="site-container">
                                        <img src={InstagramClone} className="site" alt="site" />
                                    </div>
                                </a>
                            </div>

                            <motion.div
                                className="info-container"
                                initial={{ opacity: 0, x: "10%" }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <a
                                    href="https://github.com/simplyratl/instagram-clone"
                                    className="title-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h3
                                        className="title"
                                        onMouseEnter={() => mouseEnter(dispatch)}
                                        onMouseLeave={() => mouseLeave(dispatch)}
                                    >
                                        Instagram Clone
                                    </h3>
                                </a>
                                <p className="info">
                                    Instagram Clone built with HTML, CSS, Javascript (JQuery), PHP and MYSQL
                                    for a student project. Because there is no follow functionality every post
                                    is global. Which means that every user can see each others posts and
                                    comments. (maybe a new social media? :) ) Basicaly every CRUD operation is
                                    used in some way throughout the site.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="work-box"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mockup-container reverse">
                            <div className="work-box-wrapper">
                                <a
                                    href="https://github.com/simplyratl/card-game"
                                    className="image-container"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={Mockup} className="mockup" alt="mockup" />

                                    <img src={CardGameMobile} className="mobile" alt="mobile" />

                                    <div className="site-container">
                                        <img src={CardGame} className="site" alt="site" />
                                    </div>
                                </a>
                            </div>

                            <motion.div
                                className="info-container"
                                initial={{ opacity: 0, x: "10%" }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <a
                                    href="https://github.com/simplyratl/card-game"
                                    className="title-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    onMouseEnter={() => mouseEnter(dispatch)}
                                    onMouseLeave={() => mouseLeave(dispatch)}
                                >
                                    <h3
                                        className="title"
                                        onMouseEnter={() => mouseEnter(dispatch)}
                                        onMouseLeave={() => mouseLeave(dispatch)}
                                    >
                                        Card Game
                                    </h3>
                                </a>
                                <p className="info">
                                    Another student project, this time created with HTML, CSS, and Vanilla
                                    Javascript. A simple memory card game that everyone is familiar with, but
                                    with three unique variations. There are three levels of difficulty: easy,
                                    medium, and hard. The size of the table and the tiles within them are the
                                    key differences between them. Easy is 4x4, medium is 6x6, and hard is 8x8.
                                    You can aim for a high score while running away from the timer using a
                                    scoreboard that resets after the session (limitations of the student
                                    project).
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="work-box"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mockup-container">
                            <div className="work-box-wrapper">
                                <a
                                    href="https://github.com/simplyratl/pinterest-clone"
                                    className="image-container"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={Mockup} className="mockup" alt="mockup" />

                                    <img src={PinterestMobile} className="mobile" alt="mobile" />

                                    <div className="site-container">
                                        <img src={Pinterest} className="site" alt="site" />
                                    </div>
                                </a>
                            </div>

                            <motion.div
                                className="info-container"
                                initial={{ opacity: 0, x: "10%" }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <a
                                    href="https://github.com/simplyratl/pinterest-clone"
                                    className="title-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    onMouseEnter={() => mouseEnter(dispatch)}
                                    onMouseLeave={() => mouseLeave(dispatch)}
                                >
                                    <h3 className="title">Pinterest Clone</h3>
                                </a>
                                <p className="info">
                                    Student project made using JQuery, PHP and MYSQL. As a user you are able
                                    to add posts, add comments, view other profiles and save posts. Despite
                                    having a similar project Instagram Clone this one has a better code,
                                    because this time wasn't my first time making a PHP website.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="work-box"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mockup-container reverse">
                            <div className="work-box-wrapper">
                                <a href="https://github.com/simplyratl/beatstore" className="image-container">
                                    <img src={Mockup} className="mockup" alt="mockup" />

                                    <img src={BeatstoreMobile} className="mobile" alt="mobile" />

                                    <div className="site-container">
                                        <img src={Beatstore} className="site" alt="site" />
                                    </div>
                                </a>
                            </div>

                            <motion.div
                                className="info-container"
                                initial={{ opacity: 0, x: "10%" }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <a
                                    href="https://github.com/simplyratl/beatstore"
                                    className="title-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    onMouseEnter={() => mouseEnter(dispatch)}
                                    onMouseLeave={() => mouseLeave(dispatch)}
                                >
                                    <h3 className="title">Beatstore</h3>
                                </a>
                                <p className="info">
                                    A sophisticated project built with React js on the frontend and Node js on
                                    the backend. Firebase is used to store audio and photos, and MongoDB is
                                    utilized to store JSON information files about users and beats. Adding
                                    beats is done through the admin panel, which is separate from the main
                                    site. Basically, the admin panel is used to maintain the site. The main
                                    functionality of the site are transactions, which is why someone would
                                    want to visit it. To purchase high-quality beats on a modern design!
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="work-box"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mockup-container">
                            <div className="work-box-wrapper">
                                <a
                                    href="https://github.com/simplyratl/netflix-clone"
                                    className="image-container"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={Mockup} className="mockup" alt="mockup" />

                                    <img src={NetflixMobile} className="mobile" alt="mobile" />

                                    <div className="site-container">
                                        <img src={Netflix} className="site" alt="site" />
                                    </div>
                                </a>
                            </div>

                            <motion.div
                                className="info-container"
                                initial={{ opacity: 0, x: "10%" }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <a
                                    href="https://github.com/simplyratl/netflix-clone"
                                    className="title-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    onMouseEnter={() => mouseEnter(dispatch)}
                                    onMouseLeave={() => mouseLeave(dispatch)}
                                >
                                    <h3 className="title">Netflix Clone</h3>
                                </a>
                                <p className="info">
                                    What more to say? Netflix clone made using React js. The main goal wasn't
                                    a functionality but a basic idea of learning to create a Netflix style
                                    interface. Watching videos isn't available because... 🏴‍☠️. But looking
                                    through what is new and popular definetely is. Using Movie Database for
                                    fetching information makes the site all the time relevant considering the
                                    API is updating a lot.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="work-box"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mockup-container reverse">
                            <div className="work-box-wrapper">
                                <div
                                    className="image-container iphone-container"
                                    onMouseEnter={() => {
                                        videoHoverRef.current.play();
                                    }}
                                    onMouseLeave={() => {
                                        videoHoverRef.current.pause();
                                        videoHoverRef.current.currentTime = 0;
                                    }}
                                >
                                    <img src={Iphone} className="mockup iphone" alt="mockup" />
                                    <div className="click-container">
                                        <img src={Click} alt="click" />
                                    </div>
                                    <video ref={videoHoverRef} controls={false} autoPlay>
                                        <source src={Weathery} type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            <motion.div className="info-container">
                                <a
                                    href="https://github.com/simplyratl/weather-app-ios"
                                    className="title-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h3
                                        className="title"
                                        onMouseEnter={() => {
                                            mouseEnter(dispatch);
                                        }}
                                        onMouseLeave={() => {
                                            mouseLeave(dispatch);
                                        }}
                                    >
                                        Weathery
                                    </h3>
                                </a>
                                <p className="info">
                                    A basic weather app that is made to work only on mobile phones, using
                                    React Native. With basic animations, the design is modern and simple.
                                    Current weather and temperature, both hourly and daily, are available as a
                                    option to check. Based on the preferences or your the system you use to
                                    check the temperature, it is also avaliable to change from kelvin to
                                    fehrenheit and kelvins. Data is being updated hourly by using OpenWeather
                                    API.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </Parallax>
    );
};

export default Work;
