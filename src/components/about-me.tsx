'use client'

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { ResumeModal } from "./resume-modal";

export function AboutMe() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section id="about" className="w-full py-20">
      <ResumeModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden group transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_40px_15px_rgba(168,85,247,0.3)]"
            >
              <Image
                src={`/images/image${index}.jpg`}
                alt={`Imagem ${index}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-[25%_25%] transition-all duration-300"
              />
            </div>


          ))}
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Sobre mim</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Sou Desenvolvedor Web especializado em <strong>JavaScript, Node.js e React</strong>, com mais de 5 anos de experiência e formação em Sistemas de Informação.
            Apaixonado pela criação de interfaces dinâmicas e responsivas com React e pelo desenvolvimento de servidores back-end escaláveis e rápidos com Node.js.
            Minha abordagem está centrada no usuário, combinando metodologias ágeis e aprendizado contínuo para entregar soluções de alta qualidade.
          </p>

          <div className="mt-6">
            <button
              onClick={() => setIsOpenModal(true)}
              className="inline-block px-6 py-3 rounded-xl text-white bg-purple-600 hover:bg-purple-500 transition-colors text-lg font-semibold shadow-md"
            >
              Ver currículo
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}