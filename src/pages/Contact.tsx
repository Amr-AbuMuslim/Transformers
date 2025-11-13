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
    stateRegion: "",
    eventType: "",
    products: [] as string[],
    message: "",
    uploadFiles: false,
    sms: false,
  });

  // -------------------------
  // GENERIC CHANGE HANDLER
  // -------------------------
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, type, value, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // -------------------------
  // PRODUCTS/SERVICES CHECKBOXES
  // -------------------------
  const handleProductChange = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (API, EmailJS, etc.)
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
            title="Let us help transform your next event!"
            subtitle="Fill out the form below to request a free quote regarding any of our products or services."
          />

          {/* Contact Form */}
          <form id="contact-form" onSubmit={handleSubmit} className="mt-12">
            {/* Free Quote Section */}
            <h3 className="text-xl font-bold mb-4">Free Quote</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Fields */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
                required
              />

              {/* Email & Phone */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone *"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
                required
              />

              {/* Company & State */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name *"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
                required
              />
              <input
                type="text"
                name="stateRegion"
                value={formData.stateRegion}
                onChange={handleChange}
                placeholder="State/Region *"
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
                required
              />

              {/* How can we help */}
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="p-4 bg-white rounded-lg border border-secondary-foreground/10"
                required
              >
                <option value="">How can we help? *</option>
                <option value="trade-show">Trade Show</option>
                <option value="event">Event</option>
                <option value="brand-space">Brand Space</option>
                <option value="other">Other</option>
              </select>

              {/* Products/Services */}
              <div className="col-span-2 flex flex-wrap gap-4">
                {[
                  "Display design",
                  "Display rental",
                  "Portable displays",
                  "Interactive technology",
                  "Graphics",
                  "Branded environment",
                  "Event services",
                  "Other",
                ].map((product) => (
                  <label key={product} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.products.includes(product)}
                      onChange={() => handleProductChange(product)}
                      className="accent-secondary-foreground"
                    />
                    {product}
                  </label>
                ))}
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                className="col-span-2 p-4 bg-white rounded-lg border border-secondary-foreground/10"
                required
              />

              {/* Upload files + SMS opt-in */}
              <div className="col-span-2 flex flex-wrap gap-6 items-center mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="uploadFiles"
                    checked={formData.uploadFiles}
                    onChange={handleChange}
                    className="accent-secondary-foreground"
                  />
                  Do you have files to upload?
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="sms"
                    checked={formData.sms}
                    onChange={handleChange}
                    className="accent-secondary-foreground"
                  />
                  Would you like to receive text messages?
                </label>
              </div>

              <p className="col-span-2 text-sm text-gray-500 mt-1">
                We do not sell your data. Text message frequency may vary,
                message & data rates may apply. You may opt out at any time by
                texting STOP. For help, text HELP or visit applerock.com. Visit
                our Privacy Policy and SMS policy for Terms of Service.
              </p>
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
