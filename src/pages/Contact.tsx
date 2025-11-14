"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

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
  };

  return (
    <>
      <Navbar />

      <PageHeader
        title="Contact Transformers"
        image="/contact-support-team.jpg"
      />

      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Let us help transform your next event!"
            subtitle="Fill out the form below to request a free quote regarding any of our products or services."
          />

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="mt-12 bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6">Free Quote</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Name */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary-foreground focus:outline-none shadow-sm"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary-foreground focus:outline-none shadow-sm"
              />

              {/* Email & Phone */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary-foreground focus:outline-none shadow-sm"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone *"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary-foreground focus:outline-none shadow-sm"
              />

              {/* Company & State */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name *"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary-foreground focus:outline-none shadow-sm"
              />
              <input
                type="text"
                name="stateRegion"
                value={formData.stateRegion}
                onChange={handleChange}
                placeholder="State/Region *"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary-foreground focus:outline-none shadow-sm"
              />

              {/* How can we help */}
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary-foreground focus:outline-none shadow-sm"
              >
                <option value="">How can we help? *</option>
                <option value="trade-show">Trade Show</option>
                <option value="event">Event</option>
                <option value="brand-space">Brand Space</option>
                <option value="other">Other</option>
              </select>

              {/* Products / Services */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
                  <label
                    key={product}
                    className="flex items-center gap-2 p-2 border rounded-xl hover:shadow-sm cursor-pointer transition-all text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={formData.products.includes(product)}
                      onChange={() => handleProductChange(product)}
                      className="accent-foreground"
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
                required
                className="col-span-1 md:col-span-2 w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary-foreground focus:outline-none shadow-sm min-h-[120px]"
              />

              {/* Upload files + SMS */}
              <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-4 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="uploadFiles"
                    checked={formData.uploadFiles}
                    onChange={handleChange}
                    className="accent-foreground"
                  />
                  Do you have files to upload?
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="sms"
                    checked={formData.sms}
                    onChange={handleChange}
                    className="accent-foreground"
                  />
                  Would you like to receive text messages?
                </label>
              </div>

              <p className="col-span-1 md:col-span-2 text-sm text-gray-500 mt-1">
                We do not sell your data. Text message frequency may vary,
                message & data rates may apply. You may opt out at any time by
                texting STOP. For help, text HELP or visit applerock.com. Visit
                our Privacy Policy and SMS policy for Terms of Service.
              </p>
            </div>

            <button
              type="submit"
              className="mt-6 md:mt-8 w-full md:w-auto px-6 py-3 bg-foreground text-white rounded-xl hover:opacity-90 transition-opacity font-semibold"
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
