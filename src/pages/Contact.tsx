"use client";

import type React from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    boothType: "",
    eventType: "",
    services: [] as string[],
    message: "",
    uploadFiles: false,
    whatsapp: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />

      <PageHeader
        title="Contact Transformers"
        image="/contact-support-team.jpg"
      />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Get in Touch"
            subtitle="Request a quote or get expert advice on your booth needs"
          />

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-lg p-8 text-center mt-16"
          >
            <h3 className="font-serif text-2xl font-bold text-secondary-foreground mb-3">
              Still Have Questions?
            </h3>
            <p className="text-secondary-foreground/90 mb-6">
              Our team is ready to help. Reach out for personalized assistance
              with your booth requirements.
            </p>
            <a
              href="#contact-form"
              className="inline-block px-6 py-3 bg-secondary-foreground text-secondary rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Contact Our Team
            </a>
          </motion.div>

          {/* Contact Form */}
          <form id="contact-form" onSubmit={handleSubmit} className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
              />
              <select
                name="boothType"
                value={formData.boothType}
                onChange={handleChange}
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
              >
                <option value="">Select Booth Type</option>
                <option value="standard">Standard Booth</option>
                <option value="premium">Premium Booth</option>
              </select>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
              >
                <option value="">Select Event Type</option>
                <option value="trade-show">Trade Show</option>
                <option value="conference">Conference</option>
              </select>
              <div className="flex items-center space-x-4">
                <label>
                  <input
                    type="checkbox"
                    name="uploadFiles"
                    checked={formData.uploadFiles}
                    onChange={() =>
                      handleChange({
                        target: {
                          name: "uploadFiles",
                          type: "checkbox",
                          checked: !formData.uploadFiles,
                        },
                      })
                    }
                    className="accent-secondary-foreground"
                  />
                  Upload Files
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="whatsapp"
                    checked={formData.whatsapp}
                    onChange={() =>
                      handleChange({
                        target: {
                          name: "whatsapp",
                          type: "checkbox",
                          checked: !formData.whatsapp,
                        },
                      })
                    }
                    className="accent-secondary-foreground"
                  />
                  WhatsApp
                </label>
              </div>
              <div className="flex flex-wrap items-center space-x-4">
                <label>
                  <input
                    type="checkbox"
                    name="services"
                    checked={formData.services.includes("design")}
                    onChange={() => handleServiceChange("design")}
                    className="accent-secondary-foreground"
                  />
                  Design
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="services"
                    checked={formData.services.includes("setup")}
                    onChange={() => handleServiceChange("setup")}
                    className="accent-secondary-foreground"
                  />
                  Setup
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="services"
                    checked={formData.services.includes("maintenance")}
                    onChange={() => handleServiceChange("maintenance")}
                    className="accent-secondary-foreground"
                  />
                  Maintenance
                </label>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="col-span-2 p-4 bg-white rounded-lg border border-secondary-foreground/10"
              />
            </div>
            <button
              type="submit"
              className="mt-8 px-6 py-3 bg-secondary-foreground text-secondary rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
