import React, { useState, useEffect } from "react";
import "../index.css";

// { ballCount }
export const Background = ({ ballCount }) => {
  const [responsiveBallCount, setResponsiveBallCount] = useState(ballCount);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // Tablet
        setResponsiveBallCount(ballCount + 3);
      } else if (window.innerWidth >= 1024) {
        // Desktop
        setResponsiveBallCount(ballCount + 1);
      } else {
        // Mobile
        setResponsiveBallCount(ballCount);
      }
    };

    handleResize(); // Chamada inicial para definir o valor correto
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ballCount]);

  const balls = Array.from({ length: responsiveBallCount }, (_, index) => (
    <div
      key={index}
      className={`w-80 h-80 rounded-full bg-purple-500 mt-28 ml-10 bg-opacity-50 blur-[110px] animate-bounce`}
    />
  ));

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 md:grid md:grid-cols-2 md:left-0 lg:left-44 xl:h-44 ">
      {balls}
    </div>
  );
};
