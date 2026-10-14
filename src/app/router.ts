import { useEffect, useState } from "react";
import type { Page } from "./types";

function resolvePage(): Page {
  try {
    const hash = window.location.hash;
    if (hash === "#/about") return "about";
    if (hash === "#/projects") return "projects";
    if (hash === "#/blog") return "blog";

    const pathname = window.location.pathname.replace(/\/+$/, "").toLowerCase();
    if (pathname === "/about") return "about";
    if (pathname === "/projects") return "projects";
    if (pathname === "/blog") return "blog";
  } catch {}
  return "home";
}

export function useRoute() {
  const [page, setPage] = useState<Page>(() => resolvePage());

  const navigate = (to: Page) => {
    try {
      window.location.hash = to === "home" ? "#/" : `#/${to}`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
    setPage(to);
  };

  useEffect(() => {
    const onRoute = () => setPage(resolvePage());
    window.addEventListener("hashchange", onRoute);
    window.addEventListener("popstate", onRoute);
    return () => {
      window.removeEventListener("hashchange", onRoute);
      window.removeEventListener("popstate", onRoute);
    };
  }, []);

  return { page, navigate };
}
