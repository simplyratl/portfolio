import React from "react";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import Work from "../components/home/Work";

const Main = () => {
    return (
        <>
            <Navbar />
            <main style={{ margin: "0 100px" }}>
                <Hero />
                <Work />
            </main>
        </>
    );
};

export default Main;