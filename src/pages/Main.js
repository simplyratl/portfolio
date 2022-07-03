import React from "react";
import ContactPage from "../components/home/ContactPage";
import Hero from "../components/home/Hero";
import Showcase from "../components/home/Showcase";
import Skills from "../components/home/Skills";
import Work from "../components/home/Work";

const Main = () => {
    return (
        <>
            <main>
                <div className="main-wrapper">
                    <Hero />
                    <Work />
                    <Skills />
                    <Showcase />
                    <ContactPage />
                </div>
            </main>
        </>
    );
};

export default Main;
