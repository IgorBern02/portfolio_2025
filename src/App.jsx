import "./App.css";
import { useState } from "react";
import { Header } from "./components/header/Header";
import { AboutMe } from "./components/aboutme/AboutMe";
import { Footer } from "./components/footer/Footer";
import { Background } from "./components/background/Background";
import { Showcase } from "./components/showcase/Showcase";
import { Contact } from "./components/contact/Contact";

function App() {
  const [ballCount, setBallCount] = useState(5);

  return (
    <section className="relative h-auto w-full overflow-x-hidden scrollbar-custom">
      <Background ballCount={ballCount} />
      <section className="gap-10 flex flex-col z-10 relative">
        <Header />
        <div className="mt-20 h-auto w-full gap-10 flex flex-col">
          <AboutMe />
          <Showcase setBallCount={setBallCount} />
        </div>
        <div>
          <Contact />
        </div>
        <Footer />
      </section>
    </section>
  );
}

export default App;
