"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { ToastContainer, toast } from "react-toastify";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Informe seu nome.")
    .max(100, "Nome muito longo."),
  email: z
    .string()
    .min(1, "Informe um e-mail.")
    .email("Informe um e-mail válido."),
  subject: z
    .string()
    .min(1, "Informe um assunto.")
    .max(150, "Assunto muito longo."),
  message: z
    .string()
    .min(1, "Digite sua mensagem.")
    .max(2000, "Mensagem muito longa."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const socialLinks = [
    {
      title: "E-mail",
      icon: EnvelopeIcon,
      url: "mailto:andersonfferreira96@gmail.com",
      label: "Enviar e-mail para Anderson",
    },
    {
      title: "LinkedIn",
      icon: LinkedinLogoIcon,
      url: "https://www.linkedin.com/in/anderson-fernandes96",
      label: "Abrir perfil no LinkedIn",
    },
    {
      title: "Github",
      icon: GithubLogoIcon,
      url: "https://github.com/andersondev96",
      label: "Abrir perfil no GitHub",
    },
  ];

  async function onSubmit(data: ContactFormData) {
    try {
      setIsSending(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem.");
      }

      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível enviar sua mensagem. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="w-full py-20 bg-gradient-to-b from-[#121217] via-[#101018] to-[#0b0b11] text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          >
            Entre em contato
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          />
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-zinc-300">
            Use este espaço para falar sobre oportunidades, parcerias,
            networking, sugestões ou qualquer ideia em que possamos colaborar.
          </p>
        </motion.header>

        <motion.form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-2xl bg-[#15151f]/90 px-4 py-6 shadow-lg sm:px-6 sm:py-7 border border-white/5"
          aria-describedby="contact-helper"
        >

          <div className="flex flex-col items-stretch gap-1 text-left">
            <label
              htmlFor="name"
              className="text-xs sm:text-sm font-medium text-zinc-200"
            >
              Nome
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              {...register("name")}
              className={`w-full rounded-xl border px-3 py-2.5 text-sm sm:text-base text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 bg-[#1f1f28] ${errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-800 focus:ring-purple-500 focus:border-purple-500"
                }`}
              placeholder="Como gostaria de ser chamado(a)?"
            />
            {errors.name && (
              <span className="text-[11px] sm:text-xs text-red-400">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col items-stretch gap-1 text-left">
            <label
              htmlFor="email"
              className="text-xs sm:text-sm font-medium text-zinc-200"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className={`w-full rounded-xl border px-3 py-2.5 text-sm sm:text-base text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 bg-[#1f1f28] ${errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-800 focus:ring-purple-500 focus:border-purple-500"
                }`}
              placeholder="Seu melhor e-mail para contato"
            />
            {errors.email && (
              <span className="text-[11px] sm:text-xs text-red-400">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col items-stretch gap-1 text-left">
            <label
              htmlFor="subject"
              className="text-xs sm:text-sm font-medium text-zinc-200"
            >
              Assunto
            </label>
            <input
              id="subject"
              type="text"
              {...register("subject")}
              className={`w-full rounded-xl border px-3 py-2.5 text-sm sm:text-base text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 bg-[#1f1f28] ${errors.subject
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-800 focus:ring-purple-500 focus:border-purple-500"
                }`}
              placeholder="Ex.: Parceria, vaga, consultoria, feedback..."
            />
            {errors.subject && (
              <span className="text-[11px] sm:text-xs text-red-400">
                {errors.subject.message}
              </span>
            )}
          </div>

          <div className="flex flex-col items-stretch gap-1 text-left">
            <label
              htmlFor="message"
              className="text-xs sm:text-sm font-medium text-zinc-200"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              className={`w-full rounded-xl border px-3 py-2.5 text-sm sm:text-base text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 bg-[#1f1f28] resize-none ${errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-800 focus:ring-purple-500 focus:border-purple-500"
                }`}
              placeholder="Conte brevemente sobre sua ideia, oportunidade ou sugestão."
            />
            {errors.message && (
              <span className="text-[11px] sm:text-xs text-red-400">
                {errors.message.message}
              </span>
            )}

            <p
              id="contact-helper"
              className="mt-1 text-[11px] sm:text-xs text-zinc-400"
            >
              Mensagens vão diretamente para o seu e-mail, sem salvar dados
              sensíveis no navegador.
            </p>
          </div>

          <div className="mt-2 flex justify-center">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-md disabled:opacity-60 disabled:cursor-not-allowed hover:from-purple-500 hover:to-purple-600 hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#15151f]"
            >
              {isSending ? "Enviando..." : "Enviar mensagem"}
            </button>
            <ToastContainer />
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-xs sm:text-sm text-zinc-400">
            Prefere falar direto por rede social?
          </p>

          <nav
            aria-label="Canais alternativos de contato"
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.title}
                href={social.url}
                title={social.title}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f1f28] text-purple-500 hover:bg-purple-600/10 hover:text-purple-400 hover:shadow-[0_0_14px_4px_rgba(168,85,247,0.25)] transition-all"
              >
                <social.icon size={22} weight="bold" aria-hidden="true" />
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
