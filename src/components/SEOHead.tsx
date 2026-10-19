import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  type?: "website" | "article" | "product";
  keywords?: string[];
  structuredData?: object | object[];
}

const BASE_URL = "https://transformers-me.com";
const DEFAULT_IMAGE = `${BASE_URL}/LOGO (1) (2).png`;

export default function SEOHead({
  title,
  description,
  canonicalPath,
  image = DEFAULT_IMAGE,
  type = "website",
  keywords = [
    "Transformers Display System",
    "Transformers Modular Display System",
    "Modular Exhibition Display System",
    "Exhibition Booth Rental Egypt",
    "Exhibition Stand Design and Build Egypt",
    "Event Management and Production Egypt",
    "Conference Display Solutions Egypt",
    "Exhibition and Event Equipment Rental Egypt",
  ],
  structuredData,
}: SEOHeadProps) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${BASE_URL}${currentPath === "/" ? "" : currentPath}`;
  const fullImageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attr: "name" | "property", key: string, content: string) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // 2. Standard Meta
    setMetaTag("name", "description", description);
    if (keywords && keywords.length > 0) {
      setMetaTag("name", "keywords", keywords.join(", "));
    }

    // 3. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", fullImageUrl);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:site_name", "Transformers for Events Management and Display Systems");
    setMetaTag("property", "og:locale", "en_US");

    // 5. Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", fullImageUrl);

    // 6. Structured Data (JSON-LD)
    const scriptId = "structured-data-jsonld";
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Optional cleanup on unmount
    };
  }, [title, description, canonicalUrl, fullImageUrl, type, keywords, structuredData]);

  return null;
}
