"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  Building,
  User,
  MessageSquare,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEOHead from "@/components/SEOHead";
import { ContinueLinks } from "@/components/SectionNav";
import { SERVICE_OPTIONS, resolveService } from "@/data/navigation";

const PREFERENCES = ["rental", "purchase", "both", "consultation"] as const;
type Preference = (typeof PREFERENCES)[number];

const CATALOG_NOTE =
  "Please send the Transformers Display System technical specifications catalog, including booth dimensions, weights, graphic templates, and electrical load data.";

function isPreference(value: string | null): value is Preference {
  return PREFERENCES.includes(value as Preference);
}

function inquiryFromParams(params: URLSearchParams) {
  const serviceParam = params.get("service");
  const productParam = params.get("product");
  const projectRef = params.get("projectRef");
  const preference = params.get("preference");
  const intent = params.get("intent");

  return {
    servicePillar: resolveService(serviceParam),
    productInterest: productParam || "",
    preference: isPreference(preference) ? preference : ("rental" as Preference),
    projectDescription: projectRef
      ? `Inquiry regarding: ${projectRef}`
      : intent === "catalog"
        ? CATALOG_NOTE
        : "",
  };
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const inquiry = inquiryFromParams(searchParams);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    servicePillar: inquiry.servicePillar,
    productInterest: inquiry.productInterest,
    preference: inquiry.preference,
    eventDate: "",
    venueCity: "Cairo",
    projectDescription: inquiry.projectDescription,
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const next = inquiryFromParams(searchParams);
    setFormData((prev) => ({
      ...prev,
      servicePillar: next.servicePillar || prev.servicePillar,
      productInterest: next.productInterest || prev.productInterest,
      preference: searchParams.get("preference") ? next.preference : prev.preference,
      projectDescription: next.projectDescription || prev.projectDescription,
    }));
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare mailto fallback
    const subject = encodeURIComponent(
      `Quotation Request: ${formData.servicePillar || "Transformers Services"} - ${formData.company || formData.fullName}`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.servicePillar}\nProduct of Interest: ${formData.productInterest}\nPreference: ${formData.preference}\nEvent Date: ${formData.eventDate}\nVenue/City: ${formData.venueCity}\n\nProject Scope:\n${formData.projectDescription}`
    );

    // Open email client with formatted inquiry
    window.location.href = `mailto:sales@transformers-me.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const breadcrumbs = [{ label: "Contact" }];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Transformers for Events Management and Display Systems",
    description: "Request a quotation for exhibition booths, event management, and conference staging in Egypt.",
    url: "https://transformers-me.com/contact",
  };

  return (
    <>
      <SEOHead
        title="Contact Us & Request a Quote | Transformers Egypt"
        description="Request a quotation for exhibition booth rental, event management, or conference staging in Egypt. Contact our Cairo sales engineers at +20 111 099 9646."
        canonicalPath="/contact"
        structuredData={contactSchema}
      />

      <Navbar />

      <PageHeader
        title="Contact & Request a Quote"
        subtitle="Let our engineering and production team bring your exhibition, event, or conference to life. Connect with our Cairo headquarters for fast, itemized quotations."
        image="/Contact.jpg"
        breadcrumbs={breadcrumbs}
        badge="Direct Sales & Technical Support"
      />

      {/* --- MAIN CONTACT & QUOTATION FORM --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column (Span 7) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0a2540] mb-2">
                Request an Itemized Quotation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed">
                Fill in your project requirements below. Our technical specialists review your venue guidelines and provide custom proposals within 24 hours.
              </p>

              {submitted && (
                <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-800">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <CheckCircle2 size={16} /> Inquiry Prepared & Sent to Email Client
                  </div>
                  <p>
                    If your email application did not launch automatically, you can also reach us immediately on WhatsApp at{" "}
                    <a
                      href="https://wa.me/201110999646"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold"
                    >
                      +20 111 099 9646
                    </a>{" "}
                    or email directly at <strong>sales@transformers-me.com</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Ahmed Hassan"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Acrow Misr"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+20 1XX XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Service Pillar & Product Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="servicePillar">
                      Service *
                    </label>
                    <select
                      id="servicePillar"
                      name="servicePillar"
                      value={formData.servicePillar}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                    >
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                      {formData.servicePillar &&
                        !SERVICE_OPTIONS.some((option) => option.value === formData.servicePillar) && (
                          <option value={formData.servicePillar}>{formData.servicePillar}</option>
                        )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Product of Interest (Optional)
                    </label>
                    <input
                      type="text"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      placeholder="e.g. Code A U-Shape 6x3, P2.6 LED Screen"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Rental vs Purchase Preference & Event Date */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Preference *
                    </label>
                    <select
                      name="preference"
                      value={formData.preference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                    >
                      <option value="rental">For Rental (Per Event)</option>
                      <option value="purchase">For Purchase (Permanent Asset)</option>
                      <option value="both">Interested in Both Options</option>
                      <option value="consultation">Need Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Target Event Date
                    </label>
                    <input
                      type="text"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      placeholder="e.g. November 2025"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Venue / City
                    </label>
                    <input
                      type="text"
                      name="venueCity"
                      value={formData.venueCity}
                      onChange={handleChange}
                      placeholder="e.g. EIEC Cairo, CICC"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Message / Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Scope & Technical Details *
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Please mention booth dimensions (e.g. 6x3m), plot type (island, corner, perimeter), special AV requirements, or any specific requests..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1787b2] bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0a2540] hover:bg-[#1787b2] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Submit Quotation Request
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Your information is used solely to prepare your technical quotation and is never shared with third parties.
                </p>
              </form>
            </div>

            {/* Direct Contact Details & Information (Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Verified Direct Phone & Email */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <span className="text-xs uppercase tracking-wider font-bold text-[#1787b2] mb-2 block">
                  Direct Line
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0a2540] mb-4">
                  Talk Directly to Our Sales Engineers
                </h3>

                <div className="space-y-4 text-sm text-slate-700 mb-6">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#1787b2] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Sales & Engineering Office:</p>
                      <a href="tel:+201110999646" className="block font-semibold text-[#0a2540] hover:text-[#1787b2]">
                        +20 111 099 9646
                      </a>
                      <a href="tel:+201110999647" className="block font-semibold text-[#0a2540] hover:text-[#1787b2]">
                        +20 111 099 9647
                      </a>
                      <a href="tel:+201110999648" className="block font-semibold text-[#0a2540] hover:text-[#1787b2]">
                        +20 111 099 9648
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                    <Mail size={18} className="text-[#1787b2] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Official Quotation Email:</p>
                      <a
                        href="mailto:sales@transformers-me.com"
                        className="font-semibold text-[#0a2540] hover:text-[#1787b2]"
                      >
                        sales@transformers-me.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                    <MapPin size={18} className="text-[#1787b2] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Office & Warehouse Facility:</p>
                      <p className="font-semibold text-[#0a2540]">
                        Transformers Display Systems, Heliopolis, Cairo, Egypt
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Serving Cairo International Convention Centre (CICC), Egypt International Exhibition Center (EIEC), and venues nationwide.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/201110999646?text=Hello%20Transformers%2C%20I%20would%20like%20to%20request%20a%20quotation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare size={15} /> Chat on WhatsApp (+201110999646)
                </a>
              </div>

              {/* Card 2: Operating Hours & Logistics Note */}
              <div className="bg-[#0a2540] text-white p-8 rounded-3xl shadow-sm">
                <h4 className="font-serif text-lg font-bold mb-3">
                  Exhibition & Event Move-In Support
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  We operate flexible 24/7 technical crew shifts during official venue build-up windows at EIEC, CICC, and five-star hotel ballrooms across Cairo.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <p>• Office Hours: Sunday – Thursday: 9:00 AM – 6:00 PM</p>
                  <p>• Site Technical Support: 24/7 during scheduled event move-in</p>
                  <p>• Emergency Response: Hotline accessible to contracted clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GOOGLE MAPS EMBED SECTION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            badge="Cairo Headquarters"
            title="Location on Map"
            subtitle="Visit our Heliopolis facility or schedule a consultation with our display systems engineers."
          />

          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-[21/9] min-h-[360px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.174613711809!2d31.354029959603892!3d30.117816574991206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815828bdceb67%3A0x74dfa4db1d16d6e4!2sTransformers%20Display%20Systems!5e0!3m2!1sar!2seg!4v1763157292258!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Transformers Display Systems Location Heliopolis Cairo Egypt"
            />
          </div>
        </div>
      </section>

      <ContinueLinks
        links={[
          { href: "/exhibitions", label: "Exhibitions" },
          { href: "/events", label: "Events" },
          { href: "/conferences", label: "Conferences" },
          { href: "/rental-products", label: "Rental products" },
          { href: "/projects", label: "Projects" },
        ]}
      />

      <Footer />
    </>
  );
}
