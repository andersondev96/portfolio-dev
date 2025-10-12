'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { useState } from "react"
import { ProjectModal } from "./project-modal"

type Project = {
  title: string,
  description: string,
  url: string,
  github_repo: string,
  image: string,
  badges: string[],
  technologies: { name: string, icon: string }[],
}

const projects = [
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
    ]
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
    ]
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
     { name: "Stripe", icon: '/icons/stripe.svg'}
    ]
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="w-full overflow-hidden -mb-20">
        <svg
          className="block w-full h-20 text-[#121217]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80L1440 0V80H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <section
        id="projects"
        className="w-full py-20 bg-[#121217] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-12"
          >
            Projetos
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
            {projects.map((project, index) => (
              <motion.div
              key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1f1f28] p-6 rounded-3xl shadow-xl group hover:shadow-[0_0_30px_8px_rgba(168,85,247,0.3)] hover:scale-[1.04] transition-transform duration-300"
                >
                  
                <div
                  onClick={() => setSelectedProject(project)}
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-2xl cursor-pointer"
                  aria-label={`Repositório GitHub do projeto ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <span className="text-xl font-semibold text-purple-400">{project.title}</span>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-5 max-w-[260px] mx-auto">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 justify-center mt-5">
                  {project.technologies.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="bg-gray-700 p-1 rounded-full"
                      title={tech.name}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
  )
}
