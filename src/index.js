import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CursorContextProvider } from "./context/cursorContext/CursorContext";
import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <CursorContextProvider>
        <ParallaxProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ParallaxProvider>
    </CursorContextProvider>
);
