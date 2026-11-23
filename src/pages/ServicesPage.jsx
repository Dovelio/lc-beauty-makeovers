import { Sparkles } from 'lucide-react';
import Services from '../components/Services';
import '../styles/pageBanner.css';

export default function ServicesPage({ onNavigate, onSelectService }) {
  const handleBookService = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    onNavigate('contact');
  };

  return (
    <div className="services-page-root">
      {/* Dedicated Page Banner without Breadcrumbs */}
      <section className="subpage-banner">
        <div className="section-container">
          <div className="subpage-badge">
            <Sparkles size={14} />
            <span>Complete Parlour &amp; Tailoring Offerings</span>
          </div>
          <h1 className="subpage-title">Our Complete Services</h1>
          <p className="subpage-subtitle">
            Browse our full menu of all 22 beauty, hair, skin, nail, and bespoke tailoring services. Filter by category or search instantly for your desired ritual.
          </p>
        </div>
      </section>

      {/* Main Services Grid with all 22 services including Tailoring */}
      <Services onBookService={handleBookService} />
    </div>
  );
}
