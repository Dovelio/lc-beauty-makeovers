import { Heart, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';
import '../styles/pageBanner.css';

export default function WhyUsPage({ onNavigate }) {
  return (
    <div className="why-us-page-root">
      {/* Dedicated Page Banner without Breadcrumbs */}
      <section className="subpage-banner">
        <div className="section-container">
          <div className="subpage-badge">
            <Heart size={14} />
            <span>The LC Standard of Excellence</span>
          </div>
          <h1 className="subpage-title">Why Choose LC Beauty &amp; Makeovers</h1>
          <p className="subpage-subtitle">
            Experience dedicated care, artisanal tailoring, and premium salon rituals delivered with warmth, patience, and meticulous attention to detail.
          </p>
        </div>
      </section>

      {/* Core Why Choose Us Section */}
      <WhyChooseUs />

      {/* Client Care Promise Callout */}
      <section className="why-promise-section section-padding" style={{ background: 'var(--bg-color)' }}>
        <div className="section-container">
          <div className="home-cta-banner-card" style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div className="cta-banner-content">
              <span className="cta-banner-tag">Our Promise To You</span>
              <h2 className="cta-banner-title">Thoughtful Service In A Relaxing Ambience</h2>
              <p className="cta-banner-desc">
                From the moment you step into LC Beauty &amp; Makeovers to the final touchup or trial fitting, we ensure a serene, respectful, and joyful experience.
              </p>

              <div className="cta-banner-actions">
                <button
                  type="button"
                  className="btn-primary cta-main-btn"
                  onClick={() => onNavigate('contact')}
                >
                  <Calendar size={18} />
                  <span>Book Your Visit Today</span>
                </button>

                <button
                  type="button"
                  className="btn-secondary cta-sub-btn"
                  onClick={() => onNavigate('services')}
                >
                  <span>Explore All Services</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="cta-banner-badges">
              <div className="banner-badge-item">
                <CheckCircle2 size={18} />
                <span>Sanitized Single-Use Tools</span>
              </div>
              <div className="banner-badge-item">
                <ShieldCheck size={18} />
                <span>Premium Quality Products</span>
              </div>
              <div className="banner-badge-item">
                <CheckCircle2 size={18} />
                <span>Bespoke Measurement Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
