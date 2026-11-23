import { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  Phone,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import '../styles/navbar.css';

export default function Navbar({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`luxury-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="section-container header-inner-container">
        {/* Brand Identity / Haute Crest */}
        <button
          type="button"
          className="brand-anchor"
          onClick={() => handleNavClick('home')}
          aria-label="LC Beauty & Makeovers Home"
        >
          <div className="haute-emblem">
            <div className="emblem-halo" />
            <div className="emblem-core">
              <span className="emblem-monogram">LC</span>
            </div>
            <Sparkles className="emblem-sparkle" size={14} />
          </div>

          <div className="brand-copy">
            <span className="brand-wordmark">LC Beauty &amp; Makeovers</span>
            <span className="brand-subline">
              <span>Haute Parlour</span>
              <span className="subline-gem">✦</span>
              <span>Bespoke Tailoring</span>
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="center-nav" aria-label="Main Navigation">
          <ul className="nav-items-group">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <li key={item.id} className="nav-item-wrapper">
                  <button
                    type="button"
                    className={`nav-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <span className="nav-btn-text">{item.label}</span>
                    {isActive && (
                      <span className="active-jewel-indicator">
                        <span className="jewel-line" />
                        <span className="jewel-sparkle">✦</span>
                        <span className="jewel-line" />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Action Touchpoints */}
        <div className="header-right-actions">
          {/* Quick WhatsApp Link Pill */}
          <a
            href={businessInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="header-wa-touchpoint"
            title="Chat on WhatsApp"
            aria-label="WhatsApp Us"
          >
            <span className="wa-status-dot" />
            <MessageSquare size={15} />
            <span className="touchpoint-text">WhatsApp</span>
          </a>

          {/* Book Appointment CTA */}
          <button
            type="button"
            className="haute-cta-btn"
            onClick={() => handleNavClick('contact')}
          >
            <span className="cta-icon-wrap">
              <Calendar size={15} />
            </span>
            <span className="cta-label">Book Appointment</span>
            <span className="cta-shimmer" />
          </button>

          {/* Architectural Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`luxury-mobile-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="toggle-line line-1" />
            <span className="toggle-line line-2" />
          </button>
        </div>
      </div>

      {/* Full-width Luxury Mobile Drawer */}
      <div className={`haute-mobile-drawer ${mobileMenuOpen ? 'drawer-visible' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="drawer-top-brand">
            <span className="drawer-title">LC Beauty &amp; Makeovers</span>
            <span className="drawer-subtitle">Explore Our Salon &amp; Tailoring</span>
          </div>

          <ul className="drawer-nav-list">
            {navLinks.map((item, index) => {
              const isActive = currentPage === item.id;
              return (
                <li key={item.id} className="drawer-nav-item">
                  <button
                    type="button"
                    className={`drawer-nav-btn ${isActive ? 'drawer-active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <span className="drawer-item-index">0{index + 1}</span>
                    <span className="drawer-item-label">{item.label}</span>
                    <div className="drawer-item-indicator">
                      {isActive && <span className="active-chip">Viewing</span>}
                      <ArrowRight size={17} className="drawer-arrow" />
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="drawer-bottom-actions">
            <button
              type="button"
              className="btn-primary drawer-book-btn"
              onClick={() => handleNavClick('contact')}
            >
              <Calendar size={18} />
              <span>Book Appointment Online</span>
            </button>

            <div className="drawer-contact-cards">
              <a
                href={`tel:${businessInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="drawer-contact-card"
              >
                <Phone size={15} />
                <span>{businessInfo.phone}</span>
              </a>
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-contact-card wa-card"
              >
                <MessageSquare size={15} />
                <span>Instant WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="drawer-backdrop-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
