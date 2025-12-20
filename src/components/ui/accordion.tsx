import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function CustomAccordionItem({
  value,
  trigger,
  children,
}: {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Accordion.Item
      value={value}
      className="border-b border-gray-700/50 hover:border-purple-500/30 transition-colors duration-300"
    >
      <Accordion.Header className="m-0">
        <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 py-3 md:py-4 px-2 md:px-3 text-left text-white font-medium transition-all duration-200 hover:bg-gray-800/50 hover:text-purple-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
          <div className="flex-1">
            {trigger}
          </div>
          <div
            className="group-data-[state=open]:rotate-180 transition-transform duration-300 flex-shrink-0"
          >
            <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </div>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="overflow-hidden text-sm md:text-base text-gray-300 pb-4 md:pb-6 px-2 md:px-3 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
