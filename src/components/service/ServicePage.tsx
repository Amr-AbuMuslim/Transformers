import { Link } from "react-router-dom";
import {
  ArrowRight,
  Box,
  Calendar,
  Flag,
  Map,
  Mic,
  Monitor,
  Palette,
  Ruler,
  Send,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";
import FaqAccordion from "@/components/FaqAccordion";
import type { PrepIcon, ServiceContent, VisualItem } from "@/data/services/types";
import { siteImage } from "@/data/images";
import { productsFor, type ProductItem } from "@/data/products";
import { PROJECTS } from "@/data/projects";
import { quoteHref } from "@/data/navigation";

export type ServiceLayout = "split" | "bands" | "proof" | "stage";

const PREP_ICONS: Record<PrepIcon, LucideIcon> = {
  map: Map,
  palette: Palette,
  box: Box,
  zap: Zap,
  calendar: Calendar,
  send: Send,
  users: Users,
  mic: Mic,
  ruler: Ruler,
  monitor: Monitor,
  flag: Flag,
};

const AREA_LABEL: Record<ServiceContent["area"], string> = {
  exhibitions: "Exhibitions",
  events: "Events",
  sports: "Sports tournaments",
  conferences: "Conferences",
};

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

function isCatalogRender(src: string) {
  return /^\/[^/]+\.(png|jpe?g)$/i.test(src);
}

function SuiteFrame({
  item,
  place,
  className = "",
}: {
  item: VisualItem;
  place: "feature" | "side" | "row";
  className?: string;
}) {
  const photo = siteImage(item.image);
  const catalog = isCatalogRender(photo.src);
  const frame = "group overflow-hidden rounded-[1.75rem] shadow-[0_18px_40px_-28px_rgba(7,26,45,0.55)]";

  if (place === "row") {
    return (
      <article className={`${frame} bg-white ${className}`}>
        <div className={`relative overflow-hidden ${catalog ? "aspect-[4/3] bg-[#071a2d]" : "aspect-[16/10]"}`}>
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className={`h-full w-full transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${catalog ? "object-contain p-6" : "object-cover object-center"}`}
          />
        </div>
        <div className="px-1 pb-1 pt-3">
          <h4 className="font-serif text-lg font-medium leading-tight text-[#0a2540]">{item.title}</h4>
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-slate-500">{item.text}</p>
        </div>
      </article>
    );
  }

  if (catalog) {
    return (
      <article className={`${frame} flex h-full min-h-48 flex-col bg-[#071a2d] ${className}`}>
        <div className="relative min-h-36 flex-1">
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain p-5 transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <div className="px-4 pb-4 sm:px-5">
          <h4 className="font-serif text-lg font-medium leading-tight text-white">{item.title}</h4>
          <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-white/75">{item.text}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={`${frame} relative h-full min-h-48 ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-[#071a2d] ${place === "feature" ? "via-[#071a2d]/25" : "via-transparent"} to-transparent`} />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
        <h4 className={`font-serif font-medium leading-tight text-white ${place === "feature" ? "text-2xl sm:text-3xl" : "text-lg"}`}>{item.title}</h4>
        <p className={`mt-2 max-w-md leading-snug text-white/80 ${place === "feature" ? "text-sm sm:text-base" : "line-clamp-2 text-sm"}`}>{item.text}</p>
      </div>
    </article>
  );
}

function RoleSuite({ groups }: { groups: ServiceContent["needs"] }) {
  return (
    <div className="mt-14 space-y-20">
      {groups.map((group) => {
        const leadAt = Math.max(
          0,
          group.items.findIndex((item) => !isCatalogRender(siteImage(item.image).src)),
        );
        const lead = group.items[leadAt];
        const rest = group.items.filter((_, index) => index !== leadAt);
        const beside = rest.slice(0, 2);
        const after = rest.slice(2);
        return (
          <div key={group.title}>
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1787b2]">0{groups.indexOf(group) + 1}</p>
              <h3 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#0a2540] sm:text-4xl">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{group.intro}</p>
            </div>
            <div className="mt-8 grid gap-3 lg:grid-cols-6">
              <SuiteFrame item={lead} place="feature" className="min-h-[320px] lg:col-span-4 lg:row-span-2 lg:min-h-[540px]" />
              {beside.map((item) => (
                <SuiteFrame key={item.title} item={item} place="side" className="lg:col-span-2 lg:min-h-[264px]" />
              ))}
            </div>
            {after.length > 0 && (
              <div className="mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
                {after.map((item, index) => {
                  const remainder = after.length % 3;
                  const wide = remainder !== 0 && index >= after.length - remainder;
                  return <SuiteFrame key={item.title} item={item} place="row" className={wide ? "lg:col-span-3" : "lg:col-span-2"} />;
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function VisualCard({ item, aspect = "aspect-[4/3]", dark = false }: { item: VisualItem; aspect?: string; dark?: boolean }) {
  const photo = siteImage(item.image);
  const className = `group block overflow-hidden rounded-3xl border ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1787b2]`;
  const media = (
    <>
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className={`${aspect} w-full object-cover transition duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
      <div className={dark ? "p-4" : "p-4 sm:p-5"}>
        <h4 className={`font-serif text-lg font-bold ${dark ? "text-white" : "text-[#0a2540]"}`}>{item.title}</h4>
        <p className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{item.text}</p>
      </div>
    </>
  );
  if (item.href) {
    return (
      <Link to={item.href} className={className}>
        {media}
      </Link>
    );
  }
  return <article className={className}>{media}</article>;
}

export default function ServicePage({ content, layout }: { content: ServiceContent; layout: ServiceLayout }) {
  const projects = PROJECTS.filter((project) => project.pillar === content.area);
  const products = productsFor(content.area);
  const productGroups = groupProducts(products);
  const quote = quoteHref(content.quote);
  const rentalQuote = quoteHref(content.quote, { preference: "rental" });
  const hero = siteImage(content.image);
  const complete = siteImage(content.completeImage);

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

  return (
    <>
      <SEOHead title={content.seoTitle} description={content.seoDescription} canonicalPath={content.path} image={hero.src} structuredData={schema} />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="bg-white outline-none">
        <Intro content={content} layout={layout} heroSrc={hero.src} heroAlt={hero.alt} quote={quote} />

        <section id="requirements" className={`scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ${layout === "proof" ? "bg-[#071a2d] text-white" : "bg-white"}`}>
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className={`font-serif text-3xl font-bold sm:text-4xl ${layout === "proof" ? "text-white" : "text-[#0a2540]"}`}>{content.needsTitle}</h2>
              <p className={`mt-3 max-w-3xl text-sm leading-relaxed sm:text-base ${layout === "proof" ? "text-slate-300" : "text-slate-600"}`}>{content.needsIntro}</p>
            </Reveal>
            <Needs content={content} layout={layout} />
          </div>
        </section>

        <section id="solutions" className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">{content.solutionsTitle}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{content.solutionsIntro}</p>
            </Reveal>
            <Solutions items={content.solutions} layout={layout} />
            {content.compact && <Compact block={content.compact} />}
          </div>
        </section>

        <section className="bg-[#071a2d] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6fbdd7]">Complete solutions</p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">{content.completeTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{content.completeText}</p>
              <ul className="mt-6 space-y-3">
                {content.completePoints.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-slate-200">{point}</li>
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
              <img src={complete.src} alt={complete.alt} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
            </Reveal>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">Related work</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Projects already in this category. Names and descriptions come from the project archive, not from stock photography.
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

        <section id="rental" className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1787b2]">Rental products</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">{content.rentalTitle}</h2>
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

        <section id="prepare" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-3xl font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">{content.prepTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{content.prepIntro}</p>
            <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.prep.map((item, index) => {
                const Icon = PREP_ICONS[item.icon];
                return (
                  <li key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1787b2]/10 text-[#1787b2]">
                        <Icon size={18} aria-hidden />
                      </span>
                      <p className="text-xs font-bold uppercase tracking-wide text-[#1787b2]">{String(index + 1).padStart(2, "0")}</p>
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-bold text-[#0a2540]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl">
            <h2 id="faq-heading" className="font-serif text-3xl font-bold text-[#0a2540] sm:text-4xl">Questions</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">Answers limited to what this service actually covers.</p>
            <div className="mt-8">
              <FaqAccordion items={content.faqs} labelledBy="faq-heading" />
            </div>
          </div>
        </section>

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
      </main>
      <Footer />
    </>
  );
}

function Intro({
  content,
  layout,
  heroSrc,
  heroAlt,
  quote,
}: {
  content: ServiceContent;
  layout: ServiceLayout;
  heroSrc: string;
  heroAlt: string;
  quote: string;
}) {
  if (layout === "proof") {
    return (
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#071a2d] text-white">
        <img src={heroSrc} alt={heroAlt} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[center_20%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/70 to-[#071a2d]/25" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6fbdd7]">{AREA_LABEL[content.area]}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-6xl">{content.headline}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-100 sm:text-base">{content.intro}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">{content.capability}</p>
          <Link to={quote} className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1787b2] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6fbdd7] hover:text-[#0a2540]">
            {content.ctaLabel}
          </Link>
        </div>
      </section>
    );
  }

  const wide = layout === "stage";
  return (
    <section className="bg-[#071a2d] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6fbdd7]">{AREA_LABEL[content.area]}</p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">{content.headline}</h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-200 sm:text-base">{content.intro}</p>
          <p className="mt-4 border-l-2 border-[#1787b2] pl-4 text-sm leading-relaxed text-slate-300">{content.capability}</p>
          <Link to={quote} className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1787b2] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6fbdd7] hover:text-[#0a2540]">
            {content.ctaLabel}
          </Link>
        </div>
        <img
          src={heroSrc}
          alt={heroAlt}
          fetchPriority="high"
          className={`w-full rounded-3xl object-cover ${wide ? "aspect-[4/3]" : "aspect-[4/3] lg:aspect-[5/4]"}`}
        />
      </div>
    </section>
  );
}

function Needs({ content, layout }: { content: ServiceContent; layout: ServiceLayout }) {
  if (layout === "bands") {
    return (
      <div className="mt-10 space-y-8">
        {content.needs.map((group, groupIndex) => (
          <div key={group.title} className={`rounded-[2rem] p-5 sm:p-8 ${groupIndex % 2 === 0 ? "bg-[#071a2d] text-white" : "bg-slate-50 text-[#0a2540]"}`}>
            <h3 className="font-serif text-2xl font-bold">{group.title}</h3>
            <p className={`mt-2 max-w-3xl text-sm ${groupIndex % 2 === 0 ? "text-slate-300" : "text-slate-600"}`}>{group.intro}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map((item) => (
                <VisualCard key={item.title} item={item} aspect="aspect-[16/10]" dark={groupIndex % 2 === 0} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (layout === "proof") {
    return (
      <div className="mt-10 space-y-12">
        {content.needs.map((group) => (
          <div key={group.title}>
            <h3 className="font-serif text-2xl font-bold text-white">{group.title}</h3>
            <p className="mt-2 max-w-3xl text-sm text-slate-300">{group.intro}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map((item) => {
                const photo = siteImage(item.image);
                return (
                  <article key={item.title} className="group relative min-h-64 overflow-hidden rounded-3xl">
                    <img src={photo.src} alt={photo.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h4 className="font-serif text-lg font-bold text-white">{item.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-200">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (layout === "split") return <RoleSuite groups={content.needs} />;

  return (
    <div className="mt-10">
      {content.needs.map((group) => (
        <div key={group.title}>
          <h3 className="font-serif text-2xl font-bold text-[#0a2540]">{group.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{group.intro}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <VisualCard key={item.title} item={item} aspect="aspect-[16/10]" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Solutions({ items, layout }: { items: VisualItem[]; layout: ServiceLayout }) {
  if (layout === "bands") {
    return (
      <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
        {items.map((item) => (
          <div key={item.title} className="w-[18rem] shrink-0 sm:w-[22rem]">
            <VisualCard item={item} aspect="aspect-[4/3]" />
          </div>
        ))}
      </div>
    );
  }

  if (layout === "proof") {
    return (
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <VisualCard key={item.title} item={item} aspect="aspect-[16/9]" />
        ))}
      </div>
    );
  }

  if (layout === "split") {
    const [lead, ...rest] = items;
    return (
      <div className="mt-10 space-y-6">
        {lead && <VisualCard item={lead} aspect="aspect-[16/8] sm:aspect-[21/9]" />}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <VisualCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <VisualCard key={item.title} item={item} aspect="aspect-[16/10]" />
      ))}
    </div>
  );
}

function Compact({ block }: { block: NonNullable<ServiceContent["compact"]> }) {
  return (
    <div className="mt-16 rounded-[2rem] border border-[#1787b2]/20 bg-white p-5 sm:p-8">
      <h3 className="font-serif text-2xl font-bold text-[#0a2540] sm:text-3xl">{block.title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{block.intro}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {block.items.map((item) => (
          <VisualCard key={item.title} item={item} aspect="aspect-[4/3]" />
        ))}
      </div>
    </div>
  );
}
