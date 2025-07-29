import { scrollToId } from "../../utils/scrollToId";
import { navItems } from "./navItems";

interface Props {
  activeLink: string;
  setActiveLink: (link: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const MenuHamburguer = ({
  activeLink,
  setActiveLink,
  isOpen,
  setIsOpen,
}: Props) => {
  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setActiveLink(link);
    scrollToId(link);
    setIsOpen(false);
  };

  return (
    <nav className="w-full h-14 z-90 flex items-center justify-end relative">
      <h2 className="absolute left-5 text-2xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
        Igu
      </h2>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 text-gray-300 hover:text-white"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id="mobile-menu"
        className={`menu ${
          isOpen ? "open" : "hidden"
        } absolute top-12 right-0 w-48 bg-[#030014] flex flex-col shadow-lg rounded-md`}
      >
        <ul role="menu" className="text-xl text-white flex flex-col gap-4 p-4">
          {navItems.map((item) => (
            <li role="menuitem" key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block px-3 py-2 rounded-md ${
                  activeLink === item.href
                    ? "bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent font-semibold"
                    : "hover:bg-[#1a1a2e]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const MenuIcon = () => (
  <svg
    className="w-10 h-10 md:w-12 md:h-12 text-white"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M5 7h14M5 12h14M5 17h14"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-10 h-10 md:w-12 md:h-12 text-white"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
