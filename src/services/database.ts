export interface IProject {
  title: string;
  description: string;
  techs: string[];
  repository: string;
  deploy: string;
}

export const technologies: string[] = [
  "HTML5",
  "CSS3",
  "ES6",
  "Typescript",
  "React",
  "NodeJS",
  "NextJS",
  "SASS",
  "Express",
  "Prisma",
  "PostgreSQL",
  "NestJS",
  "Python",
  "Django",
];

export const projects: IProject[] = [
  {
    title: "Contact_Hub",
    description:
      "Aplicação web fullstack para gerenciamento de clientes e seus contatos.",
    techs: [
      "Typescript",
      "React",
      "Sass",
      "Axios",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/ContactHub_FullStack",
    deploy: "https://contaact-hub.vercel.app/",
  },
  {
    title: "Durval Music Shop",
    description:
      "Aplicação web fullstack em grupo simulando e-commerce com sistema de usuários, permissões, carrinho com verificação de estoque, publicações, filtro de pesquisa, etc...",
    techs: [
      "Typescript",
      "React",
      "Styled-Components",
      "Axios",
      "Prisma",
      "PostgreSQL",
      "Zod",
    ],
    repository:
      "https://github.com/brunomoleta/eCommerce-FullStack-hackaton-kenzie",
    deploy: "https://durval-music-shop.vercel.app/",
  },
  {
    title: "Kenzie Feed",
    description:
      "Aplicação web em grupo simulando jornal com sistema de usuários com permissões de administrador e curtidas, utilizando fake API.",
    techs: ["Javascript", "React", "Sass", "Axios", "Zod"],
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-feed-entrega-template_grupo2_GustavoLazarin",
    deploy: "https://kenzie-feed-grupo-2.vercel.app/",
  },
  {
    title: "Kenzie Hub",
    description:
      "Aplicação web de adição, edição e deleção (CRUD) de tecnologias com esquema avançado de validação de formulários.",
    techs: ["Javascript", "React", "Sass", "Axios", "Zod"],
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_GustavoLazarin",
    deploy: "https://kenzie-hub-gustavolazarin.vercel.app/",
  },
];
