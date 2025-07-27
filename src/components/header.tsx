import { BracketsAngle, Browser, DeviceMobile, House, User, Wrench } from "@phosphor-icons/react";
import { Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg shadow-md"
      role="navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center h-16 px-4 md:px-6 lg:px-8">
        <nav className="flex gap-4 md:gap-6 text-sm font-medium text-white">
          <Link href="#home" className="flex items-center gap-1 hover:underline">
            <House size={18} /> Home
          </Link>
          <Link href="#about" className="flex items-center gap-1 hover:underline">
            <User size={18} /> Sobre
          </Link>
          <Link href="#experiences" className="flex items-center gap-1 hover:underline">
            <Briefcase size={18} /> Experiências
          </Link>
          <Link href="#formations" className="flex items-center gap-1 hover:underline">
            <GraduationCap size={18} /> Formações
          </Link>
          <Link href="#services" className="flex items-center gap-1 hover:underline">
            <Wrench size={18} /> Serviços
          </Link>
          <Link href="#technologies" className="flex items-center gap-1 hover:underline">
            <BracketsAngle size={18} /> Tecnologias
          </Link>
          <Link href="#projects" className="flex items-center gap-1 hover:underline">
            <Browser size={18} /> Projetos
          </Link>
          <Link href="#contact" className="flex items-center gap-1 hover:underline">
            <DeviceMobile size={18} /> Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}