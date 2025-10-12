"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { TechBackground } from "./TechBackground";

export function Banner() {
  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section
      id="home"
      className="relative w-full h-[500px] sm:h-[600px] overflow-hidden flex items-center justify-center text-center"
    >
      {/* Fundo gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-800 animate-gradient bg-[length:400%_400%]" />

      {/* Canvas com símbolos tech */}
      <TechBackground />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center px-6 sm:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-lg"
        >
          Anderson Fernandes
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-3 h-1 bg-purple-400 rounded-full shadow-lg"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl bg-white/10 px-5 py-3 rounded-xl shadow-md backdrop-blur-sm text-purple-100 max-w-xl"
        >
          Desenvolvedor Web Full Stack
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8"
        >
          <Button
            variant="outline"
            className="w-44 sm:w-52 h-12 text-lg font-semibold text-purple-300 border-purple-400 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 shadow-lg"
            onClick={scrollToContact}
          >
            Entre em contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
