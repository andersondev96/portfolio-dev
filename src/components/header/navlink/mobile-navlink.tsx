"use client";

import { memo } from "react";

export const MobileNavLink = memo(
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
      flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
      transition-colors duration-200
      ${
        isActive
          ? "bg-purple-600/20 text-purple-300"
          : "text-gray-300 hover:bg-gray-800"
      }
    `}
      role="menuitem"
      aria-current={isActive ? "page" : undefined}
    >
      <Icon size={20} weight={isActive ? "fill" : "regular"} />
      {label}
    </a>
  )
);

MobileNavLink.displayName = "MobileNavLink";
