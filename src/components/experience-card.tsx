"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { memo, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CustomAccordionItem } from "./ui/accordion";

type Role = {
  id?: number;
  title: string;
  period: string;
  responsibilities: string[];
};

type ExperienceCardProps = {
  id: number;
  company: string;
  description: string;
  period: string;
  badges: string[];
  roles: Role[];
  defaultOpen?: number[];
};

const BADGE_ANIMATION_BASE_DELAY = 0.25;
const ROLE_ANIMATION_BASE_DELAY = 0.1;
const RESPONSIBILITY_ANIMATION_DELAY_STEP = 0.05;

export const ExperienceCard = memo(function ExperienceCard({
  id,
  company,
  description,
  period,
  badges,
  roles,
  defaultOpen,
}: ExperienceCardProps) {
  const initialOpenRole = useMemo(() => {
    if (!defaultOpen || defaultOpen.length === 0) return "";
    return `role-${defaultOpen[0]}`;
  }, [defaultOpen]);

  const [openRole, setOpenRole] = useState<string>(initialOpenRole);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="flex h-full flex-col gap-4 p-5 md:p-6 lg:p-8">
        <CardHeader className="space-y-3 p-0 md:space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CardTitle className="text-xl font-bold text-white md:text-[1.25rem] lg:text-2xl">
              {company}
            </CardTitle>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-300 sm:text-sm md:mt-2 md:text-[0.9rem]">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge className="inline-block px-2.5 py-1 text-[11px] md:text-xs">
              {period}
            </Badge>
          </motion.div>

          {badges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap gap-1.5 md:gap-2"
            >
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: BADGE_ANIMATION_BASE_DELAY + index * 0.05,
                  }}
                  className="
                    inline-block rounded-full border border-purple-700/50
                    bg-gradient-to-r from-purple-900/40 to-purple-800/40
                    px-2.5 py-1 text-[10px] font-medium text-purple-300
                    transition-all duration-200
                    hover:border-purple-500/70 hover:from-purple-900/60 hover:to-purple-800/60
                  "
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          )}
        </CardHeader>

        <CardContent
          className="
            mt-2 flex-1 overflow-y-auto pr-1
            max-h-[260px] md:max-h-[220px] lg:max-h-none p-0
          "
        >
          <Accordion.Root
            type="single"
            collapsible
            value={openRole}
            onValueChange={setOpenRole}
            className="space-y-0"
          >
            {roles.map((role, index) => {
              const roleValue = `role-${index}`;
              const roleKey = role.id ?? roleValue;

              return (
                <motion.div
                  key={roleKey}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * ROLE_ANIMATION_BASE_DELAY,
                  }}
                  viewport={{ once: true }}
                >
                  <CustomAccordionItem
                    value={roleValue}
                    trigger={
                      <div className="flex w-full flex-1 items-center justify-between pr-1">
                        <div className="text-left">
                          <span className="text-sm font-semibold text-white md:text-[0.95rem]">
                            {role.title}
                          </span>
                          <span className="ml-2 text-[11px] font-normal text-gray-400 md:text-xs">
                            {role.period}
                          </span>
                        </div>
                      </div>
                    }
                  >
                    <motion.ul
                      className="mt-2 ml-4 space-y-1.5 text-xs text-gray-300 sm:text-sm md:text-[0.9rem]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {role.responsibilities.map((item, i) => (
                        <motion.li
                          key={`${roleKey}-${i}`}
                          className="flex items-start gap-2 leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: i * RESPONSIBILITY_ANIMATION_DELAY_STEP,
                          }}
                        >
                          <span className="mt-0.5 flex-shrink-0 text-purple-400">
                            •
                          </span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CustomAccordionItem>
                </motion.div>
              );
            })}
          </Accordion.Root>
        </CardContent>
      </Card>
    </motion.div>
  );
});
