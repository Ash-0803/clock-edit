import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "@/components/site/SectionHeading";

const faqs = [
  {
    q: "What is the difference between AI videos and UGC videos?",
    a: "AI videos are fully generated commercials with cinematic control over product, scene and motion. UGC videos are creator-style, authentic content filmed to feel native to social feeds. Most brands run both: AI for scale and polish, UGC for trust.",
  },
  {
    q: "How long does a project take?",
    a: "Most single-video projects are delivered in 24–48 hours after the creative brief is approved. Larger packages with multiple hooks and aspect ratios usually take 3–5 working days.",
  },
  {
    q: "Do you provide the creators for UGC?",
    a: "Yes. Creator sourcing, briefing, product shipping coordination and editing are all handled by us — you only approve the brief and the final cut.",
  },
  {
    q: "How many revisions are included?",
    a: "Every package includes revisions until the creative matches the approved brief. Higher tiers include unlimited revisions.",
  },
  {
    q: "Which platforms are the videos optimised for?",
    a: "Meta (Facebook & Instagram), TikTok, YouTube Shorts, Snapchat, Amazon and Shopify product pages. Every delivery includes 9:16, 4:5 and 1:1 crops.",
  },
];



export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before starting your first project."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`glass-card overflow-hidden rounded-[20px] transition-colors duration-300 ${
                  isOpen ? "border-brand-violet/40" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[14.5px] font-medium text-foreground">{f.q}</span>
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-white/[0.07]" : ""
                    }`}
                  >
                    <Plus size={13} className="text-foreground" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-[13.8px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
