import { Sparkles, Calendar, ArrowRight, ShieldCheck, HeartHandshake, Scissors } from 'lucide-react';
import '../styles/hero.css';

export default function Hero({ onBookClick }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Decorative Background Elements */}
      <div className="hero-bg-glow hero-bg-glow-1" />
      <div className="hero-bg-glow hero-bg-glow-2" />

      <div className="section-container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={15} className="hero-badge-icon" />
            <span>Premium Beauty Parlour &amp; Bespoke Tailoring</span>
          </div>

          <h1 className="hero-headline">
            Enhance Your Beauty, <br />
            <span className="hero-headline-gradient">Elevate Your Confidence</span>
          </h1>

          <p className="hero-description">
            Discover professional beauty treatments, stunning bridal makeovers, and expert tailoring services, all crafted with care and attention to detail.
          </p>

          <div className="hero-actions">
            <a
              href="#appointment"
              className="btn-primary hero-btn-primary"
              onClick={(e) => {
                if (onBookClick) onBookClick();
                scrollToSection(e, 'appointment');
              }}
            >
              <Calendar size={18} />
              <span>Book an Appointment</span>
            </a>

            <a
              href="#services"
              className="btn-secondary hero-btn-secondary"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              <span>Explore Our Services</span>
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Genuine Highlights / Trust Indicators without fake statistics */}
          <div className="hero-highlights-grid">
            <div className="hero-highlight-item">
              <div className="highlight-icon-box">
                <Sparkles size={18} />
              </div>
              <div className="highlight-text-box">
                <strong>Bridal &amp; HD Makeovers</strong>
                <span>Long-lasting waterproof artistry</span>
              </div>
            </div>

            <div className="hero-highlight-item">
              <div className="highlight-icon-box">
                <Scissors size={18} />
              </div>
              <div className="highlight-text-box">
                <strong>Bespoke Tailoring</strong>
                <span>Designer blouses &amp; custom fitting</span>
              </div>
            </div>

            <div className="hero-highlight-item">
              <div className="highlight-icon-box">
                <ShieldCheck size={18} />
              </div>
              <div className="highlight-text-box">
                <strong>Hygienic Care</strong>
                <span>Sanitized tools &amp; premium products</span>
              </div>
            </div>

            <div className="hero-highlight-item">
              <div className="highlight-icon-box">
                <HeartHandshake size={18} />
              </div>
              <div className="highlight-text-box">
                <strong>Personal Attention</strong>
                <span>Attentive, one-on-one consultation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visuals & Badges */}
        <div className="hero-visual-wrapper">
          <div className="hero-image-card main-card">
            <img
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=900&q=85"
              alt="Radiant bridal makeup with gold jewelry and soft floral aesthetics"
              className="hero-main-img"
              loading="eager"
            />
            <div className="hero-image-overlay" />
            <div className="hero-image-caption">
              <span className="caption-tag">Signature Service</span>
              <span className="caption-title">Exquisite Bridal &amp; HD Makeovers</span>
            </div>
          </div>

          {/* Secondary Floating Feature Card */}
          <div className="hero-floating-card tailoring-card">
            <div className="floating-card-icon">
              <Scissors size={20} />
            </div>
            <div className="floating-card-info">
              <span className="floating-card-subtitle">Integrated Studio</span>
              <strong className="floating-card-title">Custom Blouse Tailoring</strong>
              <span className="floating-card-desc">Saree pre-pleating &amp; flawless fitting</span>
            </div>
          </div>

          {/* Service Rituals Floating Pill */}
          <div className="hero-floating-card beauty-card">
            <div className="floating-card-icon star-icon">
              <Sparkles size={20} />
            </div>
            <div className="floating-card-info">
              <span className="floating-card-subtitle">Complete Care</span>
              <strong className="floating-card-title">Hair &amp; Skin Rituals</strong>
              <span className="floating-card-desc">Keratin, spas, facials &amp; nail art</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
