// Background component props and types
export interface BackgroundProps {
  ballCount: number;
}

// Showcase component props and types
export interface ShowcaseProps {
  setBallCount: (count: number) => void;
  onTabChange: (tab: string) => void;
}

// AboutMe component props and types
export interface TypingTextProps {
  text: string;
  delay: number;
}

// Header component props and types
export interface MenuHamburguerProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export interface Project {
  name: string;
  img: string;
  desc: string;
  site: string;
  github: string;
}

export interface ModalProjectsProps {
  projects: Project[];
  setBallCount: (count: number) => void;
}

// Skills component props and types
export interface Skill {
  icon: string;
  name: string;
}

export type ModalSkillsProps = {
  skills: Skill[];
};

// Contact component props and types
export type ContactType = {
  name: string;
  url: string;
  img: React.ReactNode;
};

export type ModalContactProps = {
  contact: ContactType;
};

export type PropsInputContact = {
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
};
