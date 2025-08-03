"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { motion } from "motion/react";
import { Certificate } from "@phosphor-icons/react";

export function EducationalBackground() {
  return (
    <section
      id="experiences"
      className="relative w-full bg-gradient-to-b from-[#191a20] to-[#1e1f29] bg-cover bg-center"
      aria-label="educational-background"
    >

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-lg">
          Formações Acadêmicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl items-stretch">
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer h-full"
            >
              <Card className="flex h-full min-h-[320px] flex-col md:flex-row items-center gap-6 p-6 bg-gray-800 border-none text-white shadow-xl rounded-3xl hover:shadow-gray-600/50 transition-shadow duration-300">
                <div className="flex flex-col flex-1 gap-4 text-center md:text-left">
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-semibold truncate whitespace-nowrap overflow-hidden">
                      USP/Esalq
                    </CardTitle>
                    <span>Pós graduação Lato Sensu | MBA em Engenharia de Software</span>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-sm leading-relaxed text-gray-200">
                      Especializção voltada ao aprofundamento de Desenvolvimento de Software, Cloud Computing, práticas de DevOps e muito mais.  
                    </p>

                    <p>Mai-2025 • atual</p>

                    <div>
                      <strong>Principais Conteúdos:</strong>
                      <div>
                        <ul>
                          <li>Desenvolvimento de software</li>
                          <li>Gestão e Cloud</li>
                          <li>DevOps</li>
                          <li>Infraestrutura</li>
                          <li>Metodologias ágeis</li>
                          <li>Microserviços</li>
                          <li>Arquitetura limpa</li>
                          <li>Engenharia de dados</li>
                          <li>Machine Learning</li>
                          <li>Inteligência artificial</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer h-full"
            >
              <Card className="flex h-full min-h-[320px] flex-col md:flex-row items-center gap-6 p-6 bg-gray-800 border-none text-white shadow-xl rounded-3xl hover:shadow-gray-600/50 transition-shadow duration-300">
                <div className="flex flex-col flex-1 gap-4 text-center md:text-left">
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-semibold truncate whitespace-nowrap overflow-hidden">
                      Universidade Federal de Ouro Preto (UFOP)
                    </CardTitle>
                    <span>Graduação Bacharelado | Sistemas de Informação</span>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-sm leading-relaxed text-gray-200">
                      Curso superior voltado ao aprendizado sobre tecnologia da informação, focado na gestão de informação, utilização de sistemas que ajudam na coleta de informação, além de
                      aprender banco de dados, engenharia de software, inteligência artificial e muito mais.  
                    </p>

                    <p>Mar-2018 • Set-2023</p>

                    <div>
                      <strong>Principais Conteúdos:</strong>
                      <div>
                        <ul>
                          <li>Gestão da informação</li>
                          <li>Estruturas de dados</li>
                          <li>Banco de dados</li>
                          <li>Engenharia de software</li>
                          <li>Redes de computadores</li>
                          <li>Sistemas distribuidos</li>
                          <li>Inteligência artificial</li>
                          <li>Engenharia de dados</li>
                          <li>Machine Learning</li>
                          <li>Inteligência artificial</li>
                          <li>Interação humano computador</li>
                          <li>Sistemas Web</li>
                          <li>Desenvolvimento ágil de software</li>
                          <li>Qualidade de software</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>

                  <a href="">
                    <Certificate size={32} />
                  </a>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer h-full"
            >
              <Card className="flex h-full min-h-[320px] flex-col md:flex-row items-center gap-6 p-6 bg-gray-800 border-none text-white shadow-xl rounded-3xl hover:shadow-gray-600/50 transition-shadow duration-300">
                <div className="flex flex-col flex-1 gap-4 text-center md:text-left">
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-semibold truncate whitespace-nowrap overflow-hidden">
                      Serviço Nacional de Aprendizagem Comercial (SENAC-MG)
                    </CardTitle>
                    <span>Técnico Médio | Técnico em Informática</span>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-sm leading-relaxed text-gray-200">
                      Curso nível técnico com objetivo de oferecer os fundamentos para o  
                      aprendizado de algoritmos, sistemas operacionais, arquitetura de computadores, banco de dados  e desenvolvimento de software.
                    </p>

                    <p>Nov-2015 • Set-2017</p>

                    <div>
                      <strong>Principais Conteúdos:</strong>
                      <div>
                        <ul>
                          <li>Empreendedorismo</li>
                          <li>Redes de computadores</li>
                          <li>Sistemas Operacionais</li>
                          <li>Arquitetura de Computadores</li>
                          <li>Algoritmos</li>
                          <li>Redes de computadores</li>
                          <li>Desenvolvimento de software</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>

                  <a href="">
                    <Certificate size={32} />
                  </a>
                </div>
              </Card>
            </motion.div>
        </div>
      </div>
    </section>

  )
}