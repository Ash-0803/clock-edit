import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";



export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* ambient gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[640px] rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.45 0.2 292 / 0.55), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-0 size-[520px] rounded-full opacity-50 blur-[130px]"
        style={{ background: "radial-gradient(circle, oklch(0.42 0.16 262 / 0.5), transparent 65%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.045] px-3.5 py-1.5 text-[12.5px] text-muted-foreground">
            <Sparkles size={13} className="text-brand-lilac" />
            AI Videos &amp; UGC Content Studio
          </span>

          <h1 className="mt-7 text-[2.65rem] leading-[1.06] font-bold tracking-[-0.03em] text-foreground sm:text-6xl">
            AI Videos &amp; UGC
            <br />
            Content That
            <br />
            <span className="gradient-text">Drive Results.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Create premium AI-powered commercials and authentic UGC content designed for paid ads,
            social media, and eCommerce. One creative partner for every stage of your brand's growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn-gradient group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
            >
              Book a Free Consultation
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.07]"
            >
              <Play size={14} className="text-brand-lilac" />
              View Portfolio
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-muted-foreground">
            <span>24–48h delivery</span>
            <span>80% lower cost</span>
            <span>Unlimited revisions</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass-card overflow-hidden rounded-[28px] p-4 shadow-[0_50px_120px_-60px_rgba(0,0,0,1)]">
            <video
              src={heroVideo.url}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="aspect-video size-full rounded-[18px] object-cover"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
