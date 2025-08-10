"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Certificate } from "@phosphor-icons/react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

type Course = {
  logo: string
  institution: string
  title: string
  description: string
  period: string
  topics: string[]
  certificateUrl?: string
}

const courses: Course[] = [
  {
    logo: "/logos/usp-esalq.png",
    institution: "USP/Esalq",
    title: "MBA em Engenharia de Software",
    description:
      "Pós-graduação com foco em desenvolvimento de software, práticas modernas em Cloud, DevOps e Engenharia de Dados.",
    period: "Mai-2025 • atual",
    topics: [
      "Desenvolvimento de software",
      "Cloud & DevOps",
      "Infraestrutura",
      "Arquitetura limpa",
      "Microserviços",
      "Engenharia de dados",
      "Machine Learning",
      "Inteligência Artificial",
      "Metodologias ágeis",
    ],
  },
  {
    logo: "/logos/ufop.png",
    institution: "Universidade Federal de Ouro Preto (UFOP)",
    title: "Bacharelado em Sistemas de Informação",
    description:
      "Curso voltado à gestão da informação e desenvolvimento de sistemas, abordando banco de dados, engenharia de software, IA, redes e muito mais.",
    period: "Mar-2018 • Set-2023",
    topics: [
      "Gestão da informação",
      "Estruturas de dados",
      "Banco de dados",
      "Engenharia de software",
      "Redes de computadores",
      "Sistemas distribuídos",
      "Interação humano-computador",
      "Sistemas Web",
      "Desenvolvimento ágil",
      "Qualidade de software",
      "Machine Learning",
      "Inteligência Artificial",
      "Engenharia de dados",
    ],
    certificateUrl: "#",
  },
  {
    logo: "/logos/senac.png",
    institution: "Serviço Nacional de Aprendizagem Comercial (SENAC-MG)",
    title: "Técnico em Informática",
    description:
      "Curso técnico que ensina fundamentos de algoritmos, SO, arquitetura de computadores, redes e desenvolvimento de software.",
    period: "Nov-2015 • Set-2017",
    topics: [
      "Empreendedorismo",
      "Redes de computadores",
      "Sistemas Operacionais",
      "Arquitetura de Computadores",
      "Algoritmos",
      "Desenvolvimento de software",
    ],
    certificateUrl: "#",
  },
]

export function EducationalBackground() {
  return (
    <section
      id="formations"
      className="relative w-full bg-gradient-to-b from-[#191a20] to-[#1e1f29] bg-cover bg-center"
      aria-label="educational-background"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-lg">
          Formações Acadêmicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl items-stretch">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer h-full"
            >
              <Card className="flex flex-col h-full gap-6 p-6 bg-gray-800 text-white shadow-xl rounded-3xl hover:shadow-gray-600/50 transition-shadow duration-300">
                <CardHeader className="p-0 space-y-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={course.logo}
                      alt={`Logo ${course.institution}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg md:text-xl font-bold leading-tight">
                        {course.institution}
                      </CardTitle>
                      <p className="text-sm text-gray-400">{course.title}</p>
                      <p className="text-xs text-blue-400">{course.period}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-0 space-y-4 text-left">
                  <p className="text-sm leading-relaxed text-gray-200">
                    {course.description}
                  </p>

                  <div>
                    <p className="text-sm font-semibold mb-2">Principais Conteúdos:</p>
                    <div className="flex flex-wrap gap-2 text-xs text-white">
                      {course.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="bg-blue-700/40 px-2 py-1 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {course.certificateUrl && (
                    <a
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-400 hover:underline mt-2"
                    >
                      <Certificate size={18} className="mr-2" />
                      Ver certificado
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
