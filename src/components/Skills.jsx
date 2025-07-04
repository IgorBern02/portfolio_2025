import React, { memo } from "react";
import { motion } from "framer-motion"; // Importando o framer-motion
import Html from "../images/skills/html.png";
import Css from "../images/skills/css.png";
import Sass from "../images/skills/sass.png";
import Tailwind from "../images/skills/tailwind.png";
import Bootstrap from "../images/skills/bootstrap.png";
import JavaScript from "../images/skills/javascript.png";
import ReactLogo from "../images/skills/react.png";
import Git from "../images/skills/git.png";
import GitHub from "../images/skills/github.png";
import Node from "../images/skills/node.png";
import Mysql from "../images/skills/mysql.png";
import Mongo from "../images/skills/mongo.png";
import TypeScript from "../images/skills/typescript.webp";

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
    // TYPE SCRIPT
    icon: TypeScript,
    name: "typescript",
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
  {
    // GITHUB
    icon: GitHub,
    name: "github",
  },
  {
    // NODE
    icon: Node,
    name: "node",
  },
  {
    // MONGO
    icon: Mongo,
    name: "mongodb",
  },
  {
    // MYSQL
    icon: Mysql,
    name: "mysql",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ModalSkills = memo(({ tecno }) => {
  return (
    <section className=" w-full h-auto p-2 grid grid-cols-2 gap-5 z-10 md:grid-cols-4 xl:w-3/4">
      {tecno.map((tec, index) => (
        <motion.div
          key={tec.name}
          className="w-30 h-30 bg-bgProjetos  rounded-xl gap-2 p-3  flex flex-col items-center justify-center md:w-32 md:h-32 md:ml-5 md:p-8 lg:ml-20 xl:p-8 xl:w-28 xl:h-28 hover:scale-110 hover:duration-200"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <img
            src={tec.icon}
            alt={tec.name}
            className="w-12 h-12 md:w-20 md:h-20 xl:w-12 xl:h-12"
          />
          <p className="text-lg md:text-xl text-white xl:text-base">
            {tec.name}
          </p>
        </motion.div>
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
