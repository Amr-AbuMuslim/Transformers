"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

const boothTypes = [
  {
    category: "U-Shape Booths",
    items: ["Size A", "Size B", "Size C", "Size D", "Size E"],
    description:
      "Classic U-shaped configurations perfect for interactive exhibitions",
    image: "/u-shape-aluminum-booth.jpg",
  },
  {
    category: "L-Shape Booths",
    items: ["Size F", "Size G", "Size H"],
    description: "Ideal for corner spaces and semi-enclosed booth areas",
    image: "/l-shape-modular-booth.jpg",
  },
  {
    category: "Luxury & Elegant",
    items: ["Premium Configurations"],
    description: "High-end designs for premium brands and luxury exhibitions",
    image: "/luxury-exhibition-booth-design.jpg",
  },
  {
    category: "Specialized Booths",
    items: [
      "With Towers (G, P)",
      "With Rings (H, J)",
      "Octopus Booth (N)",
      "Free Space (O)",
      "Pavilion (Q)",
    ],
    description: "Unique configurations for specific event requirements",
    image: "/specialized-modular-booth-system.jpg",
  },
];

const extras = [
  { code: "I", name: "Tower", description: "Additional height and visibility" },
  {
    code: "J",
    name: "Wooden Ring",
    description: "Elegant ring structure element",
  },
  { code: "K", name: "China Gate", description: "Decorative gateway entrance" },
  { code: "L", name: "Wooden Sign", description: "Custom branding signage" },
  { code: "M", name: "Podium", description: "Included with all booths" },
];

export default function Products() {
  return (
    <>
      <Navbar />

      <PageHeader
        title="Transformers Booth System"
        image="/complete-modular-booth-system-catalog.jpg"
      />

      {/* Overview */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Complete Booth Catalog"
            subtitle="Modular configurations for every space and requirement"
          />

          <div className="bg-card rounded-lg p-8 border border-border mb-12">
            <p className="text-lg text-muted-foreground mb-4">
              Transformers offers a comprehensive range of booth types that can
              be mixed and matched to create the perfect exhibition setup. All
              booths include a podium and support customizable branding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Spotlights</p>
                <p className="font-semibold text-foreground">3 per 9 sqm</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Assembly Time
                </p>
                <p className="font-semibold text-foreground">3-4 hours</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Customization
                </p>
                <p className="font-semibold text-foreground">
                  Fully Custom Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booth Types */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Booth Types"
            subtitle="Choose the configuration that fits your event"
          />

          <div className="space-y-12">
            {boothTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-3">
                    {type.category}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <img
                    src={type.image || "/placeholder.svg"}
                    alt={type.category}
                    className="rounded-lg w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Elements */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Extra Elements"
            subtitle="Enhance your booth with premium add-ons"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {extras.map((extra, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border text-center"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3 text-secondary-foreground font-bold text-lg">
                  {extra.code}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {extra.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {extra.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banners Info */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="bg-background rounded-lg p-12 border border-border text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Banners & Graphics
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              All booths support high-quality printed graphics and banners.
              Choose from single or double-print options for maximum branding
              impact. Graphics can be updated quickly and affordably for
              different events.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-primary rounded-lg p-4">
                <p className="font-semibold text-primary-foreground">
                  Single Print
                </p>
              </div>
              <div className="bg-primary rounded-lg p-4">
                <p className="font-semibold text-primary-foreground">
                  Double Print
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
