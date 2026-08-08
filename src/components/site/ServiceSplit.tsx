import { ArrowRight, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";
import { aiVideos, ugcVideos } from "@/lib/site-data";
import { DriveThumb } from "@/components/site/DriveVideo";

const cards = [
  {
    id: "ai-videos",
    badge: "Cinematic & scalable",
    icon: Sparkles,
    title: "AI Videos",
    copy: "Premium AI-generated commercials designed for Meta, TikTok, Instagram, YouTube Shorts, Shopify, and Amazon brands.",
    cta: "Explore AI Videos",
    tint: "oklch(0.42 0.16 262 / 0.35)",
    items: aiVideos.slice(0, 3),
  },
  {
    id: "ugc-videos",
    badge: "Authentic & trusted",
    icon: Users,
    title: "UGC Videos",
    copy: "Authentic creator-generated videos built to increase trust, engagement, and conversions across social media and paid advertising.",
    cta: "Explore UGC Videos",
    tint: "oklch(0.45 0.2 292 / 0.35)",
    items: ugcVideos.slice(0, 3),
  },
];

export function ServiceSplit() {
  return (
    <section className="relative px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        {cards.map((c, idx) => (
          <motion.article
            key={c.id}
            id={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card relative overflow-hidden rounded-[30px] p-7 sm:p-9"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full blur-[90px]"
              style={{ background: `radial-gradient(circle, ${c.tint}, transparent 70%)` }}
            />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.05] px-3 py-1.5 text-[12px] text-muted-foreground">
              <c.icon size={13} className="text-brand-lilac" />
              {c.badge}
            </span>
            <h2 className="relative mt-5 text-[2rem] font-bold tracking-[-0.02em] text-foreground">
              {c.title}
            </h2>
            <p className="relative mt-3 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
              {c.copy}
            </p>

            <div className="relative mt-7 grid grid-cols-3 gap-3">
              {c.items.map((v) => (
                <div
                  key={v.id}
                  className="relative aspect-9/16 overflow-hidden rounded-2xl border border-border bg-secondary"
                >
                  <DriveThumb
                    id={v.id}
                    width={420}
                    alt={`${v.title} ${c.title.toLowerCase()} still`}
                    label={v.title}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2.5 pt-6 pb-2 text-[11.5px] text-foreground/90">
                    {v.title}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#portfolio"
              className="group relative mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-5 py-3 text-[13.5px] font-medium text-foreground transition-colors hover:bg-white/[0.08]"
            >
              {c.cta}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
