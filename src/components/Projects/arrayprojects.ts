import Appapifilmes from "../../assets/images/projects/appapifilmes.png";
import N8nIA from "../../assets/images/projects/n8nIA.png";
import LoginValidado from "../../assets/images/projects/loginvalidado.png";
import SistemaBanco from "../../assets/images/projects/sistemabanco.png";
import { Project } from "../../types/types";

export const arrayprojects: Project[] = [
  {
    img: Appapifilmes,
    name: "API de Filmes",
    desc: "Uma página que consome uma API de filmes, onde podemos ver a descrição de diversos filmes e fazer pesquisa pelo nome deles.",
    github: "https://github.com/IgorBern02/app-api-filmes",
    site: "https://igorbern02.github.io/app-api-filmes/",
  },
  {
    img: N8nIA,
    name: "Gerador de código CSS",
    desc: "Projeto que utiliza inteligência artificial para gerar estilos CSS personalizados com base em comandos de texto. Integrado com o n8n para automatizar o fluxo entre a interface e a IA.",
    github: "https://github.com/IgorBern02/n8n-css-ia",
    site: "https://igorbern02.github.io/n8n-css-ia/",
  },
  {
    img: LoginValidado,
    name: "Login Validação",
    desc: "Login com validação feito com Firebase.",
    github: "https://github.com/IgorBern02/Login_Validado",
    site: "https://igorbern02.github.io/Login_Validado/",
  },
  {
    img: SistemaBanco,
    name: "Sistema Banco",
    desc: "Um sistema de banco padrão, onde mostra o saldo da conta e podemos simular saques e depósitos.",
    github: "https://github.com/IgorBern02/Sistema-Banco",
    site: "https://igorbern02.github.io/Sistema-Banco/",
  },
];
