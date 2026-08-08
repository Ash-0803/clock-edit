import { motion } from "motion/react";
import { SectionHeading } from "@/components/site/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Discovery Call",
    copy: "We understand your brand, product, audience and performance goals.",
  },
  {
    n: "02",
    title: "Creative Strategy",
    copy: "We build hooks, scripts and a shot plan engineered for conversions.",
  },
  {
    n: "03",
    title: "Production",
    copy: "AI generation or creator sourcing, then premium editing and sound design.",
  },
  {
    n: "04",
    title: "Delivery & Optimization",
    copy: "Multi-aspect delivery in 24–48h with revisions until it performs.",
  },
];

const industries = [
  "eCommerce",
  "Skincare & Beauty",
  "Health & Wellness",
  "Fashion",
  "Food & Beverage",
  "SaaS & Apps",
  "Fitness",
  "Home & Lifestyle",
];

export function Process() {
  return (
    <section id="process" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Process"
          title="How We Work"
          subtitle="A simple, transparent workflow that takes you from idea to ad-ready creative."
        />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute top-[46px] right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-brand-violet/40 to-transparent lg:block"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="glass-card relative rounded-[24px] p-6 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="btn-gradient flex size-11 items-center justify-center rounded-2xl text-[13px] font-semibold text-primary-foreground">
                  {s.n}
                </span>
                <h3 className="mt-5 text-[1.05rem] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground">{s.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Industries"
            title="Brands we create for"
            subtitle="From DTC skincare to SaaS, our creative adapts to every category."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-white/[0.03] px-4 py-5 text-center text-[13.5px] text-foreground/90 transition-colors hover:border-brand-blue/40 hover:bg-white/[0.06]"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
