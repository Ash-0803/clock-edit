import { motion } from "motion/react";

const stats = [
  { value: "500+", label: "Videos Delivered" },
  { value: "80%", label: "Lower Production Cost" },
  { value: "24-48h", label: "Average Turnaround" },
];

export function Stats() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card relative overflow-hidden rounded-[30px] p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-28 left-1/2 size-[420px] -translate-x-1/2 rounded-full blur-[110px]"
            style={{ background: "radial-gradient(circle, oklch(0.45 0.2 288 / 0.4), transparent 70%)" }}
          />
          <div className="relative grid grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="gradient-text text-[2.1rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
                  {s.value}
                </p>
                <p className="mt-1.5 text-[13px] text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
