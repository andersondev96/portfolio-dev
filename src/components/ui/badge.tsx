import { motion } from "motion/react";

export function Badge({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`inline-block text-xs md:text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium shadow-md hover:shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200 ${className}`}
    >
      {children}
    </motion.span>
  )
}
