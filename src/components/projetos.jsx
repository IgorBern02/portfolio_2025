import React, { memo, useState } from "react";
import { motion } from "framer-motion"; // Importando o framer-motion
import RelogioDigital from "../images/projetos/relogioDigital.png";
import Contador from "../images/projetos/contador.png";
import LoginValidado from "../images/projetos/LoginValidado.png";
import CalculadoraImc from "../images/projetos/Calculadoraimc.png";
import SistemaBanco from "../images/projetos/sistemaBanco.png";

const arrayprojects = [
  {
    img: RelogioDigital,
    name: "Relógio Digital",
    desc: "Projeto com a ideia de fazer um Relógio Digital com hora e data ao vivo, feito com Html,Css(Sass),Js.",
    github: "https://github.com/IgorBern02/digital-clock",
    site: "https://igorbern02.github.io/digital-clock/",
  },
  {
    img: Contador,
    name: "Contador",
    desc: "Contador simples com html, css e java script.",
    github: "https://github.com/IgorBern02/Contador",
    site: "https://igucontador.netlify.app/",
  },

  {
    img: LoginValidado,
    name: "Login Validação",
    desc: "Login com validação feito com fire base.",
    github: "https://github.com/IgorBern02/Login_Validado",
    site: "https://igorbern02.github.io/Login_Validado/",
  },
  {
    img: CalculadoraImc,
    name: "Calculadora IMC",
    desc: "Uma calculadora básica de IMC",
    github: "https://github.com/IgorBern02/Calculadora-IMC",
    site: "https://igucalculadoraimc.netlify.app/",
  },
  {
    img: SistemaBanco,
    name: "Sistema Banco",
    desc: "Um sistema de banco padrão, onde mostra o saldo da conta e atráves dele podemos simular saques e depósitos.",
    github: "https://github.com/IgorBern02/Sistema-Banco",
    site: "https://igorbern02.github.io/Sistema-Banco/",
  },
];

const ModalProjects = memo(({ projects }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className=" grid grid-cols-1 overflow-y-auto p-2 gap-10 text-white z-10  md:grid-cols-2">
      {projects.slice(0, showMore ? projects.length : 3).map((proj) => (
        <motion.div
          className="w-full h-auto bg-bgProjetos rounded-xl truncate flex flex-col p-2 gap-3  md:relative md:h-[450px]"
          whileInView={{ opacity: 1, y: 0 }} // Animação ao entrar na visualização
          initial={{ opacity: 0, y: 30 }} // Inicialmente invisível e abaixo
          transition={{ duration: 0.8 }} // Duração da animação
          key={proj.name}
        >
          <div className="w-full h-44 bg-violet-600 flex flex-row rounded md:h-48">
            <img src={proj.img} alt={proj.name} />
          </div>
          <section className="w-full text-wrap flex flex-col gap-3">
            <h1 className="font-semibold text-xl font-mono md:text-2xl">
              {proj.name}
            </h1>
            <p className="font-mono text-base md:text-xl">{proj.desc}</p>
          </section>
          <section className="flex flex-row justify-end items-center gap-2 md:absolute md:bottom-2 md:right-5 w-full">
            <a href={proj.github} target="_blank">
              <button type="button">
                <svg
                  class="w-10 h-10 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </a>
            <a href={proj.site} target="_blank">
              <button type="button">
                <svg
                  class="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M1 7h18M4 4h.01M7 4h.01M10 4h.01M3 17h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
                  />
                </svg>
              </button>
            </a>
          </section>
        </motion.div>
      ))}
      <button
        onClick={handleShowMore}
        className="flex flex-row items-center justify-center border border-white/20 w-full text-lg text-white py-2 rounded-lg backdrop-blur-xl cursor-pointer"
      >
        {showMore ? "Ver Menos" : "Ver Mais"}
        {showMore ? (
          // Seta para cima ao lado de "Ver Menos"
          <svg
            className="w-6 h-6 text-white ml-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m5 15 7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-white ml-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
          // Seta para baixo ao lado de "Ver Mais"
        )}
      </button>
    </section>
  );
});

const Projects = () => {
  return (
    <section className="w-full h-auto gap-10 p-2 flex flex-col z-50">
      <ModalProjects projects={arrayprojects} />
    </section>
  );
};

export default memo(Projects);
