import React, { useState, useEffect, memo } from "react";
import Projetos from "./Projetos";
import Skills from "./Skills";
import "../index.css";

const Navbar_showcase = memo(({ setBallCount }) => {
  const [active, setActive] = useState("projetos");

  const handleClick = (item, event) => {
    event.preventDefault();
    setActive(item);

    const screenWidth = window.innerWidth;

    if (
      item === "projetos" &&
      window.innerWidth >= 768 &&
      window.innerWidth < 1024
    ) {
      // TABLET
      setBallCount(7);
    } else if (screenWidth >= 1024) {
      // DESKTOP
      setBallCount(5);
    } else {
      // MOBILE
      setBallCount(4);
    }
  };

  return (
    <nav className="w-full h-auto p-2 xl:flex xl:flex-col xl:items-center">
      <ul className="flex items-center justify-around gap-2 text-center w-full h-full rounded-lg bg-bgProjetos py-2 px-3 xl:flex xl:justify-center xl:w-3/4">
        <li
          className={`flex flex-col items-center border border-white/20 w-full text-lg text-white py-2 rounded-lg backdrop-blur-xl cursor-pointer${
            active === "projetos"
              ? "active bg-gradient-to-r from-[#a855f7] to-[#6366f1]"
              : ""
          }`}
          onClick={(event) => handleClick("projetos", event)}
        >
          <a
            href="#"
            className="flex flex-col items-center text-xl xl:text-base"
          >
            <span>
              <svg
                className="w-6 h-6 text-white md:w-8 md:h-8 xl:w-6 xl:h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>
            </span>
            Projetos
          </a>
        </li>
        <li
          className={`flex flex-col items-center border border-white/20 w-full text-lg text-white py-2 rounded-lg backdrop-blur-xl cursor-pointer${
            active === "tecnologias"
              ? "active bg-gradient-to-r from-[#a855f7] to-[#6366f1]"
              : ""
          }`}
          onClick={(event) => handleClick("tecnologias", event)}
        >
          <a
            href="#"
            className="flex flex-col items-center text-xl xl:text-base"
          >
            <span>
              <svg
                className="w-6 h-6 text-white md:w-8 md:h-8 xl:w-6 xl:h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 20v-5h2v6.988H3V15h1.98v5H17Z" />
                <path d="m6.84 14.522 8.73 1.825.369-1.755-8.73-1.825-.369 1.755Zm1.155-4.323 8.083 3.764.739-1.617-8.083-3.787-.739 1.64Zm3.372-5.481L10.235 6.08l6.859 5.704 1.132-1.362-6.859-5.704ZM15.57 17H6.655v2h8.915v-2 ZM12.861 3.111l6.193 6.415 1.414-1.415-6.43-6.177-1.177 1.177Z" />
              </svg>
            </span>
            Tecnologias
          </a>
        </li>
      </ul>
      <div className="w-full h-full relative xl:flex xl:flex-col xl:items-center">
        {active === "projetos" && (
          <div className="content active xl:w-3/4">
            <Projetos setBallCount={setBallCount} />
          </div>
        )}
        {active === "tecnologias" && (
          <div className="content active">
            <Skills />
          </div>
        )}
      </div>
    </nav>
  );
});

const Showcase = ({ setBallCount }) => {
  return (
    <div className="w-full h-full relative">
      <Navbar_showcase setBallCount={setBallCount} />
    </div>
  );
};

export default memo(Showcase);
