import "./App.css";
import Header from "./components/header";
import AboutMe from "./components/about";
import Footer from "./components/footer";
import Background from "./components/background";
import Showcase from "./components/showcase";
import Contact from "./components/contact";

function App() {
  return (
    <section className="h-auto">
      <Background />
      <section className="gap-10 flex flex-col ">
        <Header />
        <div className="mt-20 h-auto w-full gap-10 flex flex-col">
          <AboutMe />
          <Showcase />
        </div>
        <div>
          <Contact />
        </div>
        {/* <div className="w-full bg-blue-500 p-2 mt-[1500px]">
          <Contact />
        </div> */}
        {/* <Footer /> */}
      </section>
    </section>
  );
}

export default App;
