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

import React from "react";
import "../index.css";

const Background = ({ ballCount }) => {
  const balls = Array.from({ length: ballCount }, (_, index) => (
    <div
      key={index}
      className={`w-80 h-80 rounded-full bg-purple-500 mt-28 ml-10 bg-opacity-50 blur-[110px] animate-bounce`}
    />
  ));

  return <div className="absolute top-0 left-0 w-full h-full z-0">{balls}</div>;
};

export default Background;
