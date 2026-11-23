import { useState, useMemo } from 'react';
import { Sparkles, Search, X, CheckCircle, SlidersHorizontal } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ServiceCard from './ServiceCard';
import '../styles/services.css';

export default function Services({ onBookService }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter options that avoid isolating Tailoring as a separate category
  // All 22 services are available in 'All', and Tailoring is part of regular services.
  const filterOptions = [
    { id: 'all', label: `All Services (${servicesData.length})` },
    { id: 'popular', label: 'Popular & Signature' },
    { id: 'hair', label: 'Hair Care & Treatments' },
    { id: 'skin', label: 'Skin & Facial Care' },
    { id: 'nails-makeover', label: 'Bridal, Nails & Styling' },
  ];

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      // Search matching
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (service.highlights &&
          service.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase())));

      if (!matchesSearch) return false;

      // Filter category matching
      if (activeFilter === 'all') return true;
      if (activeFilter === 'popular') return service.featured;
      if (activeFilter === 'hair') {
        return (
          service.id.includes('hair') ||
          service.id === 'head-massage'
        );
      }
      if (activeFilter === 'skin') {
        return ['facial', 'd-tan', 'bleach'].includes(service.id);
      }
      if (activeFilter === 'nails-makeover') {
        return [
          'bridal-makeup',
          'hd-makeup',
          'nail-extension',
          'eyelashes-extension',
          'pedicure',
          'manicure',
          'saree-pre-pleating',
          'eyebrows',
          'waxing',
          'tailoring', // Integrated alongside styling services
        ].includes(service.id);
      }
      return true;
    });
  }, [searchQuery, activeFilter]);

  const handleSelectService = (serviceName) => {
    if (onBookService) {
      onBookService(serviceName);
    }
    const element = document.getElementById('appointment');
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
    <section id="services" className="services-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Complete Parlour &amp; Tailoring Offerings</span>
          </div>
          <h2 className="section-title">Our Complete Services</h2>
          <p className="section-subtitle">
            Explore all {servicesData.length} professional beauty rituals, bridal makeovers, and custom tailoring services, each executed with skill, cleanliness, and care.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="services-toolbar">
          {/* Quick Filter Tabs */}
          <div className="services-filter-pills" role="tablist" aria-label="Service Filters">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === opt.id}
                className={`filter-pill ${activeFilter === opt.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="services-search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="services-search-input"
              placeholder="Search services (e.g., Bridal, Tailoring, Keratin, Facial)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search all services"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Status Count Line */}
        <div className="services-count-bar">
          <span className="count-info">
            Showing <strong>{filteredServices.length}</strong> of{' '}
            <strong>{servicesData.length}</strong> services
          </span>
          {activeFilter !== 'all' && (
            <button
              type="button"
              className="reset-filter-btn"
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
            >
              Reset to All ({servicesData.length})
            </button>
          )}
        </div>

        {/* Grid of All 22 Services */}
        {filteredServices.length > 0 ? (
          <div className="services-cards-grid">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookService={handleSelectService}
              />
            ))}
          </div>
        ) : (
          <div className="services-empty-state">
            <SlidersHorizontal size={40} className="empty-icon" />
            <h3>No services matched your query</h3>
            <p>Try searching for a different keyword or reset the filter to view all {servicesData.length} services.</p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
            >
              Show All {servicesData.length} Services
            </button>
          </div>
        )}

        {/* Trust banner underneath services */}
        <div className="services-bottom-banner">
          <div className="bottom-banner-item">
            <CheckCircle size={18} />
            <span>Complete Care: Hair, Skin, Nails, Makeover &amp; Tailoring</span>
          </div>
          <div className="bottom-banner-item">
            <CheckCircle size={18} />
            <span>Tailoring appointments include personal body measurements</span>
          </div>
          <div className="bottom-banner-item">
            <CheckCircle size={18} />
            <span>High hygiene standards &amp; sanitized equipment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
