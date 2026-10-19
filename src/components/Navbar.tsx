"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pillarsOpen, setPillarsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setPillarsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    {
      label: "Our Pillars",
      isDropdown: true,
      subItems: [
        { href: "/exhibitions", label: "Exhibitions", desc: "Single Booths, Full Stands & Modular Displays" },
        { href: "/events", label: "Events", desc: "Commercial, Pharma & Sports Tournaments" },
        { href: "/conferences", label: "Conferences", desc: "Stages, LED Video Walls & Technical Setups" },
      ],
    },
    { href: "/transformers-display-system", label: "Transformers System", shortLabel: "Transformers", highlight: true },
    { href: "/rental-products", label: "Rental Products", shortLabel: "Rentals" },
    { href: "/projects", label: "Projects" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About Us", shortLabel: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top Utility Bar (Tablet & Desktop) */}
      <div className="bg-[#071a2d] text-slate-300 text-[11px] lg:text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 lg:gap-6 shrink-0">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <MapPin size={12} className="text-[#1787b2]" /> Cairo, Egypt (Sole Taiwan Distributor)
            </span>
            <a
              href="tel:+201110999646"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={12} className="text-[#1787b2]" /> +20 111 099 9646
            </a>
            <a
              href="mailto:sales@transformers-me.com"
              className="hidden xl:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={12} className="text-[#1787b2]" /> sales@transformers-me.com
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-slate-400 hidden 2xl:inline">Exhibitions • Events • Conferences</span>
            <span className="hidden 2xl:inline-block w-1 h-1 rounded-full bg-[#1787b2]"></span>
            <span className="text-emerald-400 font-medium">Rental & Sale Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b border-slate-100 ${
          isScrolled ? "shadow-sm border-slate-200" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1787b2] rounded-lg shrink-0"
              aria-label="Transformers Home"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 xl:w-12 xl:h-12 flex items-center justify-center p-0.5 shrink-0">
                <img
                  src="/LOGO (1) (2).png"
                  alt="Transformers"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm sm:text-base xl:text-lg tracking-tight text-[#0a2540] leading-none">
                  TRANSFORMERS
                </span>
                <span className="text-[8px] sm:text-[9px] xl:text-[10px] text-[#1787b2] font-semibold tracking-wider uppercase mt-0.5">
                  Events & Display Systems
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links & Action */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 2xl:gap-4 shrink-0">
              {/* Navigation Links Group */}
              <div className="flex items-center gap-1 xl:gap-2.5 2xl:gap-3.5">
                {navLinks.map((link) => {
                  if (link.isDropdown) {
                    const isAnySubActive = link.subItems?.some((sub) => location.pathname === sub.href);
                    return (
                      <div key={link.label} className="relative group shrink-0">
                        <button
                          className={`flex items-center gap-1 text-xs xl:text-sm font-semibold transition-colors py-1.5 px-1.5 xl:px-2 rounded-md ${
                            isAnySubActive ? "text-[#1787b2]" : "text-slate-700 hover:text-[#1787b2]"
                          }`}
                          aria-expanded="false"
                        >
                          {link.label}
                          <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
                        </button>

                        <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                          {link.subItems?.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              className={`block px-4 py-2.5 transition-colors ${
                                location.pathname === sub.href
                                  ? "bg-slate-50 text-[#1787b2] font-semibold"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-[#1787b2]"
                              }`}
                            >
                              <p className="text-xs xl:text-sm font-medium">{sub.label}</p>
                              <p className="text-[11px] text-slate-500 line-clamp-1">{sub.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      to={link.href!}
                      className={`text-xs xl:text-sm font-semibold transition-colors relative py-1 px-1.5 xl:px-2.5 rounded-md shrink-0 whitespace-nowrap ${
                        isActive(link.href!)
                          ? "text-[#1787b2]"
                          : "text-slate-700 hover:text-[#1787b2]"
                      } ${
                        link.highlight
                          ? "inline-flex items-center gap-1 px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-full bg-[#1787b2]/10 text-[#0d586f] border border-[#1787b2]/20 hover:bg-[#1787b2]/20 text-[11px] xl:text-xs"
                          : ""
                      }`}
                    >
                      {link.highlight && <Sparkles size={11} className="text-[#1787b2] shrink-0" />}
                      <span className="lg:hidden xl:inline">{link.label}</span>
                      <span className="hidden lg:inline xl:hidden">{link.shortLabel || link.label}</span>
                      {isActive(link.href!) && !link.highlight && (
                        <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-[#1787b2] rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Subtle Vertical Divider between Navigation and CTA */}
              <div className="h-5 w-px bg-slate-200 mx-1 xl:mx-2 shrink-0" aria-hidden="true" />

              {/* Desktop Request Quote Button */}
              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="px-3.5 py-1.5 xl:px-4.5 xl:py-2 rounded-xl bg-[#0a2540] text-white hover:bg-[#1787b2] text-xs xl:text-sm font-semibold transition-all shadow-xs hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1787b2] focus:ring-offset-2 flex items-center gap-1.5 whitespace-nowrap"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Mobile / Tablet actions */}
            <div className="flex items-center gap-2.5 sm:gap-3 lg:hidden shrink-0">
              <Link
                to="/contact"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-[#0a2540] text-white text-xs sm:text-sm font-semibold hover:bg-[#1787b2] transition-colors whitespace-nowrap shadow-xs"
              >
                Request a Quote
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1787b2]"
                aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 max-h-[calc(100dvh-4rem)] overflow-y-auto space-y-1 shadow-2xl animate-fade-in-up">
            <div className="mb-3 px-3 py-2 bg-slate-50 rounded-xl text-xs text-slate-600 flex justify-between items-center">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-[#1787b2]" /> Cairo, Egypt
              </span>
              <a href="tel:+201110999646" className="font-semibold text-[#1787b2] flex items-center gap-1">
                <Phone size={12} /> +20 111 099 9646
              </a>
            </div>

            <Link
              to="/"
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                location.pathname === "/" ? "bg-[#1787b2]/10 text-[#1787b2]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Pillars Accordion in Mobile */}
            <div className="border-y border-slate-100 py-1 my-1">
              <button
                onClick={() => setPillarsOpen(!pillarsOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 rounded-xl hover:bg-slate-50"
              >
                <span>Three Business Pillars</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${pillarsOpen ? "rotate-180" : ""}`} />
              </button>

              {pillarsOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-xl mb-1">
                  <Link
                    to="/exhibitions"
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#1787b2]"
                  >
                    Exhibitions (Single Booths & Stands)
                  </Link>
                  <Link
                    to="/events"
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#1787b2]"
                  >
                    Events (Commercial, Pharma, Sports)
                  </Link>
                  <Link
                    to="/conferences"
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#1787b2]"
                  >
                    Conferences (Stages & AV Systems)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/transformers-display-system"
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                location.pathname === "/transformers-display-system"
                  ? "bg-[#1787b2]/10 text-[#1787b2]"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              <span>Transformers Display System</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#1787b2]/10 text-[#1787b2]">
                Modular
              </span>
            </Link>

            <Link
              to="/rental-products"
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                location.pathname === "/rental-products" ? "bg-[#1787b2]/10 text-[#1787b2]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Rental Products Catalog
            </Link>

            <Link
              to="/projects"
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                location.pathname === "/projects" ? "bg-[#1787b2]/10 text-[#1787b2]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Projects & Portfolio
            </Link>

            <Link
              to="/insights"
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                location.pathname === "/insights" ? "bg-[#1787b2]/10 text-[#1787b2]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Insights & Guides
            </Link>

            <Link
              to="/about"
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                location.pathname === "/about" ? "bg-[#1787b2]/10 text-[#1787b2]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              About Us (Heritage 1997)
            </Link>

            <Link
              to="/contact"
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                location.pathname === "/contact" ? "bg-[#1787b2]/10 text-[#1787b2]" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Contact & Support
            </Link>

            <div className="pt-3 mt-3 border-t border-slate-100">
              <Link
                to="/contact"
                className="block w-full py-3 px-4 bg-[#0a2540] text-white text-center rounded-xl text-sm font-semibold shadow hover:bg-[#1787b2] transition-colors"
              >
                Request a Free Quotation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
