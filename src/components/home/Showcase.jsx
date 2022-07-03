import React, { useEffect } from "react";
import Laptop from "../../assets/images/macbook.png";
import Wallpaper from "../../assets/images/wallpaper.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../style/dist/showcase.min.css";
import { useContext } from "react";
import { mouseEnter, mouseLeave } from "../../context/cursorContext/cursorCalls";
import { CursorContext } from "../../context/cursorContext/CursorContext";

const Showcase = () => {
    gsap.registerPlugin(ScrollTrigger);

    const { dispatch } = useContext(CursorContext);

    useEffect(() => {
        gsap.timeline()
            .to(".laptop", {
                x: "0",
                scrollTrigger: {
                    trigger: ".showcase-container",
                    start: "top center",
                    end: "400",
                    scrub: 0.6,
                },
            })
            .to(".wallpaper", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".showcase-container",
                    start: "400",
                    end: "600",
                    scrub: 0.6,
                },
            })
            .to(".text", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".showcase-container",
                    start: "700",
                    end: "800",
                    scrub: 0.6,
                },
            });
    }, []);
    return (
        <div className="showcase-container">
            <div className="showcase-wrapper">
                <div className="laptop">
                    <img src={Laptop} className="laptop-img" alt="laptop" />
                    <div className="black-screen"></div>
                    <img src={Wallpaper} className="wallpaper" alt="wallpaper" />
                </div>
                <p className="text">
                    <a
                        href="https://github.com/simplyratl?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => {
                            mouseEnter(dispatch);
                        }}
                        onMouseLeave={() => {
                            mouseLeave(dispatch);
                        }}
                    >
                        Github.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Showcase;
// ne?
