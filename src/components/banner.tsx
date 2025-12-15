"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { TechBackground } from "./TechBackground";
import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white"
      aria-labelledby="hero-title"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#3b0b7a] via-[#2b1361] to-[#120725] animate-gradient bg-[length:300%_300%]" />

      <TechBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80" />

      <div className="relative z-10 max-w-5xl
          px-4 sm:px-6 md:px-10
          flex flex-col items-center text-center
          gap-6 md:gap-8
          pt-24 sm:pt-28 md:pt-32
          pb-16 sm:pb-20 md:pb-24">

        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] md:text-xs text-purple-100 border border-purple-400/30 shadow-md"
        >
          Disponível para oportunidades em desenvolvimento web e projetos
          freelancer.
        </motion.span>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] drop-shadow-2xl"
        >
          Anderson Fernandes
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col gap-3 mt-2"
        >
          <p className="mx-auto inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm sm:text-base md:text-lg text-purple-100 border border-purple-400/20 shadow-md backdrop-blur-sm">
            Desenvolvedor Web Full Stack
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-200">
            Ajudo empresas e times a criar aplicações web modernas, escaláveis
            e fáceis de manter, unindo experiência em front-end, back-end e
            boas práticas de engenharia de software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
        >
          <Button
            type="button"
            aria-label="Ir para seção de contato"
            variant="default"
            className="w-full sm:w-auto px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 border border-purple-300/40 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToContact}
          >
            Entre em contato
          </Button>

          <a
            href="#projects"
            className="text-sm sm:text-base text-purple-200 hover:text-purple-100 underline/50 decoration-purple-400/60 hover:decoration-purple-200 transition-colors"
          >
            Ver projetos em destaque
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-4 flex gap-4 sm:gap-5"
          aria-label="Redes e formas de contato"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-purple-300 hover:text-purple-100 transition-transform duration-300 p-2 rounded-lg hover:bg-purple-500/20 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <Icon size={26} weight="fill" className="md:size-7" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
