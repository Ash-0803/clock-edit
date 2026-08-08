import { motion } from "motion/react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  accent?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-6 text-[2.1rem] leading-[1.08] font-bold tracking-[-0.03em] text-foreground sm:text-[2.85rem]">
        {title}
        {accent && <span className="gradient-text"> {accent}</span>}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
