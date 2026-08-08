import { Check, Film, Users, X } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/site/SectionHeading";

const traditional = ["Expensive Shoots", "Long Turnaround", "Reshoots", "Limited Creative Testing"];
const clockedit = [
  "AI Videos",
  "UGC Videos",
  "Premium Editing",
  "Fast Delivery",
  "Unlimited Creative Possibilities",
  "Performance Marketing Focused",
];

const serviceGroups = [
  {
    icon: Film,
    title: "AI Video Services",
    items: [
      "AI Product Commercials",
      "AI UGC Ads",
      "AI Testimonial Videos",
      "AI Product Demos",
      "Motion Graphics",
      "Social Media Ads",
    ],
  },
  {
    icon: Users,
    title: "UGC Services",
    items: [
      "Product Reviews",
      "Unboxing Videos",
      "Lifestyle Content",
      "Talking Head Videos",
      "Voiceover UGC",
      "Creator Sourcing",
    ],
  },
];

export function Comparison() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why ClockEdit"
          title="A smarter way to make ads"
          subtitle="Everything a traditional production house delivers — without the cost, delays or creative ceiling."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-border bg-card/60 p-8"
          >
            <h3 className="text-[1.35rem] font-medium text-muted-foreground">Traditional Production</h3>
            <ul className="mt-6 space-y-4">
              {traditional.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[14.5px] text-muted-foreground">
                  <span className="flex size-5 items-center justify-center rounded-full border border-border">
                    <X size={11} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[28px] border border-brand-violet/40 bg-card/70 p-8 shadow-[0_40px_120px_-60px_oklch(0.56_0.23_288/0.9)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full blur-[100px]"
              style={{ background: "radial-gradient(circle, oklch(0.5 0.2 288 / 0.45), transparent 70%)" }}
            />
            <h3 className="relative text-[1.35rem] font-semibold text-foreground">ClockEdit</h3>
            <ul className="relative mt-6 space-y-4">
              {clockedit.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[14.5px] text-foreground">
                  <span className="btn-gradient flex size-5 items-center justify-center rounded-full">
                    <Check size={11} className="text-primary-foreground" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to ship creative"
            subtitle="Two complete production tracks under one roof — mix and match to fit your funnel."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {serviceGroups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-[28px] p-7 sm:p-8"
              >
                <div className="flex items-center gap-3.5">
                  <span className="btn-gradient flex size-10 items-center justify-center rounded-xl">
                    <g.icon size={17} className="text-primary-foreground" />
                  </span>
                  <h3 className="text-[1.3rem] font-semibold text-foreground">{g.title}</h3>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {g.items.map((it) => (
                    <div
                      key={it}
                      className="rounded-2xl border border-border bg-white/[0.03] px-4 py-3.5 text-[13.5px] text-foreground/90 transition-colors hover:border-brand-violet/40 hover:bg-white/[0.06]"
                    >
                      {it}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
