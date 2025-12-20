"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import * as Accordion from "@radix-ui/react-accordion";
import { CustomAccordionItem } from "./ui/accordion";

type Role = {
  title: string
  period: string
  responsibilities: string[]
}

type ExperienceCardProps = {
  company: string
  description: string
  period: string
  badges: string[]
  roles: Role[]
  defaultOpen?: number[]
}

export function ExperienceCard({
  company,
  description,
  period,
  badges,
  roles,
  defaultOpen,
}: ExperienceCardProps) {
  const [openRole, setOpenRole] = useState<string>(
    defaultOpen && defaultOpen.length > 0 ? `role-${defaultOpen[0]}` : ""
  );

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Card
        className="
          flex flex-col h-full gap-4
          p-5 md:p-6 lg:p-8
        "
      >
        <CardHeader className="p-0 space-y-3 md:space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CardTitle className="text-xl md:text-[1.25rem] lg:text-2xl font-bold text-white">
              {company}
            </CardTitle>
            <p className="text-xs sm:text-sm md:text-[0.9rem] text-gray-300 mt-1.5 md:mt-2 leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge className="inline-block text-[11px] md:text-xs px-2.5 py-1">
              {period}
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap gap-1.5 md:gap-2"
          >
            {badges &&
              badges.length > 0 &&
              badges.map((badge, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                  className="
                    inline-block text-[10px] md:text-xs px-2.5 py-1
                    rounded-full bg-gradient-to-r from-purple-900/40 to-purple-800/40
                    text-purple-300 font-medium border border-purple-700/50
                    hover:border-purple-500/70 hover:from-purple-900/60 hover:to-purple-800/60
                    transition-all duration-200
                  "
                >
                  {badge}
                </motion.span>
              ))}
          </motion.div>
        </CardHeader>

        <CardContent
          className="
            p-0 flex-1
            mt-2
            max-h-[260px] md:max-h-[220px] lg:max-h-none
            overflow-y-auto pr-1
          "
        >
          <Accordion.Root
            type="single"
            collapsible
            value={openRole}
            onValueChange={setOpenRole}
            className="space-y-0"
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CustomAccordionItem
                  value={`role-${index}`}
                  trigger={
                    <div className="flex items-center justify-between w-full flex-1 pr-1">
                      <div className="text-left">
                        <span className="font-semibold text-white text-sm md:text-[0.95rem]">
                          {role.title}
                        </span>
                        <span className="ml-2 text-[11px] md:text-xs text-gray-400 font-normal">
                          {role.period}
                        </span>
                      </div>
                    </div>
                  }
                >
                  <motion.ul
                    className="text-xs sm:text-sm md:text-[0.9rem] text-gray-300 space-y-1.5 mt-2 ml-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {role.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <span className="text-purple-400 flex-shrink-0 mt-0.5">
                          •
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CustomAccordionItem>
              </motion.div>
            ))}
          </Accordion.Root>
        </CardContent>
      </Card>
    </motion.div>
  );
}
