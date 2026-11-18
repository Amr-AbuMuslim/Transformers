import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "framer-motion";

export interface FaqEntry {
  q: string;
  a: string;
}

export default function FaqAccordion({ items, labelledBy }: { items: FaqEntry[]; labelledBy?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1787b2]"
              >
                <span className="font-serif text-base font-bold text-[#0a2540] sm:text-lg">{item.q}</span>
                <ChevronDown
                  size={18}
                  aria-hidden
                  className={`shrink-0 text-[#1787b2] transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={labelledBy ? `${labelledBy} ${buttonId}` : buttonId}
              aria-hidden={!isOpen}
              className={`grid ${reduce ? "" : "transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"} ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
