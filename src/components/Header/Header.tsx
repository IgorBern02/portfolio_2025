import { useState } from "react";
import { scrollToId } from "../../utils/scrollToId";
import { MenuHamburguer } from "./MenuHamburguer";
import { navItems } from "./navItems";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("#sobreMim");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollToId(href);
    setActiveSection(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile */}
      <div className="w-screen fixed top-0 z-30 p-2 backdrop-blur-xl xl:hidden">
        <MenuHamburguer
          activeLink={activeSection}
          setActiveLink={setActiveSection}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      {/* Desktop */}
      <div className="hidden xl:flex fixed top-0 z-30 w-full justify-between items-center p-2 backdrop-blur-xl">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent xl:text-base">
          Igu
        </h2>
        <nav className="ml-8 flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group relative px-1 py-2 text-xl font-medium xl:text-base"
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.href
                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                    : "text-[#e2d3fd] group-hover:text-white"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                  activeSection === item.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
