import React from "react";
import Props from "./propsSkills";
import Html from "../../images/skills/html.png";
import Css from "../../images/skills/css.png";
import Sass from "../../images/skills/sass.png";
import Tailwind from "../../images/skills/tailwind.png";
import Bootstrap from "../../images/skills/bootstrap.png";
import JavaScript from "../../images/skills/javascript.png";
import ReactLogo from "../../images/skills/react.png";
import Git from "../../images/skills/git.png";

const tecno = [
  {
    // HTML
    icon: Html,
    name: "html" ,
  },
  {
    // CSS
    icon: Css,
    name: "css" ,
    
  },
  {
    // SASS
    icon: Sass,
    name: "sass" ,
  },
  {
    // TAILWIND
    icon: Tailwind,
    name: "tailwind" ,
  },
  {
    // BOOTSTRAP
    icon: Bootstrap,
    name: "bootstrap" ,
  },
  {
    // JAVASCRIPT
    icon: JavaScript,
    name: "javaScript" ,
  },
  {
    // REACT
    icon: ReactLogo,
    name: "react" ,
  },
   {
    // GIT
    icon: Git,
    name: "git" ,
  },
  
 
];

function skills() {
  return (
    <section className="w-full h-2/4 p-2 flex flex-col justify-around gap-10 z-20 ">
      <div className="w-3/6 h-auto p-4 relative right-3 rounded-r-full bg-bgProjetos md:w-2/6">
        <h1 className="text-xl text-right mr-4 text-white font-mono bg-transparent md:text-2xl">
          Conhecimento
        </h1>
      </div>
      <Props tecno={tecno} 
      />
    </section>
  );
}

export default skills;
