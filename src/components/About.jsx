import { Sparkles, Scissors, Heart, CheckCircle2, Crown, Gem } from 'lucide-react';
import '../styles/about.css';

export default function About() {
  const pillars = [
    {
      icon: <Crown size={22} />,
      title: 'Bridal & Occasion Makeup',
      desc: 'Flawless HD & traditional bridal artistry, bespoke occasion looks, and expert saree draping coordinated with your attire.',
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Hair & Skincare Rituals',
      desc: 'Nourishing hair spas, deep keratin therapies, hair coloring, revitalizing facials, and skin de-tan treatments.',
    },
    {
      icon: <Gem size={22} />,
      title: 'Nail & Beauty Treatments',
      desc: 'Sculpted nail extensions, creative nail art, soothing pedicures, manicures, and gentle skin-smoothing waxing.',
    },
    {
      icon: <Heart size={22} />,
      title: 'Personal Grooming',
      desc: 'Precise eyebrow styling, herbal bleaching, and therapeutic warm oil scalp massages for relaxation and rejuvenation.',
    },
    {
      icon: <Scissors size={22} />,
      title: 'Bespoke Tailoring Services',
      desc: 'Designer bridal blouse stitching, custom dresses, saree pre-pleating, and alterations tailored to your unique measurements.',
    },
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Our Story &amp; Philosophy</span>
          </div>
          <h2 className="section-title">Beauty, Elegance &amp; Personal Care</h2>
          <p className="section-subtitle">
            A sanctuary where professional makeover artistry and precision tailoring converge, giving you a coordinated, stress-free experience for your most cherished moments.
          </p>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          {/* Left Column: Visual Showcase */}
          <div className="about-visuals">
            <div className="about-image-frame primary-frame">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
                alt="Flawless makeover and bridal styling session"
                className="about-img"
                loading="lazy"
              />
              <div className="about-image-tag">
                <Crown size={16} />
                <span>Makeover &amp; Beauty Artistry</span>
              </div>
            </div>

            <div className="about-image-frame secondary-frame">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80"
                alt="Professional tailoring studio with fabric, pattern and stitching work"
                className="about-img"
                loading="lazy"
              />
              <div className="about-image-tag tailoring-tag">
                <Scissors size={16} />
                <span>Bespoke Tailoring &amp; Stitching</span>
              </div>
            </div>

            {/* Decorative Lavender Backdrop Box */}
            <div className="about-backdrop-accent" />
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="about-narrative">
            <h3 className="about-heading">
              Complete Beauty &amp; Tailoring Under One Welcoming Roof
            </h3>

            <p className="about-lead">
              At <strong>LC Beauty &amp; Makeovers</strong>, we believe every woman deserves personalized care that honors her individual style. Whether you are preparing for your wedding day, refreshing your hairstyle, indulging in a peaceful facial, or getting a designer blouse stitched to perfection, our dedicated studio is designed to care for you.
            </p>

            <p className="about-body">
              By seamlessly bringing together professional salon rituals, modern makeover artistry, and custom garment tailoring in one place, we save you from rushing between different parlours and tailors. Everything is thoughtfully coordinated so your attire, hair, and makeup harmonize beautifully.
            </p>

            {/* Core Services Highlights */}
            <div className="about-pillars-list">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="about-pillar-card">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <div className="pillar-content">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Studio Values Checklist */}
            <div className="about-values-row">
              <div className="value-check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Sterilized &amp; Sanitized Tools</span>
              </div>
              <div className="value-check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Skin-Friendly Products</span>
              </div>
              <div className="value-check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Exact Measurement Fitting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
