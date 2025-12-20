"use client"

import { motion } from "motion/react";
import {
  GlobeHemisphereWestIcon,
  CursorClickIcon,
  SlidersHorizontalIcon,
  ShoppingCartSimpleIcon,
} from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const services = [
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            id="services-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
          >
            Serviços
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          />
          <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-gray-300">
            Como ajudo empresas e times a criar e evoluir produtos digitais:
            do site institucional ao sistema web completo, com foco em
            resultado, performance e boa experiência de uso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-950 rounded-3xl"
              >
                <Card className="flex h-full flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700/80 hover:border-purple-500/60 shadow-lg hover:shadow-2xl hover:shadow-purple-700/30 rounded-3xl">
                  <CardHeader className="p-6 pb-4 md:p-8 md:pb-5 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        aria-hidden="true"
                        className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-gray-800/80 border border-purple-600/60 text-purple-300 shadow-inner shadow-purple-900/30"
                      >
                        <Icon size={32} weight="duotone" />
                      </div>

                      <div className="flex-1 text-left">
                        <CardTitle className="text-xl md:text-2xl font-semibold text-white">
                          {service.title}
                        </CardTitle>
                        <p className="mt-1 inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-[11px] md:text-xs font-medium text-purple-200 border border-purple-500/30">
                          {service.tag}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-left space-y-3">
                    <p className="text-sm md:text-base leading-relaxed text-gray-200">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 text-xs md:text-sm text-gray-300">
                      {service.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-purple-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.article>
            );
          })}
        </motion.div>

        <p className="mt-10 text-center text-xs md:text-sm text-gray-400">
          Tem um projeto, vaga ou necessidade específica em mente?{" "}
          <span className="text-purple-300">
            Entre em contato e avaliamos juntos a melhor solução.
          </span>
        </p>
      </div>
    </section>
  );
}
