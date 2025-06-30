"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Banner() {
  return (
    <section
      id="home"
      className="relative w-full h-[500px] sm:h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight"
        >
          Anderson Fernandes
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-3 h-1 bg-purple-600 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl bg-white/10 px-4 py-3 rounded shadow-md backdrop-blur-md text-purple-200">
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
            className="w-44 sm:w-52 h-12 text-lg font-semibold text-purple-400 border-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Entre em contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
