"use client"

import { ExperienceCard } from "./experience-card";

export function Experiences() {
  return (
    <section
      id="experiences"
      className="relative w-full bg-gradient-to-b from-[#191a20] to-[#1e1f29] bg-cover bg-center"
      aria-label="Experiências"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-lg">Experiências</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          <ExperienceCard
            company="Lumiun Tecnologia"
            description="Soluções para Gestão e Segurança da Internet com filtros DNS."
            period="Jul-2022 • atual"
            roles={[
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
            ]}
            defaultOpen={[0]}
          />

          <ExperienceCard
            company="Precato"
            description="Empresa especializada na negociação de precatórios."
            period="Mar-2021 • Jan-2022"
            roles={[
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
            ]}
            defaultOpen={[0]}
          />

          <ExperienceCard
            company="Visão Tecnologia e Sistemas"
            description="Empresa júnior da UFOP com foco em sistemas e websites."
            period="Ago-2019 • Jan-2022"
            roles={[
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
            ]}
          />

          <ExperienceCard
            company="Núcleo Vale do Aço – FEJEMG"
            description="Núcleo mineiro do Movimento Empresa Júnior"
            period="Mar-2020 • Ago-2020"
            roles={[
              {
                title: "Assessor de Comunicação",
                period: "Mar-2020 • Ago-2020",
                responsibilities: [
                  "Criação de conteúdos, blog e e-books formativos",
                  "Gestão de redes sociais e reuniões de diretoria"
                ]
              }
            ]}
            defaultOpen={[0]}
          />
        </div>
      </div>
    </section>
  );
}
