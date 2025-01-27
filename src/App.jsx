import "./App.css";
import Header from "./components/header";
import AboutMe from "./components/about";
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
        </div>
        {/* <Footer /> */}
      </div>
    </section>
  );
}

export default App;
