import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="flex flex-col items-start gap-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
        <div className="max-w-sm">
          <Logo showText />
          <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
            {SITE.tagline}
          </p>
        </div>
        <p className="text-xs text-ink-muted">© 2026 {SITE.name}</p>
      </Container>
    </footer>
  );
}
