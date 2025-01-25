import "./Ball.css";

function background() {
  return (
    <div className="absolute top-0 w-full h-auto md:grid md:grid-cols-2 xl:ml-24">
      <div className="w-80 h-80 rounded-full bg-violet-800 mt-20 ml-10 blur-[110px] animate-bounce"></div>
      <div className="w-80 h-80 rounded-full bg-pink-500 mt-20 ml-10 blur-[110px] animate-bounce md:bg-violet-800"></div>
      <div className="w-80 h-80 rounded-full bg-violet-800 mt-20 ml-10 blur-[110px] animate-bounce md:bg-pink-500"></div>
      <div className="w-80 h-80 rounded-full bg-pink-500 mt-20 ml-10 blur-[110px] animate-bounce md:bg-pink-500"></div>
      <div className="w-80 h-80 rounded-full bg-violet-800 mt-20 ml-10 blur-[110px] animate-bounce "></div>
      <div className="w-80 h-80 rounded-full bg-pink-500 mt-20 ml-10 blur-[110px] animate-bounce md:bg-violet-800"></div>
      <div className="w-80 h-80 rounded-full bg-violet-800 mt-20 ml-10 blur-[110px] animate-bounce md:bg-pink-500"></div>
      <div className="w-80 h-80 rounded-full bg-pink-500 mt-20 ml-10 blur-[110px]  animate-bounce "></div>
      <div className="hidden w-80 h-80 rounded-full bg-violet-800 mt-20 ml-10 blur-[110px] animate-bounc md:flex md:bg-violet-800"></div>
      <div className="hidden w-80 h-80 rounded-full bg-pink-500 mt-20 ml-10 blur-[110px] animate-bounce md:flex md:bg-violet-800"></div>
      <div className="hidden w-80 h-80 rounded-full bg-violet-800 mt-20 ml-10 blur-[110px] animate-bounce md:flex md:bg-pink-500"></div>
      <div className="hidden w-80 h-80 rounded-full bg-pink-500 mt-20 ml-10 blur-[110px] animate-bounce md:flex md:bg-pink-500"></div>
    </div>
  );
}

export default background;
