"use client";

import { memo } from "react";

export const NavLink = memo(
  ({
    id,
    label,
    icon: Icon,
    isActive,
    onClick,
  }: {
    id: string;
    label: string;
    icon: React.ElementType;
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => void;
  }) => (
    <a
      href={id}
      onClick={(e) => onClick(e, id)}
      className={`
      flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
      transition-all duration-200
      ${
        isActive
          ? "bg-purple-600/20 text-purple-300 shadow-inner"
          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
      }
      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
    `}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon size={18} weight={isActive ? "fill" : "regular"} />
      <span>{label}</span>
    </a>
  )
);

NavLink.displayName = "NavLink";
