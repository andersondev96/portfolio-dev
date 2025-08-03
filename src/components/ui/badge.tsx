export function Badge({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-block text-xs px-3 py-1 rounded-full bg-blue-700 text-white font-medium ${className}`}
    >
      {children}
    </span>
  )
}