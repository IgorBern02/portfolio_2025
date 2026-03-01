import { TypingText } from "./TypingText";

export const AboutMe = () => {
  return (
    <div
      className="w-full gap-10 p-2 flex flex-col items-center justify-around scroll-mt-28"
      id="sobreMim"
    >
      <div className="w-full h-auto p-4 z-10 md:flex md:flex-col md:items-center md:text-left ">
        <p className="text-lg font-mono font-medium text-white md:text-2xl md:mr-64 lg:mr-[340px] xl:text-xl xl:mr-[285px] ">
          <TypingText text="Igor Bernardes" delay={100} />
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold tracking-tight">
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
            <p className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              <TypingText text="Desenvolvedor" delay={100} />
            </p>
          </span>
          <br />
          <span className="relative inline-block mt-2">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
            <p className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              <TypingText text="Front-end." delay={100} />
            </p>
          </span>
        </h1>
      </div>

      <div className="w-full h-auto flex flex-row items-center justify-start p-2 gap-4">
        {/* Botão de Baixar Currículo */}
        <div className="border flex items-center p-1 rounded-lg border-white/10">
          <a href="resume.pdf?v=2" download>
            <button className="group relative p-1">
              <svg
                className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 16.5l-4-4h2.5V4h3v8.5H16l-4 4ZM5 18h14v2H5v-2Z"
                />
              </svg>
            </button>
          </a>
        </div>

        {/* Botão LinkedIn */}
        <div className="border flex items-center p-1 rounded-lg border-white/10">
          <a
            href="https://www.linkedin.com/in/igor-bernardes-05aa05204/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative p-1">
              <svg
                className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
