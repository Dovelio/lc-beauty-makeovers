import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyUsPage from './pages/WhyUsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { MessageSquare } from 'lucide-react';
import { businessInfo } from './data/businessInfo';
import './App.css';

const parseHash = () => {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const validPages = ['home', 'about', 'services', 'why-us', 'gallery', 'contact'];
  return validPages.includes(hash) ? hash : 'home';
};

const pageTitles = {
  home: 'LC Beauty & Makeovers | Premium Beauty Parlour & Tailoring',
  about: 'About Us | LC Beauty & Makeovers',
  services: 'Complete Services Menu (22 Services) | LC Beauty & Makeovers',
  'why-us': 'Why Choose Us | LC Beauty & Makeovers',
  gallery: 'Photo Gallery & Transformations | LC Beauty & Makeovers',
  contact: 'Contact & Book Appointment | LC Beauty & Makeovers',
};

function App() {
  const [currentPage, setCurrentPage] = useState(parseHash);
  const [selectedService, setSelectedService] = useState('');

  // Synchronize browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const page = parseHash();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title when page changes
  useEffect(() => {
    document.title = pageTitles[currentPage] || pageTitles.home;
  }, [currentPage]);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = `#/${pageId === 'home' ? '' : pageId}`;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="app-root">
      {/* Redesigned Top Header & Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content: Displays ONLY the active page's relevant content */}
      <main id="main-content" className="main-page-wrapper">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === 'why-us' && (
          <WhyUsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            selectedService={selectedService}
            onServiceReset={() => setSelectedService('')}
          />
        )}
      </main>

      {/* Footer with Individual Page Links */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
      />

      {/* Floating WhatsApp Action Pill */}
      <aside aria-label="Quick WhatsApp Contact">
        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-wa-btn"
          aria-label="Chat directly on WhatsApp"
        >
          <MessageSquare size={22} />
          <span className="wa-hover-tooltip">Chat with us</span>
        </a>
      </aside>
    </div>
  );
}

export default App;
