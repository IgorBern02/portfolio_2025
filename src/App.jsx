// import "./App.css";
// import React, { useState } from "react";
// import Header from "./components/header";
// import AboutMe from "./components/about";
// import Footer from "./components/footer";
// import Background from "./components/background";
// import Showcase from "./components/showcase";
// import Contact from "./components/contact";

// function App() {
//   return (
//     <section className="h-auto">
//       <Background />
//       <section className="gap-10 flex flex-col ">
//         <Header />
//         <div className="mt-20 h-auto w-full gap-10 flex flex-col">
//           <AboutMe />
//           <Showcase />
//         </div>
//         <div>
//           <Contact />
//         </div>
//         <Footer />
//       </section>
//     </section>
//   );
// }

// export default App;

import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import AboutMe from "./components/about";
import Footer from "./components/footer";
import Background from "./components/background";
import Showcase from "./components/showcase";
import Contact from "./components/contact";

function App() {
  const [ballCount, setBallCount] = useState(5);

  return (
    <section className="relative h-auto w-full overflow-x-hidden">
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
