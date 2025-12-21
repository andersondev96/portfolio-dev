"use client";

import { motion } from "motion/react";
import { ServiceCard } from "./service-card";
import { services } from "./data/services";

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
