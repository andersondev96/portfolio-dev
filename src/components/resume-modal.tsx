import { useEffect, WheelEvent, TouchEvent } from "react";
import { DownloadSimpleIcon, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalType: string;
};

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = target;

    const isScrollingDown = event.deltaY > 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight;
    const isAtTop = scrollTop <= 0;

    if ((isScrollingDown && isAtBottom) || (!isScrollingDown && isAtTop)) {
      event.preventDefault();
    }
  };

  let lastTouchY = 0;
  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    lastTouchY = event.touches[0]?.clientY ?? 0;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = target;

    const currentY = event.touches[0]?.clientY ?? 0;
    const deltaY = lastTouchY - currentY; // >0 = descendo
    const isScrollingDown = deltaY > 0;

    const isAtBottom = scrollTop + clientHeight >= scrollHeight;
    const isAtTop = scrollTop <= 0;

    if ((isScrollingDown && isAtBottom) || (!isScrollingDown && isAtTop)) {
      event.preventDefault();
    }

    lastTouchY = currentY;
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
            "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
          )}
        />

        <Dialog.Content
          className={cn(
            "fixed z-50 left-1/2 top-1/2 w-full max-w-4xl",
            "-translate-x-1/2 -translate-y-1/2",
            "rounded-2xl bg-zinc-950/90 border border-white/10",
            "shadow-2xl shadow-black/60",
            "max-h-[90vh] flex flex-col",
            "focus:outline-none"
          )}
        >
          <header className="flex items-center justify-between px-5 py-4 md:px-6 border-b border-zinc-800/80">
            <Dialog.Title className="text-base md:text-lg font-semibold text-white">
              Currículo
            </Dialog.Title>

            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Fechar currículo"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </header>

          <div className="flex-1 px-5 pb-4 pt-3 md:px-6 md:pb-5">
            <p className="mb-3 text-xs md:text-sm text-zinc-300">
              Visualize uma prévia do currículo diretamente na página. Para
              leitura mais confortável, você pode abrir em nova aba ou fazer o
              download em PDF.
            </p>

            <div
              className={cn(
                "w-full h-[60vh] md:h-[65vh] rounded-xl border border-zinc-800/80 bg-zinc-900/60",
                "overflow-auto scroll-smooth",
                "[&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0",
                "scrollbar-width:none"
              )}
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <iframe
                src="/Curriculo_Desenvolvedor.pdf#toolbar=0&navpanes=0&zoom=100"
                title="Prévia do currículo em PDF"
                className="w-full h-full border-none"
              />
            </div>
          </div>

          <footer className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-5 py-4 md:px-6 border-t border-zinc-800/80 bg-zinc-950/80">
            <span className="text-[11px] md:text-xs text-zinc-400">
              Arquivo em PDF otimizado para envio a recrutadores e clientes.
            </span>

            <div className="flex gap-3 justify-end">
              <a
                href="/Curriculo_Desenvolvedor.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs md:text-sm font-medium text-zinc-100 bg-zinc-800/80 hover:bg-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Abrir em nova aba
              </a>

              <a
                href="/Curriculo_Desenvolvedor.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <DownloadSimpleIcon size={18} weight="bold" />
                Baixar currículo
              </a>
            </div>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
