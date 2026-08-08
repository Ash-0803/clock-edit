import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { navLinks } from "@/lib/site-data";
import logo from "@/assets/clockedit-logo.png";


export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "glass-card shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="ClockEdit logo"
            className="h-[42px] w-auto object-contain"
          />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">ClockEdit</span>
        </a>


        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-gradient hidden rounded-full px-5 py-2.5 text-[13.5px] font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.03] sm:inline-block"
          >
            Book a Free Consultation
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <div className="glass-card mx-auto mt-2 max-w-6xl rounded-3xl p-4 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gradient mt-2 rounded-full px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
