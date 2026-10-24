export const SITE_URL = "https://transformers-me.com";

export interface NavLink {
  href: string;
  label: string;
  description?: string;
}

export interface ServiceGroup {
  href: string;
  label: string;
  description: string;
  /** Pathnames that belong to this service, including deeper pages. */
  match: string[];
  children: NavLink[];
}

export const EXHIBITION_SECTIONS: NavLink[] = [
  { href: "/exhibitions#single-booths", label: "Single Booths" },
  { href: "/exhibitions#full-stands", label: "Full Exhibition Stands" },
  { href: "/exhibitions#modular-system", label: "Transformers Display System" },
  { href: "/exhibitions#design-build", label: "Design and Build" },
  { href: "/exhibitions#exhibition-projects", label: "Exhibition Projects" },
];

export const EVENT_SECTIONS: NavLink[] = [
  { href: "/events#commercial-events", label: "Commercial Events" },
  { href: "/events#pharma-events", label: "Pharmaceutical Events" },
  { href: "/events#sports-events", label: "Sports Tournaments" },
];

export const CONFERENCE_SECTIONS: NavLink[] = [
  { href: "/conferences#keynote-stages", label: "Keynote Stages" },
  { href: "/conferences#led-backdrops", label: "LED Backdrops" },
  { href: "/conferences#speech-audio", label: "Speech Audio" },
  { href: "/conferences#foyer-hubs", label: "Foyer and Sponsor Hubs" },
];

export const SERVICES: ServiceGroup[] = [
  {
    href: "/exhibitions",
    label: "Exhibitions",
    description: "Single booths, full stands, and the Transformers display system",
    match: ["/exhibitions", "/transformers-display-system"],
    children: [
      { href: "/exhibitions#single-booths", label: "Single Booths" },
      { href: "/exhibitions#full-stands", label: "Full Exhibition Stands" },
      { href: "/transformers-display-system", label: "Transformers Display System" },
    ],
  },
  {
    href: "/events",
    label: "Events",
    description: "Commercial launches, pharmaceutical events, and sports tournaments",
    match: ["/events"],
    children: EVENT_SECTIONS,
  },
  {
    href: "/conferences",
    label: "Conferences",
    description: "Stages, LED video walls, speech audio, and foyer setups",
    match: ["/conferences"],
    children: CONFERENCE_SECTIONS,
  },
];

export interface PrimaryLink {
  href: string;
  label: string;
  match: string[];
}

export const PRIMARY_LINKS: PrimaryLink[] = [
  { href: "/", label: "Home", match: ["/"] },
  { href: "/rental-products", label: "Rental Products", match: ["/rental-products", "/products"] },
  { href: "/projects", label: "Projects", match: ["/projects", "/gallery"] },
  { href: "/about", label: "About Us", match: ["/about"] },
  { href: "/contact", label: "Contact", match: ["/contact", "/request-a-quote"] },
];

export const RENTAL_LINKS: NavLink[] = [
  { href: "/rental-products", label: "All Rental Products" },
  { href: "/transformers-display-system", label: "Transformers Display System" },
  { href: "/rental-products?category=transformers_system", label: "Modular Booths (Codes A–Q)" },
  { href: "/rental-products?category=led_screens", label: "LED Screens & Video Walls" },
  { href: "/rental-products?category=sound_systems", label: "Audio & PA Systems" },
  { href: "/rental-products?category=stages", label: "Stages & Rigging" },
  { href: "/rental-products?category=lighting", label: "Event Lighting" },
  { href: "/rental-products?category=furniture", label: "Furniture & Showcases" },
];

export const QUOTE = {
  singleBooths: "Exhibitions - Single Modular Booths",
  fullStands: "Exhibitions - Full Custom Stands",
  displaySystem: "Exhibitions - Transformers Display System",
  commercial: "Events - Commercial Brand Launches",
  pharma: "Events - Pharmaceutical Symposia",
  sports: "Events - Sports & Tournaments",
  events: "Events - Turnkey Production",
  conferences: "Conferences - Stages & AV Systems",
  equipment: "Equipment Rental Only",
} as const;

export const SERVICE_OPTIONS: { value: string; label: string }[] = [
  { value: QUOTE.singleBooths, label: "Exhibitions — Single Booths" },
  { value: QUOTE.fullStands, label: "Exhibitions — Full Exhibition Stands" },
  { value: QUOTE.displaySystem, label: "Exhibitions — Transformers Display System" },
  { value: QUOTE.commercial, label: "Events — Commercial Events" },
  { value: QUOTE.pharma, label: "Events — Pharmaceutical Events" },
  { value: QUOTE.sports, label: "Events — Sports Tournaments" },
  { value: QUOTE.events, label: "Events — Turnkey Production" },
  { value: QUOTE.conferences, label: "Conferences — Stages, LED & Audio" },
  { value: QUOTE.equipment, label: "Rental Products — Equipment" },
];

/** Older quote links and catalog labels, mapped onto the current service list. */
export const SERVICE_ALIASES: Record<string, string> = {
  "Single Exhibition Booths": QUOTE.singleBooths,
  Exhibitions: QUOTE.fullStands,
  "Full Exhibition Stands": QUOTE.fullStands,
  "Exhibition Design and Build": QUOTE.fullStands,
  "Transformers Display System Rental": QUOTE.displaySystem,
  "Transformers Display System Purchase": QUOTE.displaySystem,
  "Transformers Catalog Request": QUOTE.displaySystem,
  "Transformers Modular System": QUOTE.displaySystem,
  "Transformers Modular Display Systems": QUOTE.displaySystem,
  "Commercial Events": QUOTE.commercial,
  "Pharmaceutical Events": QUOTE.pharma,
  "Sports and Tournaments": QUOTE.sports,
  "Sports & Tournaments": QUOTE.sports,
  "Event Management and Production": QUOTE.events,
  Conferences: QUOTE.conferences,
  "Custom Equipment Package": QUOTE.equipment,
  "LED Screens & Video Walls": QUOTE.equipment,
  "Audio & PA Systems": QUOTE.equipment,
  "Event & Stage Lighting": QUOTE.equipment,
  "Stages & Rigging": QUOTE.equipment,
  "Event Furniture & Showcases": QUOTE.equipment,
};

export function resolveService(raw: string | null | undefined): string {
  if (!raw) return "";
  const trimmed = raw.trim();
  if (SERVICE_OPTIONS.some((option) => option.value === trimmed)) return trimmed;
  return SERVICE_ALIASES[trimmed] || trimmed;
}

export function quoteHref(service: string, extra?: Record<string, string | undefined>) {
  const params = new URLSearchParams();
  params.set("service", service);
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      if (value) params.set(key, value);
    }
  }
  return `/contact?${params.toString()}`;
}

export function isServicePath(pathname: string) {
  return SERVICES.some((service) => service.match.includes(pathname));
}

export function isNavActive(pathname: string, hash: string, href: string, extraPaths: string[] = []) {
  const hashIndex = href.indexOf("#");
  const hashPart = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const path = (hashIndex >= 0 ? href.slice(0, hashIndex) : href).split("?")[0];
  const paths = extraPaths.length > 0 ? extraPaths : [path];
  if (!paths.includes(pathname)) return false;
  if (hashPart) return hash === hashPart;
  return true;
}

export function sectionLabel(sections: NavLink[], hash: string) {
  if (!hash) return undefined;
  return sections.find((section) => section.href.endsWith(hash))?.label;
}
