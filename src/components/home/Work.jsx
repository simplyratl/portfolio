import React from "react";
import { useContext } from "react";
import Animehub from "../../assets/work/animehub.png";
import NPM from "../../assets/work/npm.png";
import { mouseEnter, mouseLeave } from "../../context/cursorContext/cursorCalls";
import { CursorContext } from "../../context/cursorContext/CursorContext";
import "../../style/dist/work.min.css";

const Work = () => {
    const { dispatch } = useContext(CursorContext);

    return (
        <div className="work-container">
            <p className="header">my work. from college to personal projects</p>

            <div className="work-wrapper"></div>
        </div>
    );
};

export default Work;
