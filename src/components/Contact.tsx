'use client'

import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { motion } from "motion/react"
import type { FormEvent } from "react";

export function Contact() {
  const socialLinks = [
    {title: "E-mail", icon: Envelope, url: "mailto:andersonfferreira96@gmail.com"},
    {title: "Instagram", icon: InstagramLogo, url: "https://instagram.com/anderson_ff13"},
    {title: "X", icon: XLogo, url: "https://x.com/anderson_4nd"},
    {title: "LinkedIn", icon: LinkedinLogo, url: "https://www.linkedin.com/in/anderson-fernandes96"},
    {title: "Github", "icon": GithubLogo, url: "https://github.com/andersondev96"}
  ]

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const name = formData.get("name")
      const email = formData.get("email")
      const message = formData.get("message")
      
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      alert("Mensagem enviada com sucesso!")
    } catch (error) {
      console.error(error);
    }

  }

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

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            className="w-full p-3 rounded-xl bg-[#1f1f28] text-white"
            required   
          />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            className="w-full p-3 rounded-xl bg-[#1f1f28] text-white"
            required   
          />
          <textarea
            name="message"
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
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              title={social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-4 rounded-full bg-[#1f1f28] hover:shadow-[0_0_10px_4px_rgba(168,85,247,0.2)] translation"
            >
              <social.icon size={28} className="text-purple-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}