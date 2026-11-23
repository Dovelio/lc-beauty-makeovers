import { MapPin } from 'lucide-react';
import Contact from '../components/Contact';
import Appointment from '../components/Appointment';
import '../styles/pageBanner.css';

export default function ContactPage({ selectedService, onServiceReset }) {
  return (
    <div className="contact-page-root">
      {/* Dedicated Page Banner without Breadcrumbs */}
      <section className="subpage-banner">
        <div className="section-container">
          <div className="subpage-badge">
            <MapPin size={14} />
            <span>Visit Or Message Us</span>
          </div>
          <h1 className="subpage-title">Contact &amp; Book Appointment</h1>
          <p className="subpage-subtitle">
            We are here to assist you with beauty makeover consultations, hair treatments, and tailoring appointments. Choose your preferred way to connect below.
          </p>
        </div>
      </section>

      {/* Interactive Appointment Form */}
      <Appointment
        selectedService={selectedService}
        onServiceReset={onServiceReset}
      />

      {/* Contact Cards, Hours, & Directions Map */}
      <Contact />
    </div>
  );
}
