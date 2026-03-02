"use client";

import Link from "next/link";
import { useState } from "react";
import "./Header.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Nepal", href: "/nepal" },
  { label: "Activities", href: "/activities" },
  { label: "Tibet", href: "/tibet" },
  { label: "Day Tours", href: "/day-tours" },
  { label: "Special Offer", href: "/special-offer" },
  { label: "Travel Guide", href: "/travel-guide" },
  { label: "About Us", href: "/about" },
  { label: "Popular Treks in Nepal", href: "/popular-treks" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  return (
    <header className="hsj-header">
      {/* ── TOP BAR ── */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-ratings">
            <span className="rating-item tripadvisor">
              {/* Replace src with your Figma export */}
              <img src="/icons/tripadvisor.svg" alt="Tripadvisor" width={32} height={21} />
              ★ 4.7
            </span>
            <span className="top-bar-divider">|</span>
            <span className="rating-item google">
              <img src="/icons/google.svg" alt="Google" width={62} height={20} />
              ★ 4.7
            </span>
            <span className="top-bar-divider">|</span>
            <span className="rating-item tourradar">
              <img src="/icons/tourradar.svg" alt="Tourradar" width={62} height={20} />
              ★ 4.7
            </span>
          </div>

          <div className="top-bar-alert">
            💥 Big Savings Alert! Get Up to 40% Discount Today          
          </div>

          <div className="top-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" width={24} height={21} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook" width={24} height={21} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="/icons/twitter.svg" alt="Twitter" width={24} height={21} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/icons/youtube.svg" alt="YouTube" width={24} height={21} />
            </a>
          </div>
        </div>
      </div>

      {/* ── MIDDLE BAR ── */}
      <div className="mid-bar">
        <div className="mid-bar-inner">
          <Link href="/" className="brand-logo">
            {/* Replace with your Figma logo export */}
            <img src="/icons/logo.svg" alt="Himalayan Social Journey" width={160} height={52} />
          </Link>

          <div className="search-wrap">
            <svg className="search-icon" width="882" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search our exclusive tours and travels..."
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
            />
          </div>

          <a href="https://wa.me/9779848984898" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            +977-9848984898
          </a>
        </div>
      </div>

      {/* ── NAV BAR ── */}
      <div className="nav-bar">
        <div className="nav-bar-inner">
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

          <nav className="main-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/login" className="login-btn">Log In</Link>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}