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
    desc: "API RESTful desenvolvida com Node.js e Express para consulta de informações de veículos, incluindo marca, modelo, ano e preço. O backend possui estrutura modular e endpoints organizados, enquanto o frontend em React consome a API de forma dinâmica, com interface responsiva construída em Tailwind CSS.",
    github: "https://github.com/IgorBern02/cars_site",
    site: "https://cars-site-ochre.vercel.app/",
  },
  {
    img: BelezaEstilo,
    name: "Beleza & Estilo",
    desc: "Protótipo de site institucional para um salão de beleza, focado em experiência do usuário e apresentação profissional do negócio. Desenvolvido com React, Vite e Tailwind CSS, com animações utilizando Framer Motion e simulação de agendamentos via WhatsApp. Totalmente responsivo.",
    github: "https://github.com/IgorBern02/salaodebeleza",
    site: "https://igorbern02.github.io/salaodebeleza/",
  },

  {
    img: FakeStore,
    name: "Fake Store",
    desc: "Aplicação de e-commerce desenvolvida em React com TypeScript, simulando uma loja online completa. Possui catálogo de produtos, carrinho de compras e fluxo de checkout, com gerenciamento de estado e integração com a Fake Store API. Interface responsiva construída com Tailwind CSS.",
    github: "https://github.com/IgorBern02/fakestore",
    site: "https://fakestore-amber.vercel.app/",
  },
  {
    img: GerarCertificado,
    name: "Gerador de Certificado",
    desc: "Ferramenta web para criação de certificados personalizados de forma rápida e intuitiva. Permite inserir dados dinâmicos e gerar certificados prontos para download ou impressão. Desenvolvido com foco em usabilidade, layout profissional e geração de documentos em tempo real.",
    github: "https://github.com/IgorBern02/gerador-certificado",
    site: "gerador-certificado-beta.vercel.app",
  },
];
