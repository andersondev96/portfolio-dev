import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

export function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-10 md:mt-16 sm:mt-20 pl-8 md:pl-12 sm:pl-16 flex flex-col md:flex-row items-center md:gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl">
        <div className="relative w-full h-[220px] md:h-[250px]">
          <Image
            src="/images/image1.jpg"
            alt=""
            layout="fill"
            className="object-cover rounded-md border-2 border-gray-500"
            style={{ objectPosition: '0% 25%' }}
          />
        </div>
        <div className="relative w-full h-[220px] md:h-[250px]">
          <Image
            src="/images/image2.jpg"
            alt=""
            layout="fill"
            className="object-cover rounded-md border-2 border-gray-500"
            style={{ objectPosition: '0% 25%' }}
          />
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-16 text-center md:text-left w-full max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold">Sobre mim</h1>
        <p className="mt-4 text-lg md:text-2xl leading-relaxed text-gray-50">
          Sou Desenvolvedor Web especializado em Javascript, Node.js e React, com mais de 5 anos de experiência e formação em Sistemas de Informação.
          Apaixonado pela criação de interfaces dinâmicas e responsivas com React e pelo desenvolvimento de servidores back-end escaláveis e rápidos com
          Node.js. Minha abordagem está centrada no usuário, combinando metodologias ágeis e aprendizado contínuo para entregar soluções de alta qualidade.
        </p>
        <div className="mt-6 text-center md:text-left">
          <Link
            href="#"
            className="inline-block text-xl text-purple-500 font-semibold border-b-2 border-purple-500 hover:text-purple-400"
          >
            Ver currículo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}