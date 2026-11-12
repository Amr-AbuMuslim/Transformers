import { Link } from "react-router-dom";
import { SERVICES } from "@/data/navigation";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

const COMPANY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-[#071a2d] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-1.5">
                <img
                  src="/LOGO (1) (2).png"
                  alt="Transformers"
                  className="h-full w-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold leading-tight text-white">TRANSFORMERS</span>
                <span className="text-xs font-medium tracking-wide text-[#6fbdd7]">Events Management & Display Systems</span>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Integrated solutions for exhibitions, events, sports tournaments, and conferences across Egypt.
            </p>
          </div>

          <div>
            <h2 className="mb-4 border-b border-slate-800 pb-2 font-serif text-base font-semibold text-white">Company</h2>
            <ul className="space-y-2 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition-colors hover:text-[#6fbdd7]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 border-b border-slate-800 pb-2 font-serif text-base font-semibold text-white">Services</h2>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="transition-colors hover:text-[#6fbdd7]">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 border-b border-slate-800 pb-2 font-serif text-base font-semibold text-white">Contact</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+201110999646" className="inline-flex items-center gap-2 text-white transition-colors hover:text-[#6fbdd7]">
                  <Phone size={14} className="text-[#1787b2]" /> +20 111 099 9646
                </a>
              </li>
              <li>
                <a href="mailto:sales@transformers-me.com" className="inline-flex items-center gap-2 text-white transition-colors hover:text-[#6fbdd7]">
                  <Mail size={14} className="text-[#1787b2]" /> sales@transformers-me.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#1787b2]" />
                <span>Heliopolis, Cairo, Egypt</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/transformers_me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Transformers on Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all hover:bg-[#1787b2] hover:text-white"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://eg.linkedin.com/company/transformersdisplaysystem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Transformers on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all hover:bg-[#1787b2] hover:text-white"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://www.facebook.com/transformersdisplaysystem/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Transformers on Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all hover:bg-[#1787b2] hover:text-white"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-400 sm:text-left">
          <p>&copy; {new Date().getFullYear()} Transformers for Events Management and Display Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
