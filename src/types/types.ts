export interface Props {
  setBallCount: (count: number) => void;
  onTabChange: (tab: string) => void;
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

export interface Skill {
  icon: string;
  name: string;
}

export type ModalSkillsProps = {
  skills: Skill[];
};
