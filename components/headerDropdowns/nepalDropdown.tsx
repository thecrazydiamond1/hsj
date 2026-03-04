"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./nepalDropdown.css"

const nepalRegions = [
  {
    name: "Everest Region",
    treks: [
      { label: "Everest Base Camp Trek - 14 Days", href: "/nepal/everest-base-camp" },
      { label: "Everest Base Camp Trek, Heli Return - 12 Days", href: "/nepal/ebc-heli-return" },
      { label: "Gokyo and EBC Trek - 17 Days", href: "/nepal/gokyo-ebc" },
      { label: "Everest Three Passes Trek - 19 Days", href: "/nepal/three-passes" },
      { label: "Everest Panorama Trek - 7 Days", href: "/nepal/everest-panorama" },
    ],
  },
  {
    name: "Annapurna Region",
    treks: [
      { label: "Annapurna Base Camp Trek - 11 Days", href: "/nepal/annapurna-base-camp" },
      { label: "Annapurna Circuit Trek - 12 Days", href: "/trip/annapurna-circuit-trek" },
      { label: "Ghorepani Trek - 9 Days", href: "/nepal/ghorepani" },
      { label: "Annapurna Base Camp Trek via Poonhill - 16 Days", href: "/nepal/abc-poonhill" },
      { label: "Mardi Base Camp Trek - 7 Days", href: "/nepal/mardi-base-camp" },
      { label: "Australian Base Camp Trek - 2 Days", href: "/nepal/australian-base-camp" },
      { label: "Upper Mustang Trek - 17 Days", href: "/nepal/upper-mustang" },
      { label: "Jomsom Muktinath Trek - 9 Days", href: "/nepal/jomsom-muktinath" },
    ],
  },
  {
    name: "Manaslu Region",
    treks: [
      { label: "Manaslu Circuit with Tsum Valley Trek - 22 Days", href: "/nepal/manaslu-tsum" },
      { label: "Tsum Valley Trek - 16 Days", href: "/nepal/tsum-valley" },
      { label: "Manaslu Circuit Trek - 15 Days", href: "/nepal/manaslu-circuit" },
      { label: "Tsum Valley And Ganesh Base Camp Trek - 22 Days", href: "/nepal/tsum-ganesh" },
    ],
  },
  {
    name: "Langtang Region",
    treks: [
      { label: "Langtang Gosainkunda Trek - 12 Days", href: "/nepal/langtang-gosainkunda" },
      { label: "Langtang Valley Trek - 11 Days", href: "/nepal/langtang-valley" },
      { label: "Langtang Gosainkunda Helambu Trek - 13 Days", href: "/nepal/langtang-helambu" },
      { label: "Tamang Heritage Trek - 16 Days", href: "/nepal/tamang-heritage" },
    ],
  },
];

export default function NepalDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="nd-wrap" ref={ref}>
      <button
        className={`nav-link nd-trigger${open ? " nd-trigger--active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Nepal
      </button>

      {open && (
        <>
          {/* backdrop */}
          <div className="nd-backdrop" onClick={() => setOpen(false)} />

          {/* dropdown panel */}
          <div className="nd-panel">
            <div className="nd-grid">
              {nepalRegions.map((region) => {
                const isActive = activeRegion === region.name;

                return (
                  <div key={region.name} className={`nd-region ${isActive ? "active" : ""}`}>
                    <div
                      className="nd-region-header"
                      onClick={() =>
                        setActiveRegion(isActive ? null : region.name)
                      }
                    >
                      <h3 className="nd-region-title">{region.name}</h3>
                    </div>

                    <div className="nd-divider" />

                    <ul className="nd-list">
                      {region.treks.map((trek) => (
                        <li key={trek.href}>
                          <Link
                            href={trek.href}
                            className="nd-trek-link"
                            onClick={() => setOpen(false)}
                          >
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" className="nd-arrow">
                              <path d="M1 1l5 4.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {trek.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

    </div>
  );
}