"use client"

import { motion } from "motion/react";
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
  roles: Role[]
  defaultOpen?: number[]
}

export function ExperienceCard({ company, description, period, roles, defaultOpen }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer h-full"
    >
      <Card className="flex flex-col h-full gap-6 p-6 bg-gray-800 text-white shadow-xl rounded-3xl hover:shadow-gray-600/50 transition-shadow duration-300">
        <CardHeader className="p-0 space-y-2">
          <CardTitle className="text-2xl font-bold">{company}</CardTitle>
          <p className="text-sm text-gray-300">{description}</p>
          <Badge className="w-fit text-xs mt-2">{period}</Badge>
        </CardHeader>

        <CardContent className="p-0">
          <Accordion.Root type="multiple" className="space-y-3" defaultValue={defaultOpen?.map((i) => `item-${i}`) || []}>
            {roles.map((role, index) => (
              <CustomAccordionItem
                key={index}
                value={`item-${index}`}
                trigger={
                  <span>
                    {role.title}
                    <span className="ml-2 text-gray-400 text-xs font-normal">
                      {role.period}
                    </span>
                  </span>
                }
              >
                <ul className="text-sm text-gray-300 space-y-2">
                  {role.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start leading-snug">
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>


              </CustomAccordionItem>
            ))}
          </Accordion.Root>
        </CardContent>
      </Card>
    </motion.div>
  )
}