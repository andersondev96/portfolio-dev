import { DownloadSimple, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
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
            Currículo
          </Dialog.Title>

          <div className="w-full h-[70vh] bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-hidden mb-6">
              <iframe
                src="/Curriculo_Desenvolvedor.pdf#toolbar=0&navpanes=0&zoom=90"
                title="Currículo Preview"
                className="w-full h-full border-none"
                style={{
                  scrollbarWidth: "none",
                }}
              />
            </div>

          <div className="flex justify-end">
            <a
              href="/Curriculo_Desenvolvedor.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors shadow-md no-underline focus:outline-none focus:ring-2 focus:ring-purple-400"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <DownloadSimple size={20} weight="bold" />
              Baixar currículo
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}