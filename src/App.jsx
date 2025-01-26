import "./App.css";
import Header from "./components/header/header";
import AboutMe from "./components/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projetos";
import Footer from "./components/footer/footer";
import Background from "./components/background/background";
import Showcase from "./components/showcase/showcase";

function App() {
  return (
    <section className="h-auto">
      <Background />
      <div className="gap-10 flex flex-col ">
        <Header />
        <div className="mt-20  h-auto w-full gap-10 flex flex-col">
          <AboutMe />
          <Showcase />
          {/* <Skills />
          <Projects /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </section>
  );
}

export default App;
