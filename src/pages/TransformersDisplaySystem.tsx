import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";
import FaqAccordion from "@/components/FaqAccordion";
import { ContinueLinks } from "@/components/SectionNav";
import { QUOTE, quoteHref } from "@/data/navigation";
import { PRODUCTS } from "@/data/products";
import { PROJECTS } from "@/data/projects";
import { siteImage, type ImageId } from "@/data/images";

const COMPONENTS: { title: string; text: string; image: ImageId }[] = [
  { title: "Frame", text: "A foldable aluminum frame. Code A shows the three-wall U-shape with a header.", image: "sysFrame" },
  { title: "Header", text: "Standard booths include a wooden header, 70×30 cm, printed for the show.", image: "sysHeader" },
  { title: "Podium", text: "Code M is a branded reception podium for the front of the stand.", image: "sysPodium" },
  { title: "Tower", text: "Code G adds a tower when the brand needs height above the wall.", image: "sysTower" },
  { title: "Ring", text: "Code J is a circular ring used as an overhead feature.", image: "sysRing" },
  { title: "Entrance", text: "Code K is a wider branded entrance structure.", image: "sysGate" },
];

const APPLICATIONS: { title: string; text: string; image: ImageId; href: string }[] = [
  { title: "Exhibitions", text: "Inline booths, corner plots, and larger stands on a show floor.", image: "sysAppExhibition", href: "/exhibitions" },
  { title: "Events", text: "Sponsor structures, counters, and branded walls around a live program.", image: "sysAppEvent", href: "/events" },
  { title: "Conferences", text: "Compact foyer booths and pavilions where the plot is small.", image: "sysAppConference", href: "/conferences" },
];

const FAQS = [
  { q: "What is the Transformers display system?", a: "A modular aluminum display system supplied as Codes A to Q. Layouts include U-shape, L-shape, tower, ring, pavilion, and open configurations. Standard booth packages list a header, a podium, and spotlights on the product card." },
  { q: "Can the same components be arranged in different ways?", a: "Yes. The catalog is a set of configurations, not one fixed booth. Send the plot size and the open sides, and we will say which codes fit. Code O is described as a layout tailored to the plot." },
  { q: "Where can it be used?", a: "Exhibitions, sponsor areas at events, and compact conference booths. It is one of five services, not the only thing the company does." },
  { q: "Can I rent it, or only buy it?", a: "The booth codes are listed as available for rental and purchase. Say which you want in the enquiry. We do not publish prices on this page." },
  { q: "Can the graphics change between shows?", a: "Printed walls, headers, and podiums are produced from your artwork. Tell us what must be branded when you request a quote." },
  { q: "Do you install and dismantle it?", a: "Rental enquiries can include delivery, installation, and dismantling. Include the venue and the build dates." },
  { q: "What should I send for a quotation?", a: "Plot size, open sides, dates, city, venue, and whether you want rental or purchase. A floor plan is enough to start." },
];

export default function TransformersDisplaySystem() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "u-shape" | "l-shape" | "architectural">("all");
  const hero = siteImage("sysHero");
  const boothProducts = PRODUCTS.filter((product) => product.category === "transformers_system");
  const filteredBooths = boothProducts.filter((product) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "u-shape") return product.name.includes("U-Shape");
    if (selectedCategory === "l-shape") return product.name.includes("L-Shape");
    return ["Tower", "Ring", "Gate", "Pavilion", "Octopus"].some((word) => product.name.includes(word));
  });
  const projects = PROJECTS.filter((project) => project.pillar === "exhibitions");
  const quote = quoteHref(QUOTE.displaySystem);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Transformers Modular Display System",
    description: "Modular aluminum display system, Codes A to Q, available to rent or purchase in Egypt.",
    url: "https://transformers-me.com/transformers-display-system",
    areaServed: "Egypt",
    provider: {
      "@type": "Organization",
      name: "Transformers for Events Management and Display Systems",
      url: "https://transformers-me.com",
    },
  };

  return (
    <>
      <SEOHead
        title="Transformers Modular Display System | Booths and Pavilions in Egypt"
        description="The Transformers modular aluminum display system in Egypt. Codes A to Q for exhibitions, events, and compact conference booths. Available to rent or purchase."
        canonicalPath="/transformers-display-system"
        image={hero.src}
        structuredData={schema}
        keywords={[
          "Transformers Display System",
          "Transformers Modular Display System",
          "Modular Exhibition Display System Egypt",
          "Exhibition Booth Rental Egypt",
        ]}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="bg-white outline-none">
        <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#071a2d] text-white">
          <img src={hero.src} alt={hero.alt} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/75 to-[#071a2d]/30" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-32 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6fbdd7]">
              <Link to="/#services" className="hover:underline">Services</Link>
              <span aria-hidden> / </span>
              Transformers
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-6xl">The Transformers display system</h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-100 sm:text-base">
              A modular aluminum system that can be a booth, a pavilion, a counter, or a branded wall. The same idea runs through exhibitions, events, and conferences. It is one of five services, not a limit on the company.
            </p>
            <Link to={quote} className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1787b2] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6fbdd7] hover:text-[#0a2540]">
              Discover the Transformers display system
            </Link>
          </div>
        </section>

        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs leading-relaxed text-amber-950">
            Transformers for Events Management and Display Systems is an event production and display company in Cairo. This modular system is an aluminum booth framework. It is not affiliated with any entertainment or toy brand.
          </p>
        </section>

        <section id="system" className="scroll-mt-24 bg-white px-4 py-8 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">The system</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Catalog renders below show the parts. They are not photographs of a client project. Installed examples are in the projects section.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {COMPONENTS.map((item) => {
                const photo = siteImage(item.image);
                return (
                  <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                    <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full bg-slate-100 object-contain" />
                    <div className="p-5">
                      <h3 className="font-serif text-xl font-bold text-[#0a2540]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="configurations" className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">Modular possibilities</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Codes A to Q. Footprints and inclusions are the ones printed on each card. Open layouts, pavilions, and add-ons sit alongside the U-shape and L-shape booths.
                </p>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter configurations">
                {(
                  [
                    ["all", `All (${boothProducts.length})`],
                    ["u-shape", "U-shape"],
                    ["l-shape", "L-shape"],
                    ["architectural", "Towers, rings, and gates"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedCategory(id)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${selectedCategory === id ? "bg-[#0a2540] text-white" : "bg-white text-slate-700 hover:bg-slate-200"}`}
                    aria-pressed={selectedCategory === id}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBooths.map((product) => (
                <ProductCard key={product.id} product={product} quoteService={QUOTE.displaySystem} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">Where it is used</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              The same modular idea shows up in three of the company’s other services. These photographs are from the project archive.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {APPLICATIONS.map((item) => {
                const photo = siteImage(item.image);
                return (
                  <Link key={item.title} to={item.href} className="group overflow-hidden rounded-3xl border border-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1787b2]">
                    <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                    <div className="p-5">
                      <h3 className="font-serif text-xl font-bold text-[#0a2540]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1787b2]">View the service <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#071a2d] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">Branding and customization</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Walls, headers, and podiums take the artwork for that show. An open layout such as Code N, or a pavilion such as Code Q, changes the footprint without changing the idea: a frame, a graphic, and a place to meet.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Sizes on the cards are the published footprints. We do not add load ratings or certifications that are not already listed there.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {(["sysGraphics", "sysOpen", "sysPavilion", "sysFrame"] as const).map((id) => {
                const photo = siteImage(id);
                return <img key={id} src={photo.src} alt={photo.alt} loading="lazy" className="aspect-square w-full rounded-2xl bg-white/5 object-cover" />;
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">Installed work</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">Exhibition projects from the archive. Captions use the existing project names.</p>
              </div>
              <Link to="/projects?pillar=exhibitions" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1787b2] hover:underline">
                Exhibition projects <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.id} className="overflow-hidden rounded-3xl border border-slate-200">
                  <img src={project.image} alt={project.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-[#0a2540]">{project.title}</h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8">
              <h2 className="font-serif text-2xl font-bold text-[#0a2540]">Rent for one event</h2>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
                Ask for a rental when you need the system for a dated event. Delivery, installation, and dismantling can be part of that enquiry.
              </p>
              <Link to={quoteHref(QUOTE.displaySystem, { preference: "rental" })} className="mt-6 inline-flex justify-center rounded-xl bg-[#0a2540] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1787b2]">
                Request a rental quote
              </Link>
            </div>
            <div className="flex flex-col rounded-3xl border border-[#1787b2] bg-white p-8">
              <h2 className="font-serif text-2xl font-bold text-[#0a2540]">Purchase the hardware</h2>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
                The same codes are listed for purchase. Tell us how you plan to use them and we will quote the hardware. Storage and technician support are discussed in the enquiry, not assumed here.
              </p>
              <Link to={quoteHref(QUOTE.displaySystem, { preference: "purchase" })} className="mt-6 inline-flex justify-center rounded-xl bg-[#1787b2] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0a2540]">
                Request a purchase quote
              </Link>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="system-faq-heading">
          <div className="mx-auto max-w-3xl">
            <h2 id="system-faq-heading" className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">Questions</h2>
            <div className="mt-8">
              <FaqAccordion items={FAQS} labelledBy="system-faq-heading" />
            </div>
          </div>
        </section>

        <section className="bg-[#0a2540] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Request a configuration</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
              Send the plot and the dates. If you want the published footprints talked through, ask for the configuration details rather than a price list.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to={quoteHref(QUOTE.displaySystem, { preference: "consultation", intent: "catalog" })} className="inline-flex items-center justify-center rounded-xl bg-[#1787b2] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6fbdd7] hover:text-[#0a2540]">
                Request configuration details
              </Link>
              <a href="tel:+201110999646" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                <Phone size={16} /> +20 111 099 9646
              </a>
            </div>
          </div>
        </section>

        <ContinueLinks
          links={[
            { href: "/exhibitions", label: "Exhibitions" },
            { href: "/events", label: "Events" },
            { href: "/conferences", label: "Conferences" },
            { href: "/rental-products?category=transformers_system", label: "Booth catalog" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
