import { Camera } from 'lucide-react';
import Gallery from '../components/Gallery';
import '../styles/pageBanner.css';

export default function GalleryPage() {
  return (
    <div className="gallery-page-root">
      {/* Dedicated Page Banner without Breadcrumbs */}
      <section className="subpage-banner">
        <div className="section-container">
          <div className="subpage-badge">
            <Camera size={14} />
            <span>Visual Portfolio &amp; Transformations</span>
          </div>
          <h1 className="subpage-title">Our Work Showcase</h1>
          <p className="subpage-subtitle">
            Explore our visual gallery featuring bridal makeovers, camera-ready HD artistry, hair therapies, nail designs, and custom garment tailoring work.
          </p>
        </div>
      </section>

      {/* Main Gallery with Lightbox */}
      <Gallery />
    </div>
  );
}
