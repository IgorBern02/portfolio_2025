function tecnologias({ tecno }) {
  return (
    <section className="w-full h-auto p-2 grid grid-cols-4 grid-rows-2 gap-2 z-40  md:grid-cols-4 ">
      {tecno.map((tec) => (
        <div className="w-20 h-20 bg-bgProjetos rounded-full flex items-center justify-center md:w-32 md:h-32 md:ml-5">
          <img src={tec.icon} alt={tec.name} className="w-10 h-10 md:w-20 md:h-20"/>
        </div>
      ))}
    </section>
  );
}

export default tecnologias;
