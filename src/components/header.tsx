import { useEffect, useRef, useState } from "react";
import { BracketsAngle, Browser, DeviceMobile, House, User, Wrench, GraduationCap, Briefcase } from "@phosphor-icons/react";

const sections = [
  { id: "#home", label: "Home", icon: House },
  { id: "#about", label: "Sobre", icon: User },
  { id: "#experiences", label: "Experiências", icon: Briefcase },
  { id: "#formations", label: "Formações", icon: GraduationCap },
  { id: "#services", label: "Serviços", icon: Wrench },
  { id: "#technologies", label: "Tecnologias", icon: BracketsAngle },
  { id: "#projects", label: "Projetos", icon: Browser },
  { id: "#contact", label: "Contato", icon: DeviceMobile },
];

export function Header() {
  const [activeHash, setActiveHash] = useState("#home");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    function onScroll() {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current)

      debounceTimeout.current = setTimeout(() => {
        let currentSection = "#home"; // padrão

        for (const section of sections) {
          const element = document.querySelector(section.id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();

          if (rect.top <= 150) {
            currentSection = section.id;
          }
        }

        setActiveHash(currentSection);
      }, 100)
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    function onHashChange() {
      setActiveHash(window.location.hash || "#home");
    }
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
    };
  }, []);

  function linkClass(hash: string) {
    const baseClass = "flex items-center gap-1 hover:underline";
    const activeClass = "underline font-bold text-purple-400";
    return hash === activeHash ? `${baseClass} ${activeClass}` : baseClass;
  }

  function handleLinkClick(event: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    event.preventDefault()
    const element = document.querySelector(hash)
    if (element) {
      const yOffset = -60
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      history.pushState(null, "", hash)
      setActiveHash(hash)
    }
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg shadow-md"
      role="navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center h-16 px-4 md:px-6 lg:px-8">
        <nav className="flex gap-4 md:gap-6 text-sm font-medium text-white">
          {sections.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={id}
              onClick={(e) => handleLinkClick(e, id)}
              className={linkClass(id)}
            >
              <Icon size={18} /> {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
