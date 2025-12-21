"use client";

import { motion } from "motion/react";
import {
  GlobeHemisphereWestIcon,
  CursorClickIcon,
  SlidersHorizontalIcon,
  ShoppingCartSimpleIcon,
} from "@/lib/icons";
import { ServiceCard } from "./service-card";

type Service = {
  id: string;
  title: string;
  icon: React.ElementType;
  tag: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
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

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#141620] to-[#0f1118]"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2
            id="services-title"
            className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl"
          >
            Serviços
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
          />
          <p className="mx-auto mt-6 max-w-3xl text-sm text-gray-300 md:text-base">
            Como ajudo empresas e times a criar e evoluir produtos digitais: do
            site institucional ao sistema web completo, com foco em resultado,
            performance e boa experiência de uso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        <p className="mt-10 text-center text-xs text-gray-400 md:text-sm">
          Tem um projeto, vaga ou necessidade específica em mente?{" "}
          <span className="text-purple-300">
            Entre em contato e avaliamos juntos a melhor solução.
          </span>
        </p>
      </div>
    </section>
  );
}
