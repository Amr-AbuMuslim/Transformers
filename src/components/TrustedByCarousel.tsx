"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface ClientLogo {
  id: number;
  name: string;
  image: string;
}

const clientLogos: ClientLogo[] = [
  { id: 1, name: "Client 1", image: "/Picture2.png" },
  { id: 2, name: "Client 2", image: "/Picture3.png" },
  { id: 3, name: "Client 3", image: "/Picture4.png" },
  { id: 4, name: "Client 4", image: "/Picture5.png" },
  { id: 5, name: "Client 5", image: "/Picture6.jpg" },
  { id: 6, name: "Client 6", image: "/Picture7.jpg" },
  { id: 7, name: "Client 7", image: "/Picture8.png" },
  { id: 8, name: "Client 8", image: "/Picture9.png" },
  { id: 9, name: "Client 8", image: "/Picture10.jpg" },
  { id: 10, name: "Client 8", image: "/Picture11.png" },
  { id: 11, name: "Client 8", image: "/Picture12.png" },
  { id: 12, name: "Client 8", image: "/Picture13.gif" },
  { id: 13, name: "Client 8", image: "/Picture14.jpg" },
  { id: 14, name: "Client 8", image: "/Picture15.jpg" },
  { id: 15, name: "Client 8", image: "/Picture16.png" },
  { id: 16, name: "Client 8", image: "/Picture17.png" },
  { id: 17, name: "Client 8", image: "/Picture18.png" },
  { id: 18, name: "Client 8", image: "/Picture19.png" },
  { id: 19, name: "Client 8", image: "/Picture33.png" },
  { id: 20, name: "Client 8", image: "/Picture21.jpg" },
  { id: 21, name: "Client 8", image: "/Picture22.png" },
  { id: 22, name: "Client 8", image: "/Picture23.png" },
  { id: 23, name: "Client 8", image: "/Picture24.png" },
  { id: 24, name: "Client 8", image: "/Picture25.jpg" },
  { id: 25, name: "Client 8", image: "/Picture26.jpg" },
  { id: 26, name: "Client 8", image: "/Picture27.png" },
  { id: 27, name: "Client 8", image: "/Picture28.jpg" },
  { id: 28, name: "Client 8", image: "/Picture29.png" },
  { id: 29, name: "Client 8", image: "/Picture30.png" },
  { id: 30, name: "Client 8", image: "/Picture31.png" },
];

export default function TrustedByCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2); // width of first set
    }
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-serif font-bold mb-2">
          Trusted By Industry Leaders
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Working with the world's best brands
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <motion.div
            ref={containerRef}
            className="flex gap-8"
            animate={{ x: [0, -scrollWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <motion.div
                key={idx}
                className="min-w-max flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logo.image || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-sm"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">1K+</p>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">250+</p>
            <p className="text-muted-foreground">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
