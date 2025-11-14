"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TrustedByCarousel from "@/components/TrustedByCarousel";

// ------------------------------
// SPLIT IMAGES 1–18
// ------------------------------

const carouselImages = [
  { id: 1, title: "Exhibition 1", image: "/1.jpg" },
  { id: 2, title: "Exhibition 2", image: "/2.jpg" },
  { id: 3, title: "Exhibition 3", image: "/3.jpg" },
  { id: 4, title: "Exhibition 4", image: "/4.jpg" },
  { id: 5, title: "Exhibition 5", image: "/5.jpg" },
  { id: 6, title: "Exhibition 6", image: "/8.jpg" },
  { id: 8, title: "Exhibition 6", image: "/28.jpg" },
  { id: 9, title: "Exhibition 6", image: "/32.jpg" },
  { id: 10, title: "Exhibition 6", image: "/25.jpg" },
];

const galleryImages = [
  { id: 7, title: "Gallery Item 1", image: "/9.jpg" },
  { id: 8, title: "Gallery Item 2", image: "/8.jpg" },
  { id: 9, title: "Gallery Item 3", image: "/25.jpg" },
  { id: 10, title: "Gallery Item 4", image: "/10.jpg" },
  { id: 11, title: "Gallery Item 5", image: "/21.jpg" },
  { id: 12, title: "Gallery Item 6", image: "/12.jpg" },
  { id: 13, title: "Gallery Item 7", image: "/13.jpg" },
  { id: 14, title: "Gallery Item 8", image: "/14.jpg" },
  { id: 15, title: "Gallery Item 9", image: "/15.jpg" },
  { id: 16, title: "Gallery Item 10", image: "/26.jpg" },
  { id: 17, title: "Gallery Item 11", image: "/29.jpg" },
  { id: 18, title: "Gallery Item 12", image: "/18.jpg" },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <>
      <Navbar />

      <PageHeader title="Our Work" image="/1.jpg" />

      {/* Carousel Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Featured Exhibitions"
            subtitle="Explore our latest premium booth designs"
          />

          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-card border border-border">
            <img
              src={carouselImages[currentSlide].image}
              alt={carouselImages[currentSlide].title}
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

            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {carouselImages[currentSlide].title}
            </div> */}

            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
              {currentSlide + 1} / {carouselImages.length}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-2 justify-center mt-6">
            {carouselImages.map((_, index) => (
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

      <TrustedByCarousel />

      {/* Grid Gallery */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Complete Portfolio"
            subtitle="A selection of our recent exhibition projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer border border-border"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
