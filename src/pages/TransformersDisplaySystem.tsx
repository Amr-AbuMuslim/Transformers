"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { QUOTE, quoteHref } from "@/data/navigation";
import { ContinueLinks } from "@/components/SectionNav";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Boxes,
  Layers,
  Sparkles,
  CheckCircle2,
  Download,
  Phone,
  Tag,
  RefreshCw,
  HelpCircle,
  Truck,
  Leaf,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function TransformersDisplaySystem() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "u-shape" | "l-shape" | "architectural">("all");

  const boothProducts = PRODUCTS.filter((p) => p.category === "transformers_system");

  const filteredBooths = boothProducts.filter((p) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "u-shape") return p.name.includes("U-Shape") || p.name.includes("U Shape");
    if (selectedCategory === "l-shape") return p.name.includes("L-Shape") || p.name.includes("L Shape");
    if (selectedCategory === "architectural") return p.name.includes("Tower") || p.name.includes("Ring") || p.name.includes("Gate") || p.name.includes("Pavilion") || p.name.includes("Octopus");
    return true;
  });

  const breadcrumbs = [
    { label: "Services", href: "/#services" },
    { label: "Exhibitions", href: "/exhibitions" },
    { label: "Transformers Display System" },
  ];

  const systemSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Transformers Modular Exhibition Display System",
    image: "https://transformers-me.com/A.png",
    description:
      "Patented foldable aluminum modular booth display system manufactured in Taiwan. Sole distributor in Egypt. Available for rental and sale.",
    brand: {
      "@type": "Brand",
      name: "Transformers Display System",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Transformers Taiwan",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EGP",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Transformers for Events Management and Display Systems",
      },
    },
  };

  return (
    <>
      <SEOHead
        title="Transformers Modular Display System | Foldable Aluminum Booths Egypt"
        description="The official Transformers modular aluminum exhibition display system in Egypt. Reusable, foldable, 3-4 hour rapid assembly. Available for rental and purchase in Cairo."
        canonicalPath="/transformers-display-system"
        structuredData={systemSchema}
        keywords={[
          "Transformers Display System",
          "Transformers Modular Display System",
          "Modular Exhibition Display System Egypt",
          "Foldable Aluminum Booth Egypt",
          "Exhibition Booth Rental Egypt",
          "Transformers System Sole Distributor",
        ]}
      />

      <Navbar />

      <PageHeader
        title="Transformers Modular Display System"
        subtitle="The ultimate fitting solution: Patented, foldable aluminum truss booth systems combining architectural elegance, rapid 3–4 hour assembly, and lifelong reusability in Egypt."
        image="/whatis.jpg"
        breadcrumbs={breadcrumbs}
        badge="Official Sole Distributor in Egypt"
      />

      {/* --- CORE OVERVIEW --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 mb-8 text-xs text-amber-900 leading-relaxed">
            <strong>Notice on Trademark & Industrial Classification:</strong> Transformers for Events Management and Display Systems is an architectural event production and display hardware provider based in Cairo, Egypt. Our modular display system is an engineered aluminum industrial booth framework manufactured in Taiwan. We have no affiliation with any entertainment media franchise or toy brand.
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 inline-block">
              Engineering Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540] mb-6">
              What Is the Transformers Display System?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              The Transformers Display System is a high-precision, foldable modular exhibition framework manufactured from aerospace-grade aluminum alloy in Taiwan. Designed to liberate exhibitors from the prohibitive expenses and landfill waste of single-use timber carpentry, it offers a fully reconfigurable structural chassis supporting high-resolution graphics, integrated spotlighting, reception podiums, and elevated architectural branding.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              As the sole authorized distributor in Egypt, we maintain extensive hardware inventories in Cairo, supporting businesses with both <strong>per-event equipment rentals</strong> and <strong>complete permanent system purchases</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* --- KEY VERIFIED TECHNICAL BENEFITS --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Verified Specifications"
            title="Engineered Advantages for Exhibitors"
            subtitle="Real metrics and operational benefits proven across Egyptian and international trade centers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">3–4 Hour Assembly</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assembles in a fraction of the 24–48 hours required for wooden stands. Intuitive locking mechanisms require minimal tools, eliminating on-site sawdust, paint odors, and overtime fees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <RefreshCw size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">50+ Reusable Cycles</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Taiwanese manufacturing with precision aluminum extrusions withstands dozens of assembly and dismantling cycles without structural degradation or loosening connections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Truck size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">60% Lower Transport Costs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The foldable truss design collapses into compact wheeled flight cases, fitting into standard transport vans rather than requiring expensive flatbed logistics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">Zero-Waste Sustainability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% recyclable aluminum components produce zero landfill waste after the show. Only the printed graphic banners are swapped out for subsequent events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUPPORTED CONFIGURATIONS & BOOTH CATALOG --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 inline-block">
                Catalog & Dimensions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540]">
                Standard Configurations (Codes A to Q)
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Browse our standardized modular layouts. Every booth code comes pre-engineered with podiums, signs, and lighting specifications.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === "all" ? "bg-[#0a2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Models ({boothProducts.length})
              </button>
              <button
                onClick={() => setSelectedCategory("u-shape")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === "u-shape" ? "bg-[#0a2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                U-Shape Booths
              </button>
              <button
                onClick={() => setSelectedCategory("l-shape")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === "l-shape" ? "bg-[#0a2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                L-Shape Corner
              </button>
              <button
                onClick={() => setSelectedCategory("architectural")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === "architectural" ? "bg-[#0a2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Towers, Rings & Gates
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooths.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* --- RENTAL VS PURCHASE COMPARISON --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            badge="Commercial Flexibility"
            title="Rental vs. Purchase in Egypt"
            subtitle="Choose the financial model that best suits your annual event calendar."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rental Column */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 self-start mb-4">
                Operational Flexibility
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0a2540] mb-3">Booth System Rental</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                Ideal for brands participating in 1 to 2 exhibitions per year, international exhibitors visiting Cairo, or companies testing new trade expos without committing to long-term storage and hardware assets.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Zero warehousing or storage overhead in Egypt</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Turnkey delivery, assembly, and dismantle included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>You only pay for graphic printing and event rental days</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Change booth footprints easily between different expos</span>
                </li>
              </ul>

              <Link
                to={quoteHref(QUOTE.displaySystem, { preference: "rental" })}
                className="w-full py-3 bg-[#0a2540] hover:bg-[#1787b2] text-white rounded-xl text-center text-xs font-semibold transition-colors"
              >
                Request Rental Rates
              </Link>
            </div>

            {/* Purchase Column */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#1787b2] shadow-md flex flex-col relative">
              <div className="absolute -top-3 right-8 bg-[#1787b2] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                Maximum Long-Term ROI
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 self-start mb-4">
                Capital Asset
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0a2540] mb-3">Booth System Purchase</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                Ideal for active exhibitors attending 3 or more expos, symposiums, or roadshows annually. The system pays for itself within 12–18 months, converting recurring construction spend into permanent equity.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Permanent ownership of authentic Taiwan modular hardware</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Reconfigure into multiple smaller booths anytime</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Significant cumulative cost savings over 3–5 years</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Optional Cairo warehousing & technician service plans</span>
                </li>
              </ul>

              <Link
                to={quoteHref(QUOTE.displaySystem, { preference: "purchase" })}
                className="w-full py-3 bg-[#1787b2] hover:bg-[#0a2540] text-white rounded-xl text-center text-xs font-semibold transition-colors"
              >
                Request Hardware Purchase Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CATALOG DOWNLOAD / TECHNICAL SPEC SHEET CTA --- */}
      <section className="py-16 px-4 bg-[#071a2d] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#6fbdd7] flex items-center justify-center mx-auto mb-4 border border-white/15">
            <Download size={22} />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Request the Complete Technical Specifications Catalog
          </h3>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed">
            Download our complete booth dimension guide, weight specifications, banner graphic templates, and spotlight electrical load data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={quoteHref(QUOTE.displaySystem, { preference: "consultation", intent: "catalog" })}
              className="px-8 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-sm rounded-xl transition-all shadow-md"
            >
              Request Catalog & Specs
            </Link>
            <a
              href="tel:+201110999646"
              className="px-8 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Speak With an Engineer
            </a>
          </div>
        </div>
      </section>

      <ContinueLinks
        links={[
          { href: "/exhibitions", label: "Back to Exhibitions" },
          { href: "/exhibitions#single-booths", label: "Single Booths" },
          { href: "/rental-products?category=transformers_system", label: "Booth catalog" },
          { href: "/projects?pillar=exhibitions", label: "Exhibition projects" },
        ]}
      />

      <Footer />
    </>
  );
}
