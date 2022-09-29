import React, { useRef } from "react";
import { useContext } from "react";
import { mouseEnter, mouseLeave } from "../../context/cursorContext/cursorCalls";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/cursorContext/CursorContext";

import Mockup from "../../assets/work/mockup.webp";
import Iphone from "../../assets/work/iphone.webp";

import { Parallax } from "react-scroll-parallax";
import { MdVerified } from "react-icons/md";
import Data from "../work.json";

const Work = () => {
  const { dispatch } = useContext(CursorContext);
  const videoHoverRef = useRef();

  console.log(Data);

  return (
    // <Parallax speed={5} translateY={-10}>
    <motion.div
      className="work-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "ease" }}
    >
      <motion.div className="work-wrapper" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h3>Work</h3>
        <p className="header">College and personal projects.</p>

        {Data.map((work, index) => (
          <motion.div
            className="work-box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            key={index}
          >
            <div
              className={`mockup-container ${(index + 1) % 2 === 0 && "reverse"} ${
                work.verified && "exclusive"
              }`}
            >
              <div className="work-box-wrapper">
                <a href={work.link} className="image-container" target="_blank" rel="noreferrer">
                  <img src={Mockup} className="mockup" alt="mockup" />

                  <img src={work.imageMobile} className="mobile" alt={work.title} />

                  <div className="site-container">
                    <img src={work.imageDesktop} className="site" alt={work.title} />
                  </div>
                </a>
              </div>

              <motion.div
                className="info-container"
                initial={{ opacity: 0, x: (index + 1) % 2 === 0 ? "10%" : "-10%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href={work.link}
                  className="title-link"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => mouseEnter(dispatch)}
                  onMouseLeave={() => mouseLeave(dispatch)}
                >
                  <h3 className="title">
                    {work.title} {work.verified && <MdVerified className="verified" />}
                  </h3>
                </a>

                {work.additional_title && <p className="added">{work.additional_title}</p>}

                <p className="info">{work.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
