import React, { memo, useState, useEffect } from "react";

const TypingText = ({ text, delay }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typedText !== text) {
        setTypedText(typedText + text[typedText.length]);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typedText, text, delay]);

  return <p>{typedText}</p>;
};

const ModelAboutMe = memo(() => {
  return (
    <div
      className=" w-full gap-10 p-2 flex flex-col items-center justify-around"
      id="portfolio"
    >
      <div className="w-full h-auto p-4 z-10 md:flex md:flex-col md:items-center md:text-left ">
        <p className="text-lg font-mono font-medium text-white md:text-2xl md:mr-64 lg:mr-[340px]">
          Igor Bernardes
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
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
      <div className="w-full h-auto  flex flex-row items-center justify-start p-2 gap-4 ">
        <div className="border flex items-center p-1 rounded-lg  border-white/10">
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="group relative p-1">
              <svg
                svg
                class="w-10 h-10 text-gray-400 group-hover:text-white transition-colors md:w-12 md:h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </a>
        </div>

        <div className="border flex items-center p-1 rounded-lg  border-white/10">
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="group relative p-1">
              <svg
                class="w-10 h-10 text-gray-400 group-hover:text-white transition-colors md:w-12 md:h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
});

const AboutMe = () => {
  return <ModelAboutMe />;
};

export default memo(AboutMe);
