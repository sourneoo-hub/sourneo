export const SITE = {
  name: "Sourneo",
  tagline: "Küçük işletmeler için modern web çözümleri.",
  whatsappUrl: "https://wa.me/905532071726",
  phone: "0553 207 17 26",
  phoneHref: "tel:+905532071726",
  email: "info@sourneo.com",
  emailHref: "mailto:info@sourneo.com",
} as const;

export const NAV_LINKS = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Teklif", href: "#teklif" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export const SERVICES = [
  {
    id: "web",
    title: "Web Sitesi",
    description: "Modern, hızlı ve mobil uyumlu kurumsal web siteleri.",
    icon: "globe",
  },
  {
    id: "support",
    title: "Dijital Destek",
    description:
      "Domain, hosting, kurumsal e-posta ve web sitesi güncellemeleri.",
    icon: "support",
  }
] as const;

export const REASONS = [
  { id: "mobile", title: "Mobil Uyumlu", icon: "mobile" },
  { id: "fast", title: "Hızlı Teslim", icon: "fast" },
  { id: "design", title: "Modern Tasarım", icon: "design" },
  { id: "contact", title: "Kolay İletişim", icon: "contact" },
] as const;

export type ServiceIconName = (typeof SERVICES)[number]["icon"];
export type ReasonIconName = (typeof REASONS)[number]["icon"];
