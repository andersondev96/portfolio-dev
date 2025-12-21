import { memo } from "react";
import { motion } from "motion/react";

export const ActionButton = memo(
  ({
    label,
    icon: Icon,
    onClick,
  }: {
    id: string;
    label: string;
    icon: React.ElementType;
    onClick: () => void;
  }) => (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
    >
      <Icon size={20} weight="fill" className="flex-shrink-0" />
      <span className="whitespace-nowrap">{label}</span>
    </motion.button>
  )
);
