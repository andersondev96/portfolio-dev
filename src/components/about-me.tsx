'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ResumeModal } from "./resume-modal";
import { FileTextIcon, PresentationChartIcon, FileDocIcon, CaretDownIcon } from "@phosphor-icons/react";

export function AboutMe() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState<'resume' | 'pitch' | 'letter'>('resume');
  const [isExpanded, setIsExpanded] = useState(false);

  const buttons = [
    {
      id: 'resume',
      label: 'Ver currículo',
      icon: FileTextIcon,
      type: 'resume' as const,
    },
    /**
     * {
      id: 'pitch',
      label: 'Ver pitch de apresentação',
      icon: PresentationChartIcon,
      type: 'pitch' as const,
    },
    {
      id: 'letter',
      label: 'Ver carta de apresentação',
      icon: FileDocIcon,
      type: 'letter' as const,
    },
     */
  ];

  const handleButtonClick = (type: 'resume' | 'pitch' | 'letter') => {
    setModalType(type);
    setIsOpenModal(true);
  };

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-gradient-to-b from-[#1a1c23] to-[#121217]">
      <ResumeModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} modalType={modalType} />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
        >
          {[1, 2].map((index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={`/images/image${index}.jpg`}
                alt={`Imagem ${index}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top sm:object-[40%_60%] group-hover:scale-110 transition-transform duration-500"
                priority={index === 1}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 shadow-[inset_0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500" />
            </motion.div>
          ))}

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Sobre mim
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-300 leading-relaxed"
          >

            <p className="mb-4">
              Formado em Sistemas de Informação pela{" "}
              <span className="text-white font-semibold">Universidade Federal de Ouro Preto</span>, sou{" "}
              <span className="text-white font-semibold">Desenvolvedor Web</span> especializado em{" "}
              <span className="text-white font-semibold">JavaScript, Node.js e React</span>, com mais de{" "}
              <span className="text-white font-semibold">5 anos de experiência</span> no desenvolvimento de soluções modernas e eficientes.
            </p>

            <p className="mb-4">
              Tenho paixão por criar{" "}
              <span className="text-white font-semibold">interfaces dinâmicas e responsivas</span> com React e por construir{" "}
              <span className="text-white font-semibold">APIs e servidores escaláveis</span> utilizando Node.js. Minha atuação é orientada ao usuário, aliando{" "}
              <span className="text-white font-semibold">metodologias ágeis</span>, boa arquitetura e{" "}
              <span className="text-white font-semibold">aprendizado contínuo</span> para entregar produtos de alta qualidade.
            </p>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
                marginBottom: isExpanded ? 16 : 0
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mb-4">
                Sou um profissional{" "}
                <span className="text-white font-semibold">proativo, detalhista e com visão empreendedora</span>, sempre focado no cliente e na resolução eficiente de problemas.
              </p>

              <p>
                Também prezo por{" "}
                <span className="text-white font-semibold">boa comunicação, ética e empatia</span>, o que me permite colaborar com equipes diversas, ouvir, dialogar e manter um ambiente de trabalho produtivo e positivo.
              </p>
            </motion.div>

            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 transition-colors font-semibold group"
            >
              <span>{isExpanded ? "Ver menos" : "Ver mais"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <CaretDownIcon size={18} weight="fill" className="group-hover:scale-110 transition-transform" />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row gap-4 flex-wrap"
          >
            {buttons.map((btn) => {
              const Icon = btn.icon;
              return (
                <motion.button
                  key={btn.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleButtonClick(btn.type)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  <Icon size={20} weight="fill" className="flex-shrink-0" />
                  <span className="whitespace-nowrap">{btn.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
