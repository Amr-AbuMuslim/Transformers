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
      setScrollWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-slate-100 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-serif font-bold text-[#0a2540] mb-2">
          Trusted By Industry Leaders
        </h2>
        <p className="text-center text-xs sm:text-sm text-slate-500 mb-8 sm:mb-12 max-w-xl mx-auto">
          Delivering exhibition, event, and conference solutions for prominent brands across Egypt and the Middle East.
        </p>

        <div className="relative overflow-hidden w-full">
          <div className="absolute left-0 top-0 z-10 w-12 sm:w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 w-12 sm:w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <motion.div
            ref={containerRef}
            className="flex gap-6 sm:gap-8 items-center"
            animate={{ x: [0, -scrollWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center justify-center p-2"
              >
                <img
                  src={logo.image || "/placeholder.svg"}
                  alt={logo.name}
                  loading="lazy"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14 pt-8 border-t border-slate-100 text-center">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-[#0a2540]">1,000+</p>
            <p className="text-xs text-slate-600 mt-1">Exhibitions & Events Delivered</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-[#0a2540]">Sole Distributor</p>
            <p className="text-xs text-slate-600 mt-1">Taiwan Transformers Modular System</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-[#0a2540]">28+ Years</p>
            <p className="text-xs text-slate-600 mt-1">Industry Heritage (Est. 1997)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
