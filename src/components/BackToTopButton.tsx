import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setIsVisible(window.pageYOffset > 300); // aparece depois de 300px scroll
    }

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="
        fixed
        bottom-8
        right-8
        bg-purple-600
        text-gray-200
        p-3
        rounded-full
        shadow-lg
        hover:bg-purple-500
        transition
        z-50
      "
    >
      <ArrowUp size={24} weight="bold" />
    </button>
  );
}
