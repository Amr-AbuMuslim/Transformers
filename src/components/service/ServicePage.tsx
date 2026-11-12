import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";
import type { ServiceContent } from "@/data/services/types";
import { productsFor, type ProductItem } from "@/data/products";
import { PROJECTS } from "@/data/projects";
import { quoteHref } from "@/data/navigation";

export type ServiceLayout = "split" | "bands" | "proof" | "stage";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function groupProducts(products: ProductItem[]) {
  const groups: { label: string; items: ProductItem[] }[] = [];
  for (const product of products) {
    const current = groups[groups.length - 1];
    if (current && current.label === product.categoryLabel) current.items.push(product);
    else groups.push({ label: product.categoryLabel, items: [product] });
  }
  return groups;
}

export default function ServicePage({ content, layout }: { content: ServiceContent; layout: ServiceLayout }) {
  const projects = PROJECTS.filter((project) => project.pillar === content.area);
  const products = productsFor(content.area);
  const productGroups = groupProducts(products);
  const quote = quoteHref(content.quote);
  const rentalQuote = quoteHref(content.quote, { preference: "rental" });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.headline,
    description: content.seoDescription,
    url: `https://transformers-me.com${content.path}`,
    areaServed: "Egypt",
    provider: {
      "@type": "Organization",
      name: "Transformers for Events Management and Display Systems",
      url: "https://transformers-me.com",
    },
  };

  const needs = (
    <section id="requirements" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">{content.needsTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{content.needsIntro}</p>
        </Reveal>
        <Needs content={content} layout={layout} />
      </div>
    </section>
  );

  const solutions = (
    <section id="solutions" className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">{content.solutionsTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{content.solutionsIntro}</p>
        </Reveal>
        <Solutions content={content} layout={layout} />
      </div>
    </section>
  );

  const choice = (
    <section className="bg-[#071a2d] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">{content.completeTitle}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{content.completeText}</p>
          <ul className="mt-6 space-y-3">
            {content.completePoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-slate-200">
                <Check size={16} className="mt-0.5 shrink-0 text-[#6fbdd7]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={quote} className="inline-flex items-center justify-center rounded-xl bg-[#1787b2] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6fbdd7] hover:text-[#0a2540]">
              Request a complete solution
            </Link>
            <Link to={rentalQuote} className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Ask about product rental
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <img src={content.completeImage} alt={content.completeImageAlt} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </Reveal>
      </div>
    </section>
  );

  const projectStrip = (
    <section id="projects" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">Related work</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Projects already delivered in this category. Names and descriptions are taken from the project archive.
            </p>
          </div>
          <Link to={`/projects?pillar=${content.area}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#1787b2] hover:underline">
            Explore more projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className={`grid gap-6 ${layout === "proof" ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <img src={project.image} alt={project.title} loading="lazy" className={`w-full object-cover ${layout === "proof" ? "aspect-[16/10]" : "aspect-[4/3]"}`} />
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#1787b2]">{project.category}</p>
                <h3 className="mt-1 font-serif text-lg font-bold text-[#0a2540]">{project.title}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  const rental = (
    <section id="rental" className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">{content.rentalTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{content.rentalIntro}</p>
          </div>
          <Link to={content.catalogHref} className="inline-flex items-center gap-2 text-sm font-semibold text-[#1787b2] hover:underline">
            {content.catalogLabel} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="space-y-10">
          {productGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 font-serif text-xl font-bold text-[#0a2540]">{group.label}</h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((product) => (
                  <ProductCard key={product.id} product={product} quoteService={content.quote} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const prep = (
    <section id="prepare" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">{content.prepTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{content.prepIntro}</p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {content.prep.map((item, index) => (
            <li key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-[#1787b2]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 font-serif text-lg font-bold text-[#0a2540]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );

  const cta = (
    <section className="bg-[#0a2540] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">{content.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{content.ctaText}</p>
        <Link
          to={quote}
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1787b2] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6fbdd7] hover:text-[#0a2540]"
        >
          {content.ctaLabel}
        </Link>
      </div>
    </section>
  );

  const ordered = layout === "proof"
    ? [projectStrip, needs, solutions, choice, rental, prep, cta]
    : [needs, solutions, choice, projectStrip, rental, prep, cta];

  return (
    <>
      <SEOHead title={content.seoTitle} description={content.seoDescription} canonicalPath={content.path} image={content.image} structuredData={schema} />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="bg-white outline-none">
        <Intro content={content} layout={layout} />
        {ordered}
      </main>
      <Footer />
    </>
  );
}

function Intro({ content, layout }: { content: ServiceContent; layout: ServiceLayout }) {
  const imageFirst = layout === "stage" || layout === "proof";
  return (
    <section className="bg-[#071a2d] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 ${imageFirst ? "" : ""}`}>
        <div className={imageFirst ? "lg:order-2" : ""}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6fbdd7]">
            {content.area === "exhibitions"
              ? "Exhibitions"
              : content.area === "events"
                ? "Events"
                : content.area === "sports"
                  ? "Sports tournaments"
                  : "Conferences"}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">{content.headline}</h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-200 sm:text-base">{content.intro}</p>
          <p className="mt-4 border-l-2 border-[#1787b2] pl-4 text-sm leading-relaxed text-slate-300">{content.capability}</p>
        </div>
        <div className={imageFirst ? "lg:order-1" : ""}>
          <img
            src={content.image}
            alt={content.imageAlt}
            className={`w-full rounded-3xl object-cover ${layout === "stage" ? "aspect-[16/10] lg:aspect-[4/3]" : "aspect-[4/3]"}`}
          />
        </div>
      </div>
    </section>
  );
}

function Needs({ content, layout }: { content: ServiceContent; layout: ServiceLayout }) {
  if (layout === "bands") {
    return (
      <div className="mt-10 space-y-8">
        {content.needs.map((group) => (
          <Reveal key={group.title}>
            <h3 className="font-serif text-2xl font-bold text-[#0a2540]">{group.title}</h3>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">{group.intro}</p>
            <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200">
              {group.items.map((item) => (
                <div key={item.title} className="grid gap-1 px-5 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <h4 className="text-sm font-semibold text-[#0a2540]">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className={`mt-10 grid gap-6 ${content.needs.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
      {content.needs.map((group) => (
        <Reveal key={group.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
          <h3 className="font-serif text-2xl font-bold text-[#0a2540]">{group.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{group.intro}</p>
          <ul className="mt-5 space-y-4">
            {group.items.map((item) => (
              <li key={item.title}>
                <h4 className="text-sm font-semibold text-[#0a2540]">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

function Solutions({ content, layout }: { content: ServiceContent; layout: ServiceLayout }) {
  if (layout === "stage") {
    const [lead, ...rest] = content.solutions;
    return (
      <div className="mt-10 space-y-6">
        <Reveal className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-2">
          <img src={lead.image} alt={lead.imageAlt} loading="lazy" className="h-full min-h-64 w-full object-cover" />
          <div className="p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-bold text-[#0a2540]">{lead.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{lead.text}</p>
            <ul className="mt-4 space-y-2">
              {lead.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check size={15} className="mt-0.5 shrink-0 text-[#1787b2]" /> {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((item) => (
            <SolutionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {content.solutions.map((item) => (
        <SolutionCard key={item.title} item={item} />
      ))}
    </div>
  );
}

function SolutionCard({ item }: { item: ServiceContent["solutions"][number] }) {
  return (
    <Reveal className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <img src={item.image} alt={item.imageAlt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold text-[#0a2540]">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
        <ul className="mt-4 space-y-2">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
              <Check size={15} className="mt-0.5 shrink-0 text-[#1787b2]" /> {point}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
