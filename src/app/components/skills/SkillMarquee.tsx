import { ArrowUpRight, Asterisk, Plus, Sparkle } from "lucide-react";
import type { Skill } from "../../types";

const separators = [Sparkle, Plus, Asterisk];

export function SkillMarquee({
  eyebrow, skills, direction = "left", speed = 40, emphasis = false, muted = false, onSelect, onHover,
}: {
  eyebrow: string;
  skills: Skill[];
  direction?: "left" | "right";
  speed?: number;
  emphasis?: boolean;
  muted?: boolean;
  onSelect: (s: Skill) => void;
  onHover?: (s: Skill | null) => void;
}) {
  const loop = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className={"relative border-t border-border " + (muted ? "bg-background" : "bg-card/30")}>
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-6 pt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground md:px-12">
        <span className={"inline-block h-1.5 w-1.5 rounded-full " + (emphasis ? "bg-[var(--portfolio-accent)]" : "bg-muted-foreground/60")} />
        {eyebrow}
        {/* Desktop hint */}
        <span className="ml-auto hidden text-[10px] tracking-[0.18em] text-muted-foreground/70 md:inline">
          hover a skill to highlight · click to read
        </span>
        {/* Mobile hint */}
        <span className="ml-auto text-[10px] tracking-[0.18em] text-muted-foreground/70 md:hidden">
          tap a skill to read
        </span>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />

      <div className="overflow-hidden py-6">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap"
          style={{ animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed}s linear infinite` }}
        >
          {loop.map((s, i) => {
            const Sep = separators[i % separators.length];
            return (
              <div key={i} className="flex items-center gap-10">
                <button
                  type="button"
                  onClick={() => onSelect(s)}
                  onMouseEnter={() => onHover?.(s)}
                  onMouseLeave={() => onHover?.(null)}
                  onFocus={() => onHover?.(s)}
                  onBlur={() => onHover?.(null)}
                  aria-label={`Read about ${s.label}`}
                  className={
                    "group/chip flex items-center gap-3 rounded-md px-3 py-1.5 transition-all duration-200 cursor-pointer " +
                    "hover:bg-foreground hover:text-background hover:shadow-[0_0_20px_rgba(118,146,255,0.18)] " +
                    "active:scale-95 " +
                    (muted ? "text-foreground/60" : "text-foreground/90")
                  }
                >
                  <s.icon className="h-5 w-5 transition-transform group-hover/chip:-rotate-6" strokeWidth={1.5} />
                  <span
                    className={(muted ? "text-lg md:text-xl" : "text-xl md:text-2xl") + " tracking-tight"}
                    style={{
                      fontFamily: muted ? "var(--font-serif)" : "var(--font-display)",
                      fontWeight: muted ? 400 : 500,
                      fontStyle: muted ? "italic" : "normal",
                    }}
                  >
                    {s.label}
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover/chip:opacity-100 group-hover/chip:-translate-y-0.5 group-hover/chip:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </button>
                <Sep className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
