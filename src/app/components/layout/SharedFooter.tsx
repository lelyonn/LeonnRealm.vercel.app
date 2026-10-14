import { Github, Instagram, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import { footerLinks } from "../../data/portfolio";

export function SharedFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".footer-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" ref={footerRef} className="border-t border-border bg-card/40">
      <style>{`
        .footer-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .footer-reveal.footer-revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .footer-reveal:nth-child(1) { transition-delay: 0s; }
        .footer-reveal:nth-child(2) { transition-delay: 0.1s; }
        .footer-reveal:nth-child(3) { transition-delay: 0.2s; }
        @media (prefers-reduced-motion: reduce) {
          .footer-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="footer-reveal sm:col-span-2 md:col-span-1">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl tracking-tight md:text-6xl" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                Yon
              </span>
              <span className="text-5xl leading-none md:text-6xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--portfolio-accent)" }}>.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Currently open to internships, collaborations, and a good conversation about security or the web.
            </p>
          </div>

          <div className="footer-reveal">
            <div className="mb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">Navigate</div>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("mailto:") || l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("mailto:") || l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 text-base text-foreground/85 hover:text-foreground"
                  >
                    <span className="text-muted-foreground transition-colors group-hover:text-[var(--portfolio-accent)]">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-reveal">
            <div className="mb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">Elsewhere</div>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/leonardjhthh", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/leonard-jonathan-s-a7a113324/", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/lelyonn", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent)] hover:shadow-[0_0_16px_rgba(118,146,255,0.25)]"
                >
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Leonard Jonathan Saputra. Built quietly in Surakarta.</span>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
            &ldquo;break things kindly, build things carefully.&rdquo;
          </span>
        </div>
      </div>
    </footer>
  );
}
