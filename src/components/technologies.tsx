"use client"

import { motion } from "motion/react";
import Image from "next/image";

const technologies = [
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    experience: "5+ anos",
    description: "Base para desenvolvimento front-end e back-end com foco em aplicações web interativas.",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    experience: "5+ anos",
    description: "Código mais seguro e escalável em projetos de médio e grande porte.",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
    experience: "5+ anos",
    description: "Fluxos de versionamento, code review e trabalho em equipe.",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    experience: "4+ anos",
    description: "Interfaces modernas, componentização e experiência do usuário.",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    experience: "4+ anos",
    description: "APIs, serviços back-end e aplicações em tempo real.",
  },
  {
    name: "PHP",
    icon: "/icons/php.svg",
    experience: "3+ anos",
    description: "Aplicações web, APIs e manutenção de sistemas legados.",
  },
  {
    name: "Python",
    icon: "/icons/python.svg",
    experience: "2+ anos",
    description: "Scripts, automações e suporte a tarefas de dados.",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    experience: "2+ anos",
    description: "Aplicações React otimizadas com SSR, SSG e ótima performance.",
  },
  {
    name: "TailwindCSS",
    icon: "/icons/tailwindcss.svg",
    experience: "2+ anos",
    description: "Layouts responsivos e consistentes com rapidez.",
  },
  {
    name: "Docker",
    icon: "/icons/docker.svg",
    experience: "2+ anos",
    description: "Ambientes isolados, reprodutíveis e preparados para produção.",
  },
];

export function Technologies() {
  return (
    <section
      id="technologies"
      className="w-full pt-16 md:pt-24 pb-24 md:pb-32 bg-gradient-to-b from-[#141620] to-[#0f1118] text-white"
      aria-labelledby="technologies-title"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            id="technologies-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
          >
            Tecnologias
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          />
          <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-gray-300">
            Stack focada em aplicações web modernas, escaláveis e fáceis de manter,
            combinando front-end, back-end e infraestrutura.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.article
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-[#121217] rounded-2xl"
            >
              <div className="flex flex-col items-center gap-3 rounded-2xl bg-[#1f1f28]/90 border border-gray-800/80 hover:border-purple-500/60 shadow-md hover:shadow-purple-900/30 px-4 py-5 md:px-5 md:py-6 transition-all duration-300">
                <div className="relative group" aria-hidden="true">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                  />
                  <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-52 -translate-x-1/2 rounded-md bg-black/90 px-3 py-2 text-xs text-gray-100 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                    {tech.description}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="text-sm md:text-base font-semibold text-white">
                    {tech.name}
                  </h3>
                  <span className="text-[11px] md:text-xs inline-flex items-center rounded-full bg-purple-500/10 px-2.5 py-0.5 text-purple-200 border border-purple-500/40">
                    {tech.experience} de experiência
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
