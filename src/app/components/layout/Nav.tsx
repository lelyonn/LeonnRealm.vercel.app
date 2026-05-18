import { ArrowUpRight } from "lucide-react";
import type { Page } from "../../types";

export function Nav({ page, navigate }: { page: Page; navigate: (to: Page) => void }) {
  const goToConnect = () => {
    if (page === "about") {
      document.getElementById("lets-connect")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("about");
      setTimeout(() => {
        document.getElementById("lets-connect")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  };

  const navItems: { label: string; page: Page }[] = [
    { label: "about", page: "about" },
    { label: "projects", page: "projects" },
    { label: "blog", page: "blog" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-12 md:py-5">
        <button
          onClick={() => navigate("home")}
          className="flex items-baseline gap-1 transition-opacity hover:opacity-80"
        >
          <span className="text-xl tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Yon
          </span>
          <span className="text-xl leading-none" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#c8a96a" }}>.</span>
        </button>

        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              className={"transition-colors hover:text-foreground " + (page === item.page ? "text-foreground" : "")}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={goToConnect}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background sm:px-4"
        >
          Let&apos;s talk
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
      <nav className="mx-auto grid max-w-[1400px] grid-cols-3 border-t border-border/70 px-3 py-2 md:hidden">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => navigate(item.page)}
            className={
              "rounded-full px-2 py-2 text-sm transition-colors " +
              (page === item.page
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:bg-card hover:text-foreground")
            }
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
