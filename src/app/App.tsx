import { useEffect, useRef, useState } from "react";
import { Nav } from "./components/layout/Nav";
import { SkillDialog } from "./components/skills/SkillDialog";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { useRoute } from "./router";
import type { Skill } from "./types";

export default function App() {
  const [active, setActive] = useState<Skill | null>(null);
  const [hovered, setHovered] = useState<Skill | null>(null);
  const { page, navigate } = useRoute();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  return (
    <div className="site-shell min-h-screen w-full text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <CursorGlow />
      <Nav page={page} navigate={navigate} scrollProgress={scrollProgress} />

      <main key={page} className="page-transition">
        {page === "about" ? (
          <AboutPage onSkillSelect={setActive} onSkillHover={setHovered} hoveredSkill={hovered} navigate={navigate} />
        ) : page === "projects" ? (
          <ProjectsPage navigate={navigate} />
        ) : page === "blog" ? (
          <BlogPage navigate={navigate} />
        ) : (
          <HomePage onSkillSelect={setActive} onSkillHover={setHovered} hoveredSkill={hovered} navigate={navigate} />
        )}
      </main>

      <SkillDialog skill={active} onClose={() => setActive(null)} navigate={navigate} />

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-paused { animation-play-state: paused !important; }
        @keyframes dialog-in {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.97); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes preview-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes page-in {
          from {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .page-transition {
          position: relative;
          z-index: 1;
          animation: page-in 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: opacity, transform, filter;
        }
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-28px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-left.revealed {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-scale {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-scale.revealed {
          opacity: 1;
          transform: scale(1);
        }
        .stagger-1 { transition-delay: 0.05s; }
        .stagger-2 { transition-delay: 0.12s; }
        .stagger-3 { transition-delay: 0.19s; }
        .stagger-4 { transition-delay: 0.26s; }
        .stagger-5 { transition-delay: 0.33s; }
        .stagger-6 { transition-delay: 0.40s; }

        .site-shell {
          position: relative;
          isolation: isolate;
          overflow-x: hidden;
          background:
            linear-gradient(180deg, rgba(2, 4, 11, 0.35), rgba(2, 4, 11, 0.74) 42%, rgba(2, 4, 11, 0.95)),
            linear-gradient(115deg, transparent 0 32%, rgba(61, 81, 140, 0.12) 40%, transparent 52%),
            radial-gradient(ellipse at 50% -10%, rgba(118, 146, 255, 0.26), transparent 46%),
            radial-gradient(ellipse at 85% 18%, rgba(27, 44, 193, 0.22), transparent 38%);
        }
        .site-shell::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          background:
            linear-gradient(rgba(171, 210, 250, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171, 210, 250, 0.035) 1px, transparent 1px);
          background-size: 88px 88px;
          mask-image: linear-gradient(to bottom, black 0 42%, transparent 82%);
        }
        .site-shell::after {
          content: "";
          position: fixed;
          left: 50%;
          top: -28rem;
          z-index: -1;
          width: min(96rem, 145vw);
          height: 58rem;
          pointer-events: none;
          transform: translateX(-50%);
          border: 1px solid rgba(171, 210, 250, 0.15);
          border-bottom: 0;
          border-radius: 0 0 50% 50%;
          box-shadow:
            0 0 120px rgba(118, 146, 255, 0.28),
            inset 0 -42px 90px rgba(27, 44, 193, 0.26);
          opacity: 0.82;
        }
        .cursor-glow {
          --cursor-x: -100px;
          --cursor-y: -100px;
          position: fixed;
          left: var(--cursor-x);
          top: var(--cursor-y);
          z-index: 80;
          width: 18px;
          height: 18px;
          pointer-events: none;
          border: 1px solid rgba(171, 210, 250, 0.78);
          border-radius: 9999px;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.82);
          transition: opacity 180ms ease, transform 180ms ease;
          box-shadow:
            0 0 18px rgba(171, 210, 250, 0.72),
            0 0 42px rgba(118, 146, 255, 0.36),
            inset 0 0 10px rgba(171, 210, 250, 0.22);
          background:
            radial-gradient(circle, rgba(171, 210, 250, 0.34), transparent 58%),
            rgba(118, 146, 255, 0.08);
          mix-blend-mode: screen;
        }
        .cursor-glow[data-visible="true"] {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        @media (pointer: coarse), (prefers-reduced-motion: reduce) {
          .cursor-glow {
            display: none;
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .spin-slow { animation: spin-slow 12s linear infinite; }

        .scroll-progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1.5px;
          background: linear-gradient(90deg, var(--portfolio-accent), rgba(171, 210, 250, 0.8));
          transition: width 0.1s linear;
          box-shadow: 0 0 8px rgba(118, 146, 255, 0.6);
          pointer-events: none;
          z-index: 50;
        }

        @keyframes cert-in {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cert-animate {
          animation: cert-in 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 36px rgba(118, 146, 255, 0.28); }
          50%       { box-shadow: 0 0 52px rgba(118, 146, 255, 0.45); }
        }
        .glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .page-transition,
          .reveal,
          .reveal-left,
          .reveal-scale {
            animation: none;
            transition: none;
            opacity: 1;
            transform: none;
            will-change: auto;
          }
          .glow-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    const hide = () => {
      const glow = glowRef.current;
      if (glow) glow.dataset.visible = "false";
    };

    const move = (event: MouseEvent) => {
      if (!media.matches) return;

      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const glow = glowRef.current;
        if (!glow) return;

        glow.style.setProperty("--cursor-x", `${event.clientX}px`);
        glow.style.setProperty("--cursor-y", `${event.clientY}px`);
        glow.dataset.visible = "true";
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" data-visible="false" />;
}

export function useScrollReveal(threshold = 0.12) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-scale");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);
}
