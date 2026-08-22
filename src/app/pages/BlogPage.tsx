import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPosts, categoryColors, type BlogPost } from "../data/portfolio";
import { SharedFooter } from "../components/layout/SharedFooter";
import type { Page } from "../types";
import { useScrollReveal } from "../App";

export function BlogPage({ navigate }: { navigate: (to: Page) => void }) {
  const [selected, setSelected] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "CTF Writeup", "Bug Bounty", "Research", "General"];
  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  useScrollReveal();

  if (selected) {
    return <BlogPostView post={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-[-60px] h-[400px] w-[600px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(118,146,255,0.28), transparent)" }}
        />

        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 md:px-12 md:pt-24 md:pb-28">
          <button
            onClick={() => navigate("home")}
            className="group mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </button>

          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground reveal">Writing</div>
          <h1
            className="max-w-3xl text-balance text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[64px] reveal stagger-1"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Writeups &amp;{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontStyle: "italic", color: "var(--portfolio-accent)" }}>
              thoughts.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg reveal stagger-2">
            CTF walkthroughs, bug bounty notes, security research, and the occasional opinion piece.
          </p>

          <div className="mt-10 flex flex-wrap gap-2 reveal stagger-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  "rounded-full border px-4 py-1.5 text-sm transition-all duration-200 active:scale-95 " +
                  (activeCategory === cat
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground")
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
          {filtered.length === 0 ? (
            <div className="overflow-hidden rounded-2xl border border-dashed border-border reveal">
              <div className="flex flex-col items-center justify-center gap-5 py-28 text-center">
                <div
                  className="text-6xl tracking-tight text-foreground/10"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  &ldquo;&rdquo;
                </div>
                <p
                  className="text-xl text-muted-foreground"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  Nothing here yet.
                </p>
                <p className="max-w-xs text-sm text-muted-foreground/70">
                  coming soon!
                </p>
                <div className="mt-2 overflow-hidden rounded-xl border border-border bg-card px-5 py-4 text-left">
                  <div className="text-xs text-muted-foreground/60 mb-2 uppercase tracking-[0.18em]">Coming soon!</div>
                  
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-px overflow-hidden rounded-2xl border border-border">
              {filtered.map((post, idx) => (
                <button
                  key={post.slug}
                  onClick={() => setSelected(post)}
                  className={`group w-full border-b border-border bg-background p-6 text-left transition-all duration-200 last:border-0 hover:bg-card md:p-8 reveal stagger-${Math.min(idx + 1, 6)}`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="rounded-full px-2.5 py-0.5 text-xs"
                          style={{
                            background: categoryColors[post.category] + "18",
                            color: categoryColors[post.category],
                          }}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3
                        className="text-xl tracking-tight md:text-2xl"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {post.tags.map((t) => (
                          <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <SharedFooter />
    </>
  );
}

function BlogPostView({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  useScrollReveal();

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[860px] px-6 pt-16 pb-12 md:px-12 md:pt-24">
          <button
            onClick={onBack}
            className="group mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All posts
          </button>

          <div className="mb-5 flex flex-wrap items-center gap-3 reveal">
            <span
              className="rounded-full px-3 py-1 text-xs"
              style={{
                background: categoryColors[post.category] + "18",
                color: categoryColors[post.category],
              }}
            >
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>

          <h1
            className="text-balance text-[30px] leading-[1.1] tracking-[-0.025em] md:text-[52px] reveal stagger-1"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground reveal stagger-2">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap gap-2 reveal stagger-3">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">{t}</span>
            ))}
          </div>
          {post.proofHref && (
  <a
    href={post.proofHref}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card reveal stagger-4"
  >
    Read PDF Writeup
    <ArrowUpRight className="h-4 w-4" />
  </a>
)}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[860px] px-6 py-12 md:px-12 md:py-16">
          {post.content ? (
            <div
              className="prose prose-invert max-w-none text-foreground/85 reveal"
              style={{ fontFamily: "var(--font-sans)", lineHeight: 1.8 }}
            >
              <pre className="whitespace-pre-wrap text-base leading-relaxed text-foreground/85">{post.content}</pre>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-16 text-center reveal">
              <p
                className="text-xl text-muted-foreground"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                Content coming soon.
              </p>
              <p className="text-sm text-muted-foreground/60">
                Add a <code className="font-mono text-xs">content</code> field to this post in <code className="font-mono text-xs">blogPosts</code>.
              </p>
            </div>
          )}
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
