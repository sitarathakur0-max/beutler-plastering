import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Hammer, Layers } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY } from '../data/company';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#DED8CB] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832] rounded-md p-1"
          >
            <div className="w-10 h-10 bg-[#141618] text-[#F7F5F0] flex items-center justify-center font-bold font-serif text-lg tracking-wider rounded-sm shadow-xs">
              <span className="text-[#C45832]">B</span>A
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-serif font-bold text-xl tracking-tight text-[#141618]">
                  {COMPANY.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#C45832] font-semibold px-1.5 py-0.5 bg-[#FAEEE9] rounded">
                  CH
                </span>
              </div>
              <p className="text-xs text-[#5E646E] tracking-normal">
                Plastering & Painting · Heimenschwand
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium transition-all rounded-sm relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832] ${
                    isActive
                      ? 'text-[#141618] font-semibold bg-[#EFECE5]'
                      : 'text-[#5E646E] hover:text-[#141618] hover:bg-[#EFECE5]/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#C45832]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Clickable Phone & Consultation CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-phone-link"
              href={COMPANY.phone.cleanTel}
              className="flex items-center space-x-2 text-xs font-semibold text-[#141618] bg-white border border-[#DED8CB] hover:border-[#141618] px-3.5 py-2 rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832]"
              title="Call Beutler AG directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#C45832]" />
              <span className="whitespace-nowrap">{COMPANY.phone.display}</span>
            </a>

            <button
              id="header-enquiry-btn"
              onClick={() => handleNavClick('contact')}
              className="bg-[#141618] text-[#F7F5F0] hover:bg-[#C45832] text-xs font-semibold px-4 py-2 rounded-sm transition-colors flex items-center space-x-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832]"
            >
              <span>Enquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center sm:hidden space-x-2">
            <a
              id="mobile-call-icon-btn"
              href={COMPANY.phone.cleanTel}
              aria-label={`Call Beutler AG at ${COMPANY.phone.display}`}
              className="p-2 text-[#C45832] bg-white border border-[#DED8CB] rounded-sm focus:outline-none"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#141618] rounded-sm hover:bg-[#EFECE5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F7F5F0] border-b border-[#DED8CB] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#141618] text-white font-semibold'
                      : 'bg-white border border-[#DED8CB] text-[#141618] hover:bg-[#EFECE5]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#DED8CB] space-y-2">
            <a
              id="mobile-drawer-call-btn"
              href={COMPANY.phone.cleanTel}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-[#C45832] text-white font-medium text-sm rounded-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY.phone.display}</span>
            </a>
            <p className="text-center text-xs text-[#5E646E] pt-1">
              Obere Heimenegg 14, 3615 Heimenschwand
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
