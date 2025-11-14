"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

export const booths = [
  {
    code: "A",
    name: "U Shape Booth – Code A",
    sizes: ["3×3", "4×3", "5×3", "6×3", "9×3"],
    specs: [
      "U SHAPE BOOTH / Podium Included",
      "Wooden Sign (70×30 CM / vinyl print)",
      "3 Spotlights for every 9 m²",
    ],
    image: "/A.png",
  },

  {
    code: "B",
    name: "U Shape Elegant Booth – Code B",
    sizes: ["3×3", "4×3", "5×3", "6×3", "9×3"],
    specs: ["U SHAPE BOOTH / Podium Included", "3 Spotlights for every 9 m²"],
    image: "/B.jpg",
  },

  {
    code: "C",
    name: "U Shape Luxury Booth – Code C",
    sizes: ["6×3", "6×4", "6×5"],
    specs: [
      "U SHAPE BOOTH / Podium Included",
      "Wooden Sign (70×30 CM / vinyl print)",
      "3 Spotlights for every 9 m²",
      "Extra Spotlight: 75 LE",
      "Single Print",
      "Extra Banners: 80 EGP/m² (double print)",
    ],
    image: "/C.png",
  },

  {
    code: "D",
    name: "U Shape Simple Booth – Code D",
    sizes: ["6×3", "6×4", "6×5"],
    specs: ["U SHAPE BOOTH / Podium Included", "3 Spotlights for every 9 m²"],
    image: "/D.png",
  },

  {
    code: "E",
    name: "U Shape Economic Booth – Code E",
    sizes: ["3×3", "4×3", "5×3", "6×3", "7×3"],
    specs: [
      "U SHAPE BOOTH / Podium Included",
      "3 Spotlights for every 9 m²",
      "Extra Spotlight: 75 LE",
      "Single Print",
      "Extra Banners: 80 EGP/m² (double print)",
    ],
    image: "/E.png",
  },

  {
    code: "F",
    name: "L Shape Simple Booth – Code F",
    sizes: ["3×3", "4×3", "5×3", "6×3", "9×3"],
    specs: ["L SHAPE BOOTH / Podium Included", "3 Spotlights for every 9 m²"],
    image: "/F.png",
  },

  {
    code: "G",
    name: "Elegant Booth with Tower – Code G",
    sizes: ["4×3", "5×3", "6×3", "7×3", "8×3"],
    specs: [
      "L SHAPE BOOTH / Podium Included / Tower",
      "3 Spotlights for every 9 m²",
    ],
    image: "/G.png",
  },

  {
    code: "H",
    name: "Elegant Booth with Ring – Code H",
    sizes: ["4×3", "5×3", "6×3", "7×3", "8×3"],
    specs: [
      "L SHAPE BOOTH / Podium Included / Wooden Ring",
      "Wooden Sign (70×30 CM / vinyl print)",
      "3 Spotlights for every 9 m²",
    ],
    image: "/H.jpg",
  },

  {
    code: "I",
    name: "Extra Tower – Code I",
    sizes: ["85H × 420W"],
    specs: ["Tower Add-on Structure"],
    image: "/I.jpg",
  },

  {
    code: "J",
    name: "Wooden Ring – Code J",
    sizes: ["DIA: 125 CM"],
    specs: ["Wooden Ring with Double Print"],
    image: "/J.png",
  },

  {
    code: "K",
    name: "China Gate – Code K",
    sizes: [],
    specs: ["Decorative China Gate Entrance"],
    image: "/K.png",
  },

  {
    code: "L",
    name: "Wooden Sign – Code L",
    sizes: ["70×30 CM"],
    specs: ["Vinyl Print"],
    image: "/L.png",
  },

  {
    code: "M",
    name: "Podium – Code M",
    sizes: ["90×130 CM"],
    specs: ["Single Print with sign and lighting", "Price: 500 LE"],
    image: "/M.png",
  },

  {
    code: "N",
    name: "Octopus Booth – Code N",
    sizes: ["3×3"],
    specs: ["Full Print and Lighting"],
    image: "/N.png",
  },

  {
    code: "O",
    name: "Free Space Booth – Code O",
    sizes: [],
    specs: ["Custom Free-Space Layout"],
    image: "/O.png",
  },

  {
    code: "P",
    name: "U Shape Luxury Booth with Tower – Code P",
    sizes: ["6×3", "6×4", "6×5"],
    specs: [
      "U SHAPE BOOTH / Podium Included / Tower",
      "Wooden Sign (70×30 CM / vinyl print)",
    ],
    image: "/P.png",
  },

  {
    code: "Q",
    name: "Pavilion – Code Q",
    sizes: ["3×3", "3×4"],
    specs: [
      "U SHAPE BOOTH / Podium Included",
      "3 Spotlights for every 9 m²",
      "Extra Spotlight: 75 LE",
    ],
    image: "/Q.jpg",
  },
];

export default function Products() {
  return (
    <>
      <Navbar />

      <PageHeader title="Transformers Booth System" image="/Products.jpg" />

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

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto space-y-20">
          {booths.map((booth, index) => (
            <motion.div
              key={booth.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={booth.image}
                alt={booth.name}
                className="rounded-lg w-full shadow"
              />

              <div>
                <h3 className="font-serif text-3xl font-bold mb-3">
                  {booth.name}
                </h3>

                {booth.sizes.length > 0 && (
                  <p className="mb-3 text-muted-foreground">
                    Available Sizes: {booth.sizes.join(", ")}
                  </p>
                )}

                <ul className="space-y-2 mb-3">
                  {booth.specs.map((spec, i) => (
                    <li key={i} className="flex gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
