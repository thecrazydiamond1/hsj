import "./SubFooter.css";

const recommendedOn = [
  { src: "/icons/horizon-guides.svg", alt: "Horizon Guides" },
  { src: "/icons/getyourguides.svg", alt: "Get Your Guide" },
  { src: "/icons/kayak.svg", alt: "Kayak" },
  { src: "/icons/Google2.svg", alt: "Google" },
  { src: "/icons/viator.svg", alt: "Viator" },
  { src: "/icons/tripadv.svg", alt: "Tripadvisor" },
  { src: "/icons/tourrandarlogo.svg", alt: "Tourradar" },
];

const businessGroup = [
  { src: "/icons/himalayansuitehotel.svg", alt: "Himalayan Suite Hotel" },
  { src: "/icons/himalayancafektm.svg", alt: "Himalayan Cafe" },
  { src: "/icons/himalayansuitespa.svg", alt: "Himalayan Suite Spa" },
  { src: "/icons/altitudeair.svg", alt: "Altitude Air" },
  { src: "/icons/company.svg", alt: "Company" },
  { src: "/icons/companyname.svg", alt: "Company Name" },
];

const associatedWith = [
  { src: "/icons/ntb.svg", alt: "Nepal Tourism Board" },
  { src: "/icons/natta.svg", alt: "NATTA 1966" },
  { src: "/icons/trekkingagencies.svg", alt: "Trekking Agencies Association of Nepal" },
  { src: "/icons/nma.svg", alt: "Nepal Mountaineering Association" },
];

export default function FooterTop() {
  return (
    <section className="ftop">

      {/* ── RECOMMENDED ON ── */}
      <div className="ftop-section">
        <div className="ftop-rule-title">
          <span>Recommended on</span>
        </div>
        <div className="ftop-logos ftop-logos--recommended">
          {recommendedOn.map((item) => (
            <div key={item.alt} className="ftop-logo-item">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* ── BUSINESS GROUP ── */}
      <div className="ftop-section ftop-section--bordered">
        <div className="ftop-rule-title">
          <span>Business Group</span>
        </div>
        <p className="ftop-subtitle">We have a whole business chain to cater to your different needs.</p>
        <div className="ftop-logos ftop-logos--business">
          {businessGroup.map((item) => (
            <div key={item.alt} className="ftop-logo-item ftop-logo-item--circle">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* ── ASSOCIATED WITH ── */}
      <div className="ftop-section ftop-section--bordered">
        <div className="ftop-rule-title">
          <span>We Are Associated With</span>
        </div>
        <p className="ftop-subtitle">Partnered with trusted organizations to ensure quality and reliability.</p>
        <div className="ftop-logos ftop-logos--associations">
          {associatedWith.map((item) => (
            <div key={item.alt} className="ftop-logo-item ftop-logo-item--assoc">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}