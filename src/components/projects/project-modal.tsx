"use client";

import Image from "next/image";
import { GithubLogoIcon, GlobeIcon, XIcon } from "@/lib/icons";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  url: string;
  github_repo: string;
  image: string;
  badges: string[];
  technologies: { name: string; icon: string }[];
  role?: string;
  context?: string;
  features?: string[];
  results?: string[];
};

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
};

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  const {
    title,
    description,
    image,
    technologies,
    features,
    results,
    role,
    context,
    url,
    github_repo,
  } = project;

  const hasFeatures = features && features.length > 0;
  const hasResults = results && results.length > 0;
  const hasTechnologies = technologies && technologies.length > 0;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm",
            "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
          )}
        />

        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-3xl",
            "-translate-x-1/2 -translate-y-1/2",
            "flex max-h-[85vh] flex-col rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl",
            "focus:outline-none",
            "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut"
          )}
        >
          <header className="flex items-start justify-between gap-4 border-b border-zinc-800/80 px-5 py-4 md:px-6">
            <div>
              <Dialog.Title className="text-lg font-semibold text-white md:text-xl">
                {title}
              </Dialog.Title>

              {description && (
                <p className="mt-1 text-xs text-zinc-300 md:text-sm">
                  {description}
                </p>
              )}

              {(role || context) && (
                <p className="mt-2 text-[11px] text-zinc-400 md:text-xs">
                  {role && (
                    <span className="font-medium text-zinc-200">{role}</span>
                  )}
                  {role && context && " · "}
                  {context}
                </p>
              )}
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Fechar detalhes do projeto"
                onClick={onClose}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <XIcon size={18} />
              </button>
            </Dialog.Close>
          </header>

          <div className="flex-1 overflow-y-auto px-5 pb-3 pt-4 md:px-6 md:pb-4 md:pt-5">
            {image && (
              <div className="mb-4 overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/70">
                <div className="relative aspect-video w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {hasFeatures && (
              <section className="mb-4">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-100">
                  Principais funcionalidades
                </h2>
                <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-200">
                  {features!.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              </section>
            )}

            {hasResults && (
              <section className="mb-4">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-100">
                  Resultados / benefícios
                </h2>
                <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-200">
                  {results!.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {hasTechnologies && (
              <section>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-100">
                  Tecnologias
                </h2>
                <div className="flex flex-wrap gap-2">
                  {technologies!.map((tech) => (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900 px-3 py-1"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={18}
                        height={18}
                        loading="lazy"
                        className="h-4 w-4 object-contain"
                      />
                      <span className="text-xs text-zinc-100">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <footer className="flex flex-col gap-3 border-t border-zinc-800/80 bg-zinc-950/90 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
            <span className="max-w-[260px] text-[11px] text-zinc-400 md:max-w-sm md:text-xs">
              Use os links abaixo para explorar o projeto em produção ou
              analisar o código fonte.
            </span>

            <div className="flex flex-nowrap justify-end gap-3">
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:from-purple-500 hover:to-purple-600 hover:shadow-lg md:text-sm"
                >
                  <GlobeIcon size={18} weight="bold" />
                  Acessar site
                </a>
              )}

              <a
                href={github_repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-zinc-800/90 px-4 py-2 text-xs font-medium text-zinc-100 transition-colors hover:bg-zinc-700 md:text-sm"
              >
                <GithubLogoIcon size={18} weight="bold" />
                Repositório GitHub
              </a>
            </div>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
