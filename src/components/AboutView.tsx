import React from 'react';
import { MapPin, Phone, CheckCircle, ShieldCheck, Layers, Hammer, Sparkles, Building2, Wind } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY, IMAGES } from '../data/company';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-[#DED8CB] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#EFECE5] border border-[#DED8CB] rounded-sm text-xs text-[#141618]">
              <span className="w-2 h-2 rounded-full bg-[#C45832]" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                Craftsmanship & Location
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-[#141618] tracking-tight leading-tight">
              About Beutler AG
            </h1>

            <p className="text-base sm:text-lg text-[#5E646E] leading-relaxed">
              Based at Obere Heimenegg 14 in Heimenschwand, we provide dedicated plastering, facade rendering, and architectural painting across the Bernese Oberland and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Trade Ethos */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-[#494F56] text-base leading-relaxed">
              <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold block">
                Surface Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141618] leading-tight font-normal">
                Walls should endure the elements outside and breathe naturally inside.
              </h2>
              <p>
                In the building trades, the finish coat often receives all the attention. However, seasoned plasterers and painters understand that a surface is a complete physical system. If the moisture dynamics of the wall are misunderstood, or if old paint layers are left loose beneath fresh skim coats, the result will deteriorate quickly.
              </p>
              <p>
                At <strong>Beutler AG</strong>, our approach is rooted in technical honesty. We examine the substrate, determine the appropriate binder chemistry—whether mineral lime, silicate, or elastic acrylic—and execute the work with clean handcraft and disciplined site protection.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white border border-[#DED8CB] p-4 rounded-sm shadow-xs">
                <div className="aspect-4/3 overflow-hidden rounded-xs bg-[#EFECE5]">
                  <img
                    src={IMAGES.interiorFinish}
                    alt="Finished interior wall by Beutler AG"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] mt-4 rounded-xs text-xs text-[#5E646E] flex items-center justify-between">
                  <span>Interior Wall Craftsmanship</span>
                  <span className="font-semibold text-[#141618]">Heimenschwand, CH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Swiss Climate & Building Physics */}
          <div className="bg-white border border-[#DED8CB] p-8 sm:p-12 rounded-sm space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                Regional Specifics
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#141618]">
                Addressing Alpine Climate Requirements
              </h3>
              <p className="text-sm text-[#5E646E] leading-relaxed">
                Buildings in Heimenschwand and the Bernese Prealps experience significant seasonal temperature swings, snow cover, and driving rain. These conditions require exterior wall coatings that remain vapor-permeable while shielding structural masonry from moisture infiltration:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-[#F7F5F0] border border-[#DED8CB] rounded-xs space-y-3">
                <div className="w-8 h-8 rounded-xs bg-[#EFECE5] flex items-center justify-center text-[#C45832]">
                  <Wind className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#141618]">Freeze-Thaw Resistance</h4>
                <p className="text-xs text-[#5E646E] leading-relaxed">
                  By utilizing elastic, crack-bridging mortars and mineral silicate primers, exterior facades expand and contract safely without micro-fissuring during winter sub-zero temperatures.
                </p>
              </div>

              <div className="p-5 bg-[#F7F5F0] border border-[#DED8CB] rounded-xs space-y-3">
                <div className="w-8 h-8 rounded-xs bg-[#EFECE5] flex items-center justify-center text-[#C45832]">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#141618]">Vapor Diffusion Inside</h4>
                <p className="text-xs text-[#5E646E] leading-relaxed">
                  For interior living areas, our mineral gypsum and lime plasters act as a natural moisture buffer, absorbing excess ambient humidity and releasing it gradually to maintain healthy indoor air.
                </p>
              </div>

              <div className="p-5 bg-[#F7F5F0] border border-[#DED8CB] rounded-xs space-y-3">
                <div className="w-8 h-8 rounded-xs bg-[#EFECE5] flex items-center justify-center text-[#C45832]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#141618]">Mineral Silicification</h4>
                <p className="text-xs text-[#5E646E] leading-relaxed">
                  Silicate facade paints do not form a plastic film that can blister. Instead, they bond with the render into an insoluble quartz crystal structure that withstands ultraviolet rays.
                </p>
              </div>
            </div>
          </div>

          {/* Job Site Discipline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#141618] text-white p-8 sm:p-10 rounded-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                  Working Standards
                </span>
                <h3 className="font-serif text-2xl font-normal">
                  Our Worksite Protection Protocol
                </h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  We treat every home and business premises with utmost care. Whether working on an occupied family chalet or a commercial property, our team ensures:
                </p>
                <ul className="space-y-2.5 text-xs text-[#DED8CB] pt-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C45832] mr-2 shrink-0 mt-0.5" />
                    <span>Heavy fleece floor protection with dust-proof tape taping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C45832] mr-2 shrink-0 mt-0.5" />
                    <span>Low-tack masking on sensitive woodwork, window glass, and switches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C45832] mr-2 shrink-0 mt-0.5" />
                    <span>Dust-extraction sanding machines for minimal airborne particles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C45832] mr-2 shrink-0 mt-0.5" />
                    <span>Daily cleanup and spotless handover upon job completion</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#2C2F35]">
                <p className="text-xs text-[#9CA3AF]">
                  Direct inquiries welcome for private homeowners and commercial clients alike.
                </p>
              </div>
            </div>

            {/* Location & Contact Block */}
            <div className="bg-white border border-[#DED8CB] p-8 sm:p-10 rounded-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                  Base of Operations
                </span>
                <h3 className="font-serif text-2xl text-[#141618]">
                  Heimenschwand & Service Region
                </h3>
                <p className="text-sm text-[#5E646E] leading-relaxed">
                  Beutler AG is headquartered at Obere Heimenegg 14 in 3615 Heimenschwand. We regularly travel to project sites across the wider area, including Thun, Steffisburg, Oberdiessbach, Konolfingen, and surrounding districts.
                </p>

                <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] rounded-xs space-y-2 text-xs">
                  <div className="flex items-start space-x-2 text-[#141618]">
                    <MapPin className="w-4 h-4 text-[#C45832] shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> Obere Heimenegg 14, 3615 Heimenschwand</span>
                  </div>
                  <div className="flex items-start space-x-2 text-[#141618]">
                    <Phone className="w-4 h-4 text-[#C45832] shrink-0 mt-0.5" />
                    <span><strong>Telephone:</strong> <a href={COMPANY.phone.cleanTel} className="text-[#C45832] font-semibold hover:underline">033 453 10 36</a></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-3">
                <button
                  id="about-contact-cta"
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3 bg-[#141618] text-white hover:bg-[#C45832] font-semibold text-xs rounded-sm transition-colors"
                >
                  Contact Beutler AG
                </button>
                <a
                  href={COMPANY.phone.cleanTel}
                  className="px-5 py-3 bg-white border border-[#DED8CB] text-[#141618] hover:border-[#141618] font-semibold text-xs rounded-sm transition-colors"
                >
                  Call 033 453 10 36
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
