"use client";

import { useEffect, useRef, useState, useCallback, memo } from "react";
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
} from "./icons";
import { NavLink } from "./ui/navlink/navlink";
import { MobileNavLink } from "./ui/navlink/mobile-navlink";

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
  const sectionsCache = useRef<Map<string, HTMLElement>>(new Map());
  const isScrollingRef = useRef(false);

  useEffect(() => {
    sections.forEach(({ id }) => {
      const element = document.querySelector(id) as HTMLElement;
      if (element) {
        sectionsCache.current.set(id, element);
      }
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          const hash = `#${entry.target.id}`;
          setActiveHash(hash);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionsCache.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    function onScroll() {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

      debounceTimeout.current = setTimeout(() => {
        if (isScrollingRef.current) return;

        let currentSection = "#home";

        for (const section of sections) {
          const element = sectionsCache.current.get(section.id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            currentSection = section.id;
          }
        }

        setActiveHash(currentSection);
      }, 100);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, []);

  const handleLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      event.preventDefault();
      const element = sectionsCache.current.get(hash);

      if (element) {
        isScrollingRef.current = true;

        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
        history.pushState(null, "", hash);
        setActiveHash(hash);
        setMobileMenuOpen(false);

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }
    },
    []
  );

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800"
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between h-16 px-4 md:px-6 lg:px-8">
        {/* Menu Desktop */}
        <nav
          className="hidden md:flex gap-2 overflow-x-auto py-2 px-1 scrollbar-hide"
          aria-label="Menu de navegação"
        >
          {sections.map(({ id, label, icon }) => (
            <NavLink
              key={id}
              id={id}
              label={label}
              icon={icon}
              isActive={activeHash === id}
              onClick={handleLinkClick}
            />
          ))}
        </nav>

        {/* Botão Hamburger (mobile) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
        </button>
      </div>

      {/* Menu Mobile com animação */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 animate-slideDown"
          role="menu"
          aria-orientation="vertical"
        >
          <nav className="flex flex-col px-4 py-2 space-y-1">
            {sections.map(({ id, label, icon }) => (
              <MobileNavLink
                key={id}
                id={id}
                label={label}
                icon={icon}
                isActive={activeHash === id}
                onClick={handleLinkClick}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
