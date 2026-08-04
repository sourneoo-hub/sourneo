import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-card hover:bg-accent-hover active:bg-accent-hover",
  secondary:
    "bg-white text-ink border border-line shadow-card hover:bg-surface active:bg-surface",
  ghost: "bg-transparent text-ink hover:bg-surface active:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm gap-2",
  lg: "min-h-12 px-6 text-[15px] gap-2.5",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
  ariaLabel,
  icon,
  iconPosition = "left",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-btn font-medium",
    "transition-[color,background-color,border-color,transform,box-shadow] duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    "active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" ? (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </Link>
  );
}
