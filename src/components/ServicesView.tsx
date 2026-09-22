import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, Shield, Layers, Paintbrush, Hammer, Sparkles } from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { COMPANY, SERVICES, IMAGES } from '../data/company';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'plastering' | 'painting' | 'preparation'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const displayedServices = activeTab === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeTab);

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      {/* Services Header */}
      <section className="bg-white border-b border-[#DED8CB] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#EFECE5] border border-[#DED8CB] rounded-sm text-xs text-[#141618]">
              <span className="w-2 h-2 rounded-full bg-[#C45832]" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                Trade Specializations
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-[#141618] tracking-tight leading-tight">
              Plastering, Facade Rendering & Architectural Painting
            </h1>

            <p className="text-base sm:text-lg text-[#5E646E] leading-relaxed">
              We provide comprehensive surface craft for residential, commercial, and renovation projects across Heimenschwand and the surrounding region. Every system is selected to match the physical properties of the building substrate.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2 border-t border-[#EFECE5] pt-6">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'plastering', label: 'Plastering & Rendering' },
              { id: 'painting', label: 'Painting & Finishing' },
              { id: 'preparation', label: 'Substrate & Crack Repair' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`services-filter-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832] ${
                  activeTab === tab.id
                    ? 'bg-[#141618] text-white shadow-xs'
                    : 'bg-[#F7F5F0] border border-[#DED8CB] text-[#5E646E] hover:text-[#141618]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-[#DED8CB] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#141618] transition-all group"
              >
                <div>
                  {/* Photo Header */}
                  {service.imageUrl && (
                    <div className="aspect-16/9 overflow-hidden bg-[#EFECE5] relative">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#141618]/85 text-white text-[10px] font-semibold px-2 py-0.5 rounded-xs uppercase tracking-wider">
                        {service.category}
                      </div>
                    </div>
                  )}

                  <div className="p-6 space-y-4">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#141618] leading-snug">
                      {service.title}
                    </h2>

                    <p className="text-sm text-[#5E646E] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Characteristics */}
                    <div className="space-y-2 pt-2 border-t border-[#EFECE5]">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C45832] block">
                        Material Properties:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.materialCharacteristics.map((char, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#F7F5F0] text-[#2C2F34] px-2 py-1 rounded-xs border border-[#DED8CB]"
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key execution features */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#141618] block">
                        Included Execution Steps:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#5E646E]">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C45832] mr-2 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-[#EFECE5] flex items-center justify-between">
                  <button
                    id={`service-enquire-${service.id}`}
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-bold text-[#141618] hover:text-[#C45832] flex items-center space-x-1"
                  >
                    <span>Request Service Estimate</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <a
                    href={COMPANY.phone.cleanTel}
                    className="text-xs text-[#5E646E] hover:text-[#C45832] flex items-center space-x-1"
                    title={`Call Beutler AG for ${service.title}`}
                  >
                    <Phone className="w-3 h-3 text-[#C45832]" />
                    <span>033 453 10 36</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Surface Levels Explanation (Q1 - Q4 Swiss Plastering Standard) */}
          <div className="bg-white border border-[#DED8CB] p-8 rounded-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                Technical Surface Standards
              </span>
              <h3 className="font-serif text-2xl text-[#141618]">
                Interior Plastering Quality Grades (Q1 to Q4)
              </h3>
              <p className="text-sm text-[#5E646E] max-w-3xl leading-relaxed">
                We clearly specify surface grades according to Swiss industry standards, so you know exactly what level of flatness, skim depth, and light tolerance your walls will receive:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-base font-serif text-[#141618]">Grade Q1</strong>
                  <span className="text-[10px] uppercase font-semibold text-[#5E646E] bg-white px-2 py-0.5 rounded border border-[#DED8CB]">Basic</span>
                </div>
                <p className="text-xs text-[#5E646E] leading-relaxed">
                  Basic joint filling and tape embedding. Suitable underneath ceramic tiles or heavy stone cladding where surface aesthetics are covered.
                </p>
              </div>

              <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-base font-serif text-[#141618]">Grade Q2</strong>
                  <span className="text-[10px] uppercase font-semibold text-[#5E646E] bg-white px-2 py-0.5 rounded border border-[#DED8CB]">Standard</span>
                </div>
                <p className="text-xs text-[#5E646E] leading-relaxed">
                  Standard joint smoothing to a continuous taper. Suitable for medium-to-heavy textured wallpapers or coarse grain plaster finishes.
                </p>
              </div>

              <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-base font-serif text-[#141618]">Grade Q3</strong>
                  <span className="text-[10px] uppercase font-semibold text-[#5E646E] bg-white px-2 py-0.5 rounded border border-[#DED8CB]">Special</span>
                </div>
                <p className="text-xs text-[#5E646E] leading-relaxed">
                  Extended joint finishing with a broad skim coat over remaining board pores. Suitable for fine wall coverings and matte dispersion paints.
                </p>
              </div>

              <div className="p-4 bg-[#FAEEE9] border border-[#C45832]/30 rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-base font-serif text-[#C45832]">Grade Q4</strong>
                  <span className="text-[10px] uppercase font-semibold text-[#C45832] bg-white px-2 py-0.5 rounded border border-[#C45832]/40">Premium</span>
                </div>
                <p className="text-xs text-[#2C2F34] leading-relaxed">
                  Full-surface unbroken skim plaster (&gt;1mm) and ultra-fine burnish. Eliminates shadow seams under glancing natural light and sleek spotlights.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Consultation Banner */}
          <div className="bg-[#141618] text-white p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-normal">
                Have a specific project scope or substrate in mind?
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">
                Call Beutler AG at 033 453 10 36 or submit an enquiry for a site inspection in Heimenschwand and surrounding regions.
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={COMPANY.phone.cleanTel}
                className="px-5 py-3 bg-[#C45832] text-white hover:bg-[#9E4120] font-semibold text-xs rounded-sm transition-colors flex items-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 033 453 10 36</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 bg-white text-[#141618] hover:bg-[#EFECE5] font-semibold text-xs rounded-sm transition-colors"
              >
                Online Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
