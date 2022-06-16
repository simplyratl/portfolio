import React from "react";
import Code from "../../assets/images/code.png";
import { motion } from "framer-motion";
import "../../style/dist/codeanimation.min.css";

const CodeAnimation = () => {
    return (
        <motion.div
            className="code-animation-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="code-wrapper">
                <div className="top-bar">
                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                    <p className="document-name">Hello World</p>
                </div>

                <div className="body">
                    <p>
                        <span className="important">import</span> twoYearsExperience from "self-taught";
                    </p>
                    <br />
                    <p>
                        <span className="important">const</span> workFromHome = true || false;
                    </p>

                    <p>
                        <span className="important">const</span> skills = [ "React.js", "Javascript" , "HTML",
                        "CSS", "SCSS", "PHP" ];
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default CodeAnimation;
