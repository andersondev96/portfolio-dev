import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { motion } from "motion/react";

const services = [
  {
    title: "Sites Institucionais",
    image: "/images/webpage.png",
    description: 
      "Fortaleça a presença online da sua marca com sites institucionais elegantes e informativos, transmitindo confiança e profissionalismo para conquistar a confiança dos visitantes e consolidar sua identidade no mercado."
  },
  {
    title: "Landing pages",
    image: "/images/landing.png",
    description: 
      "Capte a atenção instantânea do seu público-alvo com landing pages irresistíveis, cuidadosamente projetadas para converter visitantes em clientes, destacando seus produtos ou serviços de forma impactante."
  },
  {
    title: "Sistemas Web",
    image: "/images/panel.png",
    description: 
      "Transforme suas ideias em realidade digital com nossos sistemas web personalizados, oferecendo soluções eficientes e intuitivas para otimizar processos e impulsionar a produtividade de sua empresa."
  },
  {
    title: "E-commerces",
    image: "/images/ecommerce.png",
    description: 
      "Desperte a paixão pelas compras online com nossos e-commerces envolventes, proporcionando uma experiência de compra única que combina praticidade, segurança e design atraente para impulsionar seu negócio para novos patamares."
  },
]

export function Services() {
  return (
    <div className="relative w-full mt-24 bg-cover bg-center" style={{ backgroundImage: "url('/services.png')" }}>
      <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
      <div className="relative p-10 md:p-20 flex flex-col items-center text-center text-white w-full max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Serviços</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 md:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
            <Card className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 bg-purple-700 border-none text-white shadow-lg rounded-2xl h-[350px]">
            <Image src={service.image} alt={service.title} width={120} height={120} className="md:w-32 md:h-32" />
            <div className="flex flex-col gap-4 text-center md:text-left">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{service.description}</p>
              </CardContent>
            </div>
          </Card>
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}