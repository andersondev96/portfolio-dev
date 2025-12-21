"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { ProjectModal } from "./project-modal";
import { ProjectCard } from "./project-card";
import { projects } from "./data/projects";
import type { Project } from "@/lib/types";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="w-full bg-[#141520] py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.header
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              id="projects-title"
              className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl"
            >
              Projetos
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            />

            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
              Seleção de projetos que demonstram qualidade de código,
              experiência do usuário e foco em resultado para empresas e
              clientes finais.
            </p>
          </motion.header>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onSelect={handleSelectProject}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          isOpen={true}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </>
  );
}
