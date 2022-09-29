import React from "react";
import { useState, useEffect } from "react";

const ScrollBar = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPrecent = (winScroll / height) * 100;

    setScrollPos(scrollPrecent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-bar-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ height: `${scrollPos}%` }}></div>
      </div>
    </div>
  );
};

export default ScrollBar;
