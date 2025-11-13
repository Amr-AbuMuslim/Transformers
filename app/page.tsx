"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, DollarSign, Clock, Boxes } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reusable aluminum components with zero waste production, sustainable for the environment.",
  },
  {
    icon: Boxes,
    title: "Versatile",
    description: "Multiple configurations: U-shape, L-shape, towers, rings, pavilions, and free-space booths.",
  },
  {
    icon: Clock,
    title: "Fast Assembly",
    description: "Set up in 3-4 hours with easy dismantle, storage, and transport. No heavy tools required.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Long-term reusable investment that reduces labor, transportation, and reinstallation costs.",
  },
]

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/modern-aluminum-modular-display-booth-exhibition.jpg"
          alt="Transformers Display System"
          fill
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Transformers Display System
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-4"
          >
            The Ultimate Fitting Solution
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Elegant. Flexible. Eco-Friendly. Premium foldable aluminum booths for exhibitions, trade shows, conferences,
            and events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              Request a Quote <ArrowRight size={20} />
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
            >
              See In Action
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Why Choose Transformers" subtitle="Premium features that set us apart" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border border-border hover:border-secondary hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">What is Transformers?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Transformers is a modular display and booth system made from lightweight, foldable aluminum trusses.
                These components allow exhibitors to build various configurations quickly and with minimal labor.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Reusable, durable, and easy to transport</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Supports fully customizable branding</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">High-quality Taiwanese manufacturing</span>
                </li>
              </ul>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:opacity-80"
              >
                View All Booth Types <ArrowRight size={18} />
              </Link>
            </div>
            <Image
              src="/transformers-aluminum-booth-system-modular.jpg"
              alt="Transformers System"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Perfect For" subtitle="Transformers booths work for every event type" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Exhibitions & Trade Shows",
              "Conferences",
              "Product Launches",
              "Town Hall Meetings",
              "Roadshows & Cycle Meetings",
              "Brand Activations",
              "Event Signage",
              "Registration Areas",
              "Receptions",
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border text-center"
              >
                <p className="font-medium text-foreground">{app}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Exhibition?</h2>
          <p className="text-xl mb-8 opacity-90">Let our experts create the perfect booth solution for your brand.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
