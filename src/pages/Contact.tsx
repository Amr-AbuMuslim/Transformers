"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
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

      <PageHeader title="Contact Transformers" image="/Contact.jpg" />

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
      {/* --- Contact Cards Section --- */}
      <section className="bg-secondary/10 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Details Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

              <div className="space-y-4 text-lg">
                <a
                  href="tel:+201110999646"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <Phone size={16}></Phone> +20 111 099 9646
                </a>

                <a
                  href="tel:+201110999647"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <Phone size={16}></Phone>+20 111 099 9647
                </a>

                <a
                  href="tel:+201110999648"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <Phone size={16}></Phone> +20 111 099 9648
                </a>

                <a
                  href="mailto:sales@transformers-me.com"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <span className="font-semibold">📧</span>{" "}
                  sales@transformers-me.com
                </a>
              </div>
            </div>

            {/* Extra Message card or company note */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">We’re Here to Help</h3>
              <p className="text-gray-700 leading-relaxed">
                Reach out to our team anytime for booth design, event support,
                or custom exhibition experiences tailored specially for the
                Middle East market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Location on Map
          </h2>

          <p className="text-center text-gray-600 mb-8">
            Visit us or reach out anytime — we’re always ready to transform your
            event.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.174613711809!2d31.354029959603892!3d30.117816574991206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815828bdceb67%3A0x74dfa4db1d16d6e4!2sTransformers%20Display%20Systems!5e0!3m2!1sar!2seg!4v1763157292258!5m2!1sar!2seg"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
