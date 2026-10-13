import { useEffect, useState } from "react";
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import {
  blogPosts,
  categoryColors,
  certificates,
  otherSkills,
  projectCategoryColors,
  projects,
  techSkills,
} from "../data/portfolio";
import { SharedFooter } from "../components/layout/SharedFooter";
import { SkillMarquee } from "../components/skills/SkillMarquee";
import { SkillPreview } from "../components/skills/SkillPreview";
import type { Page, Skill } from "../types";
import { useScrollReveal } from "../App";

export function HomePage({
  onSkillSelect, onSkillHover, hoveredSkill, navigate,
}: {
  onSkillSelect: (s: Skill) => void;
  onSkillHover: (s: Skill | null) => void;
  hoveredSkill: Skill | null;
  navigate: (to: Page) => void;
}) {
  const featuredPost = blogPosts[0];
  const primaryRoles = techSkills.filter((skill) => skill.label !== "Web Development");
  const [activeCertificateIndex, setActiveCertificateIndex] = useState(0);
  const [certAnimKey, setCertAnimKey] = useState(0);
  const activeCertificate = certificates[activeCertificateIndex];
  const visibleCertificates = [1, 2].map((offset) => certificates[(activeCertificateIndex + offset) % certificates.length]);

  useScrollReveal();

  const goToCertificate = (direction: 1 | -1) => {
    setActiveCertificateIndex((current) => (current + direction + certificates.length) % certificates.length);
    setCertAnimKey((k) => k + 1);
  };

  const handleDotClick = (index: number) => {
    setActiveCertificateIndex(index);
    setCertAnimKey((k) => k + 1);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-120px] h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(118,146,255,0.24), transparent)" }}
        />

        <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-12 md:px-12 md:pt-28 md:pb-20">
          <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground reveal">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--portfolio-accent)]" />
            Portfolio — 2026 / Surakarta, ID
          </div>

          <h1
            className="max-w-5xl text-balance text-[44px] leading-[1.02] tracking-[-0.03em] md:text-[88px] lg:text-[104px] reveal"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Leonard Jonathan{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontStyle: "italic", color: "var(--portfolio-accent)" }}>
              Saputra
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl reveal stagger-2">
            An informatics engineering student with a strong foundation in cyber security and full-stack development —
            building things that are equal parts curious and careful.
          </p>

          <div id="about" className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-[180px_1fr] md:gap-16">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground reveal">(01) About</div>
            <div className="max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
              <p className="reveal stagger-1">
                Hi, I&apos;m Leonard Jonathan Saputra, an Informatics Engineering student at Universitas Sebelas Maret
                specializing in Cyber Security. I&apos;m focused on offensive security, web penetration testing, Linux
                environments, and network analysis, with a strong interest in understanding how systems break so I can
                help make them stronger.
              </p>
              <p className="reveal stagger-2">
                Through security projects and challenges such as the Cyber Academy PT Vulnapp Penetration Testing
                Challenge, I&apos;ve practiced vulnerability discovery, exploitation, risk assessment, and professional
                report writing. Alongside cyber security, I also build web applications, which helps me understand
                digital systems from both the attacker&apos;s and developer&apos;s perspective.
              </p>
              <p className="reveal stagger-3">
                I&apos;m dedicated, curious, and results-oriented. Beyond technical work, my experience in public speaking,
                music performance, and event media has shaped how I communicate, collaborate, and lead. My goal is to
                keep growing as a security professional who can analyze complex systems, explain risks clearly, and
                contribute to protecting digital infrastructure.
              </p>
              <p className="flex flex-wrap items-center gap-3 pt-2 text-sm reveal stagger-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--portfolio-accent)]" />
                  Tap any skill below to read more about that role
                </span>
                <button
                  onClick={() => navigate("about")}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  Full story
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </p>
            </div>
          </div>
        </div>

        <SkillMarquee
          eyebrow="Engineering & Security"
          skills={primaryRoles}
          direction="left"
          emphasis
          speed={40}
          onSelect={onSkillSelect}
          onHover={onSkillHover}
        />
        <SkillPreview skill={hoveredSkill} navigate={navigate} />
        <SkillMarquee
          eyebrow="Off the Keyboard"
          skills={otherSkills}
          direction="right"
          speed={48}
          muted
          onSelect={onSkillSelect}
        />
      </section>

      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground reveal">(02) Selected work</div>
              <h2
                className="text-balance text-3xl tracking-[-0.02em] md:text-5xl reveal stagger-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Things I&apos;ve been{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>tinkering</span>{" "}
                with.
              </h2>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {projects.map((p, idx) => (
              <article
                key={p.n}
                className={`group relative flex flex-col bg-background transition-colors hover:bg-card reveal stagger-${Math.min(idx + 1, 6)}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground/90 backdrop-blur">
                    {p.n} — {p.year}
                  </span>
                  <span className="absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
                    {p.credit}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-6 p-6 md:p-10">
                  <div>
                    <span
                      className="rounded-full px-3 py-1 text-xs text-background"
                      style={{ backgroundColor: projectCategoryColors[p.category] }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="text-2xl tracking-tight md:text-3xl"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      {p.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.github && (
                      <a
                        href={p.github} target="_blank" rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        <Github className="h-3.5 w-3.5" strokeWidth={1.75} /> VIEW GITHUB REPOSITORY
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live} target="_blank" rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} /> Live preview
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center reveal">
            <button
              onClick={() => navigate("projects")}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <span className="h-px w-10 bg-border transition-all group-hover:w-16 group-hover:bg-foreground" />
              check out more projects at{" "}
              <span className="text-foreground" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>/projects</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section id="certification" className="relative overflow-hidden border-t border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(118,146,255,0.18),transparent_54%)]"
        />
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="flex flex-col gap-10 lg:hidden">
            <div className="relative z-10 reveal">
              <div className="mb-8 text-xs uppercase tracking-[0.32em] text-muted-foreground">// Certificates</div>
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--portfolio-accent)]">
                {activeCertificate.issuer} - {activeCertificate.year}
              </div>
              <h2
                className="text-balance text-[36px] leading-[1.0] tracking-[-0.03em] sm:text-[48px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {activeCertificate.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/82">
                {activeCertificate.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {activeCertificate.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-card/70 px-3 py-1 text-sm text-foreground/90">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={activeCertificate.mediaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group glow-pulse inline-flex items-center gap-3 rounded-2xl bg-[var(--portfolio-accent)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-background transition-transform hover:-translate-y-0.5"
                >
                  View certificate
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4 text-[var(--portfolio-accent)]" strokeWidth={1.75} />
                  {activeCertificate.credential}
                </span>
              </div>
            </div>

            <div key={certAnimKey} className="cert-animate relative mx-auto w-full max-w-[480px] reveal stagger-2">
              <div className="overflow-hidden rounded-[18px] border-[8px] border-foreground/90 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.38)]">
                <div className="aspect-[1.42/1] bg-white">
                  <CertificateMedia certificate={activeCertificate} />
                </div>
              </div>
              <div className="-mt-10 ml-4 max-w-[78%] rounded-md border border-border bg-background/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--portfolio-accent)] backdrop-blur">
                {activeCertificate.issuer} - {activeCertificate.year}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 reveal stagger-3">
              <button
                onClick={() => goToCertificate(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-foreground active:scale-95"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <div className="flex items-center gap-2.5">
                {certificates.map((certificate, index) => (
                  <button
                    key={certificate.index}
                    onClick={() => handleDotClick(index)}
                    className={
                      "h-2 rounded-full transition-all duration-300 " +
                      (index === activeCertificateIndex
                        ? "w-8 bg-[var(--portfolio-accent)]"
                        : "w-2 bg-muted-foreground/45 hover:bg-foreground")
                    }
                    aria-label={`Show certificate ${certificate.index}`}
                  />
                ))}
              </div>
              <button
                onClick={() => goToCertificate(1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-foreground active:scale-95"
                aria-label="Next certificate"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <div className="ml-1 text-sm font-semibold uppercase tracking-[0.24em]">
                <span className="text-[var(--portfolio-accent)]">{activeCertificate.index}</span>
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-muted-foreground">{String(certificates.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          <div className="hidden min-h-[720px] items-center gap-14 lg:grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative z-10 reveal-left">
              <div className="mb-8 text-xs uppercase tracking-[0.32em] text-muted-foreground">// Certificates</div>
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--portfolio-accent)]">
                {activeCertificate.issuer} - {activeCertificate.year}
              </div>
              <h2
                className="max-w-3xl text-balance text-[48px] leading-[0.96] tracking-[-0.03em] md:text-[78px] lg:text-[92px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {activeCertificate.title}
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/82 md:text-xl">
                {activeCertificate.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {activeCertificate.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-foreground/90">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={activeCertificate.mediaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group glow-pulse inline-flex items-center gap-3 rounded-2xl bg-[var(--portfolio-accent)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-background transition-transform hover:-translate-y-0.5"
                >
                  View certificate
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4 text-[var(--portfolio-accent)]" strokeWidth={1.75} />
                  {activeCertificate.credential}
                </span>
              </div>
            </div>

            <div className="relative min-h-[440px] lg:min-h-[520px]">
              <div className="absolute inset-y-8 left-[18%] right-[-18%] hidden md:block">
                {visibleCertificates.map((certificate, offset) => (
                  <button
                    key={certificate.index}
                    onClick={() => {
                      setActiveCertificateIndex(certificates.findIndex((item) => item.index === certificate.index));
                      setCertAnimKey((k) => k + 1);
                    }}
                    className="absolute top-1/2 h-[270px] w-[410px] -translate-y-1/2 overflow-hidden rounded-[18px] border border-foreground/20 bg-white opacity-45 shadow-2xl blur-[1px] transition hover:opacity-70"
                    style={{
                      left: `${offset * 230 + 210}px`,
                      transform: `translateY(-50%) scale(${0.88 - offset * 0.08})`,
                      zIndex: 4 - offset,
                    }}
                    aria-label={`Show ${certificate.title}`}
                  >
                    <CertificateMedia certificate={certificate} compact />
                  </button>
                ))}
              </div>

              <div key={certAnimKey} className="cert-animate relative z-10 mx-auto flex max-w-[640px] flex-col">
                <div className="overflow-hidden rounded-[22px] border-[10px] border-foreground/90 bg-white shadow-[0_34px_90px_rgba(0,0,0,0.44)]">
                  <div className="aspect-[1.42/1] bg-white">
                    <CertificateMedia certificate={activeCertificate} />
                  </div>
                </div>
                <div className="-mt-14 ml-5 max-w-[78%] rounded-md border border-border bg-background/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--portfolio-accent)] backdrop-blur">
                  {activeCertificate.issuer} - {activeCertificate.year}
                </div>
              </div>

              <div className="mt-16 flex items-center justify-center gap-5">
                <button
                  onClick={() => goToCertificate(-1)}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-foreground active:scale-95"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
                </button>
                <div className="flex items-center gap-3">
                  {certificates.map((certificate, index) => (
                    <button
                      key={certificate.index}
                      onClick={() => handleDotClick(index)}
                      className={
                        "h-2.5 rounded-full transition-all duration-300 " +
                        (index === activeCertificateIndex
                          ? "w-9 bg-[var(--portfolio-accent)]"
                          : "w-2.5 bg-muted-foreground/45 hover:bg-foreground")
                      }
                      aria-label={`Show certificate ${certificate.index}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => goToCertificate(1)}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-foreground active:scale-95"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
                </button>
                <div className="ml-2 text-sm font-semibold uppercase tracking-[0.24em]">
                  <span className="text-[var(--portfolio-accent)]">{activeCertificate.index}</span>
                  <span className="mx-3 text-muted-foreground">/</span>
                  <span className="text-muted-foreground">{String(certificates.length).padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground reveal">(04) Writing</div>
              <h2
                className="text-balance text-3xl tracking-[-0.02em] md:text-5xl reveal stagger-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                From the{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>notebook.</span>
              </h2>
            </div>
            <button
              onClick={() => navigate("blog")}
              className="group hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex reveal stagger-2"
            >
              <span className="h-px w-8 bg-border transition-all group-hover:w-12 group-hover:bg-foreground" />
              all posts
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          {featuredPost ? (
            <button
              onClick={() => navigate("blog")}
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-background p-6 text-left transition-colors hover:bg-card md:p-8 reveal stagger-2"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs"
                      style={{
                        background: categoryColors[featuredPost.category] + "18",
                        color: categoryColors[featuredPost.category],
                      }}
                    >
                      {featuredPost.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {featuredPost.date}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {featuredPost.readingTime}
                    </span>
                  </div>
                  <h3
                    className="text-2xl tracking-tight md:text-4xl"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  >
                    {featuredPost.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                  Read post
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </button>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-dashed border-border reveal stagger-2">
              <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                <div
                  className="text-4xl tracking-tight text-foreground/15"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  &ldquo;&rdquo;
                </div>
                <p
                  className="text-lg text-muted-foreground"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  First post loading&hellip;
                </p>
                <button
                  onClick={() => navigate("blog")}
                  className="group mt-2 inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  Go to the blog
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-center md:hidden reveal stagger-3">
            <button
              onClick={() => navigate("blog")}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <span className="h-px w-8 bg-border transition-all group-hover:w-12 group-hover:bg-foreground" />
              all posts
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}

function CertificateMedia({
  certificate,
  compact = false,
}: {
  certificate: (typeof certificates)[number];
  compact?: boolean;
}) {
  if (certificate.mediaType === "image") {
    return (
      <img
        src={certificate.mediaHref}
        alt={`${certificate.title} certificate`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <object
      data={`${certificate.mediaHref}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
      type="application/pdf"
      aria-label={`${certificate.title} certificate preview`}
      className={"h-full w-full bg-white " + (compact ? "pointer-events-none" : "")}
    >
      <div className="flex h-full w-full items-center justify-center bg-white p-8 text-center text-sm text-slate-700">
        {certificate.title}
      </div>
    </object>
  );
}
