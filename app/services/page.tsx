"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    title: "Booth Design",
    description: "Custom-designed booths that reflect your brand identity and captivate your target audience.",
    image: "/modern-booth-design-luxury-exhibition.jpg",
  },
  {
    title: "Event Planning",
    description: "End-to-end exhibition management including logistics, timeline, and coordination.",
    image: "/event-planning-conference-management.jpg",
  },
  {
    title: "Custom Fabrication",
    description: "Precision fabrication of display structures using premium materials and techniques.",
    image: "/custom-fabrication-materials-craftsmanship.jpg",
  },
  {
    title: "Interactive Technology",
    description: "Cutting-edge tech integration including VR, touchscreens, and dynamic displays.",
    image: "/interactive-technology-digital-experience.jpg",
  },
  {
    title: "Graphics & Branding",
    description: "Professional graphics design and branded environment creation for maximum impact.",
    image: "/graphics-design-brand-environment.jpg",
  },
  {
    title: "Booth Rental",
    description: "Premium pre-designed booth options available for immediate deployment.",
    image: "/booth-rental-ready-made-setup.jpg",
  },
]

export default function Services() {
  return (
    <>
      <Navbar />

      <PageHeader title="Our Services" image="/luxury-exhibition-services-professional.jpg" />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Premium Exhibition Solutions"
            subtitle="Comprehensive services designed to elevate your brand presence"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-secondary transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
