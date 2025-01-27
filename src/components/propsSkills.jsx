function tecnologias({ tecno }) {
  return (
    <section className="w-full h-auto p-2 grid grid-cols-2  gap-5 z-40 md:grid-cols-4 xl:w-3/4 ">
      {tecno.map((tec) => (
        <div className="w-30 h-30 bg-bgProjetos rounded-xl gap-2 p-3 flex flex-col items-center justify-center md:w-32 md:h-32 md:ml-5 xl:ml-20">
          <img
            src={tec.icon}
            alt={tec.name}
            className="w-12 h-12 md:w-20 md:h-20"
          />
          <p className="text-lg text-white ">{tec.name}</p>
        </div>
      ))}
    </section>
  );
}

export default tecnologias;
