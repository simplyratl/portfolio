import React from "react";
import { useContext } from "react";
import Picture from "../../assets/images/profile.jpg";
import { CursorContext } from "../../context/cursorContext/CursorContext";
import { mouseEnter, mouseLeave } from "../../context/cursorContext/cursorCalls";
import "../../style/dist/navbar.min.css";

const Navbar = () => {
    const { dispatch } = useContext(CursorContext);

    return (
        <header>
            <a href="#" onMouseEnter={() => mouseEnter(dispatch)} onMouseLeave={() => mouseLeave(dispatch)}>
                <img src={Picture} />
            </a>

            {/* <a className="github-link">My GitHub</a> */}
        </header>
    );
};

export default Navbar;
