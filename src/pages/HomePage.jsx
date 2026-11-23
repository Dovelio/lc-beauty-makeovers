import {
  Sparkles,
  Calendar,
  ArrowRight,
  Scissors,
  Crown,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import Hero from '../components/Hero';
import { servicesData } from '../data/servicesData';
import '../styles/home.css';

export default function HomePage({ onNavigate, onSelectService }) {
  // Get 3 signature highlights for preview
  const signatureServices = servicesData.filter((s) => s.featured).slice(0, 3);

  return (
    <div className="home-page-root">
      {/* 1. Hero Section (Specific to Homepage) */}
      <Hero onBookClick={() => onNavigate('contact')} />

      {/* 2. Welcome & Concept Highlights */}
      <section className="home-concept-section section-padding">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={14} />
              <span>Studio Philosophy</span>
            </div>
            <h2 className="section-title">The Perfect Harmony of Beauty &amp; Tailoring</h2>
            <p className="section-subtitle">
              At LC Beauty &amp; Makeovers, we bring together luxury salon treatments, bridal artistry, and bespoke garment tailoring so your attire and styling complement each other seamlessly.
            </p>
          </div>

          <div className="home-concept-cards-grid">
            <div className="concept-card">
              <div className="concept-card-icon-box">
                <Crown size={26} />
              </div>
              <h3 className="concept-card-title">Bridal &amp; Occasion Makeovers</h3>
              <p className="concept-card-desc">
                High-definition, camera-ready bridal looks customized to your skin tone, wedding theme, and jewelry for long-lasting radiance.
              </p>
              <button
                type="button"
                className="concept-link-btn"
                onClick={() => onNavigate('services')}
              >
                <span>View Makeover Services</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="concept-card">
              <div className="concept-card-icon-box">
                <Sparkles size={26} />
              </div>
              <h3 className="concept-card-title">Complete Hair &amp; Skin Care</h3>
              <p className="concept-card-desc">
                From revitalizing hair spas and keratin smoothening to glow facials and relaxing head massages, indulge in restorative care.
              </p>
              <button
                type="button"
                className="concept-link-btn"
                onClick={() => onNavigate('services')}
              >
                <span>Explore Hair &amp; Skin Care</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="concept-card highlight-card">
              <div className="concept-card-icon-box tailoring-icon">
                <Scissors size={26} />
              </div>
              <h3 className="concept-card-title">Bespoke Designer Tailoring</h3>
              <p className="concept-card-desc">
                Exact-fit designer blouse stitching, dress alterations, and immaculate saree pre-pleating crafted to match your makeover.
              </p>
              <button
                type="button"
                className="concept-link-btn"
                onClick={() => onNavigate('services')}
              >
                <span>Explore Tailoring &amp; Styling</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature Rituals Snapshot (Previewing key services with direct link to Services page) */}
      <section className="home-preview-section section-padding">
        <div className="section-container">
          <div className="preview-header-row">
            <div>
              <div className="section-badge">
                <Crown size={14} />
                <span>Featured Highlights</span>
              </div>
              <h2 className="section-title">Popular Studio Services</h2>
            </div>
            <button
              type="button"
              className="btn-secondary view-all-services-btn"
              onClick={() => onNavigate('services')}
            >
              <span>View All 22 Services</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="home-preview-grid">
            {signatureServices.map((service) => (
              <div key={service.id} className="home-preview-card">
                <div className="preview-card-media">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                  <span className="preview-card-badge">{service.category}</span>
                </div>
                <div className="preview-card-body">
                  <h3 className="preview-card-title">{service.name}</h3>
                  <p className="preview-card-desc">{service.description}</p>
                  <button
                    type="button"
                    className="preview-book-link"
                    onClick={() => {
                      if (onSelectService) onSelectService(service.name);
                      onNavigate('contact');
                    }}
                  >
                    <span>Book This Service</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="preview-mobile-cta">
            <button
              type="button"
              className="btn-primary w-100"
              onClick={() => onNavigate('services')}
            >
              <span>Explore All 22 Services</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Home Call to Action Banner */}
      <section className="home-cta-banner-section">
        <div className="section-container">
          <div className="home-cta-banner-card">
            <div className="cta-banner-content">
              <span className="cta-banner-tag">Plan Your Visit</span>
              <h2 className="cta-banner-title">Ready for Your Beauty &amp; Styling Experience?</h2>
              <p className="cta-banner-desc">
                Whether you need a bridal consultation, hair pampering, or custom blouse tailoring, our team is ready to serve you with care.
              </p>

              <div className="cta-banner-actions">
                <button
                  type="button"
                  className="btn-primary cta-main-btn"
                  onClick={() => onNavigate('contact')}
                >
                  <Calendar size={18} />
                  <span>Schedule an Appointment</span>
                </button>

                <button
                  type="button"
                  className="btn-secondary cta-sub-btn"
                  onClick={() => onNavigate('about')}
                >
                  <span>Learn About Our Studio</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="cta-banner-badges">
              <div className="banner-badge-item">
                <CheckCircle2 size={18} />
                <span>Sanitized &amp; Clean Salon</span>
              </div>
              <div className="banner-badge-item">
                <ShieldCheck size={18} />
                <span>Premium Quality Products</span>
              </div>
              <div className="banner-badge-item">
                <HeartHandshake size={18} />
                <span>One-on-One Consultations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
