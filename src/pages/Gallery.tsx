"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Luxury Tech Booth",
    image: "/luxury-tech-booth-exhibition-design.jpg",
  },
  {
    id: 2,
    title: "Fashion Brand Display",
    image: "/fashion-brand-booth-luxury-display.jpg",
  },
  {
    id: 3,
    title: "Interactive Experience",
    image: "/interactive-exhibition-booth-experience.jpg",
  },
  {
    id: 4,
    title: "Premium Furniture Booth",
    image: "/furniture-booth-luxury-exhibition.jpg",
  },
  {
    id: 5,
    title: "Digital Innovation Hub",
    image: "/interactive-technology-digital-experience.jpg",
  },
  {
    id: 6,
    title: "Luxury Retail Display",
    image: "/luxury-design-team-working-together.jpg",
  },
  {
    id: 7,
    title: "Luxury Retail Display",
    image: "/modern-aluminum-modular-display-booth-exhibition.jpg",
  },
  {
    id: 8,
    title: "Luxury Retail Display",
    image: "/modern-aluminum-modular-display-booth-exhibition.jpg",
  },
  {
    id: 9,
    title: "Luxury Retail Display",
    image: "/modern-aluminum-modular-display-booth-exhibition.jpg",
  },
  {
    id: 10,
    title: "Luxury Retail Display",
    image: "/modern-aluminum-modular-display-booth-exhibition.jpg",
  },
  {
    id: 11,
    title: "Luxury Retail Display",
    image: "/modern-aluminum-modular-display-booth-exhibition.jpg",
  },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  return (
    <>
      <Navbar />

      <PageHeader
        title="Our Work"
        image="/exhibition-booth-setup-professional-team.jpg"
      />

      {/* Carousel Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Featured Exhibitions"
            subtitle="Explore our latest premium booth designs"
          />

          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-card border border-border">
            <img
              src={galleryItems[currentSlide].image || "/placeholder.svg"}
              alt={galleryItems[currentSlide].title}
              className="w-full h-full object-cover"
            />

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {galleryItems[currentSlide].title}
            </div>

            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
              {currentSlide + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-2 justify-center mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-secondary w-8" : "bg-border w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Complete Portfolio"
            subtitle="A selection of our recent exhibition projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer border border-border"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-serif text-xl font-semibold text-center px-4">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
