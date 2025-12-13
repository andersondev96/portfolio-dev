import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { GithubLogoIcon, GlobeIcon, XIcon } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { sanitizeMarkdown } from "@/lib/sanitizeMarkdown";

type Project = {
  title: string;
  description: string;
  url: string;
  github_repo: string;
  image: string;
  badges: string[];
  technologies: { name: string; icon: string }[];
  readme?: string;
};

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
};

function convertRelativePathsToAbsolute(content: string, repoPath: string): string {
  const baseUrl = `https://raw.githubusercontent.com/${repoPath}/main/`;
  return content.replace(
    /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
    (_, alt, path) => {
      const url = `${baseUrl}${path}`
        .replace(/\/{2,}/g, "/")
        .replace("https:/", "https://");
      return `![${alt}](${url})`;
    }
  );
}

function BadgesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-nowrap items-center gap-2 mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800 py-1">
      {children}
    </div>
  );
}

function isBadge(src?: string) {
  if (!src) return false;
  return /style=for-the-badge/.test(src);
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const { title, description, github_repo, url } = project;
  const [readme, setReadme] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
    else {
      const timeout = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const fetchReadme = async () => {
      if (!isOpen || !github_repo) return;

      try {
        setLoading(true);
        setErrorMsg(null);

        const repoPath = github_repo.replace("https://github.com/", "");
        const res = await fetch(
          `https://raw.githubusercontent.com/${repoPath}/main/README.md`
        );

        if (!res.ok) {
          throw new Error("Não foi possível carregar o README.");
        }

        const text = await res.text();
        const transformed = convertRelativePathsToAbsolute(text, repoPath);
        setReadme(transformed);
      } catch (err) {
        console.error(err);
        setErrorMsg(
          "Não foi possível carregar a documentação automaticamente. Você pode acessar os detalhes completos diretamente no GitHub."
        );
        setReadme("");
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [isOpen, github_repo]);

  if (!isVisible) return null;

  const markdownComponents = {
    h1: (props: any) => (
      <h1 className="text-2xl md:text-3xl font-bold mt-1 mb-3" {...props} />
    ),
    h2: (props: any) => (
      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3" {...props} />
    ),
    h3: (props: any) => (
      <h3
        className="text-lg md:text-xl font-semibold mt-4 mb-2 flex items-center gap-2"
        {...props}
      />
    ),
    p: (props: any) => {
      const children = props.children;

      if (
        Array.isArray(children) &&
        children.every((child) => typeof child !== "string" && child.type === "img")
      ) {
        const badges = children.filter((child) => isBadge(child.props.src));
        const others = children.filter((child) => !isBadge(child.props.src));

        return (
          <>
            {badges.length > 0 && <BadgesWrapper>{badges}</BadgesWrapper>}

            {others.map((img: any, i: number) => (
              <div key={i} className="my-4 flex justify-center">
                <img
                  src={img.props.src}
                  alt={img.props.alt || ""}
                  className="max-w-full rounded-lg shadow-lg"
                  style={{ maxHeight: 420, objectFit: "contain" }}
                />
              </div>
            ))}
          </>
        );
      }

      return <p className="mb-4 leading-relaxed" {...props} />;
    },
    ul: (props: any) => <ul className="list-disc ml-6 mb-4" {...props} />,
    ol: (props: any) => <ol className="list-decimal ml-6 mb-4" {...props} />,
    li: (props: any) => <li className="mb-1" {...props} />,
    a: (props: any) => (
      <a
        className="text-sky-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    code: ({ inline, children, ...props }: any) =>
      inline ? (
        <code className="bg-zinc-700 px-1 py-0.5 rounded text-sm" {...props}>
          {children}
        </code>
      ) : (
        <pre className="bg-zinc-900/90 p-4 rounded text-xs md:text-sm overflow-x-auto">
          <code {...props}>{children}</code>
        </pre>
      ),
    blockquote: (props: any) => (
      <blockquote
        className="border-l-2 border-zinc-700/80 pl-4 py-2 my-4 bg-zinc-900/60 rounded-r-lg text-zinc-200 text-sm md:text-[15px] space-y-1"
        {...props}
      />
    ),
    img: (props: any) => {
      const badge = isBadge(props.src);
      return (
        <img
          className={cn(
            badge
              ? "inline-block h-7 sm:h-8 max-w-none cursor-pointer transition-transform duration-200 hover:scale-110 hover:brightness-110 rounded"
              : "rounded shadow-lg my-4 max-w-full h-auto"
          )}
          alt={props.alt || ""}
          {...props}
        />
      );
    },
  };

  return (
    <Dialog.Root open={isVisible} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm",
            isOpen ? "animate-fadeIn" : "animate-fadeOut"
          )}
          data-state={isOpen ? "open" : "closed"}
        />

        <Dialog.Content
          className={cn(
            "fixed z-50 left-1/2 top-1/2 w-full max-w-4xl",
            "-translate-x-1/2 -translate-y-1/2",
            "rounded-2xl bg-zinc-950/95 border border-white/10 shadow-2xl",
            "max-h-[85vh] flex flex-col focus:outline-none",
            isOpen ? "animate-scaleIn" : "animate-scaleOut"
          )}
          data-state={isOpen ? "open" : "closed"}
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
            {loading && (
              <p className="text-sm text-zinc-300">
                Carregando documentação do projeto…
              </p>
            )}

            {!loading && errorMsg && (
              <div className="rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-200">
                {errorMsg}
              </div>
            )}

            {!loading && !errorMsg && readme && (
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-4 md:p-5 text-zinc-100 text-sm leading-relaxed">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={markdownComponents as any}
                >
                  {sanitizeMarkdown(readme)}
                </ReactMarkdown>
              </div>
            )}
          </div>

          <footer className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-5 py-4 md:px-6 border-t border-zinc-800/80 bg-zinc-950/90">
            <span className="text-[11px] md:text-xs text-zinc-400 max-w-[260px] md:max-w-sm">
              Documentação carregada diretamente do README do repositório,
              mantendo o portfólio sempre atualizado.
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
