import { useState } from 'react';
import { Eye, Camera } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import GalleryModal from './GalleryModal';
import '../styles/gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const categories = [
    'All',
    'Bridal & Makeover',
    'Hair Care',
    'Nails & Beauty',
    'Styling & Tailoring',
  ];

  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handleOpenModal = (index) => {
    setActiveItemIndex(index);
  };

  const handleCloseModal = () => {
    setActiveItemIndex(null);
  };

  const handlePrev = () => {
    setActiveItemIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveItemIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Camera size={14} />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="section-title">Our Gallery &amp; Transformations</h2>
          <p className="section-subtitle">
            A glimpse into our makeover styles, hair treatments, creative nail aesthetics, and custom tailoring craftsmanship.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filter-tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => handleOpenModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleOpenModal(index);
              }}
              aria-label={`View ${item.title}`}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-view-icon">
                    <Eye size={22} />
                  </div>
                  <div className="gallery-card-details">
                    <span className="gallery-item-tag">{item.tag}</span>
                    <h3 className="gallery-item-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <p className="gallery-note">
          Visual styling references displayed above. Studio portfolio and custom client tailoring orders are welcomed for consultation in-person.
        </p>

        {/* Lightbox Modal */}
        {activeItemIndex !== null && (
          <GalleryModal
            item={filteredItems[activeItemIndex]}
            onClose={handleCloseModal}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>
    </section>
  );
}
