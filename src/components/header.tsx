import { useEffect, useRef, useState } from "react";
import {
  BrowserIcon,
  DeviceMobileIcon,
  HouseIcon,
  UserIcon,
  CodeIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  ListIcon,
  XIcon,
  StackIcon,
} from "@phosphor-icons/react";

const sections = [
  { id: "#home", label: "Home", icon: HouseIcon },
  { id: "#about", label: "Sobre", icon: UserIcon },
  { id: "#experiences", label: "Experiências", icon: BriefcaseIcon },
  { id: "#formations", label: "Formações", icon: GraduationCapIcon },
  { id: "#services", label: "Serviços", icon: CodeIcon },
  { id: "#technologies", label: "Tecnologias", icon: StackIcon },
  { id: "#projects", label: "Projetos", icon: BrowserIcon },
  { id: "#contact", label: "Contato", icon: DeviceMobileIcon },
];

export function Header() {
  const [activeHash, setActiveHash] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function onScroll() {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

      debounceTimeout.current = setTimeout(() => {
        let currentSection = "#home";

        for (const section of sections) {
          const element = document.querySelector(section.id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            currentSection = section.id;
          }
        }

        setActiveHash(currentSection);
      }, 100);
    }

    function onHashChange() {
      const hash = window.location.hash || "#home";
      setActiveHash(hash);
      setMobileMenuOpen(false);
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", onHashChange);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, []);

  function handleLinkClick(event: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    event.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", hash);
      setActiveHash(hash);
      setMobileMenuOpen(false);
    }
  }

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800"
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between h-16 px-4 md:px-6 lg:px-8">

        {/* Menu Desktop */}
        <nav
          className="hidden md:flex gap-2 overflow-x-auto py-2 px-1"
          aria-label="Menu de navegação"
        >
          {sections.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={id}
              onClick={(e) => handleLinkClick(e, id)}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                transition-all duration-200
                ${activeHash === id
                  ? "bg-purple-600/20 text-purple-300 shadow-inner"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
              `}
              aria-current={activeHash === id ? "page" : undefined}
            >
              <Icon size={18} weight={activeHash === id ? "fill" : "regular"} />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        {/* Botão Hamburger (mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          role="menu"
          aria-orientation="vertical"
        >
          <nav className="flex flex-col px-4 py-2 space-y-1">
            {sections.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={id}
                onClick={(e) => handleLinkClick(e, id)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                  transition-colors duration-200
                  ${activeHash === id
                    ? "bg-purple-600/20 text-purple-300"
                    : "text-gray-300 hover:bg-gray-800"
                  }
                `}
                role="menuitem"
                aria-current={activeHash === id ? "page" : undefined}
              >
                <Icon size={20} weight={activeHash === id ? "fill" : "regular"} />
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
