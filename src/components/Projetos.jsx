import { memo, useState } from "react";
import { motion } from "framer-motion"; // Importando o framer-motion
import Appapifilmes from "../images/projetos/appapifilmes.png";
import LoginValidado from "../images/projetos/loginValidado.png";
import SistemaBanco from "../images/projetos/sistemaBanco.png";
import N8nIA from "../images/projetos/n8nIA.png";

const arrayprojects = [
  {
    img: Appapifilmes,
    name: "API de Filmes",
    desc: "Uma pagina que consome uma API de filmes, onde podemos ver a descrição de diversos filmes e fazer pesquisa pelo nome deles.",
    github: "https://github.com/IgorBern02/app-api-filmes",
    site: "https://igorbern02.github.io/app-api-filmes/",
  },
  {
    img: N8nIA,
    name: "Gerador de codigo CSS",
    desc: "Projeto que utiliza inteligência artificial para gerar estilos CSS personalizados com base em comandos de texto. Integrado com o n8n para automatizar o fluxo entre a interface e a IA.",
    github: "https://github.com/IgorBern02/n8n-css-ia",
    site: "https://igorbern02.github.io/n8n-css-ia/",
  },
  {
    img: LoginValidado,
    name: "Login Validação",
    desc: "Login com validação feito com firebase.",
    github: "https://github.com/IgorBern02/Login_Validado",
    site: "https://igorbern02.github.io/Login_Validado/",
  },
  {
    img: SistemaBanco,
    name: "Sistema Banco",
    desc: "Um sistema de banco padrão, onde mostra o saldo da conta e através dele podemos simular saques e depósitos.",
    github: "https://github.com/IgorBern02/Sistema-Banco",
    site: "https://igorbern02.github.io/Sistema-Banco/",
  },
];

const ModalProjects = memo(({ projects, setBallCount }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768 && screenWidth < 1024) {
      // TABLET
      setShowMore(!showMore);
      setBallCount(showMore ? 5 : 7);
    } else if (screenWidth >= 1024) {
      // DESKTOP
      setShowMore(!showMore);
      setBallCount(showMore ? 5 : 7);
    } else {
      setShowMore(!showMore);
      setBallCount(showMore ? 5 : 6);
    }
  };

  return (
    <section
      id="portfolio"
      className="grid grid-cols-1  p-2 gap-10 text-white z-10 scroll-mt-52 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.slice(0, showMore ? projects.length : 3).map((proj, index) => (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="w-full h-auto bg-bgProjetos rounded-xl truncate flex flex-col p-2 gap-3 cursor-pointer md:relative md:h-[450px] lg:h-[500px] xl:h-[460px] hover:scale-110"
          key={proj.name}
        >
          <div className="w-full h-44 flex flex-row rounded md:h-48 lg:h-52 xl:h-44">
            <a href={proj.site} target="_blank" rel="noopener noreferrer">
              <img
                src={proj.img}
                alt={proj.name}
                className="w-full object-cover rounded"
              />
            </a>
          </div>
          <section className="w-full text-wrap flex flex-col gap-3 p-2">
            <h1 className="font-semibold text-xl font-mono md:text-2xl xl:text-lg">
              {proj.name}
            </h1>
            <p className="font-mono text-base md:text-xl xl:text-base">
              {proj.desc}
            </p>
          </section>
          <section className="w-full flex flex-row justify-end items-center gap-2 md:absolute md:bottom-2 md:right-5 md:gap-4">
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${proj.name} GitHub`}
            >
              <button type="button" aria-hidden="true">
                <svg
                  className="w-10 h-10 text-white md:w-12 md:h-12 xl:w-9 xl:h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </a>
            <a
              href={proj.site}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${proj.name} Site`}
            >
              <button type="button" aria-hidden="true">
                <svg
                  className="w-10 h-10 text-white xl:w-9 xl:h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M1 7h18M4 4h.01M7 4h.01M10 4h.01M3 17h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
                  />
                </svg>
              </button>
            </a>
          </section>
        </motion.div>
      ))}
      <div className="col-span-full flex justify-center mt-4">
        <button
          onClick={handleShowMore}
          className="flex flex-row items-center justify-center border border-white/20 w-full text-lg text-white py-2 rounded-lg backdrop-blur-xl cursor-pointer md:text-xl md:py-4 xl:text-base hover:border-white hover:duration-300"
        >
          {showMore ? "Ver Menos" : "Ver Mais"}
          {showMore ? (
            // Seta para cima ao lado de "Ver Menos"
            <svg
              className="w-6 h-6 text-white ml-4 md:w-8 xl:w-5 xl:h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          ) : (
            // Seta para baixo ao lado de "Ver Mais"
            <svg
              className="w-6 h-6 text-white ml-4 xl:w-5 xl:h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
});

const Projects = ({ setBallCount }) => {
  return (
    <section className="w-full h-auto gap-10 p-2 flex flex-col z-50">
      <ModalProjects projects={arrayprojects} setBallCount={setBallCount} />
    </section>
  );
};

export default memo(Projects);
