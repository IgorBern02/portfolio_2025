import { ReactNode, ChangeEvent } from "react";

/* =========================
   COMMON TYPES
========================= */

export type TabType = "projetos" | "tecnologias";

/* =========================
   BACKGROUND
========================= */

export interface BackgroundProps {
  ballCount: number;
}

/* =========================
   SHOWCASE
========================= */

export interface ShowcaseProps {
  setBallCount: React.Dispatch<React.SetStateAction<number>>;
  onTabChange?: (tab: TabType) => void;
}

/* =========================
   ABOUT
========================= */

export interface TypingTextProps {
  text: string;
  delay?: number; // delay pode ser opcional
}

/* =========================
   HEADER
========================= */

export interface MenuHamburguerProps {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/* =========================
   PROJECTS
========================= */

export interface Project {
  name: string;
  img: string;
  desc: string;
  site: `http${string}`; // força começar com http
  github: `http${string}`;
}

export interface ModalProjectsProps {
  projects: Project[];
  setBallCount: React.Dispatch<React.SetStateAction<number>>;
}

/* =========================
   SKILLS
========================= */

export interface Skill {
  icon: string;
  name: string;
}

export interface ModalSkillsProps {
  skills: Skill[];
}

/* =========================
   CONTACT
========================= */

export interface ContactType {
  name: string;
  url: string;
  img: ReactNode;
}

export interface ModalContactProps {
  contact: ContactType;
}

export interface PropsInputContact {
  type: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}
