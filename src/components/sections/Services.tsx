import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/constants";
import { SERVICE_ICONS } from "@/lib/icons";

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="scroll-mt-20 py-section sm:py-section-md"
      aria-labelledby="services-heading"
    >
      <Container>
        <FadeIn>
          <h2
            id="services-heading"
            className="text-[1.625rem] font-semibold tracking-tight text-ink sm:text-3xl"
          >
            Hizmetler
          </h2>
          <p className="mt-2 max-w-lg text-[15px] text-ink-secondary">
            İhtiyacına uygun hizmeti seç, teklif formundan devam et.
          </p>
        </FadeIn>

        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];

            return (
              <li key={service.id}>
                <FadeIn delay={Math.min(index * 0.03, 0.15)} className="h-full">
                  <a
                    href="#teklif"
                    className="flex h-full flex-col rounded-2xl border border-line bg-white p-4 transition-colors hover:border-accent/40 hover:bg-accent-muted sm:p-5"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-muted text-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 text-[13px] font-semibold leading-snug text-ink sm:text-sm">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-ink-secondary sm:text-xs">
                      {service.description}
                    </p>
                  </a>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
