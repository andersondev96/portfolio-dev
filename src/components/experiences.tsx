"use client"

import { motion } from "framer-motion";
import { ExperienceCard } from "./experience-card";

const experiencesData = [
  {
    id: 1,
    company: "Lumiun Tecnologia",
    description: "Soluções para Gestão e Segurança da Internet com filtros DNS.",
    period: "Jul-2022 • atual",
    badges: ["Desenvolvimento", "Segurança", "Versionamento", "Ágil"],
    roles: [
      {
        title: "Desenvolvedor Full-Stack",
        period: "Mar-2020 • Ago-2020",
        responsibilities: [
          "Desenvolvimento de plataformas de controle e acesso à Internet",
          "PHP, Laravel, JavaScript, Livewire, VueJS, AlpineJS",
          "Versionamento com Git",
          "Gerenciamento de containers",
          "Boas práticas e metodologias ágeis"
        ]
      }
    ]
  },
  {
    id: 2,
    company: "Precato",
    description: "Empresa especializada na negociação de precatórios.",
    badges: ["Desenvolvimento", "Boas Práticas", "Back-end", "Ágil"],
    period: "Mar-2021 • Jan-2022",
    roles: [
      {
        title: "Desenvolvedor Back-End",
        period: "Mar-2021 • Jan-2022",
        responsibilities: [
          "Desenvolvimento do sistema interno",
          "Node.js, TypeScript, Git, Docker",
          "Boas práticas de software: SOLID, Clean Code, arquitetura",
          "Documentação e metodologias ágeis"
        ]
      }
    ]
  },
  {
    id: 3,
    company: "Visão Tecnologia e Sistemas",
    description: "Empresa júnior da UFOP com foco em sistemas e websites.",
    period: "Ago-2019 • Jan-2022",
    badges: ["Liderança", "Empreendedorismo", "Empresa Júnior", "MEJ"],
    roles: [
      {
        title: "Vice-presidente",
        period: "Jan-2021 • Jan-2022",
        responsibilities: [
          "Planejamento estratégico e controle de metas",
          "Gestão organizacional e financeira"
        ]
      },
      {
        title: "Diretor de Projetos",
        period: "Ago-2020 • Jan-2021",
        responsibilities: [
          "Intermediação com clientes e execução de projetos",
          "Capacitação do time de projetos"
        ]
      },
      {
        title: "Desenvolvedor Web",
        period: "Ago-2019 • Jan-2022",
        responsibilities: [
          "Desenvolvimento com HTML, CSS, JS, PHP, Node e React",
          "Coleta de requisitos, qualidade de software, metodologias ágeis"
        ]
      },
      {
        title: "Assessor de Marketing",
        period: "Ago-2019 • Ago-2020",
        responsibilities: [
          "Campanhas, identidade visual, conteúdo e redes sociais"
        ]
      }
    ]
  },
  {
    id: 4,
    company: "Núcleo Vale do Aço – FEJEMG",
    description: "Núcleo mineiro do Movimento Empresa Júnior",
    period: "Mar-2020 • Ago-2020",
    badges: ["Liderança", "Comunicação", "Empresa Júnior", "MEJ"],
    roles: [
      {
        title: "Assessor de Comunicação",
        period: "Mar-2020 • Ago-2020",
        responsibilities: [
          "Criação de conteúdos, blog e e-books formativos",
          "Gestão de redes sociais e reuniões de diretoria"
        ]
      }
    ]
  }
];

export function Experiences() {
  return (
    <section
      id="experiences"
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#191a20] to-[#1e1f29]"
      aria-label="Seção de experiências profissionais"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Experiências
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {experiencesData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ExperienceCard {...experience} defaultOpen={[0]} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
