import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Now live
        </div>
        <h1>Build things that <em>actually</em> matter</h1>
        <p className="hero-sub">
          A clean, fast foundation for your next project. No clutter, no bloat — just the essentials done right.
        </p>
        <div className="hero-actions">
          <Link href="/about" className="btn-primary">Learn more</Link>
          <Link href="/contact" className="btn-ghost">Get in touch →</Link>
        </div>
      </section>

      <div className="divider" />

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Lightning fast</h3>
          <p>Built on Next.js 14 with the App Router. Static where possible, dynamic where needed.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Designed with care</h3>
          <p>Every detail is considered. Typography, spacing, and color — nothing is left to chance.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>Fully responsive</h3>
          <p>Looks great on every screen, from a small phone to a wide desktop monitor.</p>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <div className="cta-box">
          <h2>Ready to start something new?</h2>
          <Link href="/contact" className="btn-dark">Contact us</Link>
        </div>
      </div>
    </div>
  );
}