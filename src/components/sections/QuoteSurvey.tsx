"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/constants";
import {
  PAYMENT_OPTIONS,
  type PaymentPlan,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function QuoteSurvey() {
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [payment, setPayment] = useState<PaymentPlan | null>(null);

  const selectedService = SERVICES.find((item) => item.id === serviceId);

  const whatsappHref = useMemo(() => {
    if (!selectedService || !payment) return undefined;
    return buildWhatsAppUrl({
      service: selectedService.title,
      payment,
    });
  }, [selectedService, payment]);

  const ready = Boolean(whatsappHref);

  return (
    <section
      id="teklif"
      className="scroll-mt-20 bg-accent-muted py-section sm:py-section-md"
      aria-labelledby="quote-heading"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-xl">
            <h2
              id="quote-heading"
              className="text-[1.625rem] font-semibold tracking-tight text-ink sm:text-3xl"
            >
              Teklif Al
            </h2>
            <p className="mt-2 text-[15px] text-ink-secondary">
              Hizmet ve ödeme şeklini seç, WhatsApp’tan yaz.
            </p>

            <div className="mt-6 rounded-card border border-line bg-white p-4 shadow-card sm:p-6">
              <fieldset>
                <legend className="text-sm font-semibold text-ink">
                  1. Hizmet
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICES.map((service) => {
                    const active = serviceId === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setServiceId(service.id)}
                        className={cn(
                          "min-h-11 rounded-full border px-3.5 text-sm font-medium transition-colors",
                          active
                            ? "border-accent bg-accent text-white"
                            : "border-line bg-white text-ink hover:border-accent/50 hover:bg-accent-muted",
                        )}
                        aria-pressed={active}
                      >
                        {service.title}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset className="mt-6">
                <legend className="text-sm font-semibold text-ink">
                  2. Ödeme
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {PAYMENT_OPTIONS.map((option) => {
                    const active = payment === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setPayment(option.id)}
                        className={cn(
                          "min-h-[4.5rem] rounded-2xl border px-4 py-3 text-left transition-colors",
                          active
                            ? "border-accent bg-accent-muted"
                            : "border-line bg-white hover:border-accent/40",
                        )}
                        aria-pressed={active}
                      >
                        <span className="block text-sm font-semibold text-ink">
                          {option.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-ink-tertiary">
                          {option.hint}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {ready ? (
                <p className="mt-5 text-sm text-ink-secondary">
                  <span className="font-medium text-ink">
                    {selectedService?.title}
                  </span>
                  {" · "}
                  {payment === "monthly" ? "Aylık" : "Yıllık"}
                </p>
              ) : (
                <p className="mt-5 text-sm text-ink-muted">
                  Devam için hizmet ve ödeme seç.
                </p>
              )}

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!ready}
                tabIndex={ready ? 0 : -1}
                className={cn(
                  "mt-4 inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-btn text-sm font-medium transition-colors",
                  ready
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "pointer-events-none bg-line text-ink-muted",
                )}
                onClick={(event) => {
                  if (!ready) event.preventDefault();
                }}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp&apos;tan Teklif Al
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
