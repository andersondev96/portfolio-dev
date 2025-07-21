import { DownloadSimple, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils";

type Project = {
  title: string,
  description: string,
  url: string,
  github_repo: string,
  image: string,
  badges: string[],
  technologies: { name: string, icon: string }[],
}

type ProjectModal = {
  isOpen: boolean;
  onClose: () => void;
  project: Project
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModal) {
  const {
    title,
    description,
    url,
    github_repo,
    image,
    badges,
    technologies
  } = project
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

          <div className="w-full h-[70vh] bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-hidden mb-6">
            <p>{description}</p>  
          
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}