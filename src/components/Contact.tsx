'use client'

import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { motion } from "motion/react"

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-[#1a1c23] to-[#121217] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12">
          Entre em contato
        </motion.h2>

        <form className="flex flex-col gap-6 items-center">
          <textarea
            className="w-full h-48 p-4 rounded-xl bg-[#1f1f28] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            placeholder="Digite a sua mensagem"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-purple-600 rounded-xl text-white text-lg hover:bg-purple-500 transition">
            Enviar
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-12">
          {[Envelope, InstagramLogo, XLogo, LinkedinLogo, GithubLogo].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="p-4 rounded-full bg-[#1f1f28] hover:shadow-[0_0_10px_4px_rgba(168,85,247,0.2)] translation"
            >
              <Icon size={28} className="text-purple-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}