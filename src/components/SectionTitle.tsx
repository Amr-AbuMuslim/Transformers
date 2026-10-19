interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}>
      {badge && (
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full mb-3 border border-[#1787b2]/20">
          {badge}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2540] tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      {isCenter && (
        <div className="w-16 h-1 bg-gradient-to-r from-[#1787b2] to-[#6fbdd7] rounded-full mx-auto mt-4" />
      )}
    </div>
  );
}
