"use client";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Trophy,
  Briefcase,
  Pill,
  Monitor,
  AudioLines,
  Lightbulb,
  Layers,
  CheckCircle2,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function Events() {
  const sportsProjects = PROJECTS.filter(
    (p) => p.pillar === "events" && p.category.toLowerCase().includes("championship") || p.category.toLowerCase().includes("tournament") || p.category.toLowerCase().includes("sports")
  );
  const commercialProjects = PROJECTS.filter(
    (p) => p.pillar === "events" && (p.category.toLowerCase().includes("launch") || p.category.toLowerCase().includes("gala") || p.category.toLowerCase().includes("activation")) && !p.id.includes("winzoxib")
  );
  const pharmaProjects = PROJECTS.filter(
    (p) => p.pillar === "events" && (p.id.includes("winzoxib") || p.category.toLowerCase().includes("pharma") || p.category.toLowerCase().includes("medical"))
  );

  const breadcrumbs = [{ label: "Events Management" }];

  const eventsSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Event Management, Production & Staging Egypt",
    provider: {
      "@type": "Organization",
      name: "Transformers for Events Management and Display Systems",
      url: "https://transformers-me.com",
    },
    serviceType: "Event Management and Production",
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    description:
      "Turnkey event management and production across Egypt: Commercial brand launches, pharmaceutical symposia, and international sports tournaments. In-house LED screens, sound systems, staging, and lighting.",
  };

  return (
    <>
      <SEOHead
        title="Event Management & Production Egypt | Commercial, Pharma & Sports"
        description="Turnkey event management, AV staging, LED screens, and production in Egypt for commercial launches, pharmaceutical symposia, and international sports tournaments."
        canonicalPath="/events"
        structuredData={eventsSchema}
      />

      <Navbar />

      <PageHeader
        title="Event Management & Production"
        subtitle="Turnkey production for high-stakes Commercial Events, Pharmaceutical Symposia, and International Sports Tournaments across Egypt."
        image="/Transformers_Assets/01_Hero/hero_background.jpg"
        breadcrumbs={breadcrumbs}
        badge="Business Pillar 02"
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 inline-block">
            One Turnkey Partner. Infinite Possibilities.
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
            Live Production Without Friction
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Events require an entirely different rhythm than static exhibitions. From timing-critical sports broadcasts to high-compliance pharmaceutical summits and glamorous brand launches, Transformers provides synchronized production: in-house LED video walls, precision sound arrays, certified staging, and atmospheric lighting managed by experienced Cairo technical crews.
          </p>
        </div>
      </section>

      {/* --- EVENT CATEGORY 1: COMMERCIAL EVENTS --- */}
      <section id="commercial-events" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#1787b2]">
                <Briefcase size={18} />
                <span className="text-xs uppercase tracking-wider font-bold">Category 01</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
                Commercial Brand Events & Launches
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                Whether launching a retail flagship, unveiling a new product line, or celebrating a major corporate milestone, commercial events demand dramatic impact and flawless media presence. We design immersive brand environments, reveal stages, and dynamic lighting choreography that capture audience attention.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Product & Retail Store Launches</h4>
                    <p className="text-xs text-slate-600">Grand opening portals, red carpet entryways, glass display plinths, and high-impact audio (e.g. BDS Store Launch).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Milestone Celebrations & Galas</h4>
                    <p className="text-xs text-slate-600">High-gloss plexiglass runways, custom video backdrops, and synchronized intelligent lighting (e.g. SHIRA 20-Year Anniversary, PROXIMA Gala).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Outdoor & Corporate Brand Activations</h4>
                    <p className="text-xs text-slate-600">Weather-tested aluminum truss structures, outdoor LED totems, and branded lounge furniture.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact?service=Commercial+Events"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a2540] hover:bg-[#1787b2] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
              >
                <span>Plan a Commercial Event</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/10_Sports_Events/BDS_Store_Launch.jpg"
                  alt="BDS Store Launch Staging"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/06_Event_Lighting/SHIRA_20Years_Anniversary.jpg"
                  alt="SHIRA 20 Years Gala lighting"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/06_Event_Lighting/PROXIMA_Gala.jpg"
                  alt="PROXIMA Corporate Gala"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/09_Past_Events/Product_Launches.jpg"
                  alt="Corporate Product Launch Stage"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EVENT CATEGORY 2: PHARMACEUTICAL EVENTS --- */}
      <section id="pharma-events" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 rounded-2xl overflow-hidden shadow-md aspect-[16/9] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/10_Sports_Events/Winzoxib_Gala_Dinner.jpg"
                  alt="Winzoxib Pharmaceutical Scientific Gala Dinner"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/09_Past_Events/Medical_Conferences.jpg"
                  alt="Medical Industry Scientific Presentation"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/09_Past_Events/Healthcare_Expos.jpg"
                  alt="Healthcare Industry Gathering"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-2 text-[#1787b2]">
                <Pill size={18} />
                <span className="text-xs uppercase tracking-wider font-bold">Category 02</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
                Pharmaceutical Symposia & Medical Events
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                Healthcare and pharmaceutical events require precision, strict adherence to technical timing, and pristine visual clarity for clinical data presentation. We balance professional scientific requirements with engaging dinner or ceremony environments.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#1787b2] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Clinical Data Clarity (P2.6 LED Screens)</h4>
                    <p className="text-xs text-slate-600">Ultra-sharp high-definition LED displays ensure that fine medical charts, graphs, and study data remain crystal-clear to all delegates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#1787b2] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Multi-Microphone Audio for Q&A Panels</h4>
                    <p className="text-xs text-slate-600">Feedback-free wireless boundary, lavalier, and handheld microphone packages with dedicated sound technicians.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#1787b2] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">Scientific Gala Dinners (e.g. Winzoxib)</h4>
                    <p className="text-xs text-slate-600">Smooth transition from rigorous daylight scientific presentations into an atmospheric evening celebration.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact?service=Pharmaceutical+Events"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1787b2] hover:bg-[#0a2540] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
              >
                <span>Plan a Pharma Event</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- EVENT CATEGORY 3: SPORTS & TOURNAMENTS --- */}
      <section id="sports-events" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#1787b2]">
                <Trophy size={18} />
                <span className="text-xs uppercase tracking-wider font-bold">Category 03</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
                Sports & Tournament Production
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                Large-scale sports tournaments demand certified structural resilience, wide-angle spectator visibility, and broadcast-ready lighting. Transformers has delivered the production staging and branding for major international championships in Egypt.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">CITI Para Swimming World Series Egypt 2024</h4>
                    <p className="text-xs text-slate-600">Full aquatics venue perimeter branding, medal ceremony podiums, VIP review areas, and timing display integration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">World Para Powerlifting World Cup</h4>
                    <p className="text-xs text-slate-600">Certified heavy-duty German stage platforms capable of handling extreme athlete and weight-load impacts under broadcast scrutiny.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0a2540]">CMAS Finswimming & Gymnastics World Events</h4>
                    <p className="text-xs text-slate-600">Poolside and arena truss gateways, press backdrop walls, and stadium-wide distributed acoustic audio.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact?service=Sports+and+Tournaments"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a2540] hover:bg-[#1787b2] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
              >
                <span>Plan a Sports Championship</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/10_Sports_Events/CITI_PARA_Swimming_Egypt_2024.jpg"
                  alt="CITI Para Swimming Egypt 2024"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/10_Sports_Events/World_Para_Powerlifting_1.jpg"
                  alt="World Para Powerlifting Competition Stage"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/10_Sports_Events/CMAS_Finswimming_2023_1.jpg"
                  alt="CMAS Finswimming Championships"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100 border border-slate-200">
                <img
                  src="/Transformers_Assets/10_Sports_Events/International_Gymnastics_Championship.jpg"
                  alt="International Gymnastics Championship"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- IN-HOUSE PRODUCTION CAPABILITIES --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Technical Backbone"
            title="Complete Event Production Ecosystem"
            subtitle="Owned equipment and technical teams deployed across Egypt."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Monitor size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">LED Screen Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                High-resolution P2.6 and P3.9 indoor and outdoor LED video walls, curved screens, and vertical totems with live video switching.
              </p>
              <Link to="/rental-products" className="text-xs font-semibold text-[#1787b2] flex items-center gap-1 hover:underline">
                Explore LED Inventory <ArrowRight size={12} />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <AudioLines size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">Pro Audio & PA</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Line array speaker arrays, digital mixing consoles, and multi-channel UHF wireless microphone systems with feedback management.
              </p>
              <Link to="/rental-products" className="text-xs font-semibold text-[#1787b2] flex items-center gap-1 hover:underline">
                Explore Sound Inventory <ArrowRight size={12} />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Lightbulb size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">Intelligent Lighting</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                DMX-controlled moving heads, stage wash battens, architectural truss illumination, and custom gobo brand projections.
              </p>
              <Link to="/rental-products" className="text-xs font-semibold text-[#1787b2] flex items-center gap-1 hover:underline">
                Explore Lighting Inventory <ArrowRight size={12} />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">Stages & Rigging</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Heavy-duty German stage platforms, high-gloss plexiglass runways, aluminum trusses, and certified safety guardrails.
              </p>
              <Link to="/rental-products" className="text-xs font-semibold text-[#1787b2] flex items-center gap-1 hover:underline">
                Explore Staging Inventory <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-16 px-4 bg-[#0a2540] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Planning a Major Event in Egypt?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
            Consolidate your staging, AV, lighting, and environmental branding with a single, dependable production partner in Cairo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?service=Event+Management+and+Production"
              className="px-8 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-sm rounded-xl transition-all shadow-md"
            >
              Request an Event Proposal
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
