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

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop:blur-sm z-40" />
        <Dialog.Content
          className={cn(
            "fixed z-50 top-1/2 left-1/2 w-full max-w-3xl max-h-screen -translate-x-1/2 -translate-y-1/2",
            "rounded-xl bg-white dark:bg-zinc-900 p-6 shadow-xl transition-all overflow-y-auto"
          )}
        >
          <Dialog.Close asChild>
            <button
              aria-label="Fechar"
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>
          </Dialog.Close>

          <Dialog.Title className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            {title}
          </Dialog.Title>

          <div className="w-full h-[70vh] overflow-y-auto bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-white text-sm">
            {loading ? (
              <p>Carregando README...</p>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: (props) => <h1 className="text-3xl font-bold mt-4 mb-2" {...props} />,
                  h2: (props) => <h2 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
                  h3: (props) => <h3 className="text-xl font-medium mt-4 mb-2" {...props} />,
                  p: (props) => <p className="mb-4 leading-relaxed text-zinc-100" {...props} />,
                  ul: (props) => <ul className="list-disc ml-6 mb-4" {...props} />,
                  ol: (props) => <ol className="list-decimal ml-6 mb-4" {...props} />,
                  li: (props) => <li className="mb-1" {...props} />,
                  a: (props) => (
                    <a
                      className="text-sky-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  code: ({ inline, children, ...props }) =>
                    inline ? (
                      <code className="bg-zinc-700 px-1 py-0.5 rounded text-sm text-white">{children}</code>
                    ) : (
                      <pre className="bg-zinc-900 p-4 rounded text-sm overflow-x-auto">
                        <code {...props}>{children}</code>
                      </pre>
                    ),
                  blockquote: (props) => (
                    <blockquote className="border-l-4 border-zinc-500 pl-4 italic text-zinc-300" {...props} />
                  ),
                  img: (props) => (
                    <img
                      className="rounded shadow-lg my-4 max-w-full h-auto"
                      alt={props.alt || ""}
                      {...props}
                    />
                  )
                }}
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
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 dark:bg-purple-700 text-white font-semibold hover:bg-purple-500 dark:hover:bg-purple-400 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <Globe size={20} weight="bold" />
                Acessar site
              </a>
            )}

            <a
              href={github_repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-zinc-700 dark:bg-zinc-800 text-white font-semibold hover:bg-zinc-600 dark:hover:bg-zinc-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-400"
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
