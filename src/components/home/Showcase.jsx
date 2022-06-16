import React, { useEffect } from "react";
import Laptop from "../../assets/images/macbook.png";
import Wallpaper from "../../assets/images/wallpaper.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../style/dist/showcase.min.css";

const Showcase = () => {
    gsap.registerPlugin(ScrollTrigger);

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
                    <img src={Laptop} className="laptop-img" />
                    <div className="black-screen"></div>
                    <img src={Wallpaper} className="wallpaper" />
                </div>
                <p className="text">Prepare for takeoff.</p>
            </div>
        </div>
    );
};

export default Showcase;
// ne?
