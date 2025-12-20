"use client";

import { useEffect, useCallback, useRef, memo } from "react";
import { DownloadSimpleIcon, XIcon } from "@/components/icons";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalType: string;
};

const ModalButton = memo(({
  onClick,
  children,
  variant = "secondary",
  icon: Icon,
  ...props
}: {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ElementType;
  [key: string]: any;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 whitespace-nowrap",
      variant === "primary"
        ? "text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 shadow-md hover:shadow-lg font-semibold"
        : "text-zinc-100 bg-zinc-800/80 hover:bg-zinc-700"
    )}
    {...props}
  >
    {Icon && <Icon size={16} weight="bold" className="flex-shrink-0" />}
    <span className="hidden xs:inline sm:inline">{children}</span>
    {/* Ícone apenas em telas muito pequenas */}
    {Icon && <span className="xs:hidden sm:hidden" aria-label={children as string} />}
  </button>
));

ModalButton.displayName = "ModalButton";

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastTouchY = useRef(0);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  const handleWheel = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = target;

    const isScrollingDown = event.deltaY > 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
    const isAtTop = scrollTop <= 1;

    if ((isScrollingDown && isAtBottom) || (!isScrollingDown && isAtTop)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, []);

  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    lastTouchY.current = event.touches[0]?.clientY ?? 0;
  }, []);

  const handleTouchMove = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = target;

    const currentY = event.touches[0]?.clientY ?? 0;
    const deltaY = lastTouchY.current - currentY;
    const isScrollingDown = deltaY > 0;

    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
    const isAtTop = scrollTop <= 1;

    if ((isScrollingDown && isAtBottom) || (!isScrollingDown && isAtTop)) {
      event.preventDefault();
      event.stopPropagation();
    }

    lastTouchY.current = currentY;
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/Curriculo_Desenvolvedor.pdf';
    link.download = 'Curriculo_Anderson_Fernandes.pdf';
    link.click();
  }, []);

  const handleOpenNewTab = useCallback(() => {
    window.open('/Curriculo_Desenvolvedor.pdf', '_blank', 'noopener,noreferrer');
  }, []);

  const iframeSrc = isOpen ? "/Curriculo_Desenvolvedor.pdf#toolbar=0&navpanes=0&zoom=100" : "";

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
            "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
          )}
          onClick={onClose}
        />

        <Dialog.Content
          className={cn(
            "fixed z-50 left-1/2 top-1/2 w-[95vw] sm:w-[90vw] max-w-4xl",
            "-translate-x-1/2 -translate-y-1/2",
            "rounded-2xl bg-zinc-950/90 border border-white/10",
            "shadow-2xl shadow-black/60",
            "max-h-[90vh] sm:max-h-[92vh] flex flex-col",
            "focus:outline-none"
          )}
        >
          {/* Header */}
          <header className="flex items-center justify-between px-4 sm:px-5 md:px-6 py-3 sm:py-4 border-b border-zinc-800/80 flex-shrink-0">
            <Dialog.Title className="text-sm sm:text-base md:text-lg font-semibold text-white">
              Currículo
            </Dialog.Title>

            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Fechar currículo"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <XIcon size={18} />
              </button>
            </Dialog.Close>
          </header>

          {/* Body */}
          <div className="flex-1 px-4 sm:px-5 md:px-6 pb-3 pt-2 sm:pt-3 md:pb-5 overflow-hidden">
            <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs md:text-sm text-zinc-300 leading-relaxed">
              Visualize uma prévia do currículo diretamente na página. Para
              leitura mais confortável, você pode abrir em nova aba ou fazer o
              download em PDF.
            </p>

            <div
              ref={scrollContainerRef}
              className={cn(
                "w-full h-[50vh] sm:h-[55vh] md:h-[60vh] rounded-xl border border-zinc-800/80 bg-zinc-900/60",
                "overflow-auto scroll-smooth",
                "scrollbar-hide"
              )}
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {isOpen && (
                <iframe
                  ref={iframeRef}
                  src={iframeSrc}
                  title="Prévia do currículo em PDF"
                  className="w-full h-full border-none"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* Footer */}
          <footer className="flex flex-col gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-3 sm:py-4 border-t border-zinc-800/80 bg-zinc-950/80 flex-shrink-0">
            <span className="text-[10px] sm:text-[11px] md:text-xs text-zinc-400 leading-snug">
              Arquivo em PDF otimizado para envio a recrutadores e clientes.
            </span>

            <div className="flex gap-2 sm:gap-3 justify-end flex-wrap">
              <ModalButton onClick={handleOpenNewTab} variant="secondary">
                Abrir em nova aba
              </ModalButton>

              <ModalButton
                onClick={handleDownload}
                variant="primary"
                icon={DownloadSimpleIcon}
              >
                Baixar currículo
              </ModalButton>
            </div>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
