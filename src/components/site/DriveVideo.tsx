import { useRef, useState } from "react";
import { Play } from "lucide-react";

export const driveThumb = (id: string, w = 800) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;

export const driveThumbAlt = (id: string, w = 800) =>
  `https://lh3.googleusercontent.com/d/${id}=w${w}`;

export const drivePreview = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

/** Drive poster image with a graceful gradient fallback if Drive blocks the thumbnail. */
export function DriveThumb({
  id,
  alt,
  width = 800,
  label,
  className = "",
}: {
  id: string;
  alt: string;
  width?: number;
  label?: string;
  className?: string;
}) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  if (stage === 2) {
    return (
      <div
        className={`flex size-full items-center justify-center bg-secondary ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(150deg, oklch(0.28 0.11 275 / 0.9), oklch(0.16 0.05 288 / 0.9))",
        }}
      >
        <span className="px-3 text-center text-[11.5px] font-medium text-foreground/70">
          {label ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={stage === 0 ? driveThumb(id, width) : driveThumbAlt(id, width)}
      alt={alt}
      loading="lazy"
      onError={() => setStage((s) => (s === 0 ? 1 : 2))}
      className={`size-full object-cover ${className}`}
    />
  );
}

type Props = {
  id: string;
  title: string;
  category?: string;
  duration?: string;
  subtitle?: string;
  className?: string;
};

/** Lazy-loaded Drive video: poster image first, iframe only after click. */
export function DriveVideo({ id, title, category, duration, subtitle, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Drive player is embedded with native lazy loading, so the video only
  // downloads when the card approaches the viewport.
  const active = true;

  return (
    <div
      ref={ref}
      className={`group glass-card relative overflow-hidden rounded-[22px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-violet/40 hover:shadow-[0_30px_70px_-40px_oklch(0.56_0.23_288/0.7)] ${className}`}
    >
      <div className="relative aspect-9/16 w-full bg-secondary">
        {active ? (
          <iframe
            src={drivePreview(id)}
            title={title}
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => undefined}
            aria-label={`Play ${title}`}
            className="absolute inset-0 size-full cursor-pointer"
          >
            <DriveThumb
              id={id}
              alt={`${title} — ${category ?? "video"} thumbnail`}
              label={title}
              className="transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
            {category && (
              <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-foreground/90 backdrop-blur-sm">
                {category}
              </span>
            )}
            {duration && (
              <span className="absolute top-3 right-3 rounded-full bg-black/50 px-2 py-1 text-[11px] text-foreground/90 backdrop-blur-sm">
                {duration}
              </span>
            )}
            <span className="btn-gradient absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100">
              <Play size={16} className="ml-0.5 text-primary-foreground" />
            </span>
          </button>
        )}
      </div>
      <div className="px-4 py-3.5">
        <p className="text-[13.5px] font-medium text-foreground">{title}</p>
        <p className="text-[12px] text-muted-foreground">{subtitle ?? category}</p>
      </div>
    </div>
  );
}
