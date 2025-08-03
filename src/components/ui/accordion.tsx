import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

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
    <Accordion.Item value={value} className="border-b border-gray-700">
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between py-2 text-left text-white font-medium transition">
          {trigger}
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="pb-4 text-sm text-gray-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
}
