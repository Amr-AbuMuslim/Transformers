import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { IMAGES, type ImageId } from "@/data/images";

const CATEGORIES: { index: string; title: string; description: string; href: string; image: ImageId; position: string }[] = [
  {
    index: "01",
    title: "Exhibitions",
    description: "Booths, stands, and the hall around them.",
    href: "/exhibitions",
    image: "homeExhibitions",
    position: "object-[center_40%]",
  },
  {
    index: "02",
    title: "Events",
    description: "Stages, light, sound, and brand structures.",
    href: "/events",
    image: "homeEvents",
    position: "object-center",
  },
  {
    index: "03",
    title: "Sports Tournaments",
    description: "Venue branding, ceremonies, and screens.",
    href: "/sports-tournaments",
    image: "homeSports",
    position: "object-[center_18%]",
  },
  {
    index: "04",
    title: "Conferences",
    description: "Rooms, compact booths, and presentation displays.",
    href: "/conferences",
    image: "homeConferences",
    position: "object-center",
  },
  {
    index: "05",
    title: "Transformers Display System",
    description: "Modular structures for booths, pavilions, and branding.",
    href: "/transformers-display-system",
    image: "homeDisplay",
    position: "object-center",
  },
];

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Transformers for Events Management and Display Systems",
    description:
      "Transformers delivers integrated solutions for exhibitions, corporate events, sports tournaments, conferences, and modular display systems across Egypt.",
    url: "https://transformers-me.com",
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
        title="Exhibitions, Events, Sports Tournaments, Conferences & Display Systems | Transformers Egypt"
        description="Transformers delivers integrated solutions for exhibitions, corporate events, sports tournaments, conferences, and modular display systems across Egypt."
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
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-[#9fd4e8]">Cairo, Egypt</p>
            <h1 className="max-w-3xl font-serif text-[2.35rem] font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Exhibitions, events, tournaments, conferences, and display systems.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-100/85 sm:text-[15px]">
              Transformers delivers integrated solutions for exhibitions, corporate events, sports tournaments, conferences, and modular display systems across Egypt. From event infrastructure and exhibition environments to technical production and modular display structures, we supply the services and equipment that bring an event to life.
            </p>
          </div>
        </section>

        <section id="services" aria-label="Choose your event" className="scroll-mt-24 border-t border-white/10 bg-[#071a2d]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#9fd4e8]">Choose your event</p>
            <p className="text-[11px] tracking-[0.22em] text-white/35">01 — 05</p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 min-[1200px]:grid-cols-5">
            {CATEGORIES.map((category) => {
              const photo = IMAGES[category.image];
              return (
                <Link
                  key={category.href}
                  to={category.href}
                  className="group relative isolate block min-h-[320px] overflow-hidden bg-[#071a2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#9fd4e8] sm:min-h-[440px] min-[1200px]:min-h-[520px]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${category.position}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="mb-3 h-px w-8 bg-[#9fd4e8] transition-all duration-500 group-hover:w-14 motion-reduce:transition-none" />
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[11px] tracking-[0.24em] text-white/55">{category.index}</p>
                        <h2 className="mt-1 font-serif text-[1.55rem] font-medium leading-tight tracking-tight text-white sm:text-[1.7rem]">
                          {category.title}
                        </h2>
                        <p className="mt-2 max-w-[16rem] text-sm leading-snug text-white/75">{category.description}</p>
                      </div>
                      <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#071a2d] motion-reduce:transition-none">
                        <ArrowUpRight size={16} />
                        <span className="sr-only">Open {category.title}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
