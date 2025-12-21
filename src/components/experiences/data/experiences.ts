import type { ExperienceData } from '@/lib/types';

export const experiencesData: ExperienceData[] = [
  {
    id: 1,
    company: "Lumiun Tecnologia",
    description:
      "Soluções para gestão e segurança da Internet com filtros DNS.",
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
          "Boas práticas e metodologias ágeis",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Precato",
    description: "Empresa especializada na negociação de precatórios.",
    badges: ["Desenvolvimento", "Boas práticas", "Back-end", "Ágil"],
    period: "Mar-2021 • Jan-2022",
    roles: [
      {
        title: "Desenvolvedor Back-End",
        period: "Mar-2021 • Jan-2022",
        responsibilities: [
          "Desenvolvimento do sistema interno",
          "Node.js, TypeScript, Git, Docker",
          "Boas práticas de software: SOLID, Clean Code, arquitetura",
          "Documentação e metodologias ágeis",
        ],
      },
    ],
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
          "Gestão organizacional e financeira",
        ],
      },
      {
        title: "Diretor de Projetos",
        period: "Ago-2020 • Jan-2021",
        responsibilities: [
          "Intermediação com clientes e execução de projetos",
          "Capacitação e acompanhamento do time de projetos",
        ],
      },
      {
        title: "Desenvolvedor Web",
        period: "Ago-2019 • Jan-2022",
        responsibilities: [
          "Desenvolvimento com HTML, CSS, JavaScript, PHP, Node.js e React",
          "Coleta de requisitos, qualidade de software e metodologias ágeis",
        ],
      },
      {
        title: "Assessor de Marketing",
        period: "Ago-2019 • Ago-2020",
        responsibilities: [
          "Campanhas, identidade visual, conteúdo e redes sociais",
        ],
      },
    ],
  },
  {
    id: 4,
    company: "Núcleo Vale do Aço – FEJEMG",
    description: "Núcleo mineiro do Movimento Empresa Júnior.",
    period: "Mar-2020 • Ago-2020",
    badges: ["Liderança", "Comunicação", "Empresa Júnior", "MEJ"],
    roles: [
      {
        title: "Assessor de Comunicação",
        period: "Mar-2020 • Ago-2020",
        responsibilities: [
          "Criação de conteúdos, blog e e-books formativos",
          "Gestão de redes sociais e organização de reuniões de diretoria",
        ],
      },
    ],
  },
];
