import React, { memo } from "react";

import Html from "../images/skills/html.png";
import Css from "../images/skills/css.png";
import Sass from "../images/skills/sass.png";
import Tailwind from "../images/skills/tailwind.png";
import Bootstrap from "../images/skills/bootstrap.png";
import JavaScript from "../images/skills/javascript.png";
import ReactLogo from "../images/skills/react.png";
import Git from "../images/skills/git.png";

const tecno = [
  {
    // HTML
    icon: Html,
    name: "html",
  },
  {
    // CSS
    icon: Css,
    name: "css",
  },
  {
    // SASS
    icon: Sass,
    name: "sass",
  },
  {
    // TAILWIND
    icon: Tailwind,
    name: "tailwind",
  },
  {
    // BOOTSTRAP
    icon: Bootstrap,
    name: "bootstrap",
  },
  {
    // JAVASCRIPT
    icon: JavaScript,
    name: "javaScript",
  },
  {
    // REACT
    icon: ReactLogo,
    name: "react",
  },
  {
    // GIT
    icon: Git,
    name: "git",
  },
];

const ModalSkills = memo(({ tecno }) => {
  return (
    <section className="w-full h-auto p-2 grid grid-cols-2 gap-5 z-40 md:grid-cols-4 xl:w-3/4 ">
      {tecno.map((tec) => (
        <div className="w-30 h-30 bg-bgProjetos rounded-xl gap-2 p-3 flex flex-col items-center justify-center md:w-32 md:h-32 md:ml-5 md:p-8 xl:ml-20">
          <img
            src={tec.icon}
            alt={tec.name}
            className="w-12 h-12 md:w-20 md:h-20"
          />
          <p className="text-lg text-white md:text-2xl">{tec.name}</p>
        </div>
      ))}
    </section>
  );
});

const Skills = () => {
  return (
    <section className="w-full h-2/4 p-2 flex flex-col justify-around items-center gap-10 z-20 ">
      <ModalSkills tecno={tecno} />
    </section>
  );
};

export default memo(Skills);
