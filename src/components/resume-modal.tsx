import { DownloadSimple, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalType: string;
}

export function ResumeModal({ isOpen, onClose, modalType }: ResumeModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/30 backdrop-blur-md z-40",
            "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
          )} />

        <Dialog.Content
          className={cn(
            "fixed z-50 top-1/2 left-1/2 w-full max-w-3xl max-h-screen -translate-x-1/2 -translate-y-1/2",
            "rounded-xl bg-zinc-900/50 backdrop-blur-lg border border-white/20",
            "p-6 shadow-2xl overflow-y-auto text-white",
            "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut"
          )}
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

          <Dialog.Title className="text-2xl font-bold mb-6">
            Currículo
          </Dialog.Title>

          <div className="w-full h-[70vh] bg-black/20 rounded-lg overflow-hidden mb-6">
            <iframe
              src="/Curriculo_Desenvolvedor.pdf#toolbar=0&navpanes=0&zoom=90"
              title="Currículo Preview"
              className="w-full h-full border-none"
              style={{
                scrollbarWidth: "none",
                filter: "brightness(0.6) contrast(0.85) saturate(0.7) sepia(0.1)"
              }}
            />
          </div>

          <div className="flex justify-end">
            <a
              href="/Curriculo_Desenvolvedor.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-white bg-purple-600/90 hover:bg-purple-500 transition-colors shadow-md font-semibold"
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