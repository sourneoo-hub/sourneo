import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { REASONS } from "@/lib/constants";
import { REASON_ICONS } from "@/lib/icons";

export default function WhyUs() {
  return (
    <section
      className="scroll-mt-20 border-y border-line bg-surface py-10 sm:py-12"
      aria-labelledby="why-heading"
    >
      <Container>
        <h2 id="why-heading" className="sr-only">
          Neden Biz?
        </h2>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {REASONS.map((reason, index) => {
            const Icon = REASON_ICONS[reason.icon];
            return (
              <li key={reason.id}>
                <FadeIn delay={index * 0.04}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-card">
                      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {reason.title}
                    </span>
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
