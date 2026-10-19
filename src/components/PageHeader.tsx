import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: { label: string; href?: string }[];
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
  return (
    <section className="relative min-h-[220px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[350px] flex items-center justify-center overflow-hidden bg-[#071a2d]">
      {/* Background Image */}
      <img
        src={image || "/download.png"}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchPriority="high"
      />

      {/* High-legibility gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/80 to-[#071a2d]/50" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 text-center w-full">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-300 mb-2 sm:mb-3 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight size={11} className="text-slate-400 shrink-0" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {badge && (
          <div className="inline-block mb-2 sm:mb-3">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#1787b2]/20 text-[#6fbdd7] border border-[#1787b2]/30">
              {badge}
            </span>
          </div>
        )}

        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-2 sm:mb-3">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHeader;
