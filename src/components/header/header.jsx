import MenuHamburguer from "./menuHamburguer";
import React, { useState, useEffect } from "react";

function header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <div>
      <div className="w-screen h-auto fixed top-0 z-30 p-2 backdrop-blur-xl xl:hidden">
        <MenuHamburguer />
      </div>

      <div className="hidden xl:flex justify-between items-center fixed top-0 z-30 p-2 backdrop-blur-xl  w-full">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
          Igu
        </h2>
        <nav className="ml-8 flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="group relative px-1 py-2 text-xl xl:text-2xl max-2xl:text-base font-medium"
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
}

export default header;
