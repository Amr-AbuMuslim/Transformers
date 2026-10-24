import { Link } from "react-router-dom";
import { ArrowRight, Check, Tag } from "lucide-react";
import type { ProductItem } from "@/data/products";
import { QUOTE, quoteHref } from "@/data/navigation";

interface ProductCardProps {
  product: ProductItem;
  featured?: boolean;
}

export default function ProductCard({ product }: ProductCardProps) {
  const availabilityBadge = {
    rental: { label: "Rental Only", color: "bg-amber-50 text-amber-700 border-amber-200" },
    sale: { label: "For Sale", color: "bg-blue-50 text-blue-700 border-blue-200" },
    both: { label: "Rental & Sale", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    enquire: { label: "Enquire for Availability", color: "bg-slate-50 text-slate-700 border-slate-200" },
  }[product.availability];

  return (
    <article className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Availability Badge */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-wrap gap-1">
          <span
            className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border shadow-xs backdrop-blur-xs ${availabilityBadge.color}`}
          >
            {availabilityBadge.label}
          </span>
          {product.code && (
            <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#0a2540] text-white border border-[#0a2540]/20 shadow-xs">
              {product.code}
            </span>
          )}
        </div>

        {/* Category Label */}
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3">
          <span className="text-[10px] sm:text-[11px] font-medium bg-white/95 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200 shadow-xs backdrop-blur-xs">
            {product.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-base sm:text-lg font-bold text-[#0a2540] group-hover:text-[#1787b2] transition-colors mb-1.5 leading-snug">
          {product.name}
        </h3>

        <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Sizes if available */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-3 bg-slate-50 rounded-lg p-2 border border-slate-100">
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5 flex items-center gap-1">
              <Tag size={10} className="text-[#1787b2]" /> Available Footprints:
            </p>
            <p className="text-[11px] font-medium text-slate-800">
              {product.sizes.join(" • ")}
            </p>
          </div>
        )}

        {/* Key Specs */}
        <ul className="space-y-1 mb-4 text-[11px] sm:text-xs text-slate-600 flex-grow">
          {product.specs.slice(0, 3).map((spec, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <Check size={12} className="text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{spec}</span>
            </li>
          ))}
        </ul>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <Link
            to={quoteHref(
              product.category === "transformers_system" ? QUOTE.displaySystem : QUOTE.equipment,
              { product: product.name }
            )}
            className="w-full py-2.5 px-3 bg-[#0a2540] hover:bg-[#1787b2] text-white text-xs font-semibold rounded-xl transition-colors text-center shadow-xs flex items-center justify-center gap-1"
          >
            Request a Quote <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}
