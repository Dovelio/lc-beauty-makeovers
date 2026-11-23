import { Sparkles, Calendar, ArrowRight, ShieldCheck, Heart, Scissors } from 'lucide-react';
import About from '../components/About';
import '../styles/pageBanner.css';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="about-page-root">
      {/* Dedicated Page Banner without Breadcrumbs */}
      <section className="subpage-banner">
        <div className="section-container">
          <div className="subpage-badge">
            <Sparkles size={14} />
            <span>Our Studio Story &amp; Philosophy</span>
          </div>
          <h1 className="subpage-title">Beauty, Elegance &amp; Personal Care</h1>
          <p className="subpage-subtitle">
            A sanctuary where professional makeover artistry and precision bespoke tailoring converge, giving you a coordinated, stress-free experience for your most cherished moments.
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Additional Studio Standards Section */}
      <section className="about-standards-section section-padding" style={{ background: 'var(--bg-color)' }}>
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <ShieldCheck size={14} />
              <span>Our Daily Commitment</span>
            </div>
            <h2 className="section-title">Strict Standards of Care &amp; Hygiene</h2>
            <p className="section-subtitle">
              We understand that personal care requires trust. Every service at LC Beauty &amp; Makeovers is delivered with genuine attention to safety, comfort, and craft.
            </p>
          </div>

          <div className="home-concept-cards-grid">
            <div className="concept-card">
              <div className="concept-card-icon-box">
                <ShieldCheck size={26} />
              </div>
              <h3 className="concept-card-title">Hygienic Environment</h3>
              <p className="concept-card-desc">
                Clean single-use disposables, thoroughly sterilized salon tools, and disinfected stations between every client session.
              </p>
            </div>

            <div className="concept-card">
              <div className="concept-card-icon-box">
                <Heart size={26} />
              </div>
              <h3 className="concept-card-title">Personalized Consultation</h3>
              <p className="concept-card-desc">
                We listen closely to your preferences, skin sensitivities, and occasion requirements before recommending any treatment or hairstyle.
              </p>
            </div>

            <div className="concept-card highlight-card">
              <div className="concept-card-icon-box tailoring-icon">
                <Scissors size={26} />
              </div>
              <h3 className="concept-card-title">Bespoke Fit Promise</h3>
              <p className="concept-card-desc">
                In-person measurement taking, fine pattern adjustments, and trial fittings ensure your designer blouses and outfits fit with complete grace.
              </p>
            </div>
          </div>

          {/* Invitation CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              type="button"
              className="btn-primary"
              style={{ marginRight: '1rem', marginBottom: '0.75rem' }}
              onClick={() => onNavigate('services')}
            >
              <span>Explore All 22 Services</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => onNavigate('contact')}
            >
              <Calendar size={16} />
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
