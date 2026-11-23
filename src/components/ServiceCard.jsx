import { Clock, Check, Calendar, ArrowRight } from 'lucide-react';
import '../styles/serviceCard.css';

export default function ServiceCard({ service, onBookService }) {
  const { id, name, category, description, image, alt, duration, highlights, featured } = service;

  return (
    <div className={`service-card ${featured ? 'is-featured' : ''}`} id={`card-${id}`}>
      {/* Image Container with Consistent Aspect Ratio */}
      <div className="service-card-media">
        <img
          src={image}
          alt={alt || name}
          className="service-card-img"
          loading="lazy"
        />
        <div className="service-card-badge-group">
          <span className="service-card-category">{category}</span>
          {featured && <span className="service-card-featured">Popular</span>}
        </div>
      </div>

      {/* Content Body */}
      <div className="service-card-body">
        <div className="service-card-header">
          <h3 className="service-card-title">{name}</h3>
          {duration && (
            <div className="service-card-duration" title="Approximate duration">
              <Clock size={13} />
              <span>{duration}</span>
            </div>
          )}
        </div>

        <p className="service-card-desc">{description}</p>

        {/* Highlights / Features */}
        {highlights && highlights.length > 0 && (
          <ul className="service-card-highlights">
            {highlights.map((item, idx) => (
              <li key={idx} className="highlight-tag">
                <Check size={12} className="tag-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Button */}
        <div className="service-card-action">
          <button
            type="button"
            className="service-book-btn"
            onClick={() => onBookService(name)}
            aria-label={`Book ${name} appointment`}
          >
            <Calendar size={15} />
            <span>Book Service</span>
            <ArrowRight size={14} className="btn-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
