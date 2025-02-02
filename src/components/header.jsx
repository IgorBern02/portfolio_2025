import React, { memo, useState } from "react";
import "../index.css";

const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#sobreMim");

  const handleClick = (e, link) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    setActiveLink(link);
    scrollToSection(link);
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full h-14 z-90 flex flex-row items-center justify-end">
      <h2 className="absolute left-5 text-2xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
        Igu
      </h2>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded-md text-gray-300 hover:text-white "
        >
          <div className="text-gray-300 hover:text-white z-10">
            {isOpen ? (
              <svg
                className="w-10 h-10 text-white dark:text-white md:w-12 md:h-12"
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
                className="w-10 h-10 text-white dark:text-white md:w-12 md:h-12"
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
      <div className={`menu ${isOpen ? "open" : ""}  flex flex-col `}>
        <ul className="text-xl text-white flex flex-col gap-5 h-auto w-full bg-[#030014]">
          <a
            href="#sobreMim"
            className={`w-full h-1/3 py-3 gradientMenu flex items-center ml-5 ${
              activeLink === "#sobreMim"
                ? "active bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
                : ""
            }`}
            onClick={(e) => handleClick(e, "#sobreMim")}
          >
            <li className="w-full h-auto">Sobre</li>
          </a>
          <a
            href="#portfolio"
            className={`w-full h-1/3 py-3 gradientMenu flex items-center ml-5 ${
              activeLink === "#portfolio"
                ? "active bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
                : ""
            }`}
            onClick={(e) => handleClick(e, "#portfolio")}
          >
            <li className="w-full h-auto">Portfolio</li>
          </a>
          <a
            href="#contato"
            className={`w-full h-1/3 py-3 gradientMenu flex items-center ml-5 ${
              activeLink === "#contato"
                ? "active bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
                : ""
            }`}
            onClick={(e) => handleClick(e, "#contato")}
          >
            <li className="w-full h-auto ">Contato</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

const ModelHeader = memo(() => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id.substring(1)); // Atualiza a seção ativa
    }
  };

  const navItems = [
    { href: "#sobreMim", label: "Sobre" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div id="sobreMim">
      <div className="w-screen h-auto fixed top-0 z-30 p-2 backdrop-blur-xl xl:hidden">
        <MenuHamburguer />
      </div>

      <div className="hidden xl:flex justify-between items-center fixed top-0 z-30 p-2 backdrop-blur-xl  w-full">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent xl:text-base">
          Igu
        </h2>
        <nav className="ml-8 flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="group relative px-1 py-2 text-xl font-medium xl:text-base"
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                    : "text-[#e2d3fd] group-hover:text-white"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
});

const Header = () => {
  return <ModelHeader />;
};

export default memo(Header);
