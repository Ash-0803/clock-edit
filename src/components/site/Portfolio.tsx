import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { aiVideos, ugcVideos } from "@/lib/site-data";
import { DriveVideo } from "@/components/site/DriveVideo";
import { SectionHeading } from "@/components/site/SectionHeading";

const tabs = [
  { key: "ai", label: "AI Videos", items: aiVideos },
  { key: "ugc", label: "UGC Videos", items: ugcVideos },
] as const;

export function Portfolio() {
  const [tab, setTab] = useState<"ai" | "ugc">("ai");
  const active = tabs.find((t) => t.key === tab)!;

  return (
    <section id="portfolio" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work Speaks for Itself"
          subtitle="Premium AI commercials and authentic UGC designed to stop the scroll and increase conversions."
        />

        <div className="mt-9 flex justify-center">
          <div className="glass-card relative flex rounded-full p-1.5">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`relative rounded-full px-6 py-2.5 text-[13.5px] font-medium transition-colors ${
                  tab === t.key ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === t.key && (
                  <motion.span
                    layoutId="portfolio-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="btn-gradient absolute inset-0 rounded-full"
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {active.items.map((v) => (
            <DriveVideo
              key={v.id}
              id={v.id}
              title={v.title}
              category={v.category}
              duration={v.duration}
            />
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <p className="text-[15px] text-muted-foreground">
            Like what you see? Let's create something for your brand.
          </p>
          <a
            href="#contact"
            className="btn-gradient group mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Start Your Project
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
