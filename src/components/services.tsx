"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { motion } from "motion/react";

const services = [
  {
    title: "Sites Institucionais",
    image: "/images/webpage.png",
    description:
      "Fortaleça a presença online da sua marca com sites institucionais elegantes e informativos, transmitindo confiança e profissionalismo para conquistar a confiança dos visitantes e consolidar sua identidade no mercado.",
  },
  {
    title: "Landing pages",
    image: "/images/landing.png",
    description:
      "Capte a atenção instantânea do seu público-alvo com landing pages irresistíveis, cuidadosamente projetadas para converter visitantes em clientes, destacando seus produtos ou serviços de forma impactante.",
  },
  {
    title: "Sistemas Web",
    image: "/images/panel.png",
    description:
      "Transforme suas ideias em realidade digital com nossos sistemas web personalizados, oferecendo soluções eficientes e intuitivas para otimizar processos e impulsionar a produtividade de sua empresa.",
  },
  {
    title: "E-commerces",
    image: "/images/ecommerce.png",
    description:
      "Desperte a paixão pelas compras online com nossos e-commerces envolventes, proporcionando uma experiência de compra única que combina praticidade, segurança e design atraente para impulsionar seu negócio para novos patamares.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full bg-gradient-to-b from-[#191a20] to-[#1e1f29] bg-cover bg-center"
      aria-label="Serviços oferecidos"
    >

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-lg">
          Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer h-full"
            >
              <Card className="flex h-full min-h-[320px] flex-col md:flex-row items-center gap-6 p-6 bg-purple-800 border-none text-white shadow-xl rounded-3xl hover:shadow-purple-600/50 transition-shadow duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-contain"
                  priority
                />

                <div className="flex flex-col flex-1 gap-4 text-center md:text-left">
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-semibold truncate whitespace-nowrap overflow-hidden">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-sm leading-relaxed text-gray-200">
                      {service.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  )
}