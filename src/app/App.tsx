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
    <div className="min-h-screen w-full bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
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
          animation: page-in 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: opacity, transform, filter;
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
