import { useState } from "react";
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

  return (
    <div className="site-shell min-h-screen w-full text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav page={page} navigate={navigate} />

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

      <SkillDialog skill={active} onClose={() => setActive(null)} />

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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .spin-slow { animation: spin-slow 12s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .page-transition {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>
    </div>
  );
}
