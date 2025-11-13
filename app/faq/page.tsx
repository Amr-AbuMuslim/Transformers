"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    category: "Installation & Setup",
    questions: [
      {
        q: "How long does it take to assemble a Transformers booth?",
        a: "Most booths can be set up in 3-4 hours with our standard tools and experienced team. The modular design eliminates complex assembly processes and reduces labor costs significantly.",
      },
      {
        q: "Do I need special tools or training to set up the booth?",
        a: "No heavy tools are required. Transformers uses simple connection mechanisms that are intuitive. Our team provides full setup support and training for your staff.",
      },
      {
        q: "Can the booth be disassembled and stored easily?",
        a: "Yes, absolutely. The booth can be easily disassembled and stored in standard warehouse space. It's designed for maximum portability and reusability.",
      },
    ],
  },
  {
    category: "Customization & Design",
    questions: [
      {
        q: "Can I customize the booth design?",
        a: "Completely. Transformers is fully modular and customizable. You can choose from pre-designed configurations or create custom layouts. Graphics and branding are fully personalized.",
      },
      {
        q: "How do I update graphics between events?",
        a: "Graphics are printed separately and attached to the aluminum structure. They can be changed quickly and affordably, allowing you to repurpose the same booth for different brands or events.",
      },
      {
        q: "What materials are used?",
        a: "Transformers uses high-quality aluminum trusses with precision-engineered connections. All materials are durable, lightweight, and built to withstand multiple exhibitions.",
      },
    ],
  },
  {
    category: "Cost & Value",
    questions: [
      {
        q: "Is Transformers more cost-effective than other booth solutions?",
        a: "Yes. While initial investment may be comparable, reusability across multiple events significantly reduces cost-per-use. You eliminate recurring fabrication, rental, and high installation labor costs.",
      },
      {
        q: "What are typical cost savings compared to wooden booths?",
        a: "Wooden booths require 10+ hours installation and high transport costs. Transformers saves 6-7 hours in assembly, reduces transportation costs by up to 60%, and has no disposal expenses.",
      },
      {
        q: "Can I rent a booth instead of purchasing?",
        a: "Yes, we offer premium booth rental options for companies not ready to invest in a permanent system. Rental booths include full setup and support services.",
      },
    ],
  },
  {
    category: "Environment & Sustainability",
    questions: [
      {
        q: "How does Transformers support environmental goals?",
        a: "Transformers is built from recyclable aluminum with zero-waste production. The reusable design eliminates single-use booth waste, reducing your event's environmental footprint significantly.",
      },
      {
        q: "What's the lifespan of a Transformers booth?",
        a: "With proper care, a Transformers booth can be used for 50+ exhibitions. The durable Taiwanese aluminum construction withstands multiple setups and events without degradation.",
      },
      {
        q: "Are the materials recyclable at end-of-life?",
        a: "Yes, all components are made from recyclable aluminum. At end-of-life, 100% of materials can be recycled or repurposed.",
      },
    ],
  },
  {
    category: "Applications & Events",
    questions: [
      {
        q: "What types of events can use Transformers booths?",
        a: "Transformers works for exhibitions, trade shows, conferences, product launches, roadshows, brand activations, town halls, and more. The modular system adapts to any event type.",
      },
      {
        q: "What sizes are available?",
        a: "We offer U-shape, L-shape, towers, rings, pavilions, and free-space configurations. Custom sizes are available for specific venue requirements.",
      },
      {
        q: "Can multiple booths be combined?",
        a: "Yes, booths can be combined to create larger displays or multi-brand experiences. The modular system allows unlimited configuration possibilities.",
      },
    ],
  },
  {
    category: "Support & Service",
    questions: [
      {
        q: "What support services do you provide?",
        a: "We provide full setup, design consulting, graphic design services, on-site technical support, and post-event logistics. Our team ensures seamless booth deployment.",
      },
      {
        q: "How do I request a quote?",
        a: "Contact us via email (sales@transformers-me.com), phone (+201110999646 / +201110999648), or WhatsApp. Our sales team will provide customized quotes within 24 hours.",
      },
      {
        q: "What areas do you service?",
        a: "As the sole distributor of Transformers in Egypt and the MENA region, we serve the entire Middle East & Africa. International shipping is available upon request.",
      },
    ],
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border border-border rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 bg-card hover:bg-card/80 transition-colors"
      >
        <h4 className="font-semibold text-foreground text-left">{question}</h4>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown className="text-secondary" size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border bg-background"
          >
            <p className="p-6 text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <>
      <Navbar />

      <PageHeader title="Frequently Asked Questions" image="/faq-help-support.jpg" />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Everything You Need to Know"
            subtitle="Find answers to common questions about Transformers display systems"
          />

          <div className="space-y-12">
            {faqItems.map((category, catIndex) => (
              <div key={catIndex}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3"
                >
                  <div className="w-1 h-8 bg-gradient-to-b from-secondary to-accent rounded" />
                  {category.category}
                </motion.h3>

                <div className="space-y-3 mb-8">
                  {category.questions.map((item, qIndex) => (
                    <FAQItem key={qIndex} question={item.q} answer={item.a} index={qIndex} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-lg p-8 text-center mt-16"
          >
            <h3 className="font-serif text-2xl font-bold text-secondary-foreground mb-3">Still Have Questions?</h3>
            <p className="text-secondary-foreground/90 mb-6">
              Our team is ready to help. Reach out for personalized assistance with your booth requirements.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-secondary-foreground text-secondary rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
