"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Users, Leaf, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const values = [
  {
    title: "Client-Centered Service",
    description:
      "We prioritize understanding our clients' needs and delivering solutions that exceed expectations.",
    icon: Users,
  },
  {
    title: "Environmental Responsibility",
    description:
      "Sustainable practices in design, manufacturing, and distribution. Reducing waste is our priority.",
    icon: Leaf,
  },
  {
    title: "Professionalism",
    description:
      "Every interaction, from quote to installation, reflects our commitment to excellence.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "Continuous improvement in modular design, customization options, and service delivery.",
    icon: Zap,
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <PageHeader title="About Transformers" image="/10Edited.jpg" />

      {/* Heritage Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Our Heritage
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Built on the heritage of Orange Solutions, established in 1997,
                we are the sole distributor of Transformers (Made in Taiwan) in
                Egypt.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                With decades of experience in event management and display
                solutions, we bring expertise, efficiency, and elegant design to
                every project.
              </p>
              <p className="text-lg text-muted-foreground">
                We provide a wide range of event management services and display
                solutions known for efficiency, elegance, and modern design
                standards.
              </p>
            </div>
            <img
              src="/heritage.jpg"
              alt="Team"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-8 border border-border"
            >
              <h3 className="font-serif text-3xl font-bold mb-4 text-secondary">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the leading brand in the Middle East & Africa for display
                and event management, offering elegant, practical, and modern
                solutions that enhance client visibility and drive business
                success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-8 border border-border"
            >
              <h3 className="font-serif text-3xl font-bold mb-4 text-secondary">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To provide flexible, elegant, and cost-effective display systems
                that elevate brand image and make event execution seamless. We
                deliver practical solutions that inspire and engage audiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our Core Values"
            subtitle="Guiding principles in everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-8 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-secondary flex-shrink-0" />
                    <div className="w-2 h-8 bg-gradient-to-b from-secondary to-accent rounded" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Our Strategic Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Become the market leader in display systems across MENA region",
              "Build long-term relationships based on trust and mutual success",
              "Deliver high efficiency, high profitability, and high value to clients",
              "Provide employees with a creative, supportive, and growth-oriented environment",
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-secondary-foreground font-bold">
                  {index + 1}
                </div>
                <p className="text-muted-foreground text-lg">{goal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
