import type { ServiceArea } from "@/data/products";

export interface NeedItem {
  title: string;
  text: string;
}

export interface NeedGroup {
  title: string;
  intro: string;
  items: NeedItem[];
}

export interface SolutionItem {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface PrepItem {
  title: string;
  text: string;
}

export interface ServiceContent {
  area: ServiceArea;
  path: string;
  quote: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  capability: string;
  image: string;
  imageAlt: string;
  needsTitle: string;
  needsIntro: string;
  needs: NeedGroup[];
  solutionsTitle: string;
  solutionsIntro: string;
  solutions: SolutionItem[];
  completeTitle: string;
  completeText: string;
  completePoints: string[];
  completeImage: string;
  completeImageAlt: string;
  rentalTitle: string;
  rentalIntro: string;
  catalogHref: string;
  catalogLabel: string;
  prepTitle: string;
  prepIntro: string;
  prep: PrepItem[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
}
