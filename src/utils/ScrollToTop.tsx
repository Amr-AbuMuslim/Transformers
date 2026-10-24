import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const rawId = decodeURIComponent(hash.slice(1));
    const targetId = rawId === "pillars" ? "services" : rawId;

    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    if (scrollToTarget()) return;
    const timer = window.setTimeout(scrollToTarget, 60);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
