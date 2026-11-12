import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const CATEGORIES = [
  {
    index: "01",
    title: "Exhibitions",
    href: "/exhibitions",
    image: "/Transformers_Assets/12_Trade_Shows/MOG_Exhibition_Large_Setup.jpg",
    alt: "MOG exhibition stand built by Transformers",
    position: "object-[center_40%]",
  },
  {
    index: "02",
    title: "Events",
    href: "/events",
    image: "/Transformers_Assets/04_LED_Screens/LED_Large_Venue.jpg",
    alt: "Large venue stage with lighting for a corporate event",
    position: "object-center",
  },
  {
    index: "03",
    title: "Sports Tournaments",
    href: "/sports-tournaments",
    image: "/Transformers_Assets/10_Sports_Events/CITI_PARA_Swimming_Egypt_2024.jpg",
    alt: "CITI Para Swimming World Series venue setup in Egypt",
    position: "object-[center_18%]",
  },
  {
    index: "04",
    title: "Conferences",
    href: "/conferences",
    image: "/Transformers_Assets/04_LED_Screens/LED_Conference_Setup.jpg",
    alt: "Conference stage with LED wall and seating",
    position: "object-[center_62%]",
  },
] as const;

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Transformers for Events Management and Display Systems",
    description:
      "Transformers delivers integrated solutions for exhibitions, corporate events, sports tournaments, and conferences across Egypt.",
    url: "https://transformers-me.com/",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: CATEGORIES.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: category.title,
        url: `https://transformers-me.com${category.href}`,
      })),
    },
  };

  return (
    <>
      <SEOHead
        title="Exhibitions, Events, Sports Tournaments & Conferences | Transformers Egypt"
        description="Transformers delivers integrated solutions for exhibitions, corporate events, sports tournaments, and conferences across Egypt, including infrastructure, staging, branding, and display systems."
        canonicalPath="/"
        structuredData={homeSchema}
      />

      <Navbar />

      <main id="main-content" tabIndex={-1} className="bg-[#071a2d] outline-none">
        <section className="relative flex min-h-[70vh] items-end overflow-hidden">
          <img
            src="/download.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/55 to-[#071a2d]/25" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-[#9fd4e8]">
              Cairo, Egypt
            </p>
            <h1 className="max-w-3xl font-serif text-[2.35rem] font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Exhibitions, events, tournaments, and conferences.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-100/85 sm:text-[15px]">
              Transformers delivers integrated solutions for Exhibitions, Corporate Events, Sports Tournaments, and Conferences across Egypt. From event infrastructure, staging, and exhibition environments to professional display systems, branding, and technical production, we provide the services and equipment needed to bring successful events to life.
            </p>
          </div>
        </section>

        <section id="services" aria-label="Choose your event" className="scroll-mt-24 border-t border-white/10 bg-[#071a2d]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#9fd4e8]">Choose your event</p>
            <p className="text-[11px] tracking-[0.22em] text-white/35">01 — 04</p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category.href}
                to={category.href}
                className="group relative isolate block min-h-[300px] overflow-hidden bg-[#071a2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#9fd4e8] sm:min-h-[440px] xl:min-h-[520px]"
              >
                <img
                  src={category.image}
                  alt={category.alt}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${category.position}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="mb-3 h-px w-8 bg-[#9fd4e8] transition-all duration-500 group-hover:w-14 motion-reduce:transition-none" />
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] tracking-[0.24em] text-white/55">{category.index}</p>
                      <h2 className="mt-1 max-w-[12rem] font-serif text-[1.7rem] font-medium leading-tight tracking-tight text-white sm:text-[1.85rem]">
                        {category.title}
                      </h2>
                    </div>
                    <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#071a2d]">
                      <ArrowUpRight size={16} />
                      <span className="sr-only">Open {category.title}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
