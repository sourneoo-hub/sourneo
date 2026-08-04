"use client";

import { motion } from "framer-motion";

const steps = [
  { label: "Hizmet seç", delay: 0 },
  { label: "Ödeme planı", delay: 0.15 },
  { label: "WhatsApp teklif", delay: 0.3 },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <motion.div
        className="rounded-2xl border border-line bg-white p-3 shadow-card sm:rounded-3xl sm:p-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-1.5 border-b border-line pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <div className="ml-2 flex flex-1 items-center rounded-lg bg-surface px-3 py-1.5">
            <span className="truncate text-[11px] font-medium text-ink-tertiary sm:text-xs">
              sourneo.com
            </span>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-[11px] font-semibold text-white">
              S
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Sourneo</p>
              <p className="text-[11px] text-ink-muted">Dijital stüdyo</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <motion.div
              className="h-3 w-3/4 rounded-full bg-ink/10"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="h-2.5 w-1/2 rounded-full bg-ink/5" />
          </div>

          <ul className="mt-5 space-y-2.5">
            {steps.map((step, index) => (
              <motion.li
                key={step.label}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2.5"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + step.delay, duration: 0.35 }}
              >
                <motion.span
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-white"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut",
                  }}
                >
                  {index + 1}
                </motion.span>
                <span className="text-sm font-medium text-ink">{step.label}</span>
                <motion.span
                  className="ml-auto h-1.5 w-10 rounded-full bg-accent-soft"
                  animate={{ width: ["1.5rem", "2.75rem", "1.5rem"] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: index * 0.35,
                    ease: "easeInOut",
                  }}
                />
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-4 flex h-11 items-center justify-center rounded-full bg-accent text-sm font-medium text-white"
            animate={{ opacity: [0.88, 1, 0.88] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Teklif hazırlanıyor
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-3 -right-2 w-[7.5rem] rounded-2xl border border-line bg-white p-2.5 shadow-card-hover sm:-right-3 sm:w-36"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.45, delay: 0.35 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
      >
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-line" />
        <div className="space-y-1.5">
          <div className="h-2 rounded bg-accent-soft" />
          <div className="h-2 w-2/3 rounded bg-ink/5" />
          <div className="mt-2 rounded-lg bg-accent-muted px-2 py-1.5 text-center text-[10px] font-semibold text-accent">
            Aylık / Yıllık
          </div>
        </div>
      </motion.div>
    </div>
  );
}
