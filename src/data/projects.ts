export type ProjectPillar = "exhibitions" | "events" | "conferences";

export interface ProjectItem {
  id: string;
  title: string;
  pillar: ProjectPillar;
  pillarLabel: string;
  category: string;
  image: string;
  gallery?: string[];
  description: string;
  services: string[];
  displaySystemUsed?: string;
  location?: string;
  featured?: boolean;
}

export const PROJECT_PILLARS = [
  { id: "all", label: "All Projects" },
  { id: "exhibitions", label: "Exhibitions" },
  { id: "events", label: "Events" },
  { id: "conferences", label: "Conferences" },
] as const;

export const PROJECTS: ProjectItem[] = [
  // --- SPORTS & TOURNAMENT EVENTS ---
  {
    id: "citi-para-swimming-egypt",
    title: "CITI Para Swimming World Series Egypt 2024",
    pillar: "events",
    pillarLabel: "Sports & Tournaments",
    category: "International Sports Championship",
    image: "/Transformers_Assets/10_Sports_Events/CITI_PARA_Swimming_Egypt_2024.jpg",
    gallery: [
      "/Transformers_Assets/10_Sports_Events/CITI_PARA_Swimming_Egypt_2024.jpg",
      "/Transformers_Assets/10_Sports_Events/CMAS_Swimming_Athletes.jpg",
      "/Transformers_Assets/10_Sports_Events/Sports_Event_Setup.jpg",
    ],
    description:
      "Turnkey production, venue branding, presentation podiums, and large-format digital display infrastructure for the international CITI Para Swimming World Series hosted in Egypt.",
    services: [
      "Aquatics arena branding",
      "Medal ceremony podium & backdrop",
      "LED screens & live timing integration",
      "Event lighting & audio coverage",
    ],
    displaySystemUsed: "Transformers Custom Aluminum Structures & LED Video Screens",
    location: "Cairo, Egypt",
    featured: true,
  },
  {
    id: "world-para-powerlifting-egypt",
    title: "World Para Powerlifting World Cup & African Championships",
    pillar: "events",
    pillarLabel: "Sports & Tournaments",
    category: "World Championship Athletics",
    image: "/Transformers_Assets/10_Sports_Events/World_Para_Powerlifting_1.jpg",
    gallery: [
      "/Transformers_Assets/10_Sports_Events/World_Para_Powerlifting_1.jpg",
      "/Transformers_Assets/10_Sports_Events/World_Para_Powerlifting_2.jpg",
      "/Transformers_Assets/10_Sports_Events/World_Para_Powerlifting_HeavyWeight.jpg",
      "/Transformers_Assets/10_Sports_Events/Egyptian_Para_Powerlifting_1.jpg",
    ],
    description:
      "Comprehensive main-stage competition platform, heavy-load staging, international broadcast backdrop, and dynamic sports arena lighting for the World Para Powerlifting World Cup.",
    services: [
      "Engineered heavy-load competition stage",
      "High-contrast broadcast LED backdrops",
      "Athlete warmup zone truss partitions",
      "Sponsor display walls and award ceremony stages",
    ],
    displaySystemUsed: "German Heavy-Duty Stage Deck & Modular Truss Systems",
    location: "Cairo, Egypt",
    featured: true,
  },
  {
    id: "cmas-finswimming-championship",
    title: "CMAS Finswimming World Championships",
    pillar: "events",
    pillarLabel: "Sports & Tournaments",
    category: "Global Aquatic Tournament",
    image: "/Transformers_Assets/10_Sports_Events/CMAS_Finswimming_2023_1.jpg",
    gallery: [
      "/Transformers_Assets/10_Sports_Events/CMAS_Finswimming_2023_1.jpg",
      "/Transformers_Assets/10_Sports_Events/CMAS_Finswimming_2023_2.jpg",
      "/Transformers_Assets/10_Sports_Events/CMAS_Swimming_World_Championship.jpg",
    ],
    description:
      "Olympic-standard poolside branding, athlete parade backdrops, press conference zones, and tournament audio system for the CMAS World Finswimming Championship.",
    services: [
      "Poolside perimeter branding",
      "Press conference backdrop and podium",
      "High-output PA system for aquatic venue",
      "VIP lounge modular partitions",
    ],
    displaySystemUsed: "Transformers Modular Aluminum Display System",
    location: "Egypt",
    featured: false,
  },
  {
    id: "international-gymnastics-championship",
    title: "International Gymnastics Championship",
    pillar: "events",
    pillarLabel: "Sports & Tournaments",
    category: "International Championship",
    image: "/Transformers_Assets/10_Sports_Events/International_Gymnastics_Championship.jpg",
    description:
      "Large-scale covered arena branding, entrance China gates, judge seating enclosures, and spectator display screens for the international gymnastics tournament.",
    services: [
      "Arena perimeter branding",
      "Modular spectator signage",
      "Award presentation stage",
    ],
    displaySystemUsed: "Transformers Modular Structures & Stage Platforms",
    location: "Cairo, Egypt",
    featured: false,
  },

  // --- COMMERCIAL & CORPORATE EVENTS ---
  {
    id: "bds-store-launch",
    title: "BDS Commercial Store & Brand Launch",
    pillar: "events",
    pillarLabel: "Commercial Events",
    category: "Brand Activation & Launch",
    image: "/Transformers_Assets/10_Sports_Events/BDS_Store_Launch.jpg",
    gallery: [
      "/Transformers_Assets/10_Sports_Events/BDS_Store_Launch.jpg",
      "/Transformers_Assets/12_Trade_Shows/BDS_Store_Launch.jpg",
    ],
    description:
      "Turnkey grand opening event execution featuring outdoor entrance branding, illuminated product display showcases, audio systems, and ribbon-cutting staging.",
    services: [
      "Exterior entrance portal & red carpet staging",
      "High-gloss retail display plinths",
      "Ambient DJ & ceremony sound setup",
      "Media wall and photography backdrop",
    ],
    displaySystemUsed: "Transformers Aluminum Modular Portals & Glass Showcases",
    location: "Cairo, Egypt",
    featured: true,
  },
  {
    id: "shira-20-years-anniversary",
    title: "SHIRA 20-Year Corporate Anniversary Celebration",
    pillar: "events",
    pillarLabel: "Commercial Events",
    category: "Corporate Gala & Anniversary",
    image: "/Transformers_Assets/06_Event_Lighting/SHIRA_20Years_Anniversary.jpg",
    description:
      "A landmark milestone gala dinner featuring an immersive LED stage, coordinated moving-head lighting sequences, and customized brand history display walkways.",
    services: [
      "Panoramic LED stage screen",
      "Synchronized lighting design",
      "History walk exhibition gallery",
      "Corporate banquet seating furniture",
    ],
    displaySystemUsed: "Curved LED Screens & Truss Lighting Rigs",
    location: "Cairo, Egypt",
    featured: false,
  },
  {
    id: "proxima-gala-dinner",
    title: "PROXIMA Annual Corporate Gala Dinner",
    pillar: "events",
    pillarLabel: "Commercial Events",
    category: "Corporate Gala",
    image: "/Transformers_Assets/06_Event_Lighting/PROXIMA_Gala.jpg",
    description:
      "Prestigious corporate banquet and awards evening with custom white plexiglass stage, theatrical lighting atmosphere, and crystal-clear PA audio.",
    services: [
      "Glossy white plexi stage",
      "Mood lighting & architectural washes",
      "VIP audio & presenter wireless microphones",
    ],
    displaySystemUsed: "Plexi Runway Stage & Pro Lighting Systems",
    location: "Cairo, Egypt",
    featured: false,
  },

  // --- PHARMACEUTICAL EVENTS ---
  {
    id: "winzoxib-gala-dinner",
    title: "Winzoxib Pharmaceutical Scientific Launch & Gala",
    pillar: "events",
    pillarLabel: "Pharmaceutical Events",
    category: "Pharma Scientific Gathering",
    image: "/Transformers_Assets/10_Sports_Events/Winzoxib_Gala_Dinner.jpg",
    description:
      "Specialized pharmaceutical symposium and gala dinner balancing compliant medical presentation requirements with an engaging evening atmosphere.",
    services: [
      "Keynote medical presentation LED screen",
      "Lectern and panel discussion stage",
      "Pharma product display totems",
      "Audience Q&A microphone system",
    ],
    displaySystemUsed: "P2.6 LED Video Wall & German Stage Deck",
    location: "Cairo, Egypt",
    featured: true,
  },

  // --- EXHIBITIONS (Single Booths & Full Stands) ---
  {
    id: "limitless-naturals-booth",
    title: "Limitless Naturals Exhibition Booth",
    pillar: "exhibitions",
    pillarLabel: "Exhibitions",
    category: "Single Exhibition Booth",
    image: "/Transformers_Assets/09_Past_Events/Limitless_Naturals_Booth.jpg",
    gallery: [
      "/Transformers_Assets/09_Past_Events/Limitless_Naturals_Booth.jpg",
      "/Transformers_Assets/02_Exhibition_Booths/CodeB_Elegant_UShape_Live.jpg",
    ],
    description:
      "An eye-catching, clean modular exhibition booth for pharmaceutical and consumer health brand Limitless Naturals, optimized for high traffic and product sampling.",
    services: [
      "U-Shape modular aluminum booth assembly",
      "Vibrant high-resolution graphic wraps",
      "Illuminated product shelving and reception podium",
      "Dedicated overhead spotlighting",
    ],
    displaySystemUsed: "Transformers Modular U-Shape Aluminum System",
    location: "Cairo International Convention Centre (CICC), Egypt",
    featured: true,
  },
  {
    id: "mannor-exhibition-booth",
    title: "MANNOR Fashion & Retail Exhibition Booth",
    pillar: "exhibitions",
    pillarLabel: "Exhibitions",
    category: "Full Exhibition Stand",
    image: "/Transformers_Assets/09_Past_Events/MANNOR_Booth.jpg",
    gallery: [
      "/Transformers_Assets/09_Past_Events/MANNOR_Booth.jpg",
      "/fashion-brand-booth-luxury-display.jpg",
    ],
    description:
      "Custom architectural exhibition stand balancing open merchandise browsing with an upscale brand identity at a premier trade exhibition in Cairo.",
    services: [
      "Custom perimeter stand build",
      "Integrated product shelving & display niches",
      "Private VIP consultation lounge",
      "High-CRI retail apparel spotlights",
    ],
    displaySystemUsed: "Custom Stand Build & Transformers Modular Trusses",
    location: "Egypt International Exhibition Center (EIEC), Cairo",
    featured: true,
  },
  {
    id: "mog-exhibition-large-setup",
    title: "MOG Industrial Exhibition Stand & Pavilion",
    pillar: "exhibitions",
    pillarLabel: "Exhibitions",
    category: "Full Exhibition Stand",
    image: "/Transformers_Assets/12_Trade_Shows/MOG_Exhibition_Large_Setup.jpg",
    description:
      "Comprehensive multi-zoned exhibition stand with heavy industrial machinery display areas, private meeting rooms, and overhead branded truss tower.",
    services: [
      "Multi-zone floorplan layout & raised floor",
      "Suspended branding overhead ring",
      "Meeting room enclosures with sound buffering",
      "Turnkey power distribution & lighting",
    ],
    displaySystemUsed: "Transformers High-Span Modular Truss & Ring Structures",
    location: "EIEC, Cairo, Egypt",
    featured: false,
  },
  {
    id: "arera-energy-expo",
    title: "ARERA Energy & Infrastructure Exhibition Stand",
    pillar: "exhibitions",
    pillarLabel: "Exhibitions",
    category: "Full Exhibition Stand",
    image: "/Transformers_Assets/06_Event_Lighting/ARERA_Expo.jpg",
    description:
      "Prominent corporate pavilion for international energy summit, combining aluminum modular truss frameworks with dynamic architectural wash lighting.",
    services: [
      "Modular pavilion architecture",
      "Digital media totems",
      "Consultation bar and sales seating",
    ],
    displaySystemUsed: "Transformers Pavilion Code Q & Lighting Package",
    location: "Cairo, Egypt",
    featured: false,
  },
  {
    id: "national-career-expos",
    title: "National Career & Employment Expos Hall",
    pillar: "exhibitions",
    pillarLabel: "Exhibitions",
    category: "Multi-Booth Exhibition Hall",
    image: "/Transformers_Assets/09_Past_Events/Career_Expo_Hall.jpg",
    gallery: [
      "/Transformers_Assets/09_Past_Events/Career_Expo_Hall.jpg",
      "/Transformers_Assets/09_Past_Events/Career_Expos.jpg",
    ],
    description:
      "Rapid deployment of over 50 synchronized modular booths for major corporate recruiters, installed in under 24 hours with complete uniform branding.",
    services: [
      "Turnkey hall master planning",
      "Multi-booth rapid modular installation",
      "Standardized exhibitor fascia signage",
      "On-site technical and maintenance crew",
    ],
    displaySystemUsed: "Transformers Modular U-Shape & L-Shape System",
    location: "CICC, Cairo, Egypt",
    featured: false,
  },

  // --- CONFERENCES ---
  {
    id: "national-hr-conference",
    title: "National Human Resources Leadership Conference",
    pillar: "conferences",
    pillarLabel: "Conferences",
    category: "Leadership Summit",
    image: "/Transformers_Assets/06_Event_Lighting/HR_Conference.jpg",
    gallery: [
      "/Transformers_Assets/06_Event_Lighting/HR_Conference.jpg",
      "/Transformers_Assets/04_LED_Screens/LED_Conference_Setup.jpg",
    ],
    description:
      "Plenary conference stage with panoramic LED backdrop, customized speaker lectern, crystal-clear speech reinforcement audio, and panel discussion seating.",
    services: [
      "Panoramic conference LED video wall",
      "Keynote audio & lavalier microphone systems",
      "Speaker stage with non-glare surface",
      "Synchronized lighting for panel sessions",
    ],
    displaySystemUsed: "LED Display Screens & German Modular Stage Deck",
    location: "Cairo, Egypt",
    featured: true,
  },
  {
    id: "medical-industry-scientific-conference",
    title: "National Medical & Pharmaceutical Scientific Conferences",
    pillar: "conferences",
    pillarLabel: "Conferences",
    category: "Medical & Scientific Summit",
    image: "/Transformers_Assets/09_Past_Events/Medical_Conferences.jpg",
    gallery: [
      "/Transformers_Assets/09_Past_Events/Medical_Conferences.jpg",
      "/Transformers_Assets/04_LED_Screens/LED_Speaker_Stage.jpg",
    ],
    description:
      "Rigorous technical AV setup for medical symposium with ultra-sharp slide projection, seamless session timing, breakout room audio, and registration desks.",
    services: [
      "Ultra-high resolution LED slide displays",
      "Audience Q&A runner microphones",
      "Registration hall modular counters",
      "Speaker preview room equipment",
    ],
    displaySystemUsed: "Transformers LED Screen System & Modular Counters",
    location: "Cairo, Egypt",
    featured: true,
  },
  {
    id: "national-investment-forums",
    title: "National Investment & Economic Forum",
    pillar: "conferences",
    pillarLabel: "Conferences",
    category: "Government & Economic Summit",
    image: "/Transformers_Assets/09_Past_Events/Investment_Forums.jpg",
    description:
      "High-security economic forum stage setup featuring VIP presidential seating, broadcast media feed distribution, and elegant bilingual stage graphics.",
    services: [
      "High-profile dignitary stage",
      "Simultaneous interpretation booth integration",
      "Broadcast-quality audio and video splitters",
    ],
    displaySystemUsed: "German Stage System & Pro Audio Line Arrays",
    location: "New Administrative Capital, Egypt",
    featured: false,
  },
  {
    id: "corporate-conference-booths-hub",
    title: "Corporate Conference Sponsor Exhibition Hub",
    pillar: "conferences",
    pillarLabel: "Conferences",
    category: "Conference Exhibition",
    image: "/Transformers_Assets/12_Trade_Shows/Corporate_Conference_Booths.jpg",
    description:
      "Modular sponsor display booths built in the conference foyer for corporate partners, networking lounges, and charging stations.",
    services: [
      "Foyer modular booth installations",
      "Integrated TV mounts and brochure holders",
      "Networking lounge furniture",
    ],
    displaySystemUsed: "Transformers Modular Display System & Event Furniture",
    location: "Cairo, Egypt",
    featured: false,
  },
];
