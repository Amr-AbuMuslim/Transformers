"use client";

import { Link } from "react-router-dom";
import {
  Users,
  Leaf,
  Award,
  Zap,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  Phone,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContinueLinks } from "@/components/SectionNav";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";

export default function About() {
  const values = [
    {
      title: "Client-Centered Partnership",
      description:
        "We prioritize understanding our clients' exact exhibition, event, or conference objectives, delivering engineering solutions that exceed commercial expectations.",
      icon: Users,
    },
    {
      title: "Environmental Responsibility",
      description:
        "Pioneering circular economy practices in Egypt. Our reusable aluminum modular systems eliminate metric tons of single-use timber landfill waste.",
      icon: Leaf,
    },
    {
      title: "Engineering Professionalism",
      description:
        "Every interaction—from initial 3D concept layout and electrical load calculation to on-site assembly and post-event teardown—reflects verified safety standards.",
      icon: Award,
    },
    {
      title: "Practical Innovation",
      description:
        "Continuous advancement in modular exhibition geometry, high-resolution LED presentation screens, and synchronized event production.",
      icon: Zap,
    },
  ];

  const breadcrumbs = [{ label: "About Us" }];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Transformers for Events Management and Display Systems",
    description:
      "Built on the heritage of Orange Solutions (Est. 1997), Transformers is the sole distributor in Egypt of the modular aluminum display system manufactured in Taiwan.",
    url: "https://transformers-me.com/about",
  };

  return (
    <>
      <SEOHead
        title="About Us | Transformers for Events Management and Display Systems"
        description="Built on the heritage of Orange Solutions (established in 1997), Transformers is the sole Taiwan modular display system distributor in Egypt. Exhibitions, Events, Conferences."
        canonicalPath="/about"
        structuredData={aboutSchema}
      />

      <Navbar />

      <PageHeader
        title="About Transformers"
        subtitle="Built on 28+ years of industry heritage in Egypt, delivering specialized excellence across Exhibitions, Events Management, and Conferences."
        image="/10Edited.jpg"
        breadcrumbs={breadcrumbs}
        badge="Heritage Since 1997"
      />

      {/* --- HERITAGE SECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 inline-block">
                Our Proven Foundation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] mb-6 leading-tight">
                Our Heritage & Sole Taiwan Distribution
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mb-4 leading-relaxed font-medium">
                Built on the heritage of Orange Solutions, established in 1997, Transformers brings decades of hands-on event production and exhibition engineering to the Egyptian market.
              </p>
              <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
                We are proud to serve as the <strong>exclusive sole distributor in Egypt of the Transformers modular display system</strong>, precision-engineered and manufactured in Taiwan. This breakthrough system replaces heavy, wasteful timber carpentry with aircraft-grade foldable aluminum frameworks that assemble in 3 to 4 hours.
              </p>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Operating from Cairo, we provide complete turnkey services across three services: <strong>Exhibitions</strong>, <strong>Events Management</strong>, and <strong>Conferences</strong>, supported by an in-house inventory of LED video walls, sound systems, stage decks, and exhibition furniture.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#1787b2]" />
                  <span>Sole Taiwan Distributor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#1787b2]" />
                  <span>Est. 1997 (Orange Solutions)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-[#1787b2]" />
                  <span>3 Core Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#1787b2]" />
                  <span>Based in Cairo, Egypt</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/heritage.jpg"
                  alt="Transformers & Orange Solutions Leadership and Team"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:left-6 bg-[#0a2540] text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-white/10 max-w-xs">
                <p className="text-xs text-slate-300 font-medium">Verified Operational Footprint</p>
                <p className="text-base font-bold font-serif mt-1">Heliopolis, Cairo, Egypt</p>
                <p className="text-[11px] text-[#6fbdd7] mt-0.5">Serving Cairo, Alexandria, & All Egyptian Venues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Strategic Direction"
            title="Our Vision & Mission"
            subtitle="Guiding principles that steer our operations across every live B2B environment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-4 inline-block">
                Long-Term Outlook
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0a2540] mb-4">Our Vision</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To be the undisputed benchmark brand in the Middle East and Africa for modular exhibition systems and turnkey event production, offering elegant, practical, and zero-waste solutions that elevate client brand visibility and drive measurable commercial success.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-4 inline-block">
                Daily Operational Focus
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0a2540] mb-4">Our Mission</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To provide flexible, elegant, and cost-effective display systems and event production that eliminate logistical friction, reduce setup times from days to hours, and empower corporate brands to create memorable, professional audience experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Operating Values"
            title="Our Core Values"
            subtitle="The fundamental commitments that guide our client relationships and technical execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- THREE PILLARS OVERVIEW IN ABOUT --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Services"
            title="How We Serve Egyptian & Regional Clients"
            subtitle="Specialized operational units delivering synchronized event excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-serif font-bold text-xl text-[#0a2540] mb-2">1. Exhibitions</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Single modular booths (Codes A–Q) and large custom exhibition stands. Full design and build, graphic banner printing, and turnkey setup across all Egyptian exhibition halls.
              </p>
              <Link to="/exhibitions" className="text-xs font-semibold text-[#1787b2] hover:underline flex items-center gap-1">
                Explore Exhibitions <ArrowRight size={12} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-serif font-bold text-xl text-[#0a2540] mb-2">2. Events</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Commercial brand launches, pharmaceutical symposia, and major international sports championships. In-house staging, LED screens, sound systems, and lighting rigs.
              </p>
              <Link to="/events" className="text-xs font-semibold text-[#1787b2] hover:underline flex items-center gap-1">
                Explore Events <ArrowRight size={12} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-serif font-bold text-xl text-[#0a2540] mb-2">3. Conferences</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Plenary keynote stages, panoramic P2.6 LED video backdrops, acoustic speech audio reinforcement, and foyer sponsor exhibition booths.
              </p>
              <Link to="/conferences" className="text-xs font-semibold text-[#1787b2] hover:underline flex items-center gap-1">
                Explore Conferences <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-16 px-4 bg-[#0a2540] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Partner With Egypt’s Display & Event Specialists
          </h3>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed">
            Reach out to our Cairo engineering and sales team for verified advice, technical specs, or quotation estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-sm rounded-xl transition-all shadow-md"
            >
              Request a Quote
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

      <ContinueLinks
        links={[
          { href: "/exhibitions", label: "Exhibitions" },
          { href: "/events", label: "Events" },
          { href: "/conferences", label: "Conferences" },
          { href: "/projects", label: "Projects" },
        ]}
      />

      <Footer />
    </>
  );
}
