import React, { useState } from 'react';
import {
  Phone,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Paintbrush,
  Hammer,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Compass,
  FileText
} from 'lucide-react';
import { PageId } from '../types';
import {
  COMPANY,
  SERVICES,
  PREPARATION_BENEFITS,
  CRAFTSMANSHIP_PROCESS,
  WORK_SHOWCASE,
  FAQS,
  IMAGES
} from '../data/company';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');
  const [selectedServiceTab, setSelectedServiceTab] = useState<'all' | 'plastering' | 'painting'>('all');

  const filteredServices = selectedServiceTab === 'all'
    ? SERVICES.slice(0, 4)
    : SERVICES.filter((s) => s.category === selectedServiceTab || (selectedServiceTab === 'plastering' && s.category === 'preparation'));

  return (
    <div className="space-y-0">
      {/* HERO SECTION: Architectural & Tactile Composition */}
      <section className="relative overflow-hidden border-b border-[#DED8CB] bg-[#F7F5F0] pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-tactile-grid pointer-events-none opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Typography & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#EFECE5] border border-[#DED8CB] rounded-sm text-xs text-[#141618] tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#C45832]" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  Heimenschwand, Switzerland
                </span>
                <span className="text-[#A39E93]">|</span>
                <span className="text-[#5E646E]">Plastering & Painting Contractor</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141618] leading-[1.12] tracking-tight font-normal">
                Precision wall finishes shaped by <span className="italic font-normal text-[#C45832]">craftsmanship</span> and mineral durability.
              </h1>

              <p className="text-base sm:text-lg text-[#5E646E] max-w-2xl leading-relaxed">
                Beutler AG delivers expert interior plastering, smooth skim coats, and weather-resistant facade painting. Based in Heimenschwand, we focus on rigorous substrate preparation and enduring finishes for private and commercial properties.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="hero-primary-cta"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-[#141618] text-white hover:bg-[#C45832] font-semibold text-sm rounded-sm transition-all flex items-center justify-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832]"
                >
                  <span>Request a Project Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  id="hero-call-cta"
                  href={COMPANY.phone.cleanTel}
                  className="px-6 py-3.5 bg-white border border-[#DED8CB] text-[#141618] hover:border-[#141618] font-semibold text-sm rounded-sm transition-all flex items-center justify-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832]"
                >
                  <Phone className="w-4 h-4 text-[#C45832]" />
                  <span>Call {COMPANY.phone.display}</span>
                </a>
              </div>

              {/* Core Trade Indicators */}
              <div className="pt-6 border-t border-[#DED8CB] grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="space-y-0.5">
                  <span className="text-xs uppercase tracking-wider text-[#5E646E] font-medium">Trade Focus</span>
                  <p className="text-sm font-semibold text-[#141618]">Plaster & Paint</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs uppercase tracking-wider text-[#5E646E] font-medium">Headquarters</span>
                  <p className="text-sm font-semibold text-[#141618]">3615 Heimenschwand</p>
                </div>
                <div className="space-y-0.5 col-span-2 sm:col-span-1">
                  <span className="text-xs uppercase tracking-wider text-[#5E646E] font-medium">Standard</span>
                  <p className="text-sm font-semibold text-[#141618]">Substrate-First</p>
                </div>
              </div>
            </div>

            {/* Right: Architectural Material Card Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-white border border-[#DED8CB] rounded-sm p-4 sm:p-5 shadow-xs">
                {/* Main Visual: Tactile Plaster & Texture */}
                <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-[#EFECE5]">
                  <img
                    src={IMAGES.plasterTrowel}
                    alt="Plastering trowel applying smooth mineral finish to wall"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-3 left-3 bg-[#141618]/90 text-[#F7F5F0] text-[11px] font-medium px-2.5 py-1 rounded-xs backdrop-blur-xs">
                    Fine Mineral Float
                  </div>
                </div>

                {/* Craftsmanship Spec Box */}
                <div className="mt-4 pt-4 border-t border-[#DED8CB] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-base text-[#141618]">Beutler AG Quality Standard</span>
                    <span className="text-xs text-[#C45832] font-semibold">Swiss Craft</span>
                  </div>
                  <p className="text-xs text-[#5E646E] leading-relaxed">
                    Every project receives complete site protection, structural fissure repair, and specialized vapor-permeable coatings.
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                    <div className="bg-[#F7F5F0] p-2 rounded-xs border border-[#DED8CB]">
                      <span className="text-[#5E646E] block">Interior Finish</span>
                      <strong className="text-[#141618] font-semibold">Q1 to Q4 Surface Levels</strong>
                    </div>
                    <div className="bg-[#F7F5F0] p-2 rounded-xs border border-[#DED8CB]">
                      <span className="text-[#5E646E] block">Exterior Facade</span>
                      <strong className="text-[#141618] font-semibold">Silicate & Silicone Resin</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Company Introduction & Craft Ethos */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DED8CB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                Company Profile
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141618] leading-tight">
                Rooted in Heimenschwand, dedicated to lasting surface quality.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#494F56] text-base leading-relaxed">
              <p>
                A well-executed wall finish is more than just a top coat of color. It is the result of methodical substrate evaluation, structural stabilization, and the correct choice of mineral materials engineered for the local environment.
              </p>
              <p>
                At <strong>Beutler AG</strong>, located at Obere Heimenegg 14 in Heimenschwand, we approach every residential and commercial project with practical trade discipline. Whether creating unbroken, glare-free ceiling planes in open living spaces or weatherproofing historic exterior facades against frost, our work is carried out cleanly and methodically.
              </p>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
                <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] rounded-sm space-y-2">
                  <div className="w-8 h-8 rounded-sm bg-[#EFECE5] flex items-center justify-center text-[#C45832]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#141618]">Substrate Integrity</h3>
                  <p className="text-xs text-[#5E646E] leading-normal">
                    We repair cracks and sound powdery plaster before applying a single drop of paint.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] rounded-sm space-y-2">
                  <div className="w-8 h-8 rounded-sm bg-[#EFECE5] flex items-center justify-center text-[#C45832]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#141618]">Mineral Longevity</h3>
                  <p className="text-xs text-[#5E646E] leading-normal">
                    Vapor-open mineral coatings that allow walls to breathe and shed alpine moisture.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] rounded-sm space-y-2">
                  <div className="w-8 h-8 rounded-sm bg-[#EFECE5] flex items-center justify-center text-[#C45832]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#141618]">Clean Work Environment</h3>
                  <p className="text-xs text-[#5E646E] leading-normal">
                    Comprehensive floor fleece masking and dust-suppressed sanding equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Plastering & Painting Core Services */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0] border-b border-[#DED8CB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                Trade Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141618]">
                Plastering, Rendering & Architectural Painting
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center space-x-2">
              {(['all', 'plastering', 'painting'] as const).map((tab) => (
                <button
                  key={tab}
                  id={`service-tab-${tab}`}
                  onClick={() => setSelectedServiceTab(tab)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                    selectedServiceTab === tab
                      ? 'bg-[#141618] text-white'
                      : 'bg-white border border-[#DED8CB] text-[#5E646E] hover:text-[#141618]'
                  }`}
                >
                  {tab === 'all' ? 'All Services' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#DED8CB] p-6 sm:p-7 rounded-sm flex flex-col justify-between hover:border-[#141618] transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#C45832] bg-[#FAEEE9] px-2.5 py-1 rounded-xs">
                      {service.category}
                    </span>
                    <span className="text-xs text-[#5E646E]">Beutler AG</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#141618] font-bold">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#5E646E] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 pt-2 border-t border-[#EFECE5]">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-[#2C2F34]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C45832] mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EFECE5] flex items-center justify-between">
                  <button
                    id={`learn-more-service-${service.id}`}
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#141618] hover:text-[#C45832] flex items-center space-x-1"
                  >
                    <span>Explore Technical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs text-[#5E646E] hover:text-[#141618] underline"
                  >
                    Request Estimate
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              id="view-all-services-btn"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#EFECE5] border border-[#DED8CB] hover:bg-[#141618] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
            >
              <span>View Full Services Catalog & Substrates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Benefits of Professional Surface Preparation */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DED8CB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
              The Science of Longevity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141618]">
              Why professional surface preparation is 80% of the result.
            </h2>
            <p className="text-base text-[#5E646E] leading-relaxed">
              Premature peeling, unsightly cracking, and surface discoloration rarely stem from the top coat. They are almost always caused by inadequate substrate preparation. Here is how we ensure structural permanence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PREPARATION_BENEFITS.map((benefit, index) => (
              <div
                key={benefit.id}
                className="bg-[#F7F5F0] border border-[#DED8CB] p-6 rounded-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-[#C45832]">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5E646E] bg-white px-2 py-0.5 rounded-xs border border-[#DED8CB]">
                      {benefit.principle}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#141618]">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-[#5E646E] leading-relaxed">
                    {benefit.explanation}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DED8CB]">
                  <span className="text-[11px] font-bold text-[#141618] block">End Outcome:</span>
                  <p className="text-xs text-[#C45832] font-medium mt-0.5">
                    {benefit.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Substrate Cross-Section Architecture Component */}
          <div className="p-6 sm:p-8 bg-[#141618] text-[#F7F5F0] rounded-sm border border-[#2C2F35] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                  Cross-Section Concept
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white mt-1">
                  The Multi-Layer Integrity System
                </h3>
              </div>
              <p className="text-xs text-[#9CA3AF] max-w-sm">
                Each layer has a defined role in moisture balancing, elasticity, and visual clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 bg-[#1D2024] border border-[#2C2F35] rounded-xs space-y-1">
                <span className="text-xs text-[#C45832] font-bold">Layer 1</span>
                <h4 className="text-sm font-semibold text-white">Masonry / Substrate</h4>
                <p className="text-xs text-[#9CA3AF]">Checked for stability, dry-sanded, dust extracted.</p>
              </div>
              <div className="p-4 bg-[#1D2024] border border-[#2C2F35] rounded-xs space-y-1">
                <span className="text-xs text-[#C45832] font-bold">Layer 2</span>
                <h4 className="text-sm font-semibold text-white">Stabilizing Primer</h4>
                <p className="text-xs text-[#9CA3AF]">Micro-penetration locking loose particles and equalizing suction.</p>
              </div>
              <div className="p-4 bg-[#1D2024] border border-[#2C2F35] rounded-xs space-y-1">
                <span className="text-xs text-[#C45832] font-bold">Layer 3</span>
                <h4 className="text-sm font-semibold text-white">Fleece / Skim Base</h4>
                <p className="text-xs text-[#9CA3AF]">Reinforcement mesh bridging fissures and joint tension.</p>
              </div>
              <div className="p-4 bg-[#1D2024] border border-[#2C2F35] rounded-xs space-y-1">
                <span className="text-xs text-[#C45832] font-bold">Layer 4</span>
                <h4 className="text-sm font-semibold text-white">Mineral Finish Coat</h4>
                <p className="text-xs text-[#9CA3AF]">High-opacity matte or float texture with uniform light scatter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Craftsmanship Work Process */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0] border-b border-[#DED8CB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
              Work Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141618]">
              Structured execution from inspection to handover.
            </h2>
            <p className="text-base text-[#5E646E]">
              We follow a reliable, five-stage protocol for every project in Heimenschwand and the surrounding region to guarantee dependable timelines and spotless results.
            </p>
          </div>

          <div className="space-y-4">
            {CRAFTSMANSHIP_PROCESS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white border border-[#DED8CB] p-6 sm:p-7 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:border-[#141618] transition-colors"
              >
                <div className="lg:col-span-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C45832]">
                    {step.stepNumber}
                  </span>
                </div>

                <div className="lg:col-span-5 space-y-1.5">
                  <h3 className="font-serif text-xl text-[#141618] font-bold">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#C45832] font-semibold">
                    {step.focus}
                  </p>
                  <p className="text-sm text-[#5E646E] leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-6 bg-[#F7F5F0] p-4 rounded-xs border border-[#DED8CB] space-y-2">
                  <span className="text-xs font-semibold text-[#141618] uppercase tracking-wider block">
                    Key Execution Details
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2C2F34]">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#C45832] rounded-full shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Project Showcase Preview */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DED8CB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                Finished Work
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141618]">
                Craftsmanship in Context
              </h2>
            </div>
            <button
              id="showcase-all-projects-btn"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center space-x-2 text-sm font-semibold text-[#141618] hover:text-[#C45832]"
            >
              <span>View All Project Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORK_SHOWCASE.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="bg-[#F7F5F0] border border-[#DED8CB] rounded-sm overflow-hidden flex flex-col justify-between"
              >
                <div className="aspect-16/10 overflow-hidden relative bg-[#EFECE5]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#141618]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-xs uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs text-[#5E646E]">{project.locationType}</span>
                    <h3 className="font-serif text-xl font-bold text-[#141618]">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#5E646E] leading-relaxed">
                    {project.scopeSummary}
                  </p>

                  <div className="pt-2 border-t border-[#DED8CB] space-y-2">
                    <div className="text-xs">
                      <strong className="text-[#141618]">Execution: </strong>
                      <span className="text-[#5E646E]">{project.execution}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.materialsUsed.map((mat, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-white border border-[#DED8CB] text-[#2C2F34] px-2 py-0.5 rounded-xs"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Useful FAQ Section */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0] border-b border-[#DED8CB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
              Trade Knowledge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141618]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#5E646E] max-w-xl mx-auto">
              Answers regarding our work methods, drying intervals, site protection, and quotation process.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 4).map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-[#DED8CB] rounded-sm transition-all"
                >
                  <button
                    id={`home-faq-toggle-${faq.id}`}
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832]"
                  >
                    <span className="font-serif text-base font-bold text-[#141618] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C45832] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#5E646E] leading-relaxed border-t border-[#EFECE5] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              id="home-view-all-faqs-btn"
              onClick={() => onNavigate('faq')}
              className="text-xs font-semibold uppercase tracking-wider text-[#141618] hover:text-[#C45832] underline"
            >
              Browse All Trade Questions & Answers →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: Strong Final Enquiry CTA & Direct Contact */}
      <section className="py-16 sm:py-20 bg-[#141618] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1D2024] border border-[#2C2F35] rounded-sm p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                  Get in Touch
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                  Discuss your plastering or painting project with Beutler AG.
                </h2>
                <p className="text-sm sm:text-base text-[#9CA3AF] max-w-xl leading-relaxed">
                  Call us directly or send an online enquiry. We are glad to arrange a site visit to inspect your surfaces, answer questions, and provide a detailed estimate for your property.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    id="cta-final-phone-link"
                    href={COMPANY.phone.cleanTel}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#C45832] hover:bg-[#9E4120] text-white font-semibold text-sm rounded-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {COMPANY.phone.display}</span>
                  </a>

                  <button
                    id="cta-final-enquiry-btn"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white text-[#141618] hover:bg-[#EFECE5] font-semibold text-sm rounded-sm transition-colors"
                  >
                    <span>Online Enquiry Form</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#141618] p-6 rounded-xs border border-[#2C2F35] space-y-4">
                <h3 className="font-serif text-lg font-bold text-white">
                  Direct Details
                </h3>
                <div className="space-y-3 text-xs text-[#DED8CB]">
                  <div>
                    <span className="text-[#9CA3AF] block">Contractor:</span>
                    <strong className="text-white text-sm">{COMPANY.name}</strong>
                  </div>
                  <div>
                    <span className="text-[#9CA3AF] block">Address:</span>
                    <p>{COMPANY.address.fullFormatted}</p>
                  </div>
                  <div>
                    <span className="text-[#9CA3AF] block">Direct Telephone:</span>
                    <a href={COMPANY.phone.cleanTel} className="text-[#C45832] font-semibold hover:underline text-sm">
                      {COMPANY.phone.display}
                    </a>
                  </div>
                  <div>
                    <span className="text-[#9CA3AF] block">Operating Hours:</span>
                    <p>{COMPANY.operatingHours.workdays}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
