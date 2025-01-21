import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/header";
import AboutMe from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projetos";
import Footer from "./components/footer/footer";
import Background from "./components/background/background";

function App() {
  return (
    <section className="h-full ">
      <Background />
      <div className="gap-10 flex flex-col border border-gray-800">
        <Header />
        <div className="mt-20  h-auto w-full gap-10 flex flex-col">
          <AboutMe />
          <Skills />
          <Projects />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default App;
