import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ArrowUp,
  Share2,
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import '../styles/footer.css';

const currentYear = new Date().getFullYear();

export default function Footer({ onNavigate, onSelectService }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    scrollToTop();
  };

  const handleServiceClick = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    if (onNavigate) {
      onNavigate('contact');
    }
    scrollToTop();
  };

  const topServices = [
    'Bridal Makeup',
    'HD Makeup',
    'Hair Keratin Treatment',
    'Facial',
    'Nail Extension',
    'Saree Pre-Pleating',
    'Tailoring',
    'Hair Spa',
    'Manicure & Pedicure',
  ];

  return (
    <footer className="footer-root">
      <div className="section-container footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-brand-icon">
                <span className="brand-monogram">LC</span>
              </div>
              <div className="footer-brand-title">
                <strong>LC Beauty &amp; Makeovers</strong>
                <span>Beauty Parlour &amp; Tailoring</span>
              </div>
            </div>

            <p className="footer-about-text">
              {businessInfo.description}
            </p>

            <div className="footer-social-links">
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn wa-icon"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare size={17} />
              </a>
              <button
                type="button"
                className="social-icon-btn"
                title="Instagram Page"
                aria-label="Instagram"
                onClick={() => handleLinkClick('contact')}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </button>
              <button
                type="button"
                className="social-icon-btn"
                title="Facebook Page"
                aria-label="Facebook"
                onClick={() => handleLinkClick('contact')}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="social-icon-btn"
                title="Share Studio Details"
                aria-label="Share"
                onClick={() => handleLinkClick('contact')}
              >
                <Share2 size={17} />
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Explore Pages</h4>
            <ul className="footer-nav-list">
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleLinkClick('about')}
                >
                  About Our Studio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleLinkClick('services')}
                >
                  All 22 Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleLinkClick('why-us')}
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleLinkClick('gallery')}
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleLinkClick('contact')}
                >
                  Contact &amp; Bookings
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Services Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Signature Services</h4>
            <ul className="footer-nav-list">
              {topServices.map((serviceName, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => handleServiceClick(serviceName)}
                  >
                    {serviceName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Information</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={17} className="contact-icon" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={17} className="contact-icon" />
                <a href={`tel:${businessInfo.phone.replace(/[^0-9+]/g, '')}`}>
                  {businessInfo.phone}
                </a>
              </li>
              <li className="footer-contact-item">
                <MessageSquare size={17} className="contact-icon" />
                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {businessInfo.whatsapp}
                </a>
              </li>
              <li className="footer-contact-item">
                <Clock size={17} className="contact-icon" />
                <div>
                  <span>{businessInfo.operatingHours.weekdays}</span>
                  <br />
                  <span className="sun-hours">{businessInfo.operatingHours.sunday}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {currentYear} <strong>{businessInfo.name}</strong>. All rights reserved. Crafted with care &amp; elegance.
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
