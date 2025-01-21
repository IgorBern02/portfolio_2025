import React from "react";
import Props from "./propsProjetos";
import RelogioDigital from "../../images/projetos/relogioDigital.png";
import Contador from "../../images/projetos/contador.png"
import LandingPage from "../../images/projetos/landingpaises.png"
import LoginValidado from "../../images/projetos/LoginValidado.png"
import CalculadoraImc from "../../images/projetos/Calculadoraimc.png"
import SistemaBanco from "../../images/projetos/sistemaBanco.png"

const projeto = [
  {
    img: RelogioDigital,
    name: "Relógio Digital",
    desc: "Projeto com a ideia de fazer um Relógio Digital com hora e data ao vivo, feito com Html,Css(Sass),Js.",
    github: "https://github.com/IgorBern02/digital-clock",
    site: "https://igorbern02.github.io/digital-clock/",
  },
  {
    img: Contador,
    name: "Contador",
    desc: "Contador simples com html, css e java script.",
    github: "https://github.com/IgorBern02/Contador",
    site: "https://igucontador.netlify.app/",
  },
  {
    img: LandingPage,
    name: "Landing Page Paises",
    desc: "Landing Page mostrando alguns países, pontos turísticos e belezas naturais.",
    github: "https://github.com/IgorBern02/Travel-Dream",
    site: "https://igorbern02.github.io/Travel-Dream/",
  },
  {
    img: LoginValidado,
    name: "Login Validação",
    desc: "Login com validação feito com fire base.",
    github:"https://github.com/IgorBern02/Login_Validado",
    site: "https://igorbern02.github.io/Login_Validado/",
  },
  {
    img: CalculadoraImc,
    name: "Calculadora IMC",
    desc: "Uma calculadora básica de IMC",
    github: "https://github.com/IgorBern02/Calculadora-IMC",
    site: "https://igucalculadoraimc.netlify.app/",
  },
  {
    img: SistemaBanco,
    name: "Sistema Banco",
    desc: "Um sistema de banco padrão, onde mostra o saldo da conta e atráves dele podemos simular saques e depósitos.",
    github: "https://github.com/IgorBern02/Sistema-Banco",
    site: "https://igorbern02.github.io/Sistema-Banco/",
  },
];

function projects() {
  return (
    <section className="w-full gap-10 p-2 flex flex-col justify-around">
      <div
        className="w-2/5 h-auto p-4 relative right-3 rounded-r-full bg-bgProjetos md:w-1/4"
        id="projetos"
      >
        <h1 className="text-xl text-right mr-4 text-white font-mono bg-transparent md:text-2xl">
          Projetos
        </h1>
      </div>
      <Props projeto={projeto} />
    </section>
  );
}

export default projects;
