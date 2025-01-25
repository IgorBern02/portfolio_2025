import TypingText from "./typingText";
import Undraw from "../../images/about/undraw.png";
function aboutMe() {
  return (
    <div
      id="sobreMim"
      className=" w-full gap-10 p-2 flex flex-col items-center justify-around  "
    >
      <div className="w-2/4 h-auto  p-4 relative right-32 rounded-r-full  bg-bgProjetos md:w-1/4 md:right-80 xl:right-[500px] hidden">
        <h1 className="text-xl text-right mr-4 text-white font-mono text-nowrap z-10 bg-transparent md:text-2xl ">
          Sobre mim
        </h1>
      </div>
      {/* <div className="w-full h-auto p-4 z-10  md:flex md:flex-col md:items-center md:justify-center">
        <p className="text-lg font-mono font-medium text-white md:text-2xl ">
          Igor Bernardes
        </p>
        <p className="text-5xl font-serif font-semibold  bg-gradient-to-r from-[#dd35ff] to-[#6366f1] bg-clip-text text-transparent md:text-7xl">
          <TypingText text="Desenvolvedor" delay={100} />
        </p>
        <p className="text-5xl font-serif font-semibold bg-gradient-to-r from-[#dd35ff] to-[#6366f1] bg-clip-text text-transparent  md:text-7xl">
          <TypingText text="Front-end." delay={100} />
        </p>
      </div> */}
      <div className="w-full h-auto p-4 z-10  md:flex md:flex-col md:items-center md:justify-center">
        <p className="text-lg font-mono font-medium text-white md:text-2xl ">
          Igor Bernardes
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
            {/* <p className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              <TypingText text="Desenvolvedor" delay={100} />
            </p> */}
            <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Desenvolvedor
            </span>
          </span>
          <br />
          <span className="relative inline-block mt-2">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Front-end.
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default aboutMe;
