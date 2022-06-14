import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "../style/dist/cursor.min.css";
import { useContext } from "react";
import { CursorContext } from "../context/cursorContext/CursorContext";

const Cursor = () => {
    const { cursorTriger } = useContext(CursorContext);

    const [cursorVariant, setCursorVariant] = useState("default");

    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePos({
                x: e.clientX - 16,
                y: e.clientY - 16,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    useEffect(() => {
        if (cursorTriger) {
            setCursorVariant("link");
        } else {
            setCursorVariant("default");
        }
    }, [cursorTriger]);

    const variants = {
        default: {
            x: mousePos.x,
            y: mousePos.y,
        },
        link: {
            width: 150,
            height: 150,
            x: mousePos.x - 55,
            y: mousePos.y - 65,
        },
    };

    return <motion.div className="cursor" variants={variants} animate={cursorVariant}></motion.div>;
};

export default Cursor;
