import Image from "next/image";
import { GithubLogoIcon, GlobeIcon, XIcon } from "@phosphor-icons/react";
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
  project: Project;
};

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const { title, description, image, technologies, features, results, role, context, url, github_repo } =
    project;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm",
            isOpen ? "animate-fadeIn" : "animate-fadeOut"
          )}
        />

        <Dialog.Content
          className={cn(
            "fixed z-50 left-1/2 top-1/2 w-full max-w-3xl",
            "-translate-x-1/2 -translate-y-1/2",
            "rounded-2xl bg-zinc-950/95 border border-white/10 shadow-2xl",
            "max-h-[85vh] flex flex-col focus:outline-none",
            isOpen ? "animate-scaleIn" : "animate-scaleOut"
          )}
        >

          <header className="flex items-start justify-between gap-4 px-5 py-4 md:px-6 border-b border-zinc-800/80">
            <div>
              <Dialog.Title className="text-lg md:text-xl font-semibold text-white">
                {title}
              </Dialog.Title>
              {description && (
                <p className="mt-1 text-xs md:text-sm text-zinc-300">
                  {description}
                </p>
              )}
              {(role || context) && (
                <p className="mt-2 text-[11px] md:text-xs text-zinc-400">
                  {role && <span className="font-medium text-zinc-200">{role}</span>}
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
                className="inline-flex items-center justify-center rounded-full p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <XIcon size={18} />
              </button>
            </Dialog.Close>
          </header>

          <div className="flex-1 px-5 pt-4 pb-3 md:px-6 md:pt-5 md:pb-4 overflow-y-auto">
            {image && (
              <div className="mb-4 rounded-xl border border-zinc-800/80 bg-zinc-900/70 overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {features && features.length > 0 && (
              <section className="mb-4">
                <h2 className="text-sm font-semibold text-zinc-100 uppercase tracking-wide mb-2">
                  Principais funcionalidades
                </h2>
                <ul className="list-disc ml-4 space-y-1 text-sm text-zinc-200">
                  {features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              </section>
            )}

            {results && results.length > 0 && (
              <section className="mb-4">
                <h2 className="text-sm font-semibold text-zinc-100 uppercase tracking-wide mb-2">
                  Resultados / benefícios
                </h2>
                <ul className="list-disc ml-4 space-y-1 text-sm text-zinc-200">
                  {results.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {technologies && technologies.length > 0 && (
              <section>
                <h2 className="text-sm font-semibold text-zinc-100 uppercase tracking-wide mb-2">
                  Tecnologias
                </h2>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 border border-zinc-700/80"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={18}
                        height={18}
                        className="h-4 w-4 object-contain"
                      />
                      <span className="text-xs text-zinc-100">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <footer className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-5 py-4 md:px-6 border-t border-zinc-800/80 bg-zinc-950/90">
            <span className="text-[11px] md:text-xs text-zinc-400 max-w-[260px] md:max-w-sm">
              Use os links abaixo para explorar o projeto em produção ou analisar o código fonte.
            </span>

            <div className="flex flex-nowrap gap-3 justify-end">
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                >
                  <GlobeIcon size={18} weight="bold" />
                  Acessar site
                </a>
              )}

              <a
                href={github_repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs md:text-sm font-medium text-zinc-100 bg-zinc-800/90 hover:bg-zinc-700 transition-colors whitespace-nowrap"
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
