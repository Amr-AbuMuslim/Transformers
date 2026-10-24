import { Link } from "react-router-dom";
import { RENTAL_LINKS, SERVICES } from "@/data/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071a2d] text-slate-300 border-t border-slate-800 w-full">
      {/* Pre-footer Call to Action Banner */}
      <div className="bg-[#0a2540] border-b border-slate-800 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#6fbdd7] bg-[#6fbdd7]/10 px-3 py-1 rounded-full border border-[#6fbdd7]/20 inline-block mb-2">
              Ready for your next expo or event in Egypt?
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-1 mb-2">
              Discuss Your Exhibition, Event, or Conference Requirements
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Get an itemized quotation for modular booth rental, custom stand build, LED video walls, sound systems, or turnkey event management in Cairo and across Egypt.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-[#1787b2] text-white hover:bg-[#6fbdd7] hover:text-[#0a2540] font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-center"
            >
              Request a Quote <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+201110999646"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors border border-white/15 flex items-center justify-center gap-2 text-center"
            >
              <Phone size={15} /> +20 111 099 9646
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10 sm:mb-12">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/5 rounded-xl p-1.5 flex items-center justify-center border border-white/10">
                <img
                  src="/LOGO (1) (2).png"
                  alt="Transformers for Events Management and Display Systems"
                  className="w-full h-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg sm:text-xl text-white block leading-tight">
                  TRANSFORMERS
                </span>
                <span className="text-[10px] sm:text-xs text-[#6fbdd7] font-medium tracking-wide">
                  Events Management & Display Systems
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Built on the heritage of Orange Solutions (established in 1997), Transformers is the sole distributor in Egypt of the modular aluminum display system manufactured in Taiwan. We deliver complete exhibition, event, and conference solutions with full local equipment inventory and technical crews.
            </p>

            <div className="space-y-1.5 pt-1 text-[11px] sm:text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                <span>Sole Taiwan Transformers Modular System Distributor in Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Turnkey Rental and Purchase Catalog Available</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4 border-b border-slate-800 pb-2">
              Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="hover:text-[#6fbdd7] transition-colors flex items-center gap-1.5 font-medium text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1787b2]"></span>
                    {service.label}
                  </Link>
                  <ul className="mt-1.5 space-y-1 pl-4">
                    {service.children.map((child) => (
                      <li key={child.href}>
                        <Link to={child.href} className="text-[11px] text-slate-400 hover:text-[#6fbdd7] transition-colors">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4 border-b border-slate-800 pb-2">
              Rental Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {RENTAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-[#6fbdd7] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="font-serif text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4 border-b border-slate-800 pb-2">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                  Sales & Quotations:
                </span>
                <div className="space-y-0.5">
                  <a
                    href="tel:+201110999646"
                    className="block hover:text-[#6fbdd7] transition-colors text-white font-medium"
                  >
                    +20 111 099 9646
                  </a>
                  <a
                    href="tel:+201110999647"
                    className="block hover:text-[#6fbdd7] transition-colors text-white font-medium"
                  >
                    +20 111 099 9647
                  </a>
                  <a
                    href="tel:+201110999648"
                    className="block hover:text-[#6fbdd7] transition-colors text-white font-medium"
                  >
                    +20 111 099 9648
                  </a>
                </div>
              </li>
              <li>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                  Email:
                </span>
                <a
                  href="mailto:sales@transformers-me.com"
                  className="hover:text-[#6fbdd7] transition-colors text-white"
                >
                  sales@transformers-me.com
                </a>
              </li>
              <li className="flex items-start gap-1.5 pt-1 text-[11px] text-slate-400">
                <MapPin size={13} className="text-[#1787b2] shrink-0 mt-0.5" />
                <span>Heliopolis, Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Social & Legal Row */}
        <div className="border-t border-slate-800/80 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Transformers for Events Management and Display Systems. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/transformers_me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Transformers on Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#1787b2] hover:text-white transition-all flex items-center justify-center text-slate-300"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://eg.linkedin.com/company/transformersdisplaysystem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Transformers on LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#1787b2] hover:text-white transition-all flex items-center justify-center text-slate-300"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://www.facebook.com/transformersdisplaysystem/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Transformers on Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#1787b2] hover:text-white transition-all flex items-center justify-center text-slate-300"
              >
                <Facebook size={14} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-slate-400">
              <Link to="/projects" className="hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link to="/insights" className="hover:text-white transition-colors">
                Insights
              </Link>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
