import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function GalleryModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="gallery-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <X size={24} />
        </button>

        {/* Prev / Next Navigation */}
        <button
          type="button"
          className="modal-nav-btn prev-btn"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          className="modal-nav-btn next-btn"
          onClick={onNext}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        {/* Image Display */}
        <div className="modal-image-frame">
          <img src={item.image} alt={item.alt || item.title} className="modal-img" />
        </div>

        {/* Caption Bar */}
        <div className="modal-caption-bar">
          <div className="modal-caption-info">
            <span className="modal-tag">
              <Tag size={13} />
              {item.tag || item.category}
            </span>
            <h4 className="modal-title">{item.title}</h4>
          </div>
          <p className="modal-desc">{item.alt}</p>
        </div>
      </div>
    </div>
  );
}
