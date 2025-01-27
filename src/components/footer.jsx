import Wpp from "../images/footer/wpp.png";

function footer() {
  return (
    <div
      id="contato"
      className="bg-bgProjetos gap-3 text-white w-full h-auto p-3 relative top-7 flex flex-col items-center justify-center"
    >
      <a
        href="https://api.whatsapp.com/send?phone=+5513991246604&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20%20%A0seu%20produto."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Wpp} className="w-6 h-6 md:w-10 md:h-10" />
      </a>
      <p className="md:text-xl">©IgorBernardes</p>
    </div>
  );
}

export default footer;
