"use client";

import { motion, Transition } from "motion/react";
import { useState, useCallback, memo } from "react";
import { ResumeModal } from "./resume-modal";
import { FileTextIcon, CaretDownIcon } from "@/lib/icons";
import { ProfileImage } from "./profile-image";
import { ActionButton } from "./action-button";

const buttons = [
  {
    id: "resume",
    label: "Ver currículo",
    icon: FileTextIcon,
    type: "resume" as const,
  },
];

export function About() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"resume" | "pitch" | "letter">(
    "resume"
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = useCallback(
    (type: "resume" | "pitch" | "letter") => {
      setModalType(type);
      setIsOpenModal(true);
    },
    []
  );

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-[#1c1f29] to-[#11131b]"
    >
      <ResumeModal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        modalType={modalType}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" } as Transition}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 } as Transition}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
        >
          {[1, 2].map((index) => (
            <ProfileImage key={index} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 } as Transition}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 } as Transition}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
          >
            Sobre mim
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 } as Transition}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6 shadow-lg mx-auto"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 } as Transition}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-300 leading-relaxed"
          >
            <p className="mb-4">
              Formado em Sistemas de Informação pela{" "}
              <span className="text-white font-semibold">
                Universidade Federal de Ouro Preto
              </span>
              , atuo como{" "}
              <span className="text-white font-semibold">
                Desenvolvedor Web
              </span>{" "}
              especializado em{" "}
              <span className="text-white font-semibold">
                JavaScript, Node.js e React
              </span>
              , com mais de{" "}
              <span className="text-white font-semibold">
                5 anos de experiência
              </span>{" "}
              no desenvolvimento de soluções modernas e eficientes.
            </p>

            <p className="mb-4">
              Tenho foco em criar{" "}
              <span className="text-white font-semibold">
                interfaces dinâmicas e responsivas
              </span>{" "}
              com React e{" "}
              <span className="text-white font-semibold">
                APIs e serviços escaláveis
              </span>{" "}
              em Node.js. Minha atuação é orientada ao usuário, combinando{" "}
              <span className="text-white font-semibold">
                boas práticas de arquitetura
              </span>
              ,{" "}
              <span className="text-white font-semibold">
                metodologias ágeis
              </span>{" "}
              e{" "}
              <span className="text-white font-semibold">
                aprendizado contínuo
              </span>{" "}
              para entregar produtos de qualidade.
            </p>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
                marginBottom: isExpanded ? 16 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" } as Transition}
              className="overflow-hidden"
            >
              <p className="mb-4">
                Sou um profissional{" "}
                <span className="text-white font-semibold">
                  proativo, detalhista e com visão empreendedora
                </span>
                , sempre focado em gerar valor real para o negócio.
              </p>

              <p>
                Valorizo{" "}
                <span className="text-white font-semibold">
                  comunicação clara, ética e empatia
                </span>
                , o que facilita a colaboração com times multidisciplinares e
                mantém o ambiente de trabalho saudável e produtivo.
              </p>
            </motion.div>

            <motion.button
              whileHover={{ x: 4 }}
              onClick={toggleExpanded}
              className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 transition-colors font-semibold group"
              aria-expanded={isExpanded}
              aria-label={
                isExpanded ? "Ver menos informações" : "Ver mais informações"
              }
            >
              <span>{isExpanded ? "Ver menos" : "Ver mais"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 } as Transition}
              >
                <CaretDownIcon
                  size={18}
                  weight="fill"
                  className="group-hover:scale-110 transition-transform"
                />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 } as Transition}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row gap-4 flex-wrap"
          >
            {buttons.map((btn) => (
              <ActionButton
                key={btn.id}
                id={btn.id}
                label={btn.label}
                icon={btn.icon}
                onClick={() => handleButtonClick(btn.type)}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
