import { SITE } from "@/lib/constants";

export type PaymentPlan = "monthly" | "yearly";

export type QuotePayload = {
  service: string;
  payment: PaymentPlan;
};

export const PAYMENT_OPTIONS = [
  {
    id: "monthly" as const,
    label: "Aylık",
    hint: "Esnek ödeme",
  },
  {
    id: "yearly" as const,
    label: "Yıllık",
    hint: "Daha avantajlı",
  },
] as const;

export function paymentLabel(payment: PaymentPlan) {
  return payment === "monthly" ? "Aylık" : "Yıllık";
}

export function buildQuoteMessage({ service, payment }: QuotePayload) {
  return [
    "Merhaba,",
    "",
    `Hizmet: ${service}`,
    `Ödeme: ${paymentLabel(payment)}`,
    "",
    "Bu hizmet için teklif almak istiyorum.",
  ].join("\n");
}

export function buildWhatsAppUrl(payload: QuotePayload) {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(buildQuoteMessage(payload))}`;
}
