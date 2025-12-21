"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { ProjectModal } from "./project-modal";
import { ProjectCard } from "./project-card";

type Project = {
  title: string;
  description: string;
  url: string;
  github_repo: string;
  image: string;
  badges: string[];
  technologies: { name: string; icon: string }[];
  highlight?: boolean;
  role?: string;
  context?: string;
  features?: string[];
  results?: string[];
};

const projects: Project[] = [
  {
    title: "DevStore",
    description: "E-commerce para venda de produtos digitais",
    url: "",
    github_repo: "https://github.com/andersondev96/next13-devstore",
    image: "/images/devstore.png",
    badges: ["web", "e-commerce", "reactjs", "nextjs"],
    technologies: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Cypress", icon: "/icons/cypress.svg" },
    ],
    highlight: true,
    role: "Desenvolvedor full-stack",
    context: "Projeto completo de e-commerce focado em produtos digitais",
    features: [
      "Catálogo de produtos com variações e detalhes individuais",
      "Carrinho persistente com atualização de quantidades",
      "Checkout com fluxo guiado e feedback em cada etapa",
    ],
    results: [
      "Focado em mostrar domínio de fluxo de compra",
      "Demonstra atenção a performance e experiência em dispositivos diferentes",
    ],
  },
  {
    title: "Ignite Call",
    description: "Aplicação para agendamento em barbearias",
    url: "https://ignite-call-anderson.vercel.app/",
    github_repo: "https://github.com/andersondev96/ignite-call",
    image: "/images/ignite-call.png",
    badges: ["web", "agendamento", "reactjs", "nextjs"],
    technologies: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
      { name: "Prisma", icon: "/icons/prisma.svg" },
    ],
    role: "Desenvolvedor full-stack",
    context: "Aplicação de agendamento integrada a calendário",
    features: [
      "Conexão com Google Calendar para evitar horários conflitantes",
      "Configuração de disponibilidade por dia e faixa de horário",
      "Fluxo de agendamento simples para o cliente final",
      "Painel para visualizar compromissos confirmados",
    ],
    results: [
      "Reduz esforço manual de controle de agenda em barbearias",
      "Evidencia experiência com autenticação, banco de dados e UX de formulários",
    ],
  },
  {
    title: "Ignite Shop",
    description: "Loja virtual de produtos digitais",
    url: "",
    github_repo: "https://github.com/andersondev96/ignite-shop",
    image: "/images/ignite-shop.png",
    badges: ["web", "e-commerce", "reactjs", "nextjs"],
    technologies: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
    ],
    role: "Desenvolvedor front-end",
    context: "Loja focada em experiência de compra enxuta",
    features: [
      "Galeria de produtos com destaque visual para itens principais",
      "Carrinho lateral com resumo dinâmico da compra",
      "Feedback visual claro em cada ação (adicionar, remover, finalizar)",
    ],
    results: [
      "Mostra domínio de layout responsivo e UI focada em conversão",
      "Ótimo exemplo de fluxo de compra simples para apresentações rápidas",
    ],
  },
  {
    title: "Coffee Delivery",
    description: "Aplicação para pedidos de café",
    url: "https://coffeedeliveryproject.netlify.app/",
    github_repo: "https://github.com/andersondev96/coffee-delivery-react",
    image: "/images/coffee-delivery.png",
    badges: ["web", "e-commerce", "reactjs"],
    technologies: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "React Router", icon: "/icons/react-router.svg" },
    ],
    highlight: true,
    role: "Desenvolvedor front-end",
    context: "Aplicação SPA para pedidos rápidos de café",
    features: [
      "Listagem de cafés com categorias e descrições",
      "Carrinho com controle de quantidade e cálculo de total",
      "Formulário de endereço integrado ao fluxo de checkout",
    ],
    results: [
      "Demonstra domínio de estado global e navegação em SPA",
      "Exemplo visualmente atrativo para explicar processos de front-end",
    ],
  },
  {
    title: "Book Wise",
    description:
      "Plataforma para recomendações de livros e avaliações de leitores",
    url: "",
    github_repo: "https://github.com/andersondev96/ignite-book-wise",
    image: "",
    badges: ["web", "reactjs", "nextjs"],
    technologies: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
    ],
    role: "Desenvolvedor full-stack",
    context: "Plataforma social focada em leitura e reviews",
    features: [
      "Catálogo de livros com detalhes e avaliações",
      "Sistema de notas e comentários por usuário",
      "Página de perfil com histórico de leituras",
    ],
    results: [
      "Evidencia experiência em produtos com foco em comunidade",
      "Bom exemplo para discutir modelagem de domínio e UX de conteúdo",
    ],
  },
  {
    title: "Project In Bio",
    description: "Micro SaaS para criação do portfolio",
    url: "https://micro-saas-rocketseat-project-in-bi.vercel.app",
    github_repo:
      "https://github.com/andersondev96/micro-saas-rocketseat-project-in-bio",
    image: "/images/projectinbio.png",
    badges: ["web", "saas", "reactjs", "nextjs", "stripe", "tailwind"],
    technologies: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
      { name: "Stripe", icon: "/icons/stripe.svg" },
    ],
    role: "Desenvolvedor full-stack",
    context: "Micro SaaS para centralizar links e projetos em uma única página",
    features: [
      "Criação de página personalizada com links e projetos",
      "Integração com pagamentos via Stripe para plano premium",
      "Painel para gerenciamento de links e estatísticas básicas de acesso",
    ],
    results: [
      "Mostra capacidade de estruturar um produto SaaS de ponta a ponta",
      "Relevante para oportunidades com foco em negócios digitais e monetização",
    ],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="w-full bg-[#141520] py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.header
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              id="projects-title"
              className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl"
            >
              Projetos
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            />

            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
              Seleção de projetos que demonstram qualidade de código,
              experiência do usuário e foco em resultado para empresas e
              clientes finais.
            </p>
          </motion.header>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onSelect={handleSelectProject}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          isOpen={true}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </>
  );
}
