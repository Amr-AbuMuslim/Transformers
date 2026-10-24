import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import {
  PRIMARY_LINKS,
  SERVICES,
  isNavActive,
  isServicePath,
} from "@/data/navigation";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1787b2]";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const focusFirstServiceLink = useRef(false);
  const onServicePage = isServicePath(location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(onServicePage);
  }, [location.pathname, location.hash, location.search, onServicePage]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const menu = mobileMenuRef.current;
    const getFocusable = () =>
      Array.from(menu?.querySelectorAll<HTMLElement>("a, button") ?? []).filter(
        (el) => !el.hasAttribute("disabled")
      );
    const frame = window.requestAnimationFrame(() => getFocusable()[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !menu) return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    if (focusFirstServiceLink.current) {
      focusFirstServiceLink.current = false;
      servicesRef.current?.querySelector<HTMLElement>("a")?.focus();
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [servicesOpen]);

  const serviceActive = onServicePage;

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <a
        href="#main-content"
        className="absolute left-4 top-2 z-[60] -translate-y-24 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0a2540] shadow focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1787b2]"
      >
        Skip to content
      </a>

      <div className="hidden border-b border-white/10 bg-[#071a2d] px-4 py-1.5 text-[11px] text-slate-300 md:block lg:text-xs sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex shrink-0 items-center gap-3 lg:gap-6">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <MapPin size={12} className="text-[#1787b2]" /> Cairo, Egypt (Sole Taiwan Distributor)
            </span>
            <a href="tel:+201110999646" className={`flex items-center gap-1.5 hover:text-white ${focusRing} rounded-sm`}>
              <Phone size={12} className="text-[#1787b2]" /> +20 111 099 9646
            </a>
            <a
              href="mailto:sales@transformers-me.com"
              className={`hidden items-center gap-1.5 hover:text-white xl:flex ${focusRing} rounded-sm`}
            >
              <Mail size={12} className="text-[#1787b2]" /> sales@transformers-me.com
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden text-slate-400 2xl:inline">Exhibitions • Events • Conferences</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#1787b2] 2xl:inline-block" />
            <span className="font-medium text-emerald-400">Rental & Sale Available</span>
          </div>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className={`w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
          isScrolled ? "border-slate-200 shadow-sm" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link
              to="/"
              className={`group flex shrink-0 items-center gap-2 rounded-lg sm:gap-2.5 ${focusRing}`}
              aria-label="Transformers Home"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center p-0.5 sm:h-11 sm:w-11">
                <img
                  src="/LOGO (1) (2).png"
                  alt=""
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm font-bold leading-none tracking-tight text-[#0a2540] sm:text-base xl:text-lg">
                  TRANSFORMERS
                </span>
                <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-wider text-[#1787b2] xl:block">
                  Events & Display Systems
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-1 xl:flex">
              <ul className="flex items-center gap-0.5">
                <li>
                  <DesktopLink href="/" label="Home" active={location.pathname === "/"} />
                </li>
                <li>
                  <div
                    ref={servicesRef}
                    className="relative"
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                        setServicesOpen(false);
                      }
                    }}
                  >
                    <button
                      ref={servicesButtonRef}
                      type="button"
                      className={`flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-semibold ${focusRing} ${
                        serviceActive ? "text-[#1787b2]" : "text-slate-700 hover:text-[#1787b2]"
                      }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls="services-menu"
                      aria-current={serviceActive ? "true" : undefined}
                      onClick={() => setServicesOpen((open) => !open)}
                      onKeyDown={(event) => {
                        if (event.key === "ArrowDown") {
                          event.preventDefault();
                          if (servicesOpen) {
                            servicesRef.current?.querySelector<HTMLElement>("a")?.focus();
                          } else {
                            focusFirstServiceLink.current = true;
                            setServicesOpen(true);
                          }
                        }
                      }}
                    >
                      Services
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {serviceActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#1787b2]" />
                    )}

                    {servicesOpen && (
                      <div
                        id="services-menu"
                        className="absolute left-0 top-full z-50 w-[22rem] max-w-[calc(100vw-2rem)] pt-2"
                        onMouseDown={(event) => event.preventDefault()}
                      >
                        <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white py-2 shadow-xl">
                          {SERVICES.map((service) => {
                            const parentActive = service.match.includes(location.pathname);
                            const childExact = service.children.some((child) =>
                              isNavActive(location.pathname, location.hash, child.href)
                            );
                            return (
                              <div key={service.href} className="px-2 py-1">
                                <Link
                                  to={service.href}
                                  aria-current={parentActive && !childExact ? "page" : undefined}
                                  className={`block rounded-xl px-3 py-2 ${focusRing} ${
                                    parentActive ? "bg-slate-50 text-[#1787b2]" : "text-slate-800 hover:bg-slate-50"
                                  }`}
                                >
                                  <span className="block text-sm font-semibold">{service.label}</span>
                                  <span className="mt-0.5 block text-[11px] leading-snug text-slate-500">
                                    {service.description}
                                  </span>
                                </Link>
                                <ul className="mt-0.5 mb-1 ml-3 border-l border-slate-200">
                                  {service.children.map((child) => {
                                    const active = isNavActive(location.pathname, location.hash, child.href);
                                    return (
                                      <li key={child.href}>
                                        <Link
                                          to={child.href}
                                          aria-current={active ? "page" : undefined}
                                          className={`block rounded-r-lg px-3 py-1.5 text-[13px] font-medium ${focusRing} ${
                                            active
                                              ? "bg-[#1787b2]/10 text-[#0d586f]"
                                              : "text-slate-600 hover:bg-slate-50 hover:text-[#1787b2]"
                                          }`}
                                        >
                                          {child.label}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
                {PRIMARY_LINKS.filter((link) => link.href !== "/").map((link) => (
                  <li key={link.href}>
                    <DesktopLink
                      href={link.href}
                      label={link.label}
                      active={isNavActive(location.pathname, location.hash, link.href, link.match)}
                    />
                  </li>
                ))}
              </ul>

              <div className="mx-1 h-5 w-px bg-slate-200" aria-hidden="true" />
              <QuoteLink />
            </div>

            <div className="flex shrink-0 items-center gap-2 xl:hidden">
              <QuoteLink compact />
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => {
                  setIsOpen((open) => {
                    const next = !open;
                    if (next && onServicePage) setMobileServicesOpen(true);
                    return next;
                  });
                }}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 ${focusRing}`}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-navigation"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto overflow-x-hidden border-t border-slate-200 bg-white px-4 pb-6 pt-3 shadow-2xl md:max-h-[calc(100dvh-7.5rem)] xl:hidden"
          >
            <div className="mb-3 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-[#1787b2]" /> Cairo, Egypt
              </span>
              <a href="tel:+201110999646" className={`flex items-center gap-1 font-semibold text-[#1787b2] ${focusRing} rounded-sm`}>
                <Phone size={12} /> +20 111 099 9646
              </a>
            </div>

            <ul className="space-y-1">
              <li>
                <MobileLink to="/" label="Home" active={location.pathname === "/"} />
              </li>
              <li className="border-y border-slate-100 py-1">
                <button
                  type="button"
                  className={`flex min-h-11 w-full items-center justify-between rounded-xl px-3 text-sm font-semibold ${focusRing} ${
                    serviceActive ? "text-[#1787b2]" : "text-slate-800 hover:bg-slate-50"
                  }`}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div id="mobile-services" className="space-y-2 py-1 pl-2">
                    {SERVICES.map((service) => {
                      const parentActive = service.match.includes(location.pathname) && !location.hash;
                      return (
                        <div key={service.href}>
                          <Link
                            to={service.href}
                            aria-current={parentActive ? "page" : undefined}
                            className={`flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold ${focusRing} ${
                              service.match.includes(location.pathname)
                                ? "text-[#1787b2]"
                                : "text-slate-800 hover:bg-slate-50"
                            }`}
                          >
                            {service.label}
                          </Link>
                          <ul className="ml-3 border-l border-slate-200">
                            {service.children.map((child) => {
                              const active = isNavActive(location.pathname, location.hash, child.href);
                              return (
                                <li key={child.href}>
                                  <Link
                                    to={child.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`flex min-h-11 items-center rounded-r-lg px-3 text-sm ${focusRing} ${
                                      active ? "font-semibold text-[#1787b2]" : "text-slate-600 hover:text-[#1787b2]"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
              {PRIMARY_LINKS.filter((link) => link.href !== "/").map((link) => (
                <li key={link.href}>
                  <MobileLink
                    to={link.href}
                    label={link.label}
                    active={isNavActive(location.pathname, location.hash, link.href, link.match)}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-3 border-t border-slate-100 pt-3">
              <Link
                to="/contact"
                className={`flex min-h-11 w-full items-center justify-center rounded-xl bg-[#0a2540] px-4 text-sm font-semibold text-white hover:bg-[#1787b2] ${focusRing}`}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function DesktopLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      to={href}
      aria-current={active ? "page" : undefined}
      className={`relative whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold ${focusRing} ${
        active ? "text-[#1787b2]" : "text-slate-700 hover:text-[#1787b2]"
      }`}
    >
      {label}
      {active && <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#1787b2]" />}
    </Link>
  );
}

function MobileLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      aria-current={active ? "page" : undefined}
      className={`flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold ${focusRing} ${
        active ? "bg-[#1787b2]/10 text-[#1787b2]" : "text-slate-800 hover:bg-slate-50"
      }`}
    >
      {label}
    </Link>
  );
}

function QuoteLink({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/contact"
      className={`inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-[#0a2540] font-semibold text-white shadow-xs transition-colors hover:bg-[#1787b2] ${focusRing} ${
        compact ? "px-3 text-xs sm:px-4 sm:text-sm" : "px-4 text-sm"
      }`}
    >
      Request a Quote
    </Link>
  );
}
