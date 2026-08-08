import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card relative mx-auto max-w-4xl overflow-hidden rounded-[34px] px-7 py-14 text-center sm:px-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 size-[520px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, oklch(0.48 0.21 285 / 0.5), transparent 70%)" }}
        />
        <span className="eyebrow relative">Contact</span>
        <h2 className="relative mt-6 text-[2.1rem] leading-[1.08] font-bold tracking-[-0.03em] text-foreground sm:text-[2.7rem]">
          Let's Create Something
          <br />
          <span className="gradient-text">Extraordinary</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
          Book a free consultation and we'll map out the creative that fits your product, audience and
          ad spend.
        </p>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/919286659874"
            target="_blank"
            rel="noreferrer noopener"
            className="btn-gradient group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Book a Free Consultation
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://wa.me/919286659874"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand-blue/50 hover:bg-white/[0.08]"
          >
            <MessageCircle size={15} className="text-brand-lilac" />
            WhatsApp Us
          </a>
          <a
            href="https://www.instagram.com/clockedit.in/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand-blue/50 hover:bg-white/[0.08]"
          >
            <Instagram size={15} className="text-brand-lilac" />
            Instagram
          </a>
        </div>

        <p className="relative mt-8 text-[12.5px] text-muted-foreground">
          Typical response time: under 2 hours
        </p>
      </motion.div>
    </section>
  );
}
