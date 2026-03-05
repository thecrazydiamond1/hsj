// app/trip/[slug]/page.tsx
"use client";

import Link from "next/link";
import { treks } from "@/lib/treks";
import { useState, useEffect, useRef } from "react"; // add useEffect, useRef
import "./trip.css";
import Script from "next/script";
const tabs = ["Overview", "Itinerary", "Inclusions/Exclusions", "Departure Dates", "Map", "Equipment", "FAQ", "Reviews"];

export default function TripPage({ params }: { params: { slug: string } }) {
  const trek = treks[params.slug];
  const [activeTab, setActiveTab] = useState("Overview");
  const [openDays, setOpenDays] = useState<number[]>([1]);
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);
  const [activePkg, setActivePkg] = useState("Standard Package");
  const [tripType, setTripType] = useState<"group" | "private">("group");
  const [openGear, setOpenGear] = useState<string[]>([]);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const scrollingDown = window.scrollY > lastScrollY.current;
        lastScrollY.current = window.scrollY;

        entries.forEach(entry => {
          if (scrollingDown && entry.isIntersecting) {
            setActiveTab(entry.target.getAttribute("data-section") || "");
          } else if (!scrollingDown && !entry.isIntersecting) {
            // when scrolling up, activate the previous section
            const sections = Object.keys(sectionRefs.current);
            const idx = sections.indexOf(entry.target.getAttribute("data-section") || "");
            if (idx > 0) setActiveTab(sections[idx - 1]);
          }
        });
      },
      {
        rootMargin: "-155px 0px -40% 0px",
        threshold: 0
      }
    );
    Object.values(sectionRefs.current).forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    // clean up any previous instance
    const old = document.getElementById("wetravel-script");
    if (old) old.remove();

    const script = document.createElement("script");
    script.id = "wetravel-script";
    script.src = "https://cdn.wetravel.com/widgets/embed_calendar.js";
    script.async = true;
    script.setAttribute("data-env", "https://hsjtravel.wetravel.com");
    script.setAttribute("data-version", "v0.3");
    script.setAttribute("data-uid", "597436");
    script.setAttribute("data-uuid", "80744020");
    script.setAttribute("data-color", "1850b3");
    script.setAttribute("data-text", "Book Now");
    script.setAttribute("data-title", "Select Departure Date");

    document.getElementById("wetravel-container")?.appendChild(script);

    return () => {
      document.getElementById("wetravel-script")?.remove();
    };
  }, []);
  
  const scrollToSection = (name: string) => {
    sectionRefs.current[name]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!trek) return <div style={{ padding: "4rem 2rem" }}>Trek not found.</div>;

  const toggleDay = (day: number) =>
    setOpenDays(o => o.includes(day) ? o.filter(d => d !== day) : [...o, day]);

  const toggleFaq = (key: string) =>
    setOpenFaqs(o => o.includes(key) ? o.filter(k => k !== key) : [...o, key]);

  const toggleGear = (cat: string) =>
    setOpenGear(o => o.includes(cat) ? o.filter(c => c !== cat) : [...o, cat]);

  const activePkgData = trek.packages.find(p => p.name === activePkg) || trek.packages[0];

  return (
    <div className="tp-page">

      {/* ── BREADCRUMB + TITLE ── */}
      <div className="tp-header">
        <div className="tp-header-inner">
          <nav className="tp-breadcrumb">
            {trek.breadcrumb.map((b, i) => (
              <span key={b}>
                <Link href={i === 0 ? "/" : i === 1 ? "/tours" : "/nepal"}>{b}</Link>
                {i < trek.breadcrumb.length - 1 && <span className="tp-bc-sep"> › </span>}
              </span>
            ))}
          </nav>
          <div className="tp-title-row">
            <h1 className="tp-title">{trek.title}</h1>
            <div className="tp-title-actions">
              <button className="tp-action-btn tp-heart" aria-label="Save">
                <img src="/icons/heart.svg" />
              </button>
              <button className="tp-action-btn" aria-label="Copy link">
                <img src="/icons/copy.svg" />
              </button>
              <button className="tp-action-btn" aria-label="Share">
                <img src="/icons/upload.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── PHOTO GRID ── */}
      <div className="tp-photo-grid">
        <img src={trek.images[0]} alt={trek.title} className="tp-photo-main" />
        <div className="tp-photo-side">
          {trek.images.slice(1, 5).map((img, i) => (
            <div key={i} className={`tp-photo-thumb ${i === 3 ? "tp-photo-last" : ""}`}>
              <img src={img} alt={`${trek.title} ${i + 1}`} />
              {i === 3 && trek.images.length > 5 && (
                <div className="tp-photo-more">+{trek.images.length - 4}</div>
               )}
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="tp-stats-bar">
        <div className="tp-stats-inner">
          {[
            { icon: <img src="/icons/duration.svg" />, label: "Duration", value: trek.stats.duration },
            { icon: <img src="/icons/bestseason.svg" />, label: "Best Season", value: trek.stats.bestSeason },
            { icon: <img src="/icons/groupsize.svg" />, label: "Group Size", value: trek.stats.groupSize },
            { icon: <img src="/icons/adventurelevel.svg" />, label: "Adventure Level", value: trek.stats.adventureLevel },
            { icon: <img src="/icons/activities.svg" />, label: "Activities", value: trek.stats.activities },
            { icon: <img src="/icons/highestpoint.svg" />, label: "Highest Point", value: trek.stats.highestPoint },
          ].map((s, i) => (
            <div key={i} className="tp-stat">
              <span className="tp-stat-icon">{s.icon}</span>
              <div>
                <div className="tp-stat-label">{s.label}</div>
                <div className="tp-stat-value">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── STICKY TABS ── */}
      <div className="tp-tabs-bar">
        <div className="tp-tabs-inner">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tp-tab${activeTab === tab ? " tp-tab--active" : ""}`}
              onClick={() => scrollToSection(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="tp-body">
        <div className="tp-main">

          {/* OVERVIEW */}
            <div className="tp-section" data-section="Overview" ref={el => { sectionRefs.current["Overview"] = el; }}>
              <div className="tp-card">
                <h2 className="tp-section-title">Trek Overview</h2>
                {trek.overview.map((p, i) => <p key={i} className="tp-overview-para">{p}</p>)}

                <h2 className="tp-section-title" style={{ marginTop: "2rem" }}>Trek Highlights</h2>
                <div className="tp-highlights-grid">
                  {trek.highlights.map((h, i) => (
                    <div key={i} className="tp-highlight-card">
                      <div className="tp-highlight-header">
                        <div className="tp-highlight-icon" dangerouslySetInnerHTML={{ __html: h.icon }} />
                        <h3>{h.title}</h3>
                      </div>
                      <p>{h.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          {/* ITINERARY */}
            <div className="tp-section" data-section="Itinerary" ref={el => { sectionRefs.current["Itinerary"] = el; }}>
              <div className="tp-card">
                <div className="tp-itinerary-header">
                  <h2 className="tp-section-title">Detailed Itinerary</h2>
                  <button className="tp-expand-all" onClick={() =>
                    openDays.length === trek.itinerary.length
                      ? setOpenDays([])
                      : setOpenDays(trek.itinerary.map(d => d.day))
                  }>
                    {openDays.length === trek.itinerary.length ? "Collapse All ▲" : "Expand All ▼"}
                  </button>
                </div>
                <div className="tp-itinerary-duration"><img src="/icons/clock.svg"/>  {trek.stats.duration}</div>
                <div className="tp-itinerary-list">
                  {trek.itinerary.map((day, i) => (
                    <div key={day.day} className="tp-day-wrap">
                      <div className="tp-day-dot" style={{ background: openDays.includes(day.day) ? "#f07c24" : "#d0dff0" }} />
                      {i < trek.itinerary.length - 1 && <div className="tp-day-line" />}
                      <div className="tp-day-card">
                        <button className="tp-day-header" onClick={() => toggleDay(day.day)}>
                          <div>
                            <span className="tp-day-title">Day {day.day} : {day.title}</span>
                            <div className="tp-day-meta">
                              <span><img src="/icons/location.svg" />  {day.altitude}</span>
                              <span><img src="/icons/clock.svg" />  {day.duration}</span>
                              <span><img src="/icons/easy.svg" />  {day.difficulty}</span>
                            </div>
                          </div>
                          <span className="tp-day-chevron">{openDays.includes(day.day) ? "▲" : "▼"}</span>
                        </button>
                        {openDays.includes(day.day) && (
                          <div className="tp-day-body">{day.description}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          {/* INCLUSIONS/EXCLUSIONS */}
            <div className="tp-section" data-section="Inclusions/Exclusions" ref={el => { sectionRefs.current["Inclusions/Exclusions"] = el; }}>
              <div className="tp-card">
                <h2 className="tp-section-title">Cost, Inclusions/Exclusions & Availability</h2>
                <div className="tp-pkg-tabs">
                  {trek.packages.map(pkg => (
                    <button
                      key={pkg.name}
                      className={`tp-pkg-tab${activePkg === pkg.name ? " tp-pkg-tab--active" : ""}`}
                      onClick={() => setActivePkg(pkg.name)}
                    >
                      {pkg.name}
                    </button>
                  ))}
                </div>
                <div className="tp-pkg-card">
                  <div className="tp-pkg-card-header">
                    <div>
                      <div className="tp-pkg-name">{trek.title} Package Price</div>
                      <div className="tp-pkg-stars">
                        <span>{"★".repeat(activePkgData.stars)}{"☆".repeat(5 - activePkgData.stars)}</span>
                        <p>{activePkgData.name}</p>
                      </div>
                    </div>
                    <div className="tp-pkg-price-wrap">
                      <span className="tp-pkg-badge">Standard</span>
                      <span className="tp-pkg-price">${activePkgData.price}.00</span>
                      <span className="tp-pkg-per">Per traveller</span>
                    </div>
                  </div>
                  <div className="tp-inc-exc-grid">
                    <div className="tp-inc">
                      <h3 className="tp-inc-title">Included</h3>
                      <ul>
                        {trek.inclusions.map((item, i) => (
                          <li key={i}><span className="tp-check"><img src="/icons/tick.svg"/></span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="tp-exc">
                      <h3 className="tp-exc-title">Excluded</h3>
                      <ul>
                        {trek.exclusions.map((item, i) => (
                          <li key={i}><span className="tp-cross"><img src="/icons/cross.svg"/></span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DEPARTURE DATES */}
            <div className="tp-section" data-section="Departure Dates" ref={el => { sectionRefs.current["Departure Dates"] = el; }}>
              <div className="tp-card">
                <h2 className="tp-section-title">Departures & Availability</h2>
                <div className="tp-trip-type-tabs">
                  <button className={`tp-trip-tab${tripType === "group" ? " active" : ""}`} onClick={() => setTripType("group")}>Group Trips</button>
                  <button className={`tp-trip-tab${tripType === "private" ? " active" : ""}`} onClick={() => setTripType("private")}>Private Trips</button>
                </div>
                <div id="wetravel-container" className="tp-wetravel-wrap" />
              </div>
            </div>

          {/* MAP */}
            <div className="tp-section" data-section="Map" ref={el => { sectionRefs.current["Map"] = el; }}>
              <div className="tp-card">
                <h2 className="tp-section-title">Tour Route</h2>
                <div className="tp-map-wrap">
                  <iframe
                    src={trek.mapEmbedUrl}
                    width="100%"
                    height="380"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          {/* EQUIPMENT */}
            <div className="tp-section" data-section="Equipment" ref={el => { sectionRefs.current["Equipment"] = el; }}>
              <div className="tp-card">
                <h2 className="tp-section-title">Complete Gear List</h2>
                <p className="tp-gear-intro">Proper equipment is crucial for a successful trek. This comprehensive list covers everything you need for the Annapurna Circuit. Items marked as "can be rented" are available in Kathmandu or Pokhara.</p>
                <div className="tp-gear-list">
                  {trek.gearList.map(gear => (
                    <div key={gear.category}>
                      <button className="tp-gear-row" onClick={() => toggleGear(gear.category)}>
                        <span>{gear.icon} {gear.category}</span>
                        <span>{gear.count} items</span>
                      </button>
                      {openGear.includes(gear.category) && (
                        <ul className="tp-gear-items">
                          {gear.items.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          {/* FAQ */}
            <div className="tp-section" data-section="FAQ" ref={el => { sectionRefs.current["FAQ"] = el; }}>
              <div className="tp-card">
                <div className="tp-faq-header">
                  <h2 className="tp-section-title">Frequently Asked Questions</h2>
                  <button className="tp-expand-all" onClick={() => {
                    const allKeys = trek.faqs.flatMap(f => f.questions.map((q, i) => `${f.category}-${i}`));
                    setOpenFaqs(openFaqs.length === allKeys.length ? [] : allKeys);
                  }}>Expand All ▼</button>
                </div>
                <p className="tp-faq-intro">Find answers to the most common questions about the {trek.title}. Can't find what you're looking for? Contact us directly!</p>
                {trek.faqs.map(section => (
                  <div key={section.category} className="tp-faq-section">
                    <h3 className="tp-faq-category">❓ {section.category}</h3>
                    {section.questions.map((q, i) => {
                      const key = `${section.category}-${i}`;
                      const isOpen = openFaqs.includes(key);
                      return (
                        <div key={i} className="tp-faq-item">
                          <button className="tp-faq-q" onClick={() => toggleFaq(key)}>
                            <span className="tp-faq-dot" />
                            {q.q}
                            <span className="tp-faq-chev">{isOpen ? "▲" : "▼"}</span>
                          </button>
                          {isOpen && (
                            <div className="tp-faq-a">
                              <div className="tp-faq-a-bar" />
                              <p>{q.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

          {/* REVIEWS */}
            <div className="tp-section" data-section="Reviews" ref={el => { sectionRefs.current["Reviews"] = el; }}>
              <div className="tp-reviews-wave">
                <div className="tp-reviews-scroll">
                  {trek.reviews.map((r, i) => (
                    <div key={i} className="tp-review-card">
                      <div className="tp-review-top">
                        <img src={r.avatar} alt={r.name} className="tp-review-avatar" onError={e => { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(r.name) + "&background=1a3c6e&color=fff"; }} />
                        <div className="tp-review-name">{r.name}</div>
                        <div className="tp-review-platform">
                          {r.platform === "google" ? "G" : "🦉"}
                        </div>
                      </div>
                      <div className="tp-review-stars">{"★".repeat(r.rating)}</div>
                      <div className="tp-review-title">{r.title}</div>
                      <p className="tp-review-body">{r.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* HSJ Moments */}
              <div className="tp-moments">
                <h2 className="tp-moments-title">
                  <span className="tp-moments-icon">🎥</span> HSJ Moments
                </h2>
                <div className="tp-moments-grid">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="tp-moment-card">
                      <img src={`/images/moments/moment-${i}.jpg`} alt={`Moment ${i}`} />
                      <div className="tp-moment-overlay">
                        <span className="tp-moment-user">👤</span>
                        <span className="tp-moment-dur">00:02</span>
                      </div>
                      <button className="tp-moment-play">▶</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        {/* ── SIDEBAR ── */}
        <aside className="tp-sidebar">
        {["Overview", "Itinerary", "Inclusions/Exclusions"].includes(activeTab) && (
          <div className="tp-price-card">
            <div className="tp-price-top">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
                    <span className="tp-price-orig">${trek.pricing.original}</span>
                    <span className="tp-price-badge">Save {trek.pricing.savePercent}%</span>
                    </div>
                    <div className="tp-price-main">${trek.pricing.discounted}</div>
                    <div className="tp-price-per">per person</div>
                </div>
            <div className="tp-price-details">
              {[
                { icon: <img src="/icons/clock.svg" />, label: "Duration", value: trek.details.duration },
                { icon: <img src="/icons/highestpoint.svg" />, label: "Max Altitude", value: trek.details.maxAltitude },
                { icon: <img src="/icons/easy.svg" />, label: "Difficulty", value: trek.details.difficulty },
                { icon: <img src="/icons/groupsize.svg" />, label: "Group Size", value: trek.details.groupSize },
              ].map(d => (
                <div key={d.label} className="tp-price-row">
                  <span className="tp-price-row-label"><span>{d.icon}</span> {d.label}</span>
                  <span className="tp-price-row-val">{d.value}</span>
                </div>
              ))}
            </div>

            <div className="tp-deposit-box">
              <strong>Secure with just ${trek.pricing.depositAmount}</strong>
              <span>Pay remaining balance anytime before trek</span>
            </div>

            <button className="tp-book-btn">Book Now</button>
            <button className="tp-enquiry-btn">Make an enquiry</button>

            <div className="tp-trust-row">
              <div className="tp-trust-item"><span><img src="/icons/secured.svg"/></span><small>Secure Booking</small></div>
              <div className="tp-trust-item"><span style={{color:"#1a3c6e"}}><img src="/icons/licensed.svg"/></span><small>Licensed Company</small></div>
              <div className="tp-trust-item"><span style={{color:"#e53"}}><img src="/icons/guarantee.svg"/></span><small>Best Price Guarantee</small></div>
            </div>
          </div>
        )}
          {/* Expert advice card — shown on Departure/Map/FAQ tabs */}
          {["Departure Dates", "Map", "Equipment", "FAQ"].includes(activeTab) && (
            <div className="tp-expert-card">
              <div className="tp-expert-header">
                <strong>Need Expert Advice?</strong>
                <span>Our trek specialists are here to help.</span>
              </div>
              <a href="tel:+97714952211" className="tp-contact-row">
                <span className="tp-contact-icon tp-contact-icon--phone">📞</span>
                <div><div className="tp-contact-label">Call us now!</div><div className="tp-contact-val">+977-1-4952211</div></div>
              </a>
              <a href="https://wa.me/97714952211" className="tp-contact-row">
                <span className="tp-contact-icon tp-contact-icon--wa">💬</span>
                <div><div className="tp-contact-label">Chat with us now!</div><div className="tp-contact-val">+977-1-4952211</div></div>
              </a>
              <a href="mailto:Info.hsj@gmail.com" className="tp-contact-row">
                <span className="tp-contact-icon tp-contact-icon--mail">✉️</span>
                <div><div className="tp-contact-label">Mail us now!</div><div className="tp-contact-val">Info.hsj@gmail.com</div></div>
              </a>
              <div className="tp-expert-footer">
                <strong>15+ years experience</strong>
                <span>Response within 24 hours</span>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}