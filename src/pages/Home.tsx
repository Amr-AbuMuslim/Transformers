"use client";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Boxes,
  Layers,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Monitor,
  Phone,
  HelpCircle,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";
import TrustedByCarousel from "@/components/TrustedByCarousel";
import ProductCard from "@/components/ProductCard";
import ProjectCard from "@/components/ProjectCard";
import { PRODUCTS } from "@/data/products";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://transformers-me.com/#organization",
        name: "Transformers for Events Management and Display Systems",
        url: "https://transformers-me.com",
        logo: "https://transformers-me.com/LOGO (1) (2).png",
        description:
          "Provider of exhibition booth systems, turnkey event management, and conference display solutions in Egypt. Sole distributor of Transformers modular aluminum display systems (Made in Taiwan) in Egypt.",
        foundingDate: "1997",
        founder: {
          "@type": "Organization",
          name: "Orange Solutions",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Heliopolis",
          addressRegion: "Cairo",
          addressCountry: "EG",
        },
        telephone: "+201110999646",
        email: "sales@transformers-me.com",
        sameAs: [
          "https://www.facebook.com/transformersdisplaysystem/",
          "https://www.instagram.com/transformers_me/",
          "https://eg.linkedin.com/company/transformersdisplaysystem",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://transformers-me.com/#localbusiness",
        name: "Transformers Display Systems",
        image: "https://transformers-me.com/LOGO (1) (2).png",
        telephone: "+201110999646",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Heliopolis",
          addressLocality: "Cairo",
          addressCountry: "EG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "30.117816",
          longitude: "31.354030",
        },
        url: "https://transformers-me.com",
      },
    ],
  };

  const faqs = [
    {
      q: "What services does Transformers provide?",
      a: "Transformers provides three specialized services: (1) Exhibitions (single modular booths, full stands, and custom design & build), (2) Events (turnkey production for commercial brand launches, pharmaceutical symposia, and sporting championships), and (3) Conferences (stage structures, panoramic LED video walls, speaker audio reinforcement, and branded backdrops).",
    },
    {
      q: "What is the Transformers Modular Display System?",
      a: "The Transformers Display System is a precision-engineered, foldable aluminum truss booth system manufactured in Taiwan. As the sole distributor in Egypt, we provide lightweight, reusable booth structures that assemble in only 3 to 4 hours with minimal tools, saving up to 60% on transportation and labor compared to traditional timber stands.",
    },
    {
      q: "Are products available for rental, purchase, or both in Egypt?",
      a: "We offer flexible options tailored to your event calendar. Transformers modular booths, LED video walls, sound systems, stages, lighting rigs, and furniture are available for rental on a per-event basis, or for direct capital purchase with lifetime hardware reusability for frequent exhibitors.",
    },
    {
      q: "What makes modular exhibition booths better than custom wooden stands?",
      a: "Custom wooden stands require days of on-site carpentry, produce substantial dust, paint fumes, and landfill waste, and are completely discarded after 3 days. Modular aluminum booths assemble cleanly in 3-4 hours, produce zero waste, and the aircraft-grade aluminum hardware can be reused for 50+ exhibitions with interchangeable printed graphics.",
    },
    {
      q: "How can businesses in Egypt request a quotation?",
      a: "You can request a tailored quotation online through our Contact page, or directly contact our Cairo sales engineers via phone at +20 111 099 9646 / 47 / 48 or email at sales@transformers-me.com. We provide itemized proposals within 24 hours.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Transformers for Events Management and Display Systems | Egypt"
        description="Premium exhibition booth rentals, turnkey event management, and conference display solutions in Egypt. Sole Taiwan Transformers modular display system distributor."
        canonicalPath="/"
        structuredData={homeSchema}
      />

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="main-content" tabIndex={-1} className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#071a2d] w-full outline-none">
        {/* Background Image with LCP priority */}
        <img
          src="/download.png"
          alt="Transformers for Events Management and Display Systems"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a2d]/95 via-[#071a2d]/85 to-[#071a2d]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="max-w-3xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#6fbdd7] border border-white/15 text-[11px] sm:text-xs font-semibold mb-5 sm:mb-6 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#1787b2] animate-pulse"></span>
              Built on Orange Solutions Heritage (Est. 1997) • Cairo, Egypt
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
              Exhibition, Event & Conference Solutions
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-6 sm:mb-8 leading-relaxed font-light max-w-2xl">
              Transformers delivers precision modular display systems, bespoke exhibition stands, and turnkey event production across Egypt. Combining engineering excellence with local hardware inventory for seamless B2B execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href="#services"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1787b2] text-white hover:bg-[#6fbdd7] hover:text-[#0a2540] rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Explore Our Solutions <ArrowRight size={17} />
              </a>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 backdrop-blur-xs"
              >
                Request a Quote
              </Link>
            </div>

            <nav aria-label="Services" className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pt-5 sm:pt-6 border-t border-white/15 text-xs text-slate-300">
              <Link to="/exhibitions" className="flex items-center gap-2 rounded-md hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6fbdd7]">
                <CheckCircle2 size={14} className="text-[#6fbdd7] shrink-0" />
                <span>Exhibitions</span>
              </Link>
              <Link to="/events" className="flex items-center gap-2 rounded-md hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6fbdd7]">
                <CheckCircle2 size={14} className="text-[#6fbdd7] shrink-0" />
                <span>Events</span>
              </Link>
              <Link to="/conferences" className="flex items-center gap-2 rounded-md hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6fbdd7]">
                <CheckCircle2 size={14} className="text-[#6fbdd7] shrink-0" />
                <span>Conferences</span>
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THREE CORE BUSINESS PILLARS --- */}
      <div id="pillars" className="sr-only" />
      <section id="services" className="scroll-mt-28 md:scroll-mt-36 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 w-full">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Services"
            title="Exhibitions, Events, and Conferences"
            subtitle="Three specialized services for live brand engagement in Egypt — modular booths and custom stands, turnkey event production, and conference staging."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Pillar 1: Exhibitions */}
            <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/modern-aluminum-modular-display-booth-exhibition.jpg"
                  alt="Exhibition Booths and Stands Egypt"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#0a2540]/90 text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  Exhibitions
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0a2540] group-hover:text-[#1787b2] transition-colors mb-2 sm:mb-3">
                  Exhibitions
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed flex-grow">
                  From compact single modular booths (Codes A–Q) to sprawling custom-built exhibition stands. We provide turnkey booth rental, custom fabrication, and the official Transformers modular system across Cairo's major trade fairs.
                </p>

                <ul className="space-y-2 mb-6 text-xs text-slate-700">
                  <li>
                    <Link to="/exhibitions#single-booths" className="flex items-center gap-2 rounded-sm hover:text-[#1787b2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                      Single Exhibition Booths (U & L Shapes)
                    </Link>
                  </li>
                  <li>
                    <Link to="/exhibitions#full-stands" className="flex items-center gap-2 rounded-sm hover:text-[#1787b2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                      Full Custom Exhibition Stands & Pavilions
                    </Link>
                  </li>
                  <li>
                    <Link to="/transformers-display-system" className="flex items-center gap-2 rounded-sm hover:text-[#1787b2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                      Modular Reusable Aluminum Booth Systems
                    </Link>
                  </li>
                </ul>

                <Link
                  to="/exhibitions"
                  className="inline-flex items-center justify-between py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-semibold text-xs transition-colors"
                >
                  <span>Explore Exhibition Solutions</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Events */}
            <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/Transformers_Assets/01_Hero/hero_background.jpg"
                  alt="Events Management and Production Egypt"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#0a2540]/90 text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  Events
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0a2540] group-hover:text-[#1787b2] transition-colors mb-2 sm:mb-3">
                  Events Management
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed flex-grow">
                  Full-scale event production tailored for Commercial Brand Launches, Pharmaceutical Symposia, and International Sports Tournaments. Complete execution covering staging, sound, lighting, and environmental branding.
                </p>

                <ul className="space-y-2 mb-6 text-xs text-slate-700">
                  <li>
                    <Link to="/events#commercial-events" className="flex items-center gap-2 rounded-sm hover:text-[#1787b2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                      Commercial Events & Store Launches
                    </Link>
                  </li>
                  <li>
                    <Link to="/events#pharma-events" className="flex items-center gap-2 rounded-sm hover:text-[#1787b2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                      Pharmaceutical Scientific Meetings & Galas
                    </Link>
                  </li>
                  <li>
                    <Link to="/events#sports-events" className="flex items-center gap-2 rounded-sm hover:text-[#1787b2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                      Sports Tournaments & World Championships
                    </Link>
                  </li>
                </ul>

                <Link
                  to="/events"
                  className="inline-flex items-center justify-between py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-semibold text-xs transition-colors"
                >
                  <span>Explore Event Management</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Conferences */}
            <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/Transformers_Assets/04_LED_Screens/LED_Conference_Setup.jpg"
                  alt="Conference Display Solutions Egypt"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#0a2540]/90 text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  Conferences
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0a2540] group-hover:text-[#1787b2] transition-colors mb-2 sm:mb-3">
                  Conferences
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed flex-grow">
                  Engineered conference stages, ultra-fine pixel pitch LED backdrops, acoustic speech audio systems, and registration environments that command authority and maintain flawless technical timing.
                </p>

                <ul className="space-y-2 mb-6 text-xs text-slate-700">
                  <li>
                    <Link to="/conferences#keynote-stages" className="flex items-center gap-2 rounded-sm hover:text-[#1787b2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                      Keynote Stages & German Stage Decks
                    </Link>
                  </li>
                  <li>
                    <Link to="/conferences#led-backdrops" className="flex items-center gap-2 rounded-sm hover:text-[#1787b2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                      High-Definition LED Video Walls (P2.6)
                    </Link>
                  </li>
                  <li>
                    <Link to="/conferences#speech-audio" className="flex items-center gap-2 rounded-sm hover:text-[#1787b2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                      Speech Reinforcement Line Arrays & Mics
                    </Link>
                  </li>
                </ul>

                <Link
                  to="/conferences"
                  className="inline-flex items-center justify-between py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#0a2540] hover:text-white text-[#0a2540] font-semibold text-xs transition-colors"
                >
                  <span>Explore Conference Solutions</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FEATURED TRANSFORMERS DISPLAY SYSTEM --- */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="relative w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100 w-full">
                <img
                  src="/whatis.jpg"
                  alt="Transformers Modular Display System Mechanism"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Badge (Responsive placement) */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-6 bg-[#0a2540] text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-white/10 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1787b2] flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold font-serif leading-tight">3–4 Hours</p>
                    <p className="text-[11px] sm:text-xs text-slate-300">Rapid On-Site Assembly vs. 24h Wood</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full">
              <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 sm:mb-4 inline-block">
                Exclusive Distribution in Egypt
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0a2540] tracking-tight leading-tight mb-4 sm:mb-6">
                Transformers Modular Display System
              </h2>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
                Transformers is a patented, foldable aluminum truss modular display system manufactured in Taiwan. Engineered for exhibitions, trade shows, and corporate activations, it delivers architectural presence without the prohibitive fabrication costs and waste of timber.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 mb-1 font-semibold text-xs sm:text-sm text-[#0a2540]">
                    <Boxes size={15} className="text-[#1787b2] shrink-0" />
                    <span>Extreme Versatility</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Supports U-shapes, L-shapes, towers, rings, pavilions, and custom footprints from 3×3 m to 9×3 m+.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 mb-1 font-semibold text-xs sm:text-sm text-[#0a2540]">
                    <ShieldCheck size={15} className="text-[#1787b2] shrink-0" />
                    <span>Reusable for 50+ Expos</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Zero-waste aircraft-grade aluminum alloy. Replace only graphics between marketing cycles.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <Link
                  to="/transformers-display-system"
                  className="px-6 py-3.5 bg-[#0a2540] hover:bg-[#1787b2] text-white rounded-xl font-semibold text-xs sm:text-sm transition-colors text-center shadow-xs"
                >
                  View System Specs & Configurations
                </Link>
                <Link
                  to="/rental-products?category=transformers_system"
                  className="px-6 py-3.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-xs sm:text-sm transition-colors text-center"
                >
                  Browse Booth Catalog (Codes A–Q)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CLIENTS CAROUSEL --- */}
      <TrustedByCarousel />

      {/* --- SECTION 4: RENTAL PRODUCTS PREVIEW --- */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-2 sm:mb-3 inline-block">
                Equipment & Systems Catalog
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540]">
                Rental Products & Solutions
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm sm:text-base mt-2 max-w-xl">
                Explore a curated selection of modular booths, LED video walls, sound packages, and staging available for rental and purchase in Egypt.
              </p>
            </div>

            <Link
              to="/rental-products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1787b2] hover:text-[#0a2540] transition-colors self-start md:self-auto"
            >
              <span>View Full Rental Catalog</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FEATURED PROJECTS --- */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-2 sm:mb-3 inline-block">
                Verified Track Record
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540]">
                Featured Projects & Case Studies
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm sm:text-base mt-2 max-w-xl">
                Real completed installations across Egypt's premier sporting events, pharmaceutical conferences, and international trade shows.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1787b2] hover:text-[#0a2540] transition-colors self-start md:self-auto"
            >
              <span>Explore All Projects</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: WHY CHOOSE US --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#071a2d] text-white w-full">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Evidence-Based Capability"
            title="Why Leading Brands Choose Transformers"
            subtitle="Genuine differentiators backed by 28+ years of industry heritage in Egypt."
            className="text-white [&_h2]:text-white [&_p]:text-slate-300"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1787b2] transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1787b2]/20 text-[#6fbdd7] flex items-center justify-center mb-3 sm:mb-4">
                <Award size={22} />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Heritage Since 1997</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Founded on the legacy of Orange Solutions, established in 1997. Over 28 years of institutional event and exhibition experience in Egypt.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1787b2] transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1787b2]/20 text-[#6fbdd7] flex items-center justify-center mb-3 sm:mb-4">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Sole Taiwan Distributor</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Exclusive authorized distributor of Transformers modular display systems in Egypt, ensuring genuine components and factory warranties.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1787b2] transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1787b2]/20 text-[#6fbdd7] flex items-center justify-center mb-3 sm:mb-4">
                <Monitor size={22} />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">In-House Inventory</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We own our equipment outright: P2.6/P3.9 LED screens, line array speakers, German stage decks, lighting rigs, and modular booths warehoused in Cairo.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1787b2] transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1787b2]/20 text-[#6fbdd7] flex items-center justify-center mb-3 sm:mb-4">
                <Clock size={22} />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Rapid 3–4h Turnaround</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precision modular construction eliminates on-site delays, allowing rapid move-in and dismantle within tight Egyptian venue schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: HOW WE WORK (PROCESS) --- */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200 w-full">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Operational Precision"
            title="How We Work: From Brief to Execution"
            subtitle="A transparent, reliable 4-step workflow designed for B2B brand security."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs relative">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#1787b2]/20 absolute top-4 right-4">01</span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1787b2] mb-1.5">Consultation</p>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#0a2540] mb-2">Space & Objective Brief</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We analyze your exhibition plot dimensions, event requirements, or conference agenda, recommending optimal modular footprints or custom builds.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs relative">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#1787b2]/20 absolute top-4 right-4">02</span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1787b2] mb-1.5">Engineering</p>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#0a2540] mb-2">Technical 3D Layout</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We generate accurate 3D structural visual layouts, graphic banner templates, and electrical/lighting load diagrams for venue approvals.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs relative">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#1787b2]/20 absolute top-4 right-4">03</span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1787b2] mb-1.5">Preparation</p>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#0a2540] mb-2">Graphics & QA Testing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-definition graphics are printed and fitted in our Cairo facility. All LED panels, sound mixers, and stage modules undergo pre-dispatch testing.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs relative">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#1787b2]/20 absolute top-4 right-4">04</span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1787b2] mb-1.5">Execution</p>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#0a2540] mb-2">On-Site Setup & Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our certified technicians assemble the booth or stage in 3–4 hours, provide on-site technical standby during the event, and oversee rapid dismantling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FREQUENTLY ASKED QUESTIONS --- */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            badge="Clarity & Transparency"
            title="Frequently Asked Questions"
            subtitle="Direct answers regarding our services, display systems, rental conditions, and Cairo logistics."
          />

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-2xl p-4 sm:p-6 bg-slate-50/50 open:bg-white open:shadow-xs transition-all duration-200"
              >
                <summary className="font-serif text-sm sm:text-base md:text-lg font-bold text-[#0a2540] cursor-pointer flex justify-between items-center list-none select-none">
                  <span className="pr-2">{faq.q}</span>
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-200 group-open:bg-[#1787b2] group-open:text-white flex items-center justify-center shrink-0 ml-2 sm:ml-4 transition-colors text-xs font-bold">
                    +
                  </span>
                </summary>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/faq"
              className="text-xs font-bold text-[#1787b2] hover:text-[#0a2540] inline-flex items-center gap-1 transition-colors"
            >
              <span>View full technical FAQ library</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 9: FINAL CTA --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0a2540] to-[#071a2d] text-white w-full">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#6fbdd7] bg-[#6fbdd7]/10 px-3 py-1 rounded-full border border-[#6fbdd7]/20 mb-3 sm:mb-4 inline-block">
            Start Your Exhibition or Event Brief
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Presence in Egypt?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Contact our engineering and production team today for a comprehensive, itemized quotation on modular booth systems, turnkey event management, or conference staging.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1787b2] text-white hover:bg-[#6fbdd7] hover:text-[#0a2540] rounded-xl font-semibold text-xs sm:text-base transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Request a Quote <ArrowRight size={17} />
            </Link>
            <a
              href="tel:+201110999646"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold text-xs sm:text-base transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={17} /> +20 111 099 9646
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
