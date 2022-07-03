import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../../style/dist/skills.min.css";

const Skills = () => {
    const skillsContainer = useRef();
    const [skillsElements, setSkillsElements] = useState([]);
    const skills = [
        "HTML",
        "SCSS",
        "JSON",
        "REST",
        "SQL",
        "PHP",
        "REACT",
        "GSAP",
        "FRAMER MOTION",
        "ES6/ES7",
    ];

    useEffect(() => {
        const generateSkills = () => {
            const temp = [];
            skills.forEach((skill, index) => {
                const x = Math.floor(Math.random() * 100);
                const y = Math.floor(Math.random() * 300);

                const HTML_SKILL = (
                    <motion.div
                        drag
                        dragConstraints={skillsContainer}
                        dragElastic={0}
                        dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
                        className="skill"
                        key={index}
                        whileDrag={{ scale: 1.4 }}
                        style={{ top: y, left: x }}
                    >
                        {skill}
                    </motion.div>
                );

                temp.push(HTML_SKILL);
            });
            setSkillsElements(temp);
        };

        generateSkills();
    }, []);

    return (
        <div className="skills">
            <h3>My skills</h3>

            <div className="skills-wrapper" ref={skillsContainer}>
                {skillsElements.map((skill) => skill)}
            </div>
        </div>
    );
};

export default Skills;
