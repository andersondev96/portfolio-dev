"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    function toggleVisibility() {
      const atTop = window.pageYOffset < 300;
      setIsAtTop(atTop);
      setIsVisible(true);
    }

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function handleClick() {
    if (isAtTop) {
      // Se estiver no topo, scroll para baixo (próxima seção)
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Se não estiver no topo, volta para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const Icon = isAtTop ? ArrowDownIcon : ArrowUpIcon;
  const label = isAtTop ? "Explorar conteúdo" : "Voltar ao topo";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={handleClick}
          aria-label={label}
          title={label}
          className="
            fixed
            bottom-8
            right-8
            z-40
            w-12
            h-12
            rounded-full
            bg-gradient-to-br
            from-purple-600
            to-purple-700
            hover:from-purple-500
            hover:to-purple-600
            text-white
            shadow-lg
            hover:shadow-2xl
            transition-all
            duration-300
            flex
            items-center
            justify-center
            hover:scale-110
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-purple-400
            focus-visible:ring-offset-2
            focus-visible:ring-offset-gray-900
            group
          "
        >
          <motion.div
            animate={{ y: isAtTop ? [0, 4, 0] : [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Icon
              size={20}
              weight="bold"
              className="group-hover:text-purple-100 transition-colors"
            />
          </motion.div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
