import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  id,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2
        id={id}
        className="text-[1.625rem] font-semibold tracking-tight text-ink sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
