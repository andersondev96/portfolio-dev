"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { memo } from "react";

type Technology = {
  name: string;
  icon: string;
  experience: string;
  description: string;
};

export const TechCard = memo(function TechCard({
  tech,
  index,
}: {
  tech: Technology;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group rounded-2xl focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-[#121217]"
    >
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-[#1f1f28]/90 border border-gray-800/80 hover:border-purple-500/60 shadow-md hover:shadow-purple-900/30 px-4 py-5 transition-all duration-300 md:px-5 md:py-6">
        <div className="relative" aria-hidden="true">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={56}
            height={56}
            loading="lazy"
            className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
            sizes="80px"
          />
          <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-52 -translate-x-1/2 rounded-md bg-black/90 px-3 py-2 text-xs text-gray-100 opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
            {tech.description}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-sm font-semibold text-white md:text-base">
            {tech.name}
          </h3>
          <span className="inline-flex items-center rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] text-purple-200 border border-purple-500/40 md:text-xs">
            {tech.experience} de experiência
          </span>
        </div>
      </div>
    </motion.article>
  );
});
