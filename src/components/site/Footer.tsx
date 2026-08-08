import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { navLinks } from "@/lib/site-data";

const socials = [
  { label: "@clockedit.in", icon: Instagram, href: "https://www.instagram.com/clockedit.in/" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919286659874" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-5 pt-16 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
        style={{ background: "radial-gradient(circle, oklch(0.42 0.16 262 / 0.45), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Column 1 */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="btn-gradient flex size-7 items-center justify-center rounded-full text-[13px] font-bold text-primary-foreground">
                C
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">ClockEdit</span>
            </a>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-muted-foreground">
              AI videos and UGC content built for brands that live on performance. One creative partner,
              every stage of growth.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Navigate
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13.5px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — CONNECT */}
          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Connect
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white/[0.04] px-4 py-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:bg-white/[0.07] hover:shadow-[0_18px_45px_-20px_oklch(0.58_0.19_262/0.85)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-xl border border-border bg-white/[0.05] text-foreground/80 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-brand-blue/50 group-hover:text-brand-blue group-hover:shadow-[0_0_22px_oklch(0.58_0.19_262/0.6)]">
                      <s.icon size={16} />
                    </span>
                    <span className="text-[13.5px] font-medium text-foreground">{s.label}</span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-blue"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-7 sm:flex-row">
          <p className="text-[12.5px] text-muted-foreground">
            © {new Date().getFullYear()} ClockEdit. All rights reserved.
          </p>
          <p className="text-[12.5px] text-muted-foreground">AI Videos · UGC Content · Performance Creative</p>
        </div>
      </div>
    </footer>
  );
}
