'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

const technologies = [
  { name: 'JavaScript', icon: '/icons/javascript.svg', experience: '5+ anos', description: 'Desenvolvimento de aplicações web interativas e dinâmicas.' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', experience: '5+ anos', description: 'Desenvolvimento de aplicações web escaláveis e de fácil manutenção.' },
  { name: 'Git', icon: '/icons/git.svg', experience: '5+ anos', description: 'Controle de versão e colaboração em projetos de software.' },
  { name: 'React', icon: '/icons/react.svg', experience: '4+ anos', description: 'Construção de interfaces de usuário modernas e responsivas.' },
  { name: 'Node.js', icon: '/icons/nodejs.svg', experience: '4+ anos', description: 'Desenvolvimento de APIs e aplicações web em tempo real.' },
  { name: 'PHP', icon: '/icons/php.svg', experience: '3+ anos', description: 'Desenvolvimento de aplicações web dinâmicas e sistemas de gerenciamento de conteúdo.' },
  { name: 'Python', icon: '/icons/python.svg', experience: '2+ anos', description: 'Desenvolvimento de scripts e automação de tarefas.' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', experience: '2+ anos', description: 'Desenvolvimento de aplicações web com renderização do lado do servidor.' },
  { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg', experience: '2+ anos', description: 'Criação de layouts responsivos e estilização de componentes.' },
  { name: 'Docker', icon: '/icons/docker.svg', experience: '2+ anos', description: 'Containerização de aplicações e gerenciamento de ambientes.' },
]

export function Technologies() {
  return (
    <section
      id="technologies"
      className="w-full py-20 bg-gradient-to-b from-[#121217] to-[#1a1c23] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12"
        >
          Tecnologias
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 p-4 rounded-xl bg-[#1f1f28] hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.25)] transition-shadow"
            >
              <div className="relative z-10 flex flex-col items-center gap-2 p-4 bg-[#1f1f28] rounded-xl">
                <div className="group relative">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 
                      px-3 py-2 bg-zinc-900 text-white text-xs rounded shadow-lg
                      z-50 opacity-0 group-hover:opacity-100 transition
                      max-w-xs break-words whitespace-normal text-center"
                  >
                    {tech.description}
                  </span>
                </div>

              </div>
              <span className="text-sm text-gray-300 font-medium">
                {tech.name}
              </span>
              <span className="text-xs text-purple-400 bg-purple-950 px-2 py-0.5 rounded-full">
                {tech.experience}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
