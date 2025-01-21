import TypingText from "./typingText";

function aboutMe() {
  return (
    <div
    id="sobreMim" 
    className=" w-full gap-10 p-2  flex flex-col items-center justify-around">
      <div className="w-2/4 h-auto  p-4 relative right-32 rounded-r-full  bg-bgProjetos md:w-1/4 md:right-72">
        <h1 className="text-xl text-right mr-4 text-white font-mono text-nowrap z-10 bg-transparent md:text-2xl">
          Sobre mim
        </h1>
      </div>
      <div className="w-full h-auto p-4 z-10  md:flex md:flex-col md:items-center md:justify-center">
        <p className="text-lg font-mono text-white md:text-2xl">Igor Bernardes</p>
        <p className="text-5xl font-serif  bg-gradient-to-r from-violet-700 to-pink-500 bg-clip-text text-transparent md:text-7xl">
          <TypingText text="Desenvolvedor" delay={100} />
        </p>
        <p className="text-5xl font-serif bg-gradient-to-r from-violet-700 to-pink-500 bg-clip-text text-transparent  md:text-7xl">
          <TypingText text="Front-end." delay={100} />
        </p>
      </div>
    </div>
  );
}

export default aboutMe;
