import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Navigation,
  Mail,
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import '../styles/contact.css';

export default function Contact() {
  const contactCards = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Consultation',
      subtitle: 'Speak with our salon desk directly',
      value: businessInfo.phone,
      actionText: 'Call Now',
      href: `tel:${businessInfo.phone.replace(/[^0-9+]/g, '')}`,
      isPrimary: false,
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'WhatsApp Chat',
      subtitle: 'Quick queries & bridal quotes',
      value: businessInfo.whatsapp,
      actionText: 'Message Us',
      href: businessInfo.whatsappLink,
      isPrimary: true,
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      subtitle: 'Collaborations & inquiries',
      value: businessInfo.email,
      actionText: 'Send Email',
      href: `mailto:${businessInfo.email}`,
      isPrimary: false,
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      subtitle: 'Open 7 days a week',
      value: `${businessInfo.operatingHours.weekdays}`,
      extraValue: `${businessInfo.operatingHours.sunday}`,
      actionText: null,
      href: null,
      isPrimary: false,
    },
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={14} />
            <span>Find &amp; Reach Us</span>
          </div>
          <h2 className="section-title">Visit Our Studio</h2>
          <p className="section-subtitle">
            We are conveniently located for all your beauty makeover sessions and tailoring fittings. Reach out or step into our parlour today.
          </p>
        </div>

        {/* 4 Contact Info Cards */}
        <div className="contact-cards-grid">
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              className={`contact-info-card ${card.isPrimary ? 'primary-card' : ''}`}
            >
              <div className="contact-card-icon-box">{card.icon}</div>
              <h3 className="contact-card-title">{card.title}</h3>
              <p className="contact-card-subtitle">{card.subtitle}</p>
              <div className="contact-card-value">
                <span>{card.value}</span>
                {card.extraValue && <span className="extra-time">{card.extraValue}</span>}
              </div>
              {card.href && (
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : '_self'}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-card-action-btn"
                >
                  <span>{card.actionText}</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Location & Map Direction Placeholder Container */}
        <div className="contact-location-box">
          <div className="location-details-col">
            <div className="location-badge">
              <Sparkles size={14} />
              <span>Studio Address</span>
            </div>
            <h3 className="location-heading">{businessInfo.name}</h3>
            <p className="location-address-text">
              <MapPin size={20} className="address-pin-icon" />
              <span>{businessInfo.address}</span>
            </p>

            <div className="location-tips">
              <strong>Helpful directions:</strong>
              <ul>
                <li>Centrally situated on the main commercial road for easy access.</li>
                <li>Comfortable parking available near the complex entrance.</li>
                <li>Wheelchair-accessible ground-floor entrance.</li>
              </ul>
            </div>

            <div className="location-actions">
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary location-btn"
              >
                <Navigation size={17} />
                <span>Get Exact Location on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="location-map-visual">
            <div className="map-placeholder-card">
              <div className="map-pulse-pin">
                <MapPin size={32} />
                <span className="pulse-ring" />
              </div>
              <div className="map-card-info">
                <strong>{businessInfo.name}</strong>
                <span>{businessInfo.address}</span>
                <span className="map-hours-tag">Open Today: 9:30 AM – 8:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
