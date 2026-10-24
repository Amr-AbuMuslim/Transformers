import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/data/navigation";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Crumb[];
  position?: "center" | "top" | "bottom" | "left" | "right";
  badge?: string;
}

export function PageHeader({
  title,
  subtitle,
  image,
  breadcrumbs = [],
  badge,
}: PageHeaderProps) {
  const location = useLocation();
  const serialized = JSON.stringify(breadcrumbs);

  useEffect(() => {
    const crumbs = JSON.parse(serialized) as Crumb[];
    const items = [{ label: "Home", href: "/" }, ...crumbs];
    const currentUrl = `${SITE_URL}${location.pathname}${location.hash}`;
    const data = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((crumb, index) => {
        const isLast = index === items.length - 1;
        const href = !isLast && crumb.href ? crumb.href : undefined;
        return {
          "@type": "ListItem",
          position: index + 1,
          name: crumb.label,
          item: href
            ? `${SITE_URL}${href.startsWith("/") ? href : `/${href}`}`
            : currentUrl,
        };
      }),
    };

    const scriptId = "breadcrumb-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(data);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [serialized, location.pathname, location.hash]);

  return (
    <section
      id="main-content"
      tabIndex={-1}
      className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#071a2d] outline-none sm:min-h-[280px] md:min-h-[320px] lg:min-h-[350px]"
    >
      <img
        src={image || "/download.png"}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/80 to-[#071a2d]/50" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 md:py-16 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-slate-300 sm:text-xs">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="rounded-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={`${crumb.label}-${idx}`} className="inline-flex items-center gap-1.5">
                  <ChevronRight size={11} className="shrink-0 text-slate-400" aria-hidden="true" />
                  {crumb.href && !isLast ? (
                    <Link
                      to={crumb.href}
                      className="rounded-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-white" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {badge && (
          <div className="mb-2 inline-block sm:mb-3">
            <span className="rounded-full border border-[#1787b2]/30 bg-[#1787b2]/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#6fbdd7] sm:px-3 sm:py-1 sm:text-xs">
              {badge}
            </span>
          </div>
        )}

        <h1 className="mb-2 font-serif text-2xl font-bold leading-tight tracking-tight text-white sm:mb-3 sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto max-w-2xl text-xs font-normal leading-relaxed text-slate-200 sm:text-sm md:text-base lg:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHeader;
