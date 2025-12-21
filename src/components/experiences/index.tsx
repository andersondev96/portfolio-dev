"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { ExperienceCard } from "./experience-card";
import { experiencesData } from "./data/experiences";

export const Experiences = memo(function Experiences() {
  return (
    <section
      id="experiences"
      className="relative w-full py-14 md:py-18 lg:py-24 bg-gradient-to-b from-[#141620] to-[#0f1118]"
      aria-labelledby="experiences-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-6xl lg:px-8 xl:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 text-center md:mb-12 lg:mb-16"
        >
          <h2
            id="experiences-title"
            className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-6xl"
          >
            Experiências
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-3 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 md:mt-4"
          />

          <p className="mx-auto mt-5 max-w-3xl text-sm text-gray-300 md:mt-6 md:text-[0.95rem] lg:text-base">
            Atuação em desenvolvimento web, liderança em empresa júnior e
            comunicação, conectando prática técnica com visão de produto e
            negócio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-2 lg:gap-8"
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
});
