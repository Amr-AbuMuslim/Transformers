"use client";

import { useEffect, useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Layers,
  MapPin,
  ArrowRight,
  Filter,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, PROJECT_PILLARS, ProjectPillar } from "@/data/projects";
import { ContinueLinks } from "@/components/SectionNav";
import { QUOTE, quoteHref } from "@/data/navigation";

// Curated verified installation snapshots from the live exhibition archive
const ARCHIVE_SNAPSHOTS = [
  { id: 1, image: "/1.jpg", caption: "Modular exhibition booth assembly, Cairo" },
  { id: 2, image: "/2.jpg", caption: "Turnkey trade show stand build" },
  { id: 3, image: "/3.jpg", caption: "Exhibition lighting and display setup" },
  { id: 4, image: "/4.jpg", caption: "U-shape branded exhibition space" },
  { id: 5, image: "/5.jpg", caption: "L-shape corner booth installation" },
  { id: 8, image: "/8.jpg", caption: "Trade fair modular aluminum framework" },
  { id: 10, image: "/10Edited.jpg", caption: "Transformers exhibition installation team" },
  { id: 25, image: "/25.jpg", caption: "Product showcase plinth and podium" },
  { id: 28, image: "/28.jpg", caption: "Multi-booth exhibition hall build" },
  { id: 31, image: "/31.jpg", caption: "High-finish exhibition stand perimeter" },
  { id: 32, image: "/32.jpg", caption: "Convention center exhibition layout" },
];

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPillar = (searchParams.get("pillar") as ProjectPillar | "all") || "all";

  const [selectedPillar, setSelectedPillar] = useState<string>(initialPillar);

  useEffect(() => {
    const pillar = searchParams.get("pillar");
    setSelectedPillar(pillar && PROJECT_PILLARS.some((item) => item.id === pillar) ? pillar : "all");
  }, [searchParams]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedPillar === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.pillar === selectedPillar);
  }, [selectedPillar]);

  const activePillar = PROJECT_PILLARS.find((pillar) => pillar.id === selectedPillar);
  const breadcrumbs =
    selectedPillar !== "all" && activePillar
      ? [
          { label: "Projects", href: "/projects" },
          { label: activePillar.label },
        ]
      : [{ label: "Projects" }];

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Transformers Completed Projects & Portfolio Egypt",
    description: "Verified case studies and project archive across Exhibitions, Events, and Conferences in Cairo and across Egypt.",
    url: "https://transformers-me.com/projects",
  };

  return (
    <>
      <SEOHead
        title="Completed Projects & Portfolio | Exhibitions, Events, Conferences Egypt"
        description="Explore verified case studies and photo galleries of completed exhibitions, international sports tournaments, pharmaceutical galas, and conferences in Egypt."
        canonicalPath="/projects"
        structuredData={projectsSchema}
      />

      <Navbar />

      <PageHeader
        title="Delivered Projects & Portfolio"
        subtitle="A verified archive of completed exhibition stands, international sports tournaments, commercial galas, and conferences executed across Egypt."
        image="/1.jpg"
        breadcrumbs={breadcrumbs}
        badge="Proven Track Record in Egypt"
      />

      {/* --- PILLAR FILTER NAVIGATION --- */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-500 mr-1 sm:mr-2 flex items-center gap-1 shrink-0">
              <Filter size={13} /> Service:
            </span>
            <div className="flex gap-2">
              {PROJECT_PILLARS.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => {
                    setSelectedPillar(pillar.id);
                    setSearchParams(pillar.id === "all" ? {} : { pillar: pillar.id });
                  }}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    selectedPillar === pillar.id
                      ? "bg-[#0a2540] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {pillar.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
            <span>
              Showing <strong>{filteredProjects.length}</strong> featured case studies
            </span>
            {selectedPillar !== "all" && (
              <Link
                to={selectedPillar === "exhibitions" ? "/exhibitions" : selectedPillar === "events" ? "/events" : "/conferences"}
                className="font-semibold text-[#1787b2] hover:underline"
              >
                Explore {activePillar?.label}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* --- FEATURED CASE STUDIES GRID --- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- ARCHIVE PHOTO GALLERY (REAL ON-SITE SNAPS) --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="On-Site Evidence"
            title="Installation & Build Archive"
            subtitle="Candid photography of our installation teams, modular truss assembly, and live trade show stands in Cairo."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {ARCHIVE_SNAPSHOTS.map((snap) => (
              <div
                key={snap.id}
                onClick={() => setLightboxImage(snap.image)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-xs hover:shadow-lg transition-all"
              >
                <img
                  src={snap.image}
                  alt={snap.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                  <span className="text-[10px] text-white font-medium leading-tight line-clamp-2">
                    {snap.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL FOR ARCHIVE SNAPS --- */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] bg-black rounded-2xl overflow-hidden">
            <img
              src={lightboxImage}
              alt="Installation Archive Zoom"
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 text-white bg-black/60 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold hover:bg-black/80"
              aria-label="Close photo preview"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* --- BOTTOM CTA --- */}
      <section className="py-16 px-4 bg-[#0a2540] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Have a Specific Event or Exhibition Requirement?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-8 leading-relaxed">
            Our engineering team will assess your venue guidelines, floorplan, and branding requirements to deliver a customized proposal with 3D renderings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to={
                selectedPillar === "exhibitions"
                  ? quoteHref(QUOTE.fullStands)
                  : selectedPillar === "events"
                    ? quoteHref(QUOTE.events)
                    : selectedPillar === "conferences"
                      ? quoteHref(QUOTE.conferences)
                      : "/contact"
              }
              className="px-8 py-3.5 bg-[#1787b2] hover:bg-[#6fbdd7] hover:text-[#0a2540] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md"
            >
              Request a Project Quotation
            </Link>
            <Link
              to="/rental-products"
              className="px-8 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Browse Equipment Catalog
            </Link>
          </div>
        </div>
      </section>

      <ContinueLinks
        links={[
          { href: "/exhibitions", label: "Exhibitions" },
          { href: "/events", label: "Events" },
          { href: "/conferences", label: "Conferences" },
          { href: "/rental-products", label: "Rental products" },
        ]}
      />

      <Footer />
    </>
  );
}
