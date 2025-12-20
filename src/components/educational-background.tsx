"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CertificateIcon } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Course = {
  logo: string;
  institution: string;
  title: string;
  description: string;
  period: string;
  topics: string[];
  certificateUrl?: string;
};

const courses: Course[] = [
  {
    logo: "/logos/usp-esalq.png",
    institution: "USP/Esalq",
    title: "MBA em Engenharia de Software",
    description:
      "Pós-graduação voltada para desenvolvimento de software moderno, Cloud, DevOps e Engenharia de Dados aplicada ao negócio.",
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
      "Formação em engenharia de software e gestão da informação, com foco em bancos de dados, redes, IA e desenvolvimento de sistemas.",
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
    certificateUrl: "/diploma.pdf",
  },
  {
    logo: "/logos/senac.png",
    institution: "Serviço Nacional de Aprendizagem Comercial (SENAC-MG)",
    title: "Técnico em Informática",
    description:
      "Base sólida em lógica, sistemas operacionais, redes e desenvolvimento de software, com projetos práticos.",
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
];

export function EducationalBackground() {
  return (
    <section
      id="formations"
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#141620] to-[#0f1118]"
      aria-labelledby="formations-title"
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
            id="formations-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
          >
            Formações Acadêmicas
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          />
          <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-gray-300">
            Formação alinhada a desenvolvimento de software, arquitetura e
            dados, conectando base acadêmica sólida com prática em projetos
            reais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch"
        >
          {courses.map((course, index) => (
            <motion.article
              key={course.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-[#191a20] rounded-3xl"
            >
              <Card className="flex flex-col h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700/80 hover:border-purple-500/60 shadow-lg hover:shadow-2xl hover:shadow-purple-700/30 rounded-3xl overflow-hidden">
                <CardHeader className="p-6 pb-4 md:p-8 md:pb-5">
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gray-800/70 flex items-center justify-center border border-gray-700/80">
                      <Image
                        src={course.logo}
                        alt={`Logo ${course.institution}`}
                        fill
                        sizes="56px"
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="flex-1 text-left">
                      <CardTitle className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                        {course.institution}
                      </CardTitle>
                      <p className="text-xs md:text-sm text-gray-300 mt-1">
                        {course.title}
                      </p>
                      <p className="mt-1 inline-flex items-center text-[11px] md:text-xs font-medium text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/30">
                        {course.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 md:px-8 md:pb-8 pt-0 flex flex-col gap-4 text-left">
                  <p className="text-sm md:text-base leading-relaxed text-gray-200">
                    {course.description}
                  </p>

                  <div>
                    <p className="text-sm md:text-base font-semibold mb-2 text-gray-100">
                      Principais conteúdos:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[11px] md:text-xs px-2.5 py-1 rounded-full bg-purple-900/40 text-purple-100 border border-purple-700/40 whitespace-nowrap"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {course.certificateUrl && (
                    <div className="pt-2">
                      <a
                        href={course.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs md:text-sm text-blue-300 hover:text-blue-200 hover:underline"
                      >
                        <CertificateIcon size={18} weight="bold" />
                        Ver certificado
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
