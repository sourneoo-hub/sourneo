"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    // <header
    //   className={cn(
    //     "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-200",
    //     "bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70",
    //     scrolled ? "border-line shadow-nav" : "border-transparent",
    //   )}
    // >
    //   <Container className="flex h-16 items-center justify-between">
    //     <a
    //       href="#anasayfa"
    //       className="rounded-lg focus-visible:outline-none focus-visible:ring-2 
    //       focus-visible:ring-accent focus-visible:ring-offset-2 "
    //       aria-label="Sourneo ana sayfa"
    //       onClick={close}
    //     >
    //       <Logo showText />
    //     </a>

    //     {/* <nav className="hidden items-center gap-1 md:flex" aria-label="Ana navigasyon">
    //       {NAV_LINKS.map((link) => (
    //         <a
    //           key={link.href}
    //           href={link.href}
    //           className="rounded-lg px-3 py-2 text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
    //         >
    //           {link.label}
    //         </a>
    //       ))}
    //       <div className="ml-3">
    //         <Button href="#teklif" size="md">
    //           Teklif Al
    //         </Button>
    //       </div>
    //     </nav> */}

    //     {/* <button
    //       ref={buttonRef}
    //       type="button"
    //       className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-surface md:hidden"
    //       onClick={() => setOpen((value) => !value)}
    //       aria-expanded={open}
    //       aria-controls={menuId}
    //       aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
    //     >
    //       {open ? (
    //         <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
    //       ) : (
    //         <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
    //       )}
    //     </button> */}
    //   </Container>

    //   <AnimatePresence>
    //     {open ? (
    //       <motion.nav
    //         id={menuId}
    //         initial={{ opacity: 0, y: -6 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -6 }}
    //         transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    //         className="border-t border-line bg-white md:hidden"
    //         aria-label="Mobil navigasyon"
    //       >
    //         <Container className="flex flex-col gap-1 py-3 pb-5">
    //           {NAV_LINKS.map((link) => (
    //             <a
    //               key={link.href}
    //               href={link.href}
    //               onClick={close}
    //               className="rounded-xl px-4 py-3.5 text-base font-medium text-ink transition-colors hover:bg-surface"
    //             >
    //               {link.label}
    //             </a>
    //           ))}
    //           <div className="pt-2">
    //             <Button
    //               href="#teklif"
    //               size="lg"
    //               className="w-full"
    //               ariaLabel="Teklif anketine git"
    //               onClick={close}
    //             >
    //               Teklif Al
    //             </Button>
    //           </div>
    //         </Container>
    //       </motion.nav>
    //     ) : null}
    //   </AnimatePresence>
    // </header>
    <>
    
    </>
  );
}
