import {
  GlobeHemisphereWestIcon,
  CursorClickIcon,
  SlidersHorizontalIcon,
  ShoppingCartSimpleIcon,
} from "@/lib/icons";

import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Aplicações web completas",
    icon: GlobeHemisphereWestIcon,
    tag: "Para empresas que precisam lançar ou evoluir produtos digitais",
    description:
      "Desenvolvimento de aplicações web do front-end ao back-end, prontas para crescer junto com o produto.",
    bullets: [
      "Arquitetura modular com React no front-end e Node.js no back-end",
      "APIs REST/GraphQL, integrações com serviços externos e bancos de dados",
    ],
  },
  {
    id: "sites-landing",
    title: "Sites institucionais & landing pages",
    icon: CursorClickIcon,
    tag: "Para times de marketing, vendas e branding",
    description:
      "Páginas focadas em presença digital e conversão, ideais para campanhas e posicionamento de marca.",
    bullets: [
      "Layouts responsivos, performance e SEO técnico básico",
      "Estrutura pensada para testes A/B e otimização de conversão",
    ],
  },
  {
    id: "internal-systems",
    title: "Dashboards e sistemas internos",
    icon: SlidersHorizontalIcon,
    tag: "Para áreas internas e operações (financeiro, atendimento, backoffice)",
    description:
      "Soluções sob medida para automatizar processos, reduzir erros e dar visão clara dos indicadores.",
    bullets: [
      "Painéis administrativos intuitivos com controle de acesso por perfil",
      "Integração com APIs internas, ERPs e outros sistemas da empresa",
    ],
  },
  {
    id: "ecommerce",
    title: "E‑commerce & pagamentos online",
    icon: ShoppingCartSimpleIcon,
    tag: "Para negócios que querem vender produtos ou serviços online",
    description:
      "Lojas virtuais completas, com foco em segurança, performance e experiência de compra.",
    bullets: [
      "Checkout simples, integração com gateways de pagamento e meios de envio",
      "Base pronta para métricas, remarketing e melhora contínua de conversão",
    ],
  },
];
