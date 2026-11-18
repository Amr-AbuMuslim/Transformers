import type { ImageId } from "@/data/images";
import type { ServiceArea } from "@/data/products";

export type PrepIcon =
  | "map"
  | "palette"
  | "box"
  | "zap"
  | "calendar"
  | "send"
  | "users"
  | "mic"
  | "ruler"
  | "monitor"
  | "flag";

export interface VisualItem {
  title: string;
  text: string;
  image: ImageId;
  href?: string;
}

export interface NeedGroup {
  title: string;
  intro: string;
  items: VisualItem[];
}

export interface PrepItem {
  title: string;
  text: string;
  icon: PrepIcon;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CompactBlock {
  title: string;
  intro: string;
  items: VisualItem[];
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
  image: ImageId;
  needsTitle: string;
  needsIntro: string;
  needs: NeedGroup[];
  solutionsTitle: string;
  solutionsIntro: string;
  solutions: VisualItem[];
  compact?: CompactBlock;
  completeTitle: string;
  completeText: string;
  completePoints: string[];
  completeImage: ImageId;
  rentalTitle: string;
  rentalIntro: string;
  catalogHref: string;
  catalogLabel: string;
  prepTitle: string;
  prepIntro: string;
  prep: PrepItem[];
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
}
