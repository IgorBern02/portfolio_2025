// import "../index.css";

// function background() {
//   return (
//     <div className="absolute top-0 w-full h-auto md:grid md:grid-cols-2 xl:ml-24">
//       <div className="w-80 h-80 rounded-full bg-purple-500 mt-20 ml-10  bg-opacity-50 blur-[110px] animate-bounce"></div>
//       <div className="w-80 h-80 rounded-full bg-cyan-500 mt-20 ml-10  bg-opacity-50 blur-[110px] animate-bounce md:bg-violet-800"></div>
//       <div className="w-80 h-80 rounded-full bg-blue-500 mt-20 ml-10  bg-opacity-50 blur-[110px] animate-bounce md:bg-pink-500"></div>
//       <div className="w-80 h-80 rounded-full bg-purple-500 mt-20 ml-10  bg-opacity-50 blur-[110px] animate-bounce"></div>
//       <div className="w-80 h-80 rounded-full bg-cyan-500 mt-20 ml-10  bg-opacity-50 blur-[110px] animate-bounce md:bg-violet-800"></div>
//     </div>
//   );
// }

// export default background;

import React, { useState, useEffect } from "react";
import "../index.css";

// { ballCount }
const Background = ({ ballCount }) => {
  const [responsiveBallCount, setResponsiveBallCount] = useState(ballCount);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // Tablet
        setResponsiveBallCount(ballCount + 1);
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
    <div className="absolute top-0 left-0 w-full h-full z-0 md:grid md:grid-cols-2 md:ml-32">
      {balls}
    </div>
  );
};

export default Background;
