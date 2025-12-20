"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-[#050509] text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-[11px] sm:text-xs text-zinc-500">
          Feito com <span className="text-purple-400">💜</span> por{" "}
          <span className="font-medium text-zinc-100">Anderson Fernandes</span>.
        </p>

        <Link
          href="https://www.linkedin.com/in/anderson-fernandes96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] sm:text-xs font-medium text-purple-300 hover:text-purple-200 underline underline-offset-4 decoration-purple-500/70 hover:decoration-purple-400 transition-colors"
        >
          Entre em contato
        </Link>
      </div>
    </footer>
  );
}
