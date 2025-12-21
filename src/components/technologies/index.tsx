"use client";

import { motion } from "motion/react";
import { TechCard } from "./tech-card";
import { technologies } from "./data/technologies";

export function Technologies() {
  return (
    <section
      id="technologies"
      className="w-full pt-16 pb-24 bg-gradient-to-b from-[#141620] to-[#0f1118] text-white md:pt-24 md:pb-32"
      aria-labelledby="technologies-title"
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
            id="technologies-title"
            className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl"
          >
            Tecnologias
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
          />
          <p className="mx-auto mt-6 max-w-3xl text-sm text-gray-300 md:text-base">
            Stack focada em aplicações web modernas, escaláveis e fáceis de
            manter, combinando front-end, back-end e infraestrutura.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
