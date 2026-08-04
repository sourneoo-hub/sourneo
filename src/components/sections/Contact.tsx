import { MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="scroll-mt-20 py-section sm:py-section-md"
      aria-labelledby="contact-heading"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-md text-center">
            <h2
              id="contact-heading"
              className="text-[1.625rem] font-semibold tracking-tight text-ink sm:text-3xl"
            >
              İletişim
            </h2>
            <p className="mt-3 text-[15px] text-ink-secondary">
              Sorun olursa doğrudan yazabilirsin.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Button href="#teklif" size="lg" className="w-full">
                Teklif Formuna Dön
              </Button>
              <Button
                href={SITE.whatsappUrl}
                external
                variant="secondary"
                size="lg"
                className="w-full"
                ariaLabel="WhatsApp'a git"
                icon={<MessageCircle className="h-5 w-5" strokeWidth={1.75} />}
              >
                WhatsApp
              </Button>
            </div>

            <a
              href={SITE.phoneHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
