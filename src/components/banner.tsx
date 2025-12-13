"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { TechBackground } from "./TechBackground";
import { EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export function Banner() {
  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const socialLinks = [
    {
      icon: LinkedinLogoIcon,
      href: "https://www.linkedin.com/in/anderson-fernandes96",
      label: "LinkedIn",
    },
    {
      icon: GithubLogoIcon,
      href: "https://github.com/andersondev96",
      label: "GitHub",
    },
    {
      icon: EnvelopeIcon,
      href: "mailto:andersonfferreira96@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Fundo gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-800 animate-gradient bg-[length:400%_400%]" />

      {/* Canvas com símbolos tech */}
      <TechBackground />

      {/* Overlay com gradiente para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 backdrop-blur-[2px]" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-12 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-extrabold text-4xl max-w-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] drop-shadow-2xl"
        >
          Anderson Fernandes
        </motion.h1>

        {/* Linha decorativa animada */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-3 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"
        />

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl bg-white/10 px-5 py-3 rounded-xl shadow-md backdrop-blur-sm text-purple-100 max-w-xl border border-purple-400/20"
        >
          Desenvolvedor Web Full Stack
        </motion.p>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8"
        >
          <Button
            aria-label="Ir para seção de contato"
            variant="outline"
            className="w-44 sm:w-52 h-12 text-lg font-semibold text-purple-300 border-2 border-purple-400 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            onClick={scrollToContact}
          >
            Entre em contato
          </Button>
        </motion.div>

        {/* Links Sociais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-8 flex gap-4 sm:gap-6"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-purple-300 hover:text-purple-100 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-purple-500/20"
              title={label}
            >
              <Icon size={28} weight="fill" className="md:size-8" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}