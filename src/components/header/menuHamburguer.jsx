import React, { useState } from "react";
import "./Navbar.css";
import "../about/about"
import "../projects/projetos";
import "../footer/footer"

function menuHamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-14  flex flex-row items-center justify-end  ">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded-md text-gray-300 hover:text-white "
        >
          <div className="text-gray-300 hover:text-white z-10">
            {isOpen ? (
              <svg
                className="w-12 h-12 text-white dark:text-white md:w-16 md:h-16"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            ) : (
              <svg
                className="w-12 h-12 text-white dark:text-white md:w-16 md:h-16"
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
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            )}
          </div>
        </button>
      </div>
      <div
        className={`menu ${
          isOpen ? "open" : ""
        }  flex flex-col items-center text-center`}
      >
        <ul className="text-2xl text-white text-center flex flex-col justify-center items-center h-full w-full md:text-3xl bg-indigo-950">
          <a 
          href="#sobreMim"
          className="w-full h-1/3 py-3 gradientMenu  flex items-center">
            <li className="w-full h-auto">Sobre</li>
          </a>
          <a href="#projetos" className="w-full h-1/3 py-3 gradientMenu flex items-center">
            <li className="w-full h-auto">Projetos</li>
          </a>
          <a href="#contato" className="w-full h-1/3 py-3 gradientMenu flex items-center">
            <li className="w-full h-auto ">Contato</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default menuHamburguer;
