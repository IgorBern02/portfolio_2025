import Appapifilmes from "../../assets/images/projects/appapifilmes.png";
import N8nIA from "../../assets/images/projects/n8nIA.png";
// import LoginValidado from "../../assets/images/projects/loginvalidado.png";
import SistemaBanco from "../../assets/images/projects/sistemabanco.png";
import TodoList from "../../assets/images/projects/todolist.png";
import BelezaEstilo from "../../assets/images/projects/beleza&estilo.png";
import APIcars from "../../assets/images/projects/apicars.png";
import GerarCertificado from "../../assets/images/projects/gerarcertificado.png";
import FakeStore from "../../assets/images/projects/fakestore.png";
import { Project } from "@/src/types/types";

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
    img: GerarCertificado,
    name: "Gerador de Certificado",
    desc: "GeradorCertificado é uma ferramenta rápida e intuitiva para criar certificados personalizados online. Insira os dados desejados, e em poucos cliques gere um certificado visualmente agradável, pronto para download ou impressão.",
    github: "https://github.com/IgorBern02/gerador-certificado",
    site: "gerador-certificado-beta.vercel.app",
  },
  {
    img: FakeStore,
    name: "Fake Store",
    desc: "Projeto de e-commerce que simula uma loja online, com catálogo de produtos, carrinho de compras e checkout. Desenvolvido com React, Vite, Tailwind CSS e TypeScript. Utiliza a Fake Store API para obter dados dos produtos.",
    github: "https://github.com/IgorBern02/fakestore",
    site: "https://fakestore-amber.vercel.app/",
  },
  {
    img: APIcars,
    name: "API de Carros",
    desc: "Uma API de carros que permite consultar informações sobre diversos modelos, incluindo marca, modelo, ano e preço. Desenvolvida com Node.js e Express. E o frontend foi feito com React e Tailwind.",
    github: "https://github.com/IgorBern02/cars_site",
    site: "https://cars-site-ochre.vercel.app/",
  },
  {
    img: BelezaEstilo,
    name: "Beleza & Estilo",
    desc: "Prótotipo de site para um salão de beleza, resposivo e feito com react, vite, tailwind e framer-motion. Com simulação de agendamentos via WhatsApp.",
    github: "https://github.com/IgorBern02/salaodebeleza",
    site: "https://igorbern02.github.io/salaodebeleza/",
  },

  {
    img: TodoList,
    name: "Todo List",
    desc: "Projeto de lista de tarefas simples e funcional. Permite adicionar, filtrar, editar e remover tarefas, com persistência dos dados via API local (json-server).",
    github: "https://github.com/IgorBern02/ToDoList",
    site: "https://igorbern02.github.io/ToDoList/",
  },
];
