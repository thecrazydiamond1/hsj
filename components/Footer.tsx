import Link from "next/link";
import "./Footer.css";

const hsjExperience = [
  { label: "Explore", href: "/explore" },
  { label: "Experiences", href: "/experiences" },
  { label: "Video Reviews", href: "/video-reviews" },
  { label: "All Reviews", href: "/reviews" },
  { label: "Send Us Review", href: "/send-review" },
];

const usefulLinks = [
  { label: "Travel Updates", href: "/travel-updates" },
  { label: "Nepal Visa Info", href: "/nepal-visa" },
  { label: "Company Policy", href: "/company-policy" },
  { label: "Video Gallery", href: "/gallery" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Partner with Us", href: "/partner" },
];

const exploreHsj = [
  { label: "Company Policy", href: "/company-policy" },
  { label: "Travel Guide", href: "/travel-guide" },
  { label: "Why Us?", href: "/why-us" },
  { label: "Our Team", href: "/team" },
];

export default function Footer() {
  return (
    <footer className="hsj-footer">
      {/* ── MAIN FOOTER ── */}
      <div className="footer-main">
        <div className="footer-inner">

          {/* Column 1 – Brand + Contact */}
          <div className="footer-brand">
            <Link href="/">
              {/* Replace with your Figma logo export */}
              <img src="/icons/logo.svg" alt="Himalayan Social Journey" width={150} height={50} className="footer-logo" />
            </Link>

            <p className="footer-office-title">NEPAL Office Location</p>
            <div className="footer-contact-item">
              <img src="/icons/address.svg" alt="" width={16} height={16} />
              <span>House No 244, Buddha Tole Marg, Kumari Club, Shorakhutte, Kathmandu, Nepal</span>
            </div>
            <div className="footer-contact-item">
              <img src="/icons/phone.svg" alt="" width={16} height={16} />
              <span>+977-1-4952211, +9779810650405 (WhatsApp)</span>
            </div>
            <div className="footer-contact-item">
              <img src="/icons/email.svg" alt="" width={16} height={16} />
              <a href="mailto:infohsg@gmail.com">infohsg@gmail.com</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4>HSJ Experience</h4>
            <ul>
              {hsjExperience.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              {usefulLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h4>Explore HSJ</h4>
            <ul>
              {exploreHsj.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>

          {/* Column 5 – Newsletter */}
          <div className="footer-col footer-newsletter">
            <h4>Subscribe For Newsletter</h4>
            <div className="newsletter-form">
              <div className="newsletter-input-wrap">
                <img src="/icons/email.svg" alt="" width={16} height={16} />
                <input type="email" placeholder="Enter your email" />
              </div>
              <button type="button">Subscribe</button>
            </div>
            <p className="newsletter-note">No ads. No trails. No commitments</p>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-bottom-left">
            <div className="footer-social-section">
              <span>Follow us</span>
              <div className="footer-social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/instagram.svg" alt="Instagram" width={22} height={22} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/facebook.svg" alt="Facebook" width={22} height={22} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/twitter.svg" alt="Twitter" width={22} height={22} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/youtube.svg" alt="YouTube" width={22} height={22} />
                </a>
              </div>
            </div>

            {/* Badges */}
            <div className="footer-badges">
              <img src="/icons/trip-advisor.svg" alt="Tripadvisor Travelers Choice" width={60} height={60} />
              <img src="/icons/iata.svg" alt="IATA" width={60} height={60} />
            </div>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-payments-section">
              <span>Payments</span>
              <div className="footer-payment-icons">
                <img src="/icons/paypal.svg" alt="PayPal" height={24} />
                <img src="/icons/stripe.svg" alt="Stripe" height={24} />
                <img src="/icons/mastercard.svg" alt="Mastercard" height={24} />
                <img src="/icons/visacard.svg" alt="Visa" height={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-copyright-bar">
          <p>© 2024 Hsj Inc. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/legal">Legal notice</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>

      {/* ── SKYLINE SVG ── */}
      <div className="footer-skyline">
        {/* Replace this with your Figma skyline export as an <img> or inline SVG */}
        <img src="/icons/skyline.svg" alt="Nepal Skyline" width="100%" height="auto" />
      </div>
    </footer>
  );
}