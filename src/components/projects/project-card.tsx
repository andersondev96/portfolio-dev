"use client";

import { memo, useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

export const ProjectCard = memo(function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}) {
  const handleClick = useCallback(() => onSelect(project), [onSelect, project]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      className={`group flex flex-col rounded-3xl bg-[#181823] border border-white/5
        shadow-lg transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_0_28px_6px_rgba(168,85,247,0.22)]
        focus-within:ring-2 focus-within:ring-purple-500
        focus-within:ring-offset-2 focus-within:ring-offset-[#080811]
        ${project.highlight ? "border-purple-500/60" : ""}`}
    >
      <button
        type="button"
        onClick={handleClick}
        className="relative block overflow-hidden rounded-3xl rounded-b-none focus:outline-none"
        aria-label={`Ver detalhes do projeto ${project.title}`}
      >
        <div className="aspect-video w-full bg-zinc-900">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/90 via-black/70 to-transparent px-3 py-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-zinc-100">
            Ver detalhes
          </span>
          <span className="text-[10px] text-zinc-300">
            Stack, funcionalidades, contexto
          </span>
        </div>
      </button>

      <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
        <div>
          <h3 className="text-lg font-semibold text-purple-300 sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-300 sm:text-base">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full bg-purple-600/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap justify-start gap-2 sm:justify-end">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-zinc-800/90 px-3 py-2 text-xs font-medium text-zinc-100 transition-colors hover:bg-zinc-700"
            >
              Ver projeto
            </Link>
          )}

          <Link
            href={project.github_repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-3 py-2 text-xs font-semibold text-white transition-colors hover:from-purple-500 hover:to-purple-600"
          >
            Ver código
          </Link>
        </div>
      </div>
    </motion.article>
  );
});
