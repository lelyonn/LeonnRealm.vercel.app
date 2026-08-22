import { ArrowUpRight, Award, ExternalLink, Github } from "lucide-react";
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

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-120px] h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(118,146,255,0.24), transparent)" }}
        />

        <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-12 md:px-12 md:pt-28 md:pb-20">
          <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--portfolio-accent)]" />
            Portfolio — 2026 / Surakarta, ID
          </div>

          <h1
            className="max-w-5xl text-balance text-[44px] leading-[1.02] tracking-[-0.03em] md:text-[88px] lg:text-[104px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Leonard Jonathan{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontStyle: "italic", color: "var(--portfolio-accent)" }}>
              Saputra
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            An informatics engineering student with a strong foundation in cyber security and full-stack development —
            building things that are equal parts curious and careful.
          </p>

          <div id="about" className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-[180px_1fr] md:gap-16">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">(01) About</div>
            <div className="max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
              <p>
                Hi, I&apos;m Leonard Jonathan Saputra, an Informatics Engineering student at Universitas Sebelas Maret
                specializing in Cyber Security. I&apos;m focused on offensive security, web penetration testing, Linux
                environments, and network analysis, with a strong interest in understanding how systems break so I can
                help make them stronger.
              </p>
              <p>
                Through security projects and challenges such as the Cyber Academy PT Vulnapp Penetration Testing
                Challenge, I&apos;ve practiced vulnerability discovery, exploitation, risk assessment, and professional
                report writing. Alongside cyber security, I also build web applications, which helps me understand
                digital systems from both the attacker&apos;s and developer&apos;s perspective.
              </p>
              <p>
                I&apos;m dedicated, curious, and results-oriented. Beyond technical work, my experience in public speaking,
                music performance, and event media has shaped how I communicate, collaborate, and lead. My goal is to
                keep growing as a security professional who can analyze complex systems, explain risks clearly, and
                contribute to protecting digital infrastructure.
              </p>
              <p className="flex flex-wrap items-center gap-3 pt-2 text-sm">
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
        <SkillPreview skill={hoveredSkill} />
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
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">(02) Selected work</div>
              <h2
                className="text-balance text-3xl tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Things I&apos;ve been{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>tinkering</span>{" "}
                with.
              </h2>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.n} className="group relative flex flex-col bg-background transition-colors hover:bg-card">
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
                <div className="flex flex-1 flex-col gap-6 p-8 md:p-10">
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

          <div className="mt-10 flex items-center justify-center">
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

      <section id="certification" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">(03) Certification</div>
              <h2
                className="text-balance text-3xl tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Proofs of{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>learning.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {certificates.map((certificate) => (
              <article key={certificate.index} className="group flex flex-col bg-background p-8 transition-colors hover:bg-card md:p-10">
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div>
                    <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {certificate.issuer} — {certificate.year}
                    </div>
                    <h3
                      className="text-2xl tracking-tight md:text-3xl"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      {certificate.title}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card text-[var(--portfolio-accent)]">
                    <Award className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {certificate.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {certificate.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-10">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Certificate {certificate.index}
                  </span>
                  {certificate.proofHref && (
                    <a
                      href={certificate.proofHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                    >
                      View certificate
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">(04) Writing</div>
              <h2
                className="text-balance text-3xl tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                From the{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>notebook.</span>
              </h2>
            </div>
            <button
              onClick={() => navigate("blog")}
              className="group hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
            >
              <span className="h-px w-8 bg-border transition-all group-hover:w-12 group-hover:bg-foreground" />
              all posts
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          {featuredPost ? (
            <button
              onClick={() => navigate("blog")}
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-background p-6 text-left transition-colors hover:bg-card md:p-8"
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
            <div className="overflow-hidden rounded-2xl border border-dashed border-border">
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
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
