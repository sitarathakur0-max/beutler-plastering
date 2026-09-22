import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { PageId } from './types';
import { COMPANY } from './data/company';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { AboutView } from './components/AboutView';
import { ProjectsView } from './components/ProjectsView';
import { FAQView } from './components/FAQView';
import { ContactView } from './components/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = ['home', 'services', 'about', 'projects', 'faq', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'services', 'about', 'projects', 'faq', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update page title and scroll position
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: 'Beutler AG – Plastering & Painting Craftsmen | Heimenschwand',
      services: 'Services & Substrates | Beutler AG – Heimenschwand',
      about: 'About Us & Craft Philosophy | Beutler AG',
      projects: 'Projects & Work Showcase | Beutler AG',
      faq: 'Frequently Asked Questions | Beutler AG',
      contact: 'Contact & Location | Beutler AG – 033 453 10 36',
    };

    document.title = pageTitles[currentPage] || pageTitles.home;
    window.location.hash = currentPage;
  }, [currentPage]);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#141618] font-sans antialiased">
      {/* Top Banner Notice: Exact Trade & Location Info */}
      <div className="bg-[#141618] text-[#DED8CB] text-xs py-1.5 px-4 border-b border-[#2C2F35]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-[#C45832] rounded-full" />
            <span>Beutler AG · Plastering & Painting Contractor</span>
            <span className="text-[#6B7280]">·</span>
            <span>Obere Heimenegg 14, 3615 Heimenschwand</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline text-[#9CA3AF]">
              Mon–Fri 07:00–17:30
            </span>
            <a
              id="topbar-tel-link"
              href={COMPANY.phone.cleanTel}
              className="text-white hover:text-[#C45832] font-semibold flex items-center space-x-1"
            >
              <Phone className="w-3 h-3 text-[#C45832]" />
              <span>{COMPANY.phone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page View Switcher */}
      <main className="grow">
        {currentPage === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesView onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutView onNavigate={handleNavigate} />}
        {currentPage === 'projects' && <ProjectsView onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FAQView onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactView onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Utilities: Scroll to Top & Quick Call on Mobile */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-2">
        {/* Mobile Dial Floating Button */}
        <a
          id="floating-phone-quickdial"
          href={COMPANY.phone.cleanTel}
          className="sm:hidden flex items-center space-x-2 bg-[#C45832] hover:bg-[#9E4120] text-white px-4 py-2.5 rounded-full shadow-md text-xs font-semibold focus:outline-none"
          title={`Call ${COMPANY.name}`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>033 453 10 36</span>
        </a>

        {/* Back to top button */}
        {showScrollTop && (
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-2.5 bg-white border border-[#DED8CB] text-[#141618] hover:border-[#141618] rounded-sm shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
