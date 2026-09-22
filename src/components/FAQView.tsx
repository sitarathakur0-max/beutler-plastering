import React, { useState } from 'react';
import { ChevronDown, Search, Phone, HelpCircle, ArrowRight } from 'lucide-react';
import { PageId, FAQItem } from '../types';
import { COMPANY, FAQS } from '../data/company';

interface FAQViewProps {
  onNavigate: (page: PageId) => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'plastering' | 'painting' | 'preparation' | 'general'>('all');
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-[#DED8CB] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#EFECE5] border border-[#DED8CB] rounded-sm text-xs text-[#141618]">
              <span className="w-2 h-2 rounded-full bg-[#C45832]" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                Questions & Answers
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-[#141618] tracking-tight leading-tight">
              Trade FAQ & Work Methods
            </h1>

            <p className="text-base sm:text-lg text-[#5E646E] leading-relaxed">
              Clear answers regarding our plastering finishes, paint types, surface preparation standards, project timelines, and quotation process in Heimenschwand and surrounding areas.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mt-8 space-y-4 border-t border-[#EFECE5] pt-6">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-[#5E646E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="faq-search-input"
                type="text"
                placeholder="Search questions (e.g. drying time, Q4 finish, exterior)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F7F5F0] border border-[#DED8CB] text-sm text-[#141618] rounded-sm placeholder-[#5E646E] focus:outline-none focus:border-[#141618] focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Topics' },
                { id: 'preparation', label: 'Substrate & Prep' },
                { id: 'plastering', label: 'Plastering & Skim' },
                { id: 'painting', label: 'Painting & Facades' },
                { id: 'general', label: 'Consultation & Quotes' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  id={`faq-filter-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832] ${
                    activeCategory === cat.id
                      ? 'bg-[#141618] text-white shadow-xs'
                      : 'bg-[#F7F5F0] border border-[#DED8CB] text-[#5E646E] hover:text-[#141618]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white border border-[#DED8CB] p-12 text-center rounded-sm space-y-3">
              <p className="font-serif text-lg text-[#141618]">No matching questions found.</p>
              <p className="text-sm text-[#5E646E]">
                Try adjusting your search terms or contact Beutler AG directly at 033 453 10 36.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="mt-2 text-xs font-bold text-[#C45832] underline"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = expandedFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white border border-[#DED8CB] rounded-sm transition-all"
                  >
                    <button
                      id={`faq-item-toggle-${faq.id}`}
                      onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                      className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832]"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1 pr-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C45832] bg-[#FAEEE9] px-2 py-0.5 rounded-xs">
                          {faq.category}
                        </span>
                        <h2 className="font-serif text-lg sm:text-xl font-bold text-[#141618] pt-1">
                          {faq.question}
                        </h2>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#C45832] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-[#5E646E] leading-relaxed border-t border-[#EFECE5] pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Have a question not listed? */}
          <div className="bg-[#141618] text-white p-8 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-normal">
                Have a specific question about your property?
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">
                Call Beutler AG directly at 033 453 10 36 or send an enquiry.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                id="faq-call-cta"
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
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
