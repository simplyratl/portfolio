import React from "react";
import CodeAnimation from "../components/home/CodeAnimation";
import ContactPage from "../components/home/ContactPage";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import Showcase from "../components/home/Showcase";
import Work from "../components/home/Work";

const Main = () => {
    return (
        <>
            {/* <Navbar /> */}
            <main>
                <div className="main-wrapper">
                    <Hero />
                    <Work />
                    {/* <CodeAnimation /> */}
                    <Showcase />
                    <ContactPage />
                </div>
            </main>
        </>
    );
};

export default Main;
