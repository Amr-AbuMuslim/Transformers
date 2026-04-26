"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  AudioLines,
  Award,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Lightbulb,
  Monitor,
  Sofa,
  Sparkles,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

type EventItem = {
  file: string;
  title: string;
  subtitle: string;
  description: string;
  labels?: string[];
};

type EventSection = {
  folder: string;
  icon: LucideIcon;
  subtitle: string;
  description: string;
  labels?: string[];
  items: EventItem[];
};

type EventSectionMeta = {
  icon: LucideIcon;
  subtitle: string;
  description: string;
  labels?: string[];
};

const sectionFiles: Record<string, string[]> = {
  "01_Hero": ["hero_background.jpg"],
  "02_Exhibition_Booths": [
    "CodeA_UShape_Standard.jpg",
    "CodeB_Elegant_UShape_3D.jpg",
    "CodeB_Elegant_UShape_Live.jpg",
    "CodeD_UShape_Simple.jpg",
    "CodeE_UShape_Economic.jpg",
    "CodeF_LShape_Simple.jpg",
    "CodeG_Elegant_Tower.jpg",
    "CodeH_Elegant_Ring.jpg",
  ],
  "03_Complete_Event_Solution": [
    "Audio_Systems.jpg",
    "Furniture.jpg",
    "LED_Displays.jpg",
    "Stage_Lighting.jpg",
  ],
  "04_LED_Screens": [
    "LED_Branded_Stage.jpg",
    "LED_Conference_Setup.jpg",
    "LED_Curved_Screen.jpg",
    "LED_Digital_Signage_Row.jpg",
    "LED_Large_Venue.jpg",
    "LED_Speaker_Stage.jpg",
    "LED_Touch_Screen_Kiosk.jpg",
  ],
  "05_Sound_Systems": [
    "Line_Array_Speakers.jpg",
    "PA_System_Mixing_Console.jpg",
    "Wireless_Microphone_Package.jpg",
  ],
  "06_Event_Lighting": [
    "ARERA_Expo.jpg",
    "HR_Conference.jpg",
    "PROXIMA_Gala.jpg",
    "SHIRA_20Years_Anniversary.jpg",
  ],
  "07_Furniture": [
    "Hydraulic_Tables.jpg",
    "Meeting_Tables.jpg",
    "Mini_Bars.jpg",
    "XTables_Sales_Tables.jpg",
  ],
  "08_Stages": [
    "German_Stage_Glass.jpg",
    "German_Stage_Installed.jpg",
    "Plexi_Stage_Black.jpg",
    "Plexi_Stage_White.jpg",
    "Stage_Setup.jpg",
    "Stage_System.jpg",
    "Stage_Type1.jpg",
    "Stage_Type2.jpg",
  ],
  "09_Past_Events": [
    "Career_Expos.jpg",
    "Career_Expo_Hall.jpg",
    "Healthcare_Expos.jpg",
    "Investment_Forums.jpg",
    "Limitless_Naturals_Booth.jpg",
    // "Luxury_Exhibitions.jpg",
    "Luxury_Exhibition_Hall.jpg",
    "MANNOR_Booth.jpg",
    "Medical_Conferences.jpg",
    "Our_Team.jpg",
    "Product_Launches.jpg",
  ],
  "10_Sports_Events": [
    "African_Weightlifting_Championships.jpg",
    "Africa_Open_Powerlifting_2022.jpg",
    "BDS_Store_Launch.jpg",
    "CITI_PARA_Swimming_Egypt_2024.jpg",
    "CMAS_Finswimming_2023_1.jpg",
    "CMAS_Finswimming_2023_2.jpg",
    "CMAS_Swimming_Athletes.jpg",
    "CMAS_Swimming_World_Championship.jpg",
    "Egyptian_Para_Powerlifting_1.jpg",
    "Egyptian_Para_Powerlifting_2.jpg",
    "International_Gymnastics_Championship.jpg",
    "LED_Install_In_Progress.jpg",
    "Outdoor_Event_Setup.jpg",
    "Premium_Gala_Dinners.jpg",
    "Sports_Event_Setup.jpg",
    "Winzoxib_Gala_Dinner.jpg",
    "World_Para_Powerlifting_1.jpg",
    "World_Para_Powerlifting_2.jpg",
    "World_Para_Powerlifting_HeavyWeight.jpg",
  ],
  "11_Awards": [
    "Glass_Display_Cases.jpg",
    "International_Recognition.jpg",
    "Multi_Level_Showcase.jpg",
    "Premium_Trophy_Displays.jpg",
  ],
  "12_Trade_Shows": [
    "BDS_Store_Launch.jpg",
    "Corporate_Conference_Booths.jpg",
    "MOG_Exhibition_Large_Setup.jpg",
  ],
};

const sectionMeta: Record<string, EventSectionMeta> = {
  "01_Hero": {
    icon: Sparkles,
    subtitle: "One Partner. Infinite Possibilities.",
    description: "Seamless Integration with a single point of contact.",
    labels: ["Complete Event Solution", "Consistent Quality Standards"],
  },
  "02_Exhibition_Booths": {
    icon: Clapperboard,
    subtitle: "Premium Booth Concepts",
    description:
      "Professional visual environments that balance branding, flow, and visitor engagement.",
  },
  "03_Complete_Event_Solution": {
    icon: Sparkles,
    subtitle: "Complete Event Solution",
    description:
      "Single Point of Contact, Cost & Time Efficiency, and consistent quality from planning to delivery.",
    labels: ["Seamless Integration", "Cost & Time Efficiency"],
  },
  "04_LED_Screens": {
    icon: Monitor,
    subtitle: "Professional Visual Solutions",
    description:
      "LED Display Screens with premium output and reliability for conferences, shows, and launches.",
    labels: ["4K Resolution", "360° Viewing Angle", "∞ Brightness", "24/7 Reliability"],
  },
  "05_Sound_Systems": {
    icon: AudioLines,
    subtitle: "Professional Audio Solutions",
    description:
      "Crystal-clear coverage with pro-grade equipment and 24/7 technical support.",
    labels: ["360° Sound Coverage", "HD Crystal Clear", "Pro Grade Equipment", "24/7 Support"],
  },
  "06_Event_Lighting": {
    icon: Lightbulb,
    subtitle: "Professional Event Lighting",
    description: "Real Event Setups & Solutions for conferences, expos, and galas.",
  },
  "07_Furniture": {
    icon: Sofa,
    subtitle: "Furniture - Tables & Accessories",
    description:
      "Sales & X-Tables, Hydraulic Tables, Meeting Tables, and Mini Bars with event-ready finishes.",
  },
  "08_Stages": {
    icon: Trophy,
    subtitle: "Professional Stage Solutions",
    description:
      "Event Stages & Setup with safe structures, modern materials, and scalable configurations.",
    labels: ["∞ Configurations", "Pro Grade Materials", "✓ Safe & Stable", "24/7 Support"],
  },
  "09_Past_Events": {
    icon: Sparkles,
    subtitle: "Past Events Portfolio",
    description: "A curated archive of delivered projects across sectors and formats.",
  },
  "10_Sports_Events": {
    icon: Trophy,
    subtitle: "Large-Scale Sports Event Delivery",
    description:
      "Competition-ready setups with production precision, visibility, and operational resilience.",
  },
  "11_Awards": {
    icon: Award,
    subtitle: "Recognition & Showcase Excellence",
    description: "Premium presentation systems for awards, displays, and official recognitions.",
  },
  "12_Trade_Shows": {
    icon: Clapperboard,
    subtitle: "Trade Show Execution",
    description: "Professional exhibition setups optimized for lead generation and brand impact.",
  },
};

const itemOverrides: Record<string, Partial<EventItem>> = {
  "SHIRA_20Years_Anniversary.jpg": {
    title: "SHIRA 20 Years",
    subtitle: "Anniversary celebration",
  },
  "HR_Conference.jpg": {
    title: "HR Conference",
    subtitle: "Professional conference",
  },
  "ARERA_Expo.jpg": {
    title: "ARERA Expo",
    subtitle: "Large exhibition",
  },
  "PROXIMA_Gala.jpg": {
    title: "PROXIMA Gala",
    subtitle: "Gala event",
  },
  "XTables_Sales_Tables.jpg": {
    title: "Sales & X-Tables",
    subtitle: "Codes: T-001 to T-010",
  },
  "Hydraulic_Tables.jpg": {
    title: "Hydraulic Tables",
    subtitle: "Codes: T-011 to T-014 (Adjustable Height)",
  },
  "Meeting_Tables.jpg": {
    title: "Meeting Tables",
    subtitle: "Round & Rectangular Options",
  },
  "Mini_Bars.jpg": {
    title: "Mini Bars",
    subtitle: "Codes: M-001, M-002",
  },
  "Plexi_Stage_Black.jpg": {
    title: "Plexi Stage",
    subtitle: "Modern transparent design",
  },
  "German_Stage_Glass.jpg": {
    title: "German Stage",
    subtitle: "Premium engineering",
  },
  "Stage_Setup.jpg": {
    title: "Stage Setup",
    subtitle: "Professional configuration",
  },
  "Stage_System.jpg": {
    title: "Stage System",
    subtitle: "Complete solution",
  },
};

function titleFromFilename(file: string) {
  return file
    .replace(/\.[^/.]+$/, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function sectionDisplayTitle(folder: string) {
  return folder
    .replace(/^\d+_/, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function sectionImage(folder: string, file: string) {
  return `/Transformers_Assets/${folder}/${file}`;
}

function itemDescription(folder: string, title: string) {
  const defaultText =
    "Delivered with premium production quality, strong visual hierarchy, and audience-first setup planning.";

  if (folder === "04_LED_Screens") {
    return `${title} configured for high-impact visuals with 4K-ready clarity and dependable 24/7 performance.`;
  }
  if (folder === "05_Sound_Systems") {
    return `${title} tuned for balanced coverage, crystal clarity, and stable operation across the full venue.`;
  }
  if (folder === "08_Stages") {
    return `${title} engineered with professional-grade materials for safe load handling and smooth execution.`;
  }
  if (folder === "06_Event_Lighting") {
    return `${title} executed as a real event setup with focused atmosphere design and seamless technical support.`;
  }
  return defaultText;
}

function SectionCarousel({ section }: { section: EventSection }) {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive((p) => (p - 1 + section.items.length) % section.items.length);
  };

  const next = () => {
    setActive((p) => (p + 1) % section.items.length);
  };

  const item = section.items[active];

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-xl border border-border bg-card">
        <img
          src={sectionImage(section.folder, item.file)}
          alt={item.title}
          className="h-[260px] w-full object-cover md:h-[420px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
          <p className="text-xs md:text-sm opacity-90">{item.subtitle}</p>
          <h3 className="font-serif text-xl md:text-3xl font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-sm md:text-base text-white/90 max-w-3xl">
            {item.description}
          </p>
        </div>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 p-2 text-white transition hover:bg-black/70"
          aria-label={`Previous ${section.folder} slide`}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 p-2 text-white transition hover:bg-black/70"
          aria-label={`Next ${section.folder} slide`}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {section.items.map((entry, idx) => (
          <button
            key={entry.file}
            onClick={() => setActive(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === active ? "w-8 bg-secondary" : "w-2 bg-border"
            }`}
            aria-label={`Show ${entry.title}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Events() {
  const heroImage = sectionImage("01_Hero", sectionFiles["01_Hero"][0]);

  const sections = useMemo<EventSection[]>(
    () =>
      Object.entries(sectionFiles).map(([folder, files]) => {
        const meta = sectionMeta[folder as keyof typeof sectionMeta];
        return {
          folder,
          icon: meta.icon,
          subtitle: meta.subtitle,
          description: meta.description,
          labels: meta.labels,
          items: files.map((file) => {
            const defaultTitle = titleFromFilename(file);
            const override = itemOverrides[file];
            const title = override?.title || defaultTitle;
            const subtitle = override?.subtitle || "Professional Event Setup";
            return {
              file,
              title,
              subtitle,
              description: itemDescription(folder, title),
              labels: override?.labels,
            };
          }),
        };
      }),
    []
  );

  const contentSections = sections.filter((section) => section.folder !== "01_Hero");

  return (
    <>
      <Navbar />

      <PageHeader title="Events" image={heroImage} />

      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5">
            Complete Event Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            One Partner. Infinite Possibilities. Seamless Integration with a
            Single Point of Contact, Consistent Quality Standards, and smarter
            Cost & Time Efficiency across every event lifecycle.
          </p>
        </div>
      </section>

      {contentSections.map((section, sectionIndex) => {
        const Icon = section.icon;
        const useCarousel = section.items.length >= 7;

        return (
          <section
            key={section.folder}
            className={`py-20 px-4 ${sectionIndex % 2 === 0 ? "bg-card" : "bg-background"}`}
          >
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title={sectionDisplayTitle(section.folder)}
                subtitle={section.subtitle}
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-background p-5 md:p-6 mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-serif text-xl font-semibold text-foreground mb-1">
                      {section.subtitle}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {section.description}
                    </p>
                    {section.labels && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {section.labels.map((label) => (
                          <span
                            key={label}
                            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {useCarousel ? (
                <SectionCarousel section={section} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, index) => (
                    <motion.article
                      key={item.file}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.06 }}
                      viewport={{ once: true }}
                      className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={sectionImage(section.folder, item.file)}
                          alt={item.title}
                          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                          {item.subtitle}
                        </p>
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready To Build Your Next Event Experience?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            From LED Display Screens and Sound Systems to Stages, Furniture, and
            Lighting, our team delivers a fully synchronized event ecosystem.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-lg font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
          >
            Start Your Event Plan <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
