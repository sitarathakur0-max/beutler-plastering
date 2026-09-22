import React from 'react';
import { Phone, MapPin, Clock, ArrowRight, ShieldCheck, Paintbrush, Layers, Hammer } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY } from '../data/company';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141618] text-[#EFECE5] border-t border-[#2C2F35] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#2C2F35]">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#C45832] text-white flex items-center justify-center font-bold font-serif text-base rounded-sm">
                BA
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-sm text-[#9CA3AF] max-w-md leading-relaxed">
              Professional plastering and painting company based in Heimenschwand, Switzerland. Meticulous surface preparation, mineral wall finishes, and exterior facade protection crafted for durability and quiet elegance.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#1D2024] border border-[#2C2F35] text-[#DED8CB]">
                <Layers className="w-3 h-3 mr-1 text-[#C45832]" /> Interior Plastering
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#1D2024] border border-[#2C2F35] text-[#DED8CB]">
                <Paintbrush className="w-3 h-3 mr-1 text-[#C45832]" /> Mineral Painting
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#1D2024] border border-[#2C2F35] text-[#DED8CB]">
                <Hammer className="w-3 h-3 mr-1 text-[#C45832]" /> Facade Rendering
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              {(['home', 'services', 'about', 'projects', 'faq', 'contact'] as PageId[]).map((page) => (
                <li key={page}>
                  <button
                    id={`footer-nav-${page}`}
                    onClick={() => handleNav(page)}
                    className="capitalize hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Trade Services */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
              Specializations
            </h3>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  Interior Lime & Gypsum Plaster
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  Substrate Crack Repair & Fleecing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  Exterior Facade Stucco & Rendering
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  Silicate Facade Weather Coating
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  Woodwork & Architectural Trim Lacquers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
              Direct Contact
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                id="footer-phone-link"
                href={COMPANY.phone.cleanTel}
                className="flex items-start space-x-2 text-white hover:text-[#C45832] transition-colors group"
                title="Call Beutler AG"
              >
                <Phone className="w-4 h-4 text-[#C45832] mt-0.5 shrink-0" />
                <span className="font-semibold">{COMPANY.phone.display}</span>
              </a>

              <div className="flex items-start space-x-2 text-[#9CA3AF]">
                <MapPin className="w-4 h-4 text-[#C45832] mt-0.5 shrink-0" />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.postalCode} {COMPANY.address.locality}
                  <br />
                  Switzerland
                </span>
              </div>

              <div className="flex items-start space-x-2 text-[#9CA3AF] pt-1">
                <Clock className="w-4 h-4 text-[#C45832] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <p>{COMPANY.operatingHours.workdays}</p>
                  <p className="text-[#6B7280]">{COMPANY.operatingHours.weekend}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-4">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="text-[#9CA3AF]">Plastering & Painting Contractor</span>
            <span className="h-3 w-px bg-[#2C2F35]" />
            <span className="text-[#9CA3AF]">Heimenschwand, Switzerland</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
