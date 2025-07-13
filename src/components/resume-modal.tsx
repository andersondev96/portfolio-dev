import { X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog"
import Link from "next/link";
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
            "fixed z-50 top-1/2 left-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2",
            "rounded-xl bg-white dark:bg-zinc-900 p-6 shadow-xl transition-all"
          )}
        >
          <Dialog.Close asChild>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={24} />
            </button>
          </Dialog.Close>

          <Dialog.Title className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Currículo
          </Dialog.Title>

          <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
            <div className="w-full aspect-video bg-gray-100 rounded-lg mb-6">
              <iframe
                src="/Curriculo_Desenvolvedor.pdf#toolbar=0&navpanes=0&zoom=80"
                title="Currículo Preview"
                className="w-full h-full border-none"
                style={{
                  overflow: "hidden",
                  scrollbarWidth: "none",       // Firefox
                  msOverflowStyle: "none",      // IE 10+
                }}
                allow="fullscreen"
              />
            </div>

          </div>


          <div className="flex justify-end">
            <a
              href="/Curriculo_Desenvolvedor.pdf"
              download
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Baixar currículo
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}