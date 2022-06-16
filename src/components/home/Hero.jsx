import React from "react";
import { motion } from "framer-motion";
import "../../style/dist/hero.min.css";

const Hero = () => {
    return (
        <motion.div
            className="start-section-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="heading">Front End developer.</h1>
            <h1 className="heading">simplyratl</h1>
        </motion.div>
    );
};

export default Hero;
