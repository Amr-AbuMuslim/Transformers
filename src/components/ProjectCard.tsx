import { useState } from "react";
import { MapPin, Layers, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  const pillarColor = {
    exhibitions: "bg-blue-50 text-blue-700 border-blue-200",
    events: "bg-emerald-50 text-emerald-700 border-emerald-200",
    conferences: "bg-purple-50 text-purple-700 border-purple-200",
  }[project.pillar];

  return (
    <>
      <article className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
        {/* Project Image */}
        <div
          onClick={() => setModalOpen(true)}
          className="relative aspect-[16/10] bg-slate-100 overflow-hidden cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-wrap gap-1.5">
            <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border shadow-xs backdrop-blur-xs ${pillarColor}`}>
              {project.pillarLabel}
            </span>
          </div>

          {project.location && (
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 flex items-center gap-1 text-[11px] sm:text-xs text-white/90">
              <MapPin size={11} className="text-[#6fbdd7] shrink-0" />
              <span className="line-clamp-1">{project.location}</span>
            </div>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full border border-white/20">
              {images.length} Photos
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <p className="text-[10px] sm:text-xs font-semibold text-[#1787b2] uppercase tracking-wider mb-1">
            {project.category}
          </p>

          <h3
            onClick={() => setModalOpen(true)}
            className="font-serif text-base sm:text-lg font-bold text-[#0a2540] group-hover:text-[#1787b2] transition-colors mb-2 cursor-pointer leading-snug"
          >
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 mb-3 leading-relaxed">
            {project.description}
          </p>

          {/* Display System Tag */}
          {project.displaySystemUsed && (
            <div className="mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
              <Layers size={12} className="text-[#1787b2] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{project.displaySystemUsed}</span>
            </div>
          )}

          {/* Services Tag Pill */}
          <div className="flex flex-wrap gap-1.5 mb-4 flex-grow">
            {project.services.slice(0, 3).map((service, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-[#1787b2] hover:text-[#0a2540] transition-colors flex items-center gap-1"
            >
              Case Study <ArrowRight size={12} />
            </button>
            <Link
              to={`/contact?service=${encodeURIComponent(project.pillarLabel)}&projectRef=${encodeURIComponent(project.title)}`}
              className="text-[11px] sm:text-xs font-semibold px-2.5 py-1.5 bg-slate-100 hover:bg-[#0a2540] hover:text-white rounded-lg text-slate-700 transition-colors"
            >
              Enquire Similar
            </Link>
          </div>
        </div>
      </article>

      {/* Project Lightbox Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {/* Gallery Slider */}
            <div className="relative aspect-[16/9] bg-black">
              <img
                src={images[activeSlide]}
                alt={`${project.title} - photo ${activeSlide + 1}`}
                className="w-full h-full object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev + 1) % images.length)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[11px] px-2.5 py-0.5 rounded-full">
                    {activeSlide + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 md:p-8">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border ${pillarColor}`}>
                  {project.pillarLabel}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  • {project.category}
                </span>
                {project.location && (
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    • <MapPin size={11} /> {project.location}
                  </span>
                )}
              </div>

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2540] mb-3">
                {project.title}
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-5">
                {project.description}
              </p>

              {project.displaySystemUsed && (
                <div className="mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Display System & Infrastructure:
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#0a2540]">
                    {project.displaySystemUsed}
                  </p>
                </div>
              )}

              <div className="mb-6">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Delivered Production Scope:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 rounded-lg text-[11px] sm:text-xs font-medium text-slate-700"
                    >
                      ✓ {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-4 border-t border-slate-100">
                <Link
                  to={`/contact?service=${encodeURIComponent(project.pillarLabel)}&projectRef=${encodeURIComponent(project.title)}`}
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-3 px-5 bg-[#0a2540] hover:bg-[#1787b2] text-white text-center rounded-xl font-semibold text-xs sm:text-sm transition-colors"
                >
                  Request a Quote for a Similar Project
                </Link>
                <button
                  onClick={() => setModalOpen(false)}
                  className="py-3 px-5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-xs sm:text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
