import { useState } from 'react';
import {
  Calendar,
  Clock,
  Sparkles,
  MessageSquare,
  CheckCircle,
  Phone,
  Send,
  AlertCircle,
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import '../styles/appointment.css';

// Calculate today's date once outside render
const todayString = new Date().toISOString().split('T')[0];

export default function Appointment({ selectedService, onServiceReset }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    timeSlot: 'Morning (9:30 AM – 12:30 PM)',
    message: '',
  });

  // Track the effective service: if user selected a service or if passed via prop
  const [prevPropService, setPrevPropService] = useState(selectedService);
  if (selectedService !== prevPropService) {
    setPrevPropService(selectedService);
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact number.';
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!formData.service) {
      errs.service = 'Please select a service or general consultation.';
    }

    if (!formData.date) {
      errs.date = 'Please pick a preferred date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      if (onServiceReset) onServiceReset();
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      timeSlot: 'Morning (9:30 AM – 12:30 PM)',
      message: '',
    });
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  // WhatsApp formatted inquiry message
  const createWhatsAppUrl = (data) => {
    const text = encodeURIComponent(
      `Hello LC Beauty & Makeovers!\n\nI would like to request an appointment:\n- Name: ${data.name}\n- Phone: ${data.phone}\n- Service: ${data.service}\n- Preferred Date: ${data.date}\n- Preferred Time Slot: ${data.timeSlot}\n${data.message ? `- Notes: ${data.message}\n` : ''}\nPlease let me know availability. Thank you!`
    );
    return `https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  return (
    <section id="appointment" className="appointment-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calendar size={14} />
            <span>Book Your Session</span>
          </div>
          <h2 className="section-title">Ready for Your Beauty Transformation?</h2>
          <p className="section-subtitle">
            Get in touch with us to explore our beauty, makeover, and tailoring services. Fill in your details below to request a convenient appointment time.
          </p>
        </div>

        <div className="appointment-wrapper">
          {/* Left Column: Quick Connect & Perks */}
          <div className="appointment-perks-box">
            <div className="perks-header">
              <Sparkles size={24} className="perks-sparkle" />
              <h3 className="perks-title">Direct Booking &amp; Enquiries</h3>
              <p className="perks-desc">
                Prefer to chat or call right away? Reach out directly via WhatsApp or phone for immediate consultation.
              </p>
            </div>

            <div className="perks-cta-group">
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp appointment-wa-btn"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${businessInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="btn-secondary appointment-call-btn"
              >
                <Phone size={18} />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>

            <div className="perks-checklist">
              <div className="perk-item">
                <CheckCircle size={18} className="perk-check" />
                <div>
                  <strong>All 22 Services Available</strong>
                  <span>Bridal makeovers, hair therapies, nail extensions &amp; tailoring</span>
                </div>
              </div>

              <div className="perk-item">
                <CheckCircle size={18} className="perk-check" />
                <div>
                  <strong>Tailoring Fittings</strong>
                  <span>In-person measurements for perfect designer blouse stitching</span>
                </div>
              </div>

              <div className="perk-item">
                <CheckCircle size={18} className="perk-check" />
                <div>
                  <strong>No Hidden Surprises</strong>
                  <span>Transparent consultation and gentle, sanitized care</span>
                </div>
              </div>
            </div>

            <div className="appointment-hours-pill">
              <Clock size={16} />
              <span>{businessInfo.operatingHours.weekdays}</span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="appointment-form-card">
            {isSubmitted && submittedData ? (
              <div className="appointment-success-state">
                <div className="success-icon-bubble">
                  <CheckCircle size={42} />
                </div>
                <h3 className="success-heading">Appointment Request Submitted!</h3>
                <p className="success-message">
                  Thank you, <strong>{submittedData.name}</strong>. We have received your request for{' '}
                  <strong className="highlighted-service">{submittedData.service}</strong> on{' '}
                  <strong>{submittedData.date}</strong> ({submittedData.timeSlot}).
                </p>

                <div className="success-summary-box">
                  <div className="summary-row">
                    <span>Contact Number:</span>
                    <strong>{submittedData.phone}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Service:</span>
                    <strong>{submittedData.service}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Date &amp; Slot:</span>
                    <strong>{submittedData.date} ({submittedData.timeSlot})</strong>
                  </div>
                  {submittedData.message && (
                    <div className="summary-row">
                      <span>Notes:</span>
                      <em>"{submittedData.message}"</em>
                    </div>
                  )}
                </div>

                <p className="success-note">
                  Our team will contact you shortly to confirm your slot. For an instant confirmation, send your details directly via WhatsApp:
                </p>

                <div className="success-actions">
                  <a
                    href={createWhatsAppUrl(submittedData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageSquare size={18} />
                    <span>Confirm via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handleResetForm}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form" noValidate>
                <div className="form-header-badge">
                  <span>Schedule Consultation</span>
                </div>

                <div className="form-grid">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="field-error">
                        <AlertCircle size={13} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <span className="field-error">
                        <AlertCircle size={13} /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Selection (All 22 Services Included!) */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Interested Service <span className="req">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={`form-select ${errors.service ? 'input-error' : ''}`}
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">-- Select a Service --</option>
                    <optgroup label="Makeover &amp; Bridal Artistry">
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="HD Makeup">HD Makeup</option>
                      <option value="Eyelashes Extension">Eyelashes Extension</option>
                    </optgroup>
                    <optgroup label="Hair Care &amp; Styling">
                      <option value="Hair Extension">Hair Extension</option>
                      <option value="Head Massage">Head Massage</option>
                      <option value="Hair Spa">Hair Spa</option>
                      <option value="Hair Cutting">Hair Cutting</option>
                      <option value="Kids Hair Cutting">Kids Hair Cutting</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Hair Straightening">Hair Straightening</option>
                      <option value="Hair Smoothening">Hair Smoothening</option>
                      <option value="Hair Keratin Treatment">Hair Keratin Treatment</option>
                    </optgroup>
                    <optgroup label="Skin &amp; Facial Care">
                      <option value="Facial">Facial</option>
                      <option value="D-Tan">D-Tan</option>
                      <option value="Bleach">Bleach</option>
                    </optgroup>
                    <optgroup label="Nails &amp; Hands/Feet Care">
                      <option value="Nail Extension">Nail Extension</option>
                      <option value="Pedicure">Pedicure</option>
                      <option value="Manicure">Manicure</option>
                    </optgroup>
                    <optgroup label="Styling, Grooming &amp; Tailoring">
                      <option value="Saree Pre-Pleating">Saree Pre-Pleating</option>
                      <option value="Eyebrows">Eyebrows</option>
                      <option value="Waxing">Waxing</option>
                      <option value="Tailoring">Tailoring (Blouse, Dress &amp; Alterations)</option>
                    </optgroup>
                    <optgroup label="General Consultation">
                      <option value="Bridal Consultation Package">Bridal Consultation Package</option>
                      <option value="General Beauty &amp; Tailoring Inquiry">General Beauty &amp; Tailoring Inquiry</option>
                    </optgroup>
                  </select>
                  {errors.service && (
                    <span className="field-error">
                      <AlertCircle size={13} /> {errors.service}
                    </span>
                  )}
                </div>

                <div className="form-grid">
                  {/* Preferred Date */}
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      Preferred Date <span className="req">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={todayString}
                      className={`form-input ${errors.date ? 'input-error' : ''}`}
                      value={formData.date}
                      onChange={handleChange}
                    />
                    {errors.date && (
                      <span className="field-error">
                        <AlertCircle size={13} /> {errors.date}
                      </span>
                    )}
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="form-group">
                    <label htmlFor="timeSlot" className="form-label">
                      Preferred Time Slot
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      className="form-select"
                      value={formData.timeSlot}
                      onChange={handleChange}
                    >
                      <option value="Morning (9:30 AM – 12:30 PM)">Morning (9:30 AM – 12:30 PM)</option>
                      <option value="Afternoon (1:00 PM – 4:30 PM)">Afternoon (1:00 PM – 4:30 PM)</option>
                      <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Additional Notes / Occasion Details <span className="opt">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className="form-textarea"
                    placeholder="Tell us about your occasion, preferred style, or blouse stitching requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={17} />
                  <span>Request Appointment</span>
                </button>

                <p className="form-disclaimer">
                  * Submission sends an appointment request. Our salon desk will call or WhatsApp you to confirm slot availability.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
