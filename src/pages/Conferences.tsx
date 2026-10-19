"use client";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Monitor,
  Mic,
  Lightbulb,
  Layers,
  CheckCircle2,
  Phone,
  FileText,
  Users,
  Presentation,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function Conferences() {
  const conferenceProjects = PROJECTS.filter((p) => p.pillar === "conferences");

  const breadcrumbs = [{ label: "Conferences" }];

  const conferenceFaqs = [
    {
      q: "What pixel pitch LED screen do you recommend for indoor conference stages?",
      a: "For indoor conferences where the first row of attendees sits within 3 to 5 meters of the stage, we deploy P2.6 or P2.9 high-definition LED displays. This ensures fine text, bullet points, and data charts remain razor-sharp without visible pixelation or moiré interference during photography.",
    },
    {
      q: "Can the mainstage LED screen handle multi-window presentations and live video?",
      a: "Yes. Our conference video systems utilize multi-window digital video switchers supporting picture-in-picture (PiP), side-by-side PowerPoint slides and live camera feeds, speaker bios, and sponsor branding loops with zero latency.",
    },
    {
      q: "How do you ensure clear audio across deep conference halls?",
      a: "We deploy distributed line array speaker systems paired with delay fill units and digital DSP management. This guarantees uniform acoustic pressure and high speech intelligibility from the front row VIP seats to the furthest corner of the hall.",
    },
    {
      q: "Do you supply registration areas and foyer sponsor booths for conferences?",
      a: "Yes. In addition to plenary hall staging and AV, we supply modular registration counters, freestanding digital signage totems, and uniform sponsor exhibition booths in the conference foyer.",
    },
  ];

  const conferenceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Conference Stage, AV & Display Solutions Egypt",
    provider: {
      "@type": "Organization",
      name: "Transformers for Events Management and Display Systems",
      url: "https://transformers-me.com",
    },
    serviceType: "Conference Production and Display Systems",
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    description:
      "Turnkey conference display solutions in Egypt: Plenary keynote stages, panoramic LED video backdrops, speech reinforcement audio, and foyer sponsor booths.",
  };

  return (
    <>
      <SEOHead
        title="Conference Display Solutions & Stage AV Egypt | Transformers"
        description="Turnkey conference production in Egypt: Keynote stages, P2.6 LED video walls, speaker audio reinforcement, and foyer sponsor display booths in Cairo."
        canonicalPath="/conferences"
        structuredData={conferenceSchema}
      />

      <Navbar />

      <PageHeader
        title="Conference Display & Stage Solutions"
        subtitle="Turnkey mainstage engineering, panoramic LED backdrops, acoustic speech clarity, and branded conference environments across Egypt."
        image="/Transformers_Assets/04_LED_Screens/LED_Conference_Setup.jpg"
        breadcrumbs={breadcrumbs}
        badge="Business Pillar 03"
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] bg-[#1787b2]/10 px-3 py-1 rounded-full border border-[#1787b2]/20 mb-3 inline-block">
            Professional Summit & Plenary Infrastructure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
            Where Thought Leadership Meets Flawless Execution
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Conferences demand total focus on speaker credibility and attendee engagement. A shaky stage platform, unreadable presentation slides, or muddy audio immediately compromises months of summit planning. Transformers delivers rock-solid German stage decks, ultra-fine LED screens, and acoustic speech clarity tailored for Egypt's leading government, medical, and corporate congresses.
          </p>
        </div>
      </section>

      {/* --- CONFERENCE CORE SERVICES GRID --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Plenary Capabilities"
            title="Comprehensive Conference Solutions"
            subtitle="Engineered systems designed specifically for keynote speeches, panel debates, and executive summits."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1: Stages */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">Keynote Stages & Lecterns</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Heavy-duty German stage platforms (750 kg/m² certified) with non-bounce safety, matte or white plexiglass surfaces, branded presenter lecterns, and panel seating.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Telescopic height adjustment</li>
                <li>• Safety guardrails & non-slip stairs</li>
                <li>• Frosted/branded acrylic podiums</li>
              </ul>
            </div>

            {/* Service 2: LED Video Walls */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Monitor size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">Panoramic LED Backdrops</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ultra-fine P2.6 / P2.9 high-refresh LED screens for seamless multi-input presentations, live camera feeds (PiP), and sponsor recognition loops.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• High contrast anti-glare panels</li>
                <li>• 3840 Hz flicker-free broadcast</li>
                <li>• Dual redundant video processors</li>
              </ul>
            </div>

            {/* Service 3: Audio */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Mic size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">Speech Audio Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Acoustically tuned line arrays providing uniform speech coverage without harsh volume spikes, paired with multi-channel wireless microphone packages.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Wireless lavaliers & headworn mics</li>
                <li>• Audience Q&A catch-mics</li>
                <li>• Dedicated sound engineer on standby</li>
              </ul>
            </div>

            {/* Service 4: Foyer Environments */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1787b2]/10 text-[#1787b2] flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0a2540] mb-2">Foyer & Sponsor Hubs</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Modular registration desks, sponsor display booths, freestanding digital signage totems, and networking lounge cocktail tables.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Transformers modular sponsor booths</li>
                <li>• Digital agenda & wayfinding totems</li>
                <li>• Hydraulic cocktail tables & mini bars</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED CONFERENCE PROJECTS --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Case Studies"
            title="Delivered Conference Projects"
            subtitle="Proven execution across major national summits, scientific conventions, and leadership forums."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CONFERENCE FAQS --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            badge="Technical FAQs"
            title="Conference Planning Considerations"
            subtitle="Answers to common questions from event planners regarding conference staging and AV in Egypt."
          />

          <div className="space-y-4">
            {conferenceFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-2xl p-6 bg-white open:shadow-md transition-all duration-200"
              >
                <summary className="font-serif text-base sm:text-lg font-bold text-[#0a2540] cursor-pointer flex justify-between items-center list-none select-none">
                  <span>{faq.q}</span>
                  <span className="w-7 h-7 rounded-full bg-slate-100 group-open:bg-[#1787b2] group-open:text-white flex items-center justify-center shrink-0 ml-4 transition-colors text-xs font-bold">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-16 px-4 bg-[#071a2d] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Organizing a Conference or Summit in Egypt?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
            Ensure flawless speaker delivery, high-definition slide presentation, and zero technical hiccups. Contact our conference technical team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?service=Conferences"
              className="px-8 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-sm rounded-xl transition-all shadow-md"
            >
              Request Conference AV Quote
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
