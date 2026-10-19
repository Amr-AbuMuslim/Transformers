"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  X,
  Share2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";
import { INSIGHTS_ARTICLES, InsightArticle } from "@/data/insights";

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Exhibitions", "Events", "Conferences", "Display Systems"] as const;

  const filteredArticles = INSIGHTS_ARTICLES.filter((article) => {
    if (selectedCategory === "all") return true;
    return article.category === selectedCategory;
  });

  const breadcrumbs = [{ label: "Insights & Industry Guides" }];

  const insightsSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Transformers Industry Insights & Guides",
    description: "Educational guides on modular exhibition systems, booth rental vs purchase, conference AV, and event management in Egypt.",
    url: "https://transformers-me.com/insights",
  };

  return (
    <>
      <SEOHead
        title="Exhibition & Event Management Insights | Transformers Egypt"
        description="In-depth educational guides for B2B marketers: Modular vs custom stands, booth rental vs purchase in Egypt, conference AV planning, and event staging."
        canonicalPath="/insights"
        structuredData={insightsSchema}
      />

      <Navbar />

      <PageHeader
        title="Insights & Technical Guides"
        subtitle="Practical decision-making frameworks, technical checklists, and strategic insights for B2B exhibitors and event planners in Egypt."
        image="/luxury-exhibition-booth-design.jpg"
        breadcrumbs={breadcrumbs}
        badge="Knowledge Hub"
      />

      {/* --- CATEGORY TABS --- */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-500 mr-1 sm:mr-2 shrink-0">Topic:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#0a2540] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat === "all" ? "All Insights" : cat}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 hidden sm:block">
            {filteredArticles.length} Published Guides
          </span>
        </div>
      </section>

      {/* --- ARTICLE GRID --- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                onClick={() => setSelectedArticle(article)}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-[#0a2540] shadow-xs backdrop-blur-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {article.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {article.publishedDate}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0a2540] group-hover:text-[#1787b2] transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 mb-5 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1787b2] group-hover:text-[#0a2540] transition-colors mt-auto">
                    <span>Read Complete Guide</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- ARTICLE DETAIL MODAL --- */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
              aria-label="Close article modal"
            >
              <X size={18} />
            </button>

            {/* Article Header Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-slate-900 overflow-hidden">
              <img
                src={selectedArticle.coverImage}
                alt={selectedArticle.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#6fbdd7] bg-black/40 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20 mb-1.5 sm:mb-2 inline-block">
                  {selectedArticle.category}
                </span>
                <p className="text-[11px] sm:text-xs text-slate-300">
                  {selectedArticle.publishedDate} • {selectedArticle.readTime} • By {selectedArticle.author}
                </p>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-5 sm:p-8 md:p-10">
              <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a2540] leading-tight mb-3 sm:mb-4">
                {selectedArticle.title}
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium italic border-l-4 border-[#1787b2] pl-3 sm:pl-4 mb-6 sm:mb-8">
                {selectedArticle.subtitle}
              </p>

              {/* Key Takeaways Box */}
              <div className="mb-8 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
                <h4 className="font-serif font-bold text-xs sm:text-sm text-[#0a2540] uppercase tracking-wider mb-2.5 sm:mb-3 flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#1787b2]" /> Key Strategic Takeaways
                </h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                  {selectedArticle.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1787b2] font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              <div className="space-y-6 sm:space-y-8 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
                {selectedArticle.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3 sm:space-y-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0a2540]">
                      {section.heading}
                    </h3>
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx} className="text-slate-600">
                        {p}
                      </p>
                    ))}
                    {section.callout && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-[#0d586f] font-medium">
                        💡 <strong>Industry Note:</strong> {section.callout}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Article Footer CTA */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-sm sm:text-base text-[#0a2540]">
                    Need tailored advice for your exhibition or event?
                  </p>
                  <p className="text-xs text-slate-500">
                    Our Cairo engineering and production team is ready to assist.
                  </p>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-3 bg-[#0a2540] hover:bg-[#1787b2] text-white text-xs font-semibold rounded-xl transition-colors shrink-0 shadow-xs text-center"
                >
                  Request a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- CTA BANNER --- */}
      <section className="py-16 px-4 bg-[#0a2540] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Have a Complex Exhibition or Event Requirement?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-8 leading-relaxed">
            Put our 28+ years of expertise to work for your brand. Get transparent pricing, structural 3D plans, and venue compliance guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md"
            >
              Discuss Your Brief
            </Link>
            <Link
              to="/rental-products"
              className="px-8 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Explore Equipment Catalog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
