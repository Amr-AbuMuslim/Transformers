"use client";

import { useEffect, useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  Phone,
  Tag,
  Boxes,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { QUOTE, quoteHref } from "@/data/navigation";
import { ContinueLinks } from "@/components/SectionNav";

export default function RentalProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "all");
  }, [searchParams]);
  const [selectedAvailability, setSelectedAvailability] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Availability Filter
      if (selectedAvailability !== "all") {
        if (selectedAvailability === "rental" && product.availability !== "rental" && product.availability !== "both") {
          return false;
        }
        if (selectedAvailability === "sale" && product.availability !== "sale" && product.availability !== "both") {
          return false;
        }
        if (selectedAvailability === "both" && product.availability !== "both") {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        const matchesCode = product.code?.toLowerCase().includes(query);
        const matchesCategory = product.categoryLabel.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCode || matchesCategory;
      }

      return true;
    });
  }, [selectedCategory, selectedAvailability, searchQuery]);

  const activeCategory = PRODUCT_CATEGORIES.find((cat) => cat.id === selectedCategory);
  const breadcrumbs =
    selectedCategory !== "all" && activeCategory
      ? [
          { label: "Rental Products", href: "/rental-products" },
          { label: activeCategory.label },
        ]
      : [{ label: "Rental Products" }];

  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Transformers Equipment & Display Systems Catalog",
    description: "Verified catalog of modular exhibition booths, LED video screens, audio systems, and stage equipment in Egypt.",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.slice(0, 10).map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: p.name,
      description: p.shortDescription,
      image: `https://transformers-me.com${p.image}`,
    })),
  };

  return (
    <>
      <SEOHead
        title="Rental Products Catalog | Exhibition Booths, LED & AV Egypt"
        description="Structured catalog of modular exhibition booths (Codes A-Q), LED video screens, audio systems, stages, and event furniture for rental and sale in Egypt."
        canonicalPath="/rental-products"
        structuredData={catalogSchema}
      />

      <Navbar />

      <PageHeader
        title="Rental Products & Equipment Catalog"
        subtitle="Explore our verified inventory of modular exhibition booths, LED video screens, audio systems, stage platforms, and event furniture. Available for rental or purchase in Egypt."
        image="/Products.jpg"
        breadcrumbs={breadcrumbs}
        badge="Rental & Sale Inventory"
      />

      {/* --- FILTER & SEARCH CONTROLS --- */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by code (e.g. Code A), name, or category..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] focus:border-transparent bg-slate-50/70"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Availability Mode Toggle */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-semibold text-slate-500 shrink-0 flex items-center gap-1">
                <Tag size={13} /> Availability:
              </span>
              <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 shrink-0">
                <button
                  onClick={() => setSelectedAvailability("all")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    selectedAvailability === "all" ? "bg-white text-[#0a2540] shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedAvailability("rental")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    selectedAvailability === "rental" ? "bg-white text-amber-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Rental
                </button>
                <button
                  onClick={() => setSelectedAvailability("sale")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    selectedAvailability === "sale" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Sale
                </button>
                <button
                  onClick={() => setSelectedAvailability("both")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    selectedAvailability === "both" ? "bg-white text-emerald-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Both
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSearchParams(cat.id === "all" ? {} : { category: cat.id });
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#0a2540] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-[450px]">
        <div className="max-w-7xl mx-auto">
          {/* Results count header */}
          <div className="flex justify-between items-center mb-6 sm:mb-8 text-xs text-slate-500">
            <span>
              Showing <strong>{filteredProducts.length}</strong> verified products
            </span>
            {(selectedCategory !== "all" || selectedAvailability !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedAvailability("all");
                  setSearchQuery("");
                  setSearchParams({});
                }}
                className="text-[#1787b2] hover:underline font-semibold"
              >
                Reset all filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200 max-w-md mx-auto">
              <Boxes size={36} className="mx-auto text-slate-300 mb-3" />
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">No matching products found</h3>
              <p className="text-xs text-slate-600 mb-6">
                Try loosening your search terms or clearing the selected availability and category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedAvailability("all");
                  setSearchQuery("");
                  setSearchParams({});
                }}
                className="px-5 py-2.5 bg-[#0a2540] text-white rounded-xl text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-16 px-4 bg-[#0a2540] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Need a Customized Equipment & Staging Package?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-8 leading-relaxed">
            Can’t find the exact dimensions or combination you need? We create tailored multi-equipment bundles combining modular booths, LED displays, sound systems, and staging for events across Egypt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to={quoteHref(QUOTE.equipment)}
              className="px-8 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md"
            >
              Request Custom Package Quote
            </Link>
            <a
              href="tel:+201110999646"
              className="px-8 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} /> +20 111 099 9646
            </a>
          </div>
        </div>
      </section>

      <ContinueLinks
        links={[
          { href: "/exhibitions", label: "Exhibitions" },
          { href: "/events", label: "Events" },
          { href: "/conferences", label: "Conferences" },
          { href: "/transformers-display-system", label: "Transformers Display System" },
        ]}
      />

      <Footer />
    </>
  );
}
