import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
  interactive?: boolean;
}

export default function Card({
  children,
  className,
  as: Tag = "div",
  interactive = true,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "h-full rounded-card border border-line bg-white shadow-card",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-line hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
