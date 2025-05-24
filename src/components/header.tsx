import { BracketsAngle, Browser, DeviceMobile, House, User, Wrench } from "@phosphor-icons/react";
import Link from "next/link";

export function Header() {
  return (
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] opacity-80 shadow-md mx-auto px-4 md:px-6 lg:px-8 flex h-12 shrink-0 items-center">
        <div className="mr-auto flex gap-8">
          <Link 
            href="#" 
            className="group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-lg text-white transition-colors
            focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
          >
           <House size={18} /> 
           Home
          </Link>

          <Link 
            href="#about" 
            className="group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-lg text-white transition-colors
            focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
          >
           <User size={18} /> 
           Sobre
          </Link>

          <Link 
            href="#service" 
            className="group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-lg text-white transition-colors
            focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
          >
           <Wrench size={18} /> 
           Serviços
          </Link>

          <Link 
            href="#" 
            className="group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-lg text-white transition-colors
            focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
          >
           <BracketsAngle size={18} /> 
           Tecnologias
          </Link>

          <Link 
            href="#" 
            className="group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-lg text-white transition-colors
            focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
          >
           <Browser size={18} /> 
           Projetos
          </Link>

          <Link 
            href="#" 
            className="group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-lg text-white transition-colors
            focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
          >
           <DeviceMobile size={18} /> 
           Contato
          </Link>
        </div>
      </header>
  )
}