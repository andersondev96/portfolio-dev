import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { GithubLogo, Globe, X } from "@phosphor-icons/react"
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"
import { sanitizeMarkdown } from "@/lib/sanitizeMarkdown"

type Project = {
  title: string
  description: string
  url: string
  github_repo: string
  image: string
  badges: string[]
  technologies: { name: string; icon: string }[]
  readme?: string
}

type ProjectModalProps = {
  isOpen: boolean
  onClose: () => void
  project: Project
}

function convertRelativePathsToAbsolute(content: string, repoPath: string): string {
  const baseUrl = `https://raw.githubusercontent.com/${repoPath}/main/`
  return content.replace(/!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g, (_, alt, path) => {
    const url = `${baseUrl}${path}`.replace(/\/{2,}/g, "/").replace("https:/", "https://")
    return `![${alt}](${url})`
  })
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const { title, github_repo, url } = project
  const [readme, setReadme] = useState("")
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    if (isOpen) setIsVisible(true)
    else {
      const timeout = setTimeout(() => setIsVisible(false), 200)
      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  useEffect(() => {
    const fetchReadme = async () => {
      if (!isOpen || !github_repo) return

      try {
        setLoading(true)
        const repoPath = github_repo.replace("https://github.com/", "")
        const res = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`)
        if (!res.ok) throw new Error("Erro ao carregar README")
        const text = await res.text()
        const transformed = convertRelativePathsToAbsolute(text, repoPath)
        setReadme(transformed)
      } catch (err) {
        console.error(err)
        setReadme("# Erro ao carregar o README")
      } finally {
        setLoading(false)
      }
    }

    fetchReadme()
  }, [isOpen, github_repo])

  if (!isVisible) return null

  function BadgesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-nowrap gap-2 mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800">
      {children}
    </div>
  )
}

  function isBadge(src?: string) {
    if (!src) return false
    return /style=for-the-badge/.test(src)
  }

  const markdownComponents = {
    h1: (props: any) => <h1 className="text-3xl font-bold mt-4 mb-2" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-medium mt-4 mb-2" {...props} />,
    p: (props: any) => {
      const children = props.children

      if (Array.isArray(children) && children.every((child) => typeof child !== "string" && child.type === "img")) {
        const badges = children.filter((child) => isBadge(child.props.src))
        const others = children.filter((child) => !isBadge(child.props.src))

        return (
          <>
            {badges.length > 0 && <BadgesWrapper>{badges}</BadgesWrapper>}
            {others.map((img: any, i: number) => (
              <div key={i} className="my-6 flex justify-center">
                <img
                  src={img.props.src}
                  alt={img.props.alt || ""}
                  className="max-w-full rounded-lg shadow-lg"
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                />
              </div>
            ))}
          </>
        )
      }

      return <p className="mb-4 leading-relaxed" {...props} />
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
        <code className="bg-zinc-700 px-1 py-0.5 rounded text-sm">{children}</code>
      ) : (
        <pre className="bg-zinc-900 p-4 rounded text-sm overflow-x-auto">
          <code {...props}>{children}</code>
        </pre>
      ),
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-zinc-500 pl-4 italic text-zinc-400" {...props} />
    ),
    img: (props: any) => {
      const badge = isBadge(props.src)
      return (
        <img
          className={cn(
            badge
              ? "inline-block h-6 sm:h-8 cursor-pointer transition-transform duration-200 hover:scale-110 hover:brightness-110 rounded"
              : "rounded shadow-lg my-4 max-w-full h-auto"
          )}
          alt={props.alt || ""}
          {...props}
        />
      )
    },
  }

  return (
    <Dialog.Root open={isVisible} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/30 backdrop-blur-md z-40",
            isOpen ? "animate-fadeIn" : "animate-fadeOut"
          )}
          data-state={isOpen ? "open" : "closed"}
        />
        <Dialog.Content
          className={cn(
            "fixed z-50 top-1/2 left-1/2 w-full max-w-3xl max-h-screen -translate-x-1/2 -translate-y-1/2",
            "rounded-xl bg-zinc-900/50 backdrop-blur-lg border border-white/20",
            "p-6 shadow-2xl overflow-y-auto text-white",
            isOpen ? "animate-scaleIn" : "animate-scaleOut"
          )}
          data-state={isOpen ? "open" : "closed"}
        >
          <Dialog.Close asChild>
            <button
              aria-label="Fechar"
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-300 hover:text-red-400 transition-colors"
            >
              <X size={24} />
            </button>
          </Dialog.Close>

          <Dialog.Title className="text-2xl font-bold mb-6">{title}</Dialog.Title>

          <div className="w-full h-[70vh] overflow-y-auto bg-zinc-800/70 border border-zinc-700 rounded-lg p-6 text-zinc-100 text-sm">
            {loading ? (
              <p>Carregando README...</p>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={markdownComponents}
              >
                {sanitizeMarkdown(readme)}
              </ReactMarkdown>
            )}
          </div>

          <footer className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors shadow-md font-semibold"
              >
                <Globe size={20} weight="bold" />
                Acessar site
              </a>
            )}

            <a
              href={github_repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition-colors shadow-md font-semibold"
            >
              <GithubLogo size={20} weight="bold" />
              Repositório GitHub
            </a>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
