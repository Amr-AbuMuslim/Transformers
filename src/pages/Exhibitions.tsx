"use client";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Boxes,
  Layers,
  Sparkles,
  ShieldCheck,
  Clock,
  LayoutGrid,
  Building2,
  Hammer,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { PRODUCTS } from "@/data/products";

export default function Exhibitions() {
  const exhibitionProjects = PROJECTS.filter((p) => p.pillar === "exhibitions");
  const modularBooths = PRODUCTS.filter((p) => p.category === "transformers_system").slice(0, 6);

  const breadcrumbs = [{ label: "Exhibitions" }];

  const exhibitionsSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Exhibition Stand Design, Build & Modular Booth Rental Egypt",
    provider: {
      "@type": "Organization",
      name: "Transformers for Events Management and Display Systems",
      url: "https://transformers-me.com",
    },
    serviceType: "Exhibition Services",
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    description:
      "Comprehensive exhibition solutions in Egypt: single modular booths (Codes A-Q), custom full exhibition stands, and official Transformers modular aluminum display systems.",
  };

  return (
    <>
      <SEOHead
        title="Exhibition Booth Rental & Custom Stand Design Egypt | Transformers"
        description="Single modular booth rentals (Codes A-Q) and full custom exhibition stand design & build in Egypt. Official distributor of Taiwan Transformers aluminum modular display system."
        canonicalPath="/exhibitions"
        structuredData={exhibitionsSchema}
      />

      <Navbar />

      <PageHeader
        title="Exhibition Booths & Custom Stands"
        subtitle="Precision modular booth rentals, custom exhibition stand design, and turnkey build services across Egypt's premier convention centers."
        image="/modern-aluminum-modular-display-booth-exhibition.jpg"
        breadcrumbs={breadcrumbs}
        badge="Business Pillar 01"
      />

      {/* --- INTRO / OVERVIEW --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 inline-block">
            Specialized Exhibition Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
            Engineered for High-Impact Trade Show Presence
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            At Transformers, we treat exhibition architecture as a dedicated science. Whether you require a rapid, cost-effective single modular booth for a standard shell scheme plot or a commanding multi-zone custom stand for an island footprint, our local Cairo team delivers certified structural safety, crisp branding, and rapid on-site assembly.
          </p>
        </div>
      </section>

      {/* --- SUBSECTION 1: SINGLE EXHIBITION BOOTHS --- */}
      <section id="single-booths" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 inline-block">
                01. Compact & Modular
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
                Single Exhibition Booths
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                Designed specifically for individual exhibitors, SME brands, and international companies seeking an upscale presence within standard exhibition plots (9 m² to 27 m²). Single booths provide clean spatial division, pre-engineered mounting for spotlights, and branded reception podiums.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">U-Shape Booth Configurations (Codes A, B, C, D, E)</h4>
                    <p className="text-xs text-slate-600">Three-sided enclosed plots offering focused client discussions and maximum graphic branding perimeter.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">L-Shape Corner Configurations (Code F)</h4>
                    <p className="text-xs text-slate-600">Open two-aisle corner footprints that maximize visitor ingress and line-of-sight from multiple hall walkways.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Turnkey Inclusions</h4>
                    <p className="text-xs text-slate-600">Every single booth package includes reception podium, wooden header sign (70×30 cm), and 3 dedicated spotlights per 9 m².</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/rental-products"
                  className="px-6 py-3 bg-[#0a2540] hover:bg-[#1787b2] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  View Single Booth Models (A–Q)
                </Link>
                <Link
                  to="/contact?service=Single+Exhibition+Booths"
                  className="px-6 py-3 border border-slate-300 hover:bg-white text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                >
                  Request Single Booth Quote
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-white border border-slate-200">
                <img
                  src="/A.png"
                  alt="U Shape Booth Code A"
                  loading="lazy"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-white border border-slate-200">
                <img
                  src="/F.png"
                  alt="L Shape Booth Code F"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-white border border-slate-200">
                <img
                  src="/Transformers_Assets/02_Exhibition_Booths/CodeB_Elegant_UShape_Live.jpg"
                  alt="Live single booth setup in Cairo"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-white border border-slate-200">
                <img
                  src="/Transformers_Assets/09_Past_Events/Limitless_Naturals_Booth.jpg"
                  alt="Limitless Naturals single exhibition booth"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUBSECTION 2: FULL EXHIBITION STANDS --- */}
      <section id="full-stands" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/09_Past_Events/MANNOR_Booth.jpg"
                  alt="MANNOR full custom exhibition stand build"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/12_Trade_Shows/MOG_Exhibition_Large_Setup.jpg"
                  alt="MOG large scale exhibition stand"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-2 rounded-2xl overflow-hidden shadow-md aspect-[16/9] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/06_Event_Lighting/ARERA_Expo.jpg"
                  alt="ARERA Expo custom exhibition lighting and stand"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 inline-block">
                02. Flagship Spaces
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
                Full Exhibition Stands & Pavilions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                For major corporate exhibitors demanding high-footprint architectural presence (36 m² to 200 m²+) at the Egypt International Exhibition Center (EIEC) or Cairo International Convention Centre (CICC). Full stands combine structural aluminum trusses, custom carpentry accents, private VIP meeting lounges, product showcases, and suspended aerial branding.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#1787b2] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Island & Peninsula Floorplans</h4>
                    <p className="text-xs text-slate-600">360-degree open visibility designed for high-traffic pedestrian circulation and multi-zone product discovery.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#1787b2] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Elevated Towers & Overhead Rings (Codes G, H, J)</h4>
                    <p className="text-xs text-slate-600">Vertical truss towers up to 4.2 meters and suspended circular rings that establish immediate hall skyline dominance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#1787b2] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Dedicated Functional Zones</h4>
                    <p className="text-xs text-slate-600">Integration of lockable storage rooms, private deal-making lounges, hospitality refreshment bars, and interactive LED video walls.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact?service=Full+Exhibition+Stands"
                  className="px-6 py-3 bg-[#1787b2] hover:bg-[#0a2540] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  Request Full Stand Consultation
                </Link>
                <Link
                  to="/projects"
                  className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                >
                  View Completed Full Stands
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUBSECTION 3: TRANSFORMERS MODULAR SYSTEM --- */}
      <section id="modular-system" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Patented Engineering"
            title="Transformers Modular Display System"
            subtitle="The sustainable, cost-effective alternative to single-use wooden fabrication in Egypt."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">3–4 Hour Rapid Assembly</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-engineered connections click into place without welding or carpentry dust. Reduces on-site venue labor costs and overtime penalty fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">50+ Reusable Cycles</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Precision Taiwanese manufacturing ensures high structural integrity across dozens of exhibitions. Simply replace graphic banners between shows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Boxes size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">Modular Reconfigurability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A single 6×3 m inventory can be divided into two 3×3 m booths for concurrent events, or expanded with add-on towers and rings.
              </p>
            </div>
          </div>

          <div className="bg-[#0a2540] text-white rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-wider font-bold text-[#6fbdd7] mb-2 block">
                Exclusive Distribution in Egypt
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                Deep Dive: Technical Specifications & Dimensions
              </h3>
              <p className="text-sm text-slate-300">
                Explore load ratings, foldable mechanics, graphic banner attachment systems, and catalog downloads for the Transformers Modular Display System.
              </p>
            </div>

            <Link
              to="/transformers-display-system"
              className="px-6 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-sm rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              Explore Transformers System <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SUBSECTION 4: EXHIBITION DESIGN & BUILD --- */}
      <section id="design-build" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Turnkey Capability"
            title="Exhibition Design and Build"
            subtitle="End-to-end execution from initial concept rendering to final handover."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#1787b2] text-white flex items-center justify-center mb-3 text-sm font-bold">
                1
              </div>
              <h4 className="font-serif font-bold text-base text-[#0a2540] mb-2">3D Concept Layout</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Photorealistic 3D renders matching your brand guidelines, plot orientation, and visitor flow dynamics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#1787b2] text-white flex items-center justify-center mb-3 text-sm font-bold">
                2
              </div>
              <h4 className="font-serif font-bold text-base text-[#0a2540] mb-2">Technical Approval</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed structural plans, electrical schematics, and weight-load calculations prepared for venue clearance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#1787b2] text-white flex items-center justify-center mb-3 text-sm font-bold">
                3
              </div>
              <h4 className="font-serif font-bold text-base text-[#0a2540] mb-2">Printing & Logistics</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-definition vinyl and fabric graphics printed locally in Cairo, paired with verified hardware pre-assembly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#1787b2] text-white flex items-center justify-center mb-3 text-sm font-bold">
                4
              </div>
              <h4 className="font-serif font-bold text-base text-[#0a2540] mb-2">On-Site Handover</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rapid erection by our trained crew, on-site technical standby throughout the expo, and prompt dismantling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUBSECTION 5: EXHIBITION PROJECTS PORTFOLIO --- */}
      <section id="exhibition-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 inline-block">
                Proof of Delivery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540]">
                Exhibition Projects & Case Studies
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Recent single booth and full stand executions delivered for healthcare, industrial, and consumer brands in Cairo.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1787b2] hover:text-[#0a2540] transition-colors self-start md:self-auto"
            >
              <span>View All Company Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exhibitionProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-16 px-4 bg-[#071a2d] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Planning an Upcoming Exhibition in Egypt?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
            Discuss your booth footprint with our technical exhibition specialists and receive an itemized proposal with 3D layouts within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?service=Exhibition+Design+and+Build"
              className="px-8 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-sm rounded-xl transition-all shadow-md"
            >
              Request Exhibition Quote
            </Link>
            <Link
              to="/rental-products"
              className="px-8 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold text-sm rounded-xl transition-colors"
            >
              Explore Rental Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
