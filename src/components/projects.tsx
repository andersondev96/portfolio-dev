"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { ProjectModal } from "./project-modal";

type Project = {
  title: string;
  description: string;
  url: string;
  github_repo: string;
  image: string;
  badges: string[];
  technologies: { name: string; icon: string }[];
  highlight?: boolean;
};

const projects: Project[] = [
  {
    title: 'DevStore',
    description: 'E-commerce para venda de produtos digitais',
    url: '',
    github_repo: 'https://github.com/andersondev96/next13-devstore',
    image: '/images/devstore.png',
    badges: ['web', 'e-commerce', 'reactjs', 'nextjs'],
    technologies: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Cypress', icon: '/icons/cypress.svg' }
    ],
    highlight: true,
  },
  {
    title: 'Ignite Call',
    description: 'Aplicação para agendamento em barbearias',
    url: 'https://ignite-call-anderson.vercel.app/',
    github_repo: 'https://github.com/andersondev96/ignite-call',
    image: '/images/ignite-call.png',
    badges: ['web', 'agendamento', 'reactjs', 'nextjs'],
    technologies: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
      { name: 'Prisma', icon: '/icons/prisma.svg' }
    ]
  },
  {
    title: 'Ignite Shop',
    description: 'Loja virtual de produtos digitais',
    url: '',
    github_repo: 'https://github.com/andersondev96/ignite-shop',
    image: '/images/ignite-shop.png',
    badges: ['web', 'e-commerce', 'reactjs', 'nextjs'],
    technologies: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
    ]
  },
  {
    title: 'Coffee Delivery',
    description: 'Aplicação para pedidos de café',
    url: 'https://coffeedeliveryproject.netlify.app/',
    github_repo: 'https://github.com/andersondev96/coffee-delivery-react',
    image: '/images/coffee-delivery.png',
    badges: ['web', 'e-commerce', 'reactjs'],
    technologies: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'React Router', icon: '/icons/react-router.svg' },
    ],
    highlight: true,
  },
  {
    title: 'Book Wise',
    description: 'Plataforma para recomendações de livros e avaliações de leitores ',
    url: '',
    github_repo: 'https://github.com/andersondev96/ignite-book-wise',
    image: '',
    badges: ['web', 'reactjs', 'nextjs'],
    technologies: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
    ]
  },
  {
    title: 'Project In Bio',
    description: 'Micro SaaS para criação do portfolio',
    url: 'https://micro-saas-rocketseat-project-in-bi.vercel.app',
    github_repo: 'https://github.com/andersondev96/micro-saas-rocketseat-project-in-bio',
    image: '/images/projectinbio.png',
    badges: ['web', 'saas', 'reactjs', 'nextjs', 'stripe', 'tailwind'],
    technologies: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
      { name: "Stripe", icon: '/icons/stripe.svg' }
    ]
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="w-full overflow-hidden -mb-20" aria-hidden="true">
        <svg
          className="block w-full h-20 text-[#0c0c12]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
        >
          <path d="M0 80L1440 0V80H0Z" fill="currentColor" />
        </svg>
      </div>

      <section
        id="projects"
        aria-labelledby="projects-title"
        className="w-full py-20 bg-[#0c0c12] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.header
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              id="technologies-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
            >
              Projetos
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            />

            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-zinc-300">
              Seleção de projetos que demonstram qualidade de código, experiência do usuário
              e foco em resultado para empresas e clientes finais.
            </p>
          </motion.header>

          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className={`
                  group flex flex-col rounded-3xl bg-[#181823] border border-white/5
                  shadow-lg transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_0_28px_6px_rgba(168,85,247,0.22)]
                  focus-within:ring-2 focus-within:ring-purple-500
                  focus-within:ring-offset-2 focus-within:ring-offset-[#0c0c12]
                  ${project.highlight ? "border-purple-500/60" : ""}
                `}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="relative block overflow-hidden rounded-3xl rounded-b-none focus:outline-none"
                  aria-label={`Ver detalhes do projeto ${project.title}`}
                >
                  <div className="aspect-video w-full bg-zinc-900">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={640}
                        height={360}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-zinc-900/85 text-[11px] font-semibold uppercase tracking-wide text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver detalhes
                  </span>
                </button>

                <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-purple-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-zinc-300">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center rounded-full bg-purple-600/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 justify-start sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center rounded-lg border border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-100 hover:bg-zinc-800/80 transition-colors"
                    >
                      Detalhes
                    </button>

                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-zinc-800/90 px-3 py-2 text-xs font-medium text-zinc-100 hover:bg-zinc-700 transition-colors"
                      >
                        Ver projeto
                      </Link>
                    )}

                    <Link
                      href={project.github_repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-3 py-2 text-xs font-semibold text-white hover:from-purple-500 hover:to-purple-600 transition-colors"
                    >
                      Ver código
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </>
  );
}
