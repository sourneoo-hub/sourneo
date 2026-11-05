import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import HeroVisual from "@/components/ui/HeroVisual";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="scroll-mt-20 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl text-center lg:text-left">
            <FadeIn>
              <p className="text-sm font-semibold tracking-wide text-accent">
                {SITE.name}
              </p>
            </FadeIn>

            <FadeIn delay={0.04}>
              <h1
                id="hero-heading"
                className="mt-4 text-display-sm sm:text-display-md lg:text-display-lg"
              >
                İşletmenizi dijitalde
                <br />
                güçlendiren çözümler
              </h1>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ink-secondary sm:text-lg lg:mx-0">
                Kurumsal web sitesi ve dijital destek ile markanızı
                daha görünür hale getiriyoruz. Size uygun aylık veya yıllık
                planla teklif alın.
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  href="#teklif"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<MessageCircle className="h-5 w-5" strokeWidth={1.75} />}
                >
                  Teklif Al
                </Button>
                <a
                  href="#hizmetler"
                  className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-medium text-ink-secondary transition-colors hover:text-accent"
                >
                  Hizmetleri incele
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="pb-4 sm:pb-6 lg:pb-0">
            <HeroVisual />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
