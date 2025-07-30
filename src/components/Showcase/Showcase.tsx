import React, { useState } from "react";
import { NavbarShowcase } from "./NavbarShowcase";
import Projects from "../Projects/Projects";
import SkillsSection from "../Skills/Skills";
import "../../index.css";
import { Props } from "../../types/types";

export const Showcase = ({ setBallCount }: Props) => {
  const [activeTab, setActiveTab] = useState("projetos");

  return (
    <div className="w-full h-full relative">
      <NavbarShowcase setBallCount={setBallCount} onTabChange={setActiveTab} />
      <div className="w-full h-full relative xl:flex xl:flex-col xl:items-center">
        {activeTab === "projetos" && (
          <div className="content active xl:w-3/4">
            <Projects setBallCount={setBallCount} />
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
