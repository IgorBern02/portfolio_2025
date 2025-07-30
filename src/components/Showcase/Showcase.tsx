import React, { useState } from "react";
import { NavbarShowcase } from "./NavbarShowcase";
import Projects from "../projects/Projects";
import SkillsSection from "../skills/Skills";
import "../../styles/index.css";
import { ShowcaseProps } from "@/src/types/types";
import { arrayprojects } from "../projects/arrayprojects";

export const Showcase = ({ setBallCount }: ShowcaseProps) => {
  const [activeTab, setActiveTab] = useState("projetos");

  return (
    <div className="w-full h-full relative">
      <NavbarShowcase setBallCount={setBallCount} onTabChange={setActiveTab} />
      <div className="w-full h-full relative xl:flex xl:flex-col xl:items-center">
        {activeTab === "projetos" && (
          <div className="content active xl:w-3/4">
            <Projects projects={arrayprojects} setBallCount={setBallCount} />
          </div>
        )}
        {activeTab === "tecnologias" && (
          <div className="content active">
            <SkillsSection />
          </div>
        )}
      </div>
    </div>
  );
};
