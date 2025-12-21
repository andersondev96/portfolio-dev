"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { Service } from "@/lib/types";

export const ServiceCard = memo(function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group rounded-3xl focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-950"
    >
      <Card className="h-full flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700/80 hover:border-purple-500/60 shadow-lg hover:shadow-2xl hover:shadow-purple-700/30 rounded-3xl">
        <CardHeader className="flex flex-col gap-4 p-6 pb-4 md:p-8 md:pb-5">
          <div className="flex items-center gap-4">
            <div
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-800/80 border border-purple-600/60 text-purple-300 shadow-inner shadow-purple-900/30 md:h-16 md:w-16"
            >
              <Icon size={32} weight="duotone" />
            </div>

            <div className="flex-1 text-left">
              <CardTitle className="text-xl font-semibold text-white md:text-2xl">
                {service.title}
              </CardTitle>
              <p className="mt-1 inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-[11px] font-medium text-purple-200 border border-purple-500/30 md:text-xs">
                {service.tag}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 px-6 pb-6 text-left space-y-3 md:px-8 md:pb-8">
          <p className="leading-relaxed text-sm text-gray-200 md:text-base">
            {service.description}
          </p>

          <ul className="space-y-1.5 text-xs text-gray-300 md:text-sm">
            {service.bullets.map((item, bulletIndex) => (
              <li
                key={`${service.id}-${bulletIndex}`}
                className="flex items-start gap-2"
              >
                <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.article>
  );
});
