"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { useState } from "react"
import { Mail, Phone, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    boothType: "",
    eventType: "",
    services: [],
    message: "",
    uploadFiles: false,
    whatsapp: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <>
      <Navbar />

      <PageHeader title="Contact Transformers" image="/contact-support-team.jpg" />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Get in Touch" subtitle="Request a quote or get expert advice on your booth needs" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 border border-border">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-input"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-input"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-input"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-input"
                      placeholder="+20 1234 567 890"
                    />
                  </div>
                </div>

                {/* Company & Booth Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-input"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Interested Booth Type</label>
                    <select
                      name="boothType"
                      value={formData.boothType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-input"
                    >
                      <option value="">Select a booth type</option>
                      <option value="u-shape">U-Shape Booth</option>
                      <option value="l-shape">L-Shape Booth</option>
                      <option value="luxury">Luxury & Elegant</option>
                      <option value="tower">Booth with Tower</option>
                      <option value="ring">Booth with Ring</option>
                      <option value="pavilion">Pavilion</option>
                      <option value="custom">Custom Configuration</option>
                    </select>
                  </div>
                </div>

                {/* Event Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-input"
                  >
                    <option value="">Select event type</option>
                    <option value="trade-show">Trade Show</option>
                    <option value="conference">Conference</option>
                    <option value="product-launch">Product Launch</option>
                    <option value="roadshow">Roadshow</option>
                    <option value="brand-activation">Brand Activation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Services Interest */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">Services Needed</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Booth Design",
                      "Booth Purchase",
                      "Booth Rental",
                      "Setup & Installation",
                      "Graphics & Branding",
                      "Consultation",
                    ].map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-sm text-foreground">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-input"
                    placeholder="Tell us about your exhibition booth requirements..."
                  />
                </div>

                {/* Checkboxes */}
                <div className="mb-6 space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="uploadFiles"
                      checked={formData.uploadFiles}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-sm text-foreground">I have design files to share</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="whatsapp"
                      checked={formData.whatsapp}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-sm text-foreground">Contact me via WhatsApp</span>
                  </label>
                </div>

                {/* File Upload */}
                {formData.uploadFiles && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">Upload Files</label>
                    <input
                      type="file"
                      multiple
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-input"
                    />
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-card rounded-lg p-8 border border-border space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Contact Info</h3>
                  <p className="text-muted-foreground text-sm">
                    Get in touch with our team for expert advice on your booth needs.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="tel:+201110999646" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <Phone className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground text-sm">+201110999646</p>
                      <p className="text-muted-foreground text-sm">+201110999648</p>
                    </div>
                  </a>

                  <a
                    href="mailto:sales@transformers-me.com"
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <Mail className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">sales@transformers-me.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/201110999646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <MessageSquare className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">+201110999646</p>
                    </div>
                  </a>
                </div>

                {/* Service Areas */}
                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium text-foreground mb-2">Service Area</h4>
                  <p className="text-sm text-muted-foreground">
                    Sole distributor of Transformers in Egypt and MENA region. International shipping available.
                  </p>
                </div>

                {/* Response Time */}
                <div className="bg-secondary/10 rounded-lg p-3">
                  <p className="text-xs font-medium text-foreground">Response Time</p>
                  <p className="text-xs text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
