function projetos({ projeto }) {
  return (
    <section className="grid grid-cols-1 grid-rows-1  p-2 gap-10 text-white z-10  md:grid-cols-2">
      {projeto.map((proj) => (
        <div
          className="w-full h-full bg-bgProjetos rounded-xl truncate flex flex-col p-2 gap-3  md:relative md:h-[450px]"
          data-aos="fade-up-right"
        >
          <div className="w-full h-44 bg-violet-600 flex flex-row rounded md:h-48">
            <img src={proj.img} alt={proj.name} />
          </div>
          <section className="w-full text-wrap flex flex-col gap-3">
            <h1 className="font-semibold text-xl font-mono md:text-2xl">{proj.name}</h1>
            <p className="font-mono text-base md:text-lg">{proj.desc}</p>
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
        </div>
      ))}
    </section>
  );
}

export default projetos;
