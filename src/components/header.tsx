import { useEffect, useRef, useState } from "react";
import { BracketsAngle, Browser, DeviceMobile, House, User, Wrench, GraduationCap, Briefcase } from "@phosphor-icons/react";
import Link from "next/link";

const sections = [
  "#home",
  "#about",
  "#experiences",
  "#formations",
  "#services",
  "#technologies",
  "#projects",
  "#contact",
];

export function Header() {
  const [activeHash, setActiveHash] = useState("#home");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    function onScroll() {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current)

      debounceTimeout.current = setTimeout(() => {
        let currentSection = "#home"; // padrão

        for (const sectionId of sections) {
          const section = document.querySelector(sectionId);
          if (!section) continue;

          const rect = section.getBoundingClientRect();

          if (rect.top <= 150) {
            currentSection = sectionId;
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
    };
  }, []);

  function linkClass(hash: string) {
    const baseClass = "flex items-center gap-1 hover:underline";
    const activeClass = "underline font-bold text-yellow-400";
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
          {sections.map((sectionId) => {
            let Icon;
            switch (sectionId) {
              case "#home": Icon = House; break;
              case "#about": Icon = User; break;
              case "#experiences": Icon = Briefcase; break;
              case "#formations": Icon = GraduationCap; break;
              case "#services": Icon = Wrench; break;
              case "#technologies": Icon = BracketsAngle; break;
              case "#projects": Icon = Browser; break;
              case "#contact": Icon = DeviceMobile; break;
              default: Icon = House;
            }
            return (
              <a
                key={sectionId}
                href={sectionId}
                onClick={(e) => handleLinkClick(e, sectionId)}
                className={linkClass(sectionId)}
              >
                <Icon size={18} /> {sectionId.replace("#", "").charAt(0).toUpperCase() + sectionId.slice(2)}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
