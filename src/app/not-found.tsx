import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-ink">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 text-ink-secondary">
        Aradığınız sayfa mevcut değil.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-btn bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Ana Sayfaya Dön
      </Link>
    </main>
  );
}
