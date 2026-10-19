"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, HelpCircle, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    category: "Transformers Modular Display System",
    items: [
      {
        q: "What is the Transformers Display System?",
        a: "The Transformers Display System is a patented, foldable modular exhibition booth framework manufactured from precision aerospace-grade aluminum alloy in Taiwan. Designed to replace single-use wooden carpentry, it provides structural strength, tool-less fast assembly, and support for high-resolution graphics, spotlights, and reception podiums.",
      },
      {
        q: "How long does it take to assemble a Transformers booth?",
        a: "Standard booths (such as a 3×3 m or 6×3 m U-shape or L-shape configuration) assemble in only 3 to 4 hours with minimal tools. This is 60–70% faster than traditional timber fabrication, which typically demands 24 to 48 hours of on-site carpentry, sawing, and painting.",
      },
      {
        q: "How many times can the aluminum modular system be reused?",
        a: "With standard professional handling by certified technicians, the aluminum components have an operational lifespan of 50+ exhibitions without structural fatigue. Exhibitors simply print new fabric or vinyl graphics between marketing campaigns, preserving the core capital hardware.",
      },
      {
        q: "What are the environmental sustainability benefits?",
        a: "Traditional timber stands generate metric tons of construction debris and landfill waste after each 3-day exhibition. Transformers is an eco-friendly circular solution: 100% recyclable aluminum components with zero wood cutting, no toxic solvent paints, and significantly reduced transport emissions.",
      },
    ],
  },
  {
    category: "Exhibitions & Booth Configurations",
    items: [
      {
        q: "What standard booth sizes and shapes are available?",
        a: "We offer standardized configurations from Code A through Code Q. Available footprint dimensions include 3×3 m, 4×3 m, 5×3 m, 6×3 m, 7×3 m, 8×3 m, 9×3 m, 6×4 m, and 6×5 m, formatted as 3-wall U-Shapes, 2-wall corner L-Shapes, open pavilions, and custom free-space island layouts.",
      },
      {
        q: "What is included with a standard booth package?",
        a: "All standard Transformers booth configurations (Codes A through Q) include the modular aluminum structure, a branded reception podium, an exhibitor wooden header sign (70×30 cm with vinyl print), and 3 focused spotlights for every 9 m² of booth area.",
      },
      {
        q: "What is the difference between a single booth and a full exhibition stand?",
        a: "Single booths (typically 9 m² to 27 m²) cater to individual exhibitors seeking high-impact, cost-efficient modular presence within standard shell scheme rows. Full exhibition stands (36 m² to 200 m²+) are large island or peninsula spaces incorporating raised flooring, private meeting lounges, suspended overhead rings (Code J), vertical towers (Code G/I), and custom-fabricated feature walls.",
      },
    ],
  },
  {
    category: "Events & Production Capabilities",
    items: [
      {
        q: "What types of events do you produce across Egypt?",
        a: "We produce three primary event formats: (1) Commercial Brand Events (store grand openings, corporate anniversaries, and product reveals), (2) Pharmaceutical Symposia (medical congresses, advisory boards, and scientific gala dinners), and (3) International Sports Tournaments (competition staging, arena branding, and medal podiums for world championships).",
      },
      {
        q: "What technical equipment do you maintain in Cairo?",
        a: "We own extensive local inventories in Cairo, including P2.6 and P3.9 indoor and outdoor LED video walls, pro line array sound systems with digital mixing consoles, German modular stage decks, white and black plexiglass runway stages, and DMX-controlled intelligent stage lighting rigs.",
      },
    ],
  },
  {
    category: "Conferences & Stage AV",
    items: [
      {
        q: "What stage display solutions do you provide for conferences?",
        a: "We engineer plenary keynote stages with panoramic LED video backdrops (P2.6 ultra-fine pitch for crisp slide typography), frosted and branded presenter lecterns, distributed speech audio arrays, wireless lavalier microphones, and foyer registration counters.",
      },
      {
        q: "Do you supply foyer exhibition booths for conference sponsors?",
        a: "Yes. We regularly supply uniform modular sponsor display booths, charging lounges, and digital signage agenda totems for conference foyers and networking exhibition halls.",
      },
    ],
  },
  {
    category: "Commercial Terms, Rental & Purchase",
    items: [
      {
        q: "Can I rent a booth system instead of purchasing?",
        a: "Yes. We offer turnkey booth rental packages on a per-event basis for exhibitors in Egypt. Rental includes pre-event quality check, transport, on-site assembly, on-site support, and post-event teardown. You only purchase your printed graphic panels.",
      },
      {
        q: "Can we purchase the hardware permanently?",
        a: "Yes. For companies participating in 3 or more exhibitions annually, purchasing genuine Taiwan Transformers modular hardware delivers massive cost savings over multi-year cycles. We also offer storage and technician service packages in Cairo.",
      },
      {
        q: "How fast can I receive a quotation?",
        a: "Our sales engineering team provides detailed, itemized quotations within 24 hours of receiving your booth dimensions, event date, and technical specifications.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "0-0": true, // open first item by default
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const breadcrumbs = [{ label: "Frequently Asked Questions" }];

  const allQuestions = FAQ_DATA.flatMap((cat) => cat.items);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="FAQ | Transformers Modular Display Systems & Event Production Egypt"
        description="Comprehensive answers about Transformers modular exhibition booths, assembly times, rental vs purchase, conference AV, and event management in Cairo, Egypt."
        canonicalPath="/faq"
        structuredData={faqSchema}
      />

      <Navbar />

      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Clear, verified answers regarding our modular display systems, assembly mechanics, rental vs purchase options, and turnkey event management in Egypt."
        image="/FAQ.jpg"
        breadcrumbs={breadcrumbs}
        badge="Knowledge & Guidance"
      />

      {/* --- FAQ ACCORDIONS --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          {FAQ_DATA.map((cat, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-6 bg-[#1787b2] rounded-full"></span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0a2540]">
                  {cat.category}
                </h2>
              </div>

              <div className="space-y-3">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div
                      key={itemIdx}
                      className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs transition-shadow hover:shadow-sm"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif text-base sm:text-lg font-bold text-[#0a2540]">
                          {item.q}
                        </span>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                            isOpen ? "bg-[#1787b2] text-white rotate-180" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <ChevronDown size={16} />
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STILL HAVE QUESTIONS CTA --- */}
      <section className="py-16 px-4 bg-[#0a2540] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#6fbdd7] flex items-center justify-center mx-auto mb-4 border border-white/15">
            <HelpCircle size={22} />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Still Have Questions About Your Event or Booth?
          </h3>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed">
            Our engineering and production team is available to assist with custom space layouts, structural advice, and quotation estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-sm rounded-xl transition-all shadow-md"
            >
              Contact Our Sales Team
            </Link>
            <a
              href="tel:+201110999646"
              className="px-8 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} /> +20 111 099 9646
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
