import { cn } from "@/lib/utils";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

export default function Logo({ showText = false, className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-ink text-[13px] font-semibold tracking-tight text-white"
        aria-hidden="true"
      >
      
      </span>
      {showText ? (
        <span className="text-[17px] font-semibold tracking-tight text-ink">
          Sourneo
        </span>
      ) : null}
    </div>
  );
}
