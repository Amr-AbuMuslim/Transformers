import { Link, useLocation } from "react-router-dom";
import type { NavLink } from "@/data/navigation";

export const sectionScrollClass = "scroll-mt-32 md:scroll-mt-44";

export default function SectionNav({
  label = "On this page",
  items,
}: {
  label?: string;
  items: NavLink[];
}) {
  const { hash, pathname } = useLocation();

  return (
    <nav
      aria-label={label}
      className="sticky top-16 md:top-[109px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-1.5 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const itemHash = item.href.includes("#") ? `#${item.href.split("#")[1]}` : "";
            const itemPath = item.href.split("#")[0].split("?")[0];
            const active = Boolean(itemHash) && hash === itemHash && pathname === itemPath;
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  to={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center rounded-lg px-3 text-xs font-semibold whitespace-nowrap sm:text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1787b2] ${
                    active
                      ? "bg-[#1787b2]/10 text-[#0d586f]"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#0a2540]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export function ContinueLinks({
  title = "Continue exploring",
  links,
}: {
  title?: string;
  links: NavLink[];
}) {
  return (
    <nav aria-label={title} className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p>
        <ul className="flex flex-wrap gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="inline-flex min-h-11 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-[#0a2540] transition-colors hover:border-[#1787b2] hover:text-[#1787b2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1787b2]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
