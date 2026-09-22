import React, { useState } from 'react';
import { Phone, ArrowRight, X, CheckCircle2, Layers, Paintbrush, Hammer, ExternalLink } from 'lucide-react';
import { PageId, ProjectItem } from '../types';
import { COMPANY, WORK_SHOWCASE, IMAGES } from '../data/company';

interface ProjectsViewProps {
  onNavigate: (page: PageId) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'plastering' | 'painting' | 'facade' | 'interior'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const displayedProjects = filter === 'all'
    ? WORK_SHOWCASE
    : WORK_SHOWCASE.filter((p) => p.category === filter);

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-[#DED8CB] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#EFECE5] border border-[#DED8CB] rounded-sm text-xs text-[#141618]">
              <span className="w-2 h-2 rounded-full bg-[#C45832]" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                Work Showcase
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-[#141618] tracking-tight leading-tight">
              Craftsmanship & Finished Projects
            </h1>

            <p className="text-base sm:text-lg text-[#5E646E] leading-relaxed">
              Explore real-world plastering, facade restoration, and architectural painting projects executed by Beutler AG in the Bernese region. Each project highlights the substrate challenge and specific execution techniques applied.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap gap-2 border-t border-[#EFECE5] pt-6">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'interior', label: 'Interior Finishes' },
              { id: 'plastering', label: 'Plastering' },
              { id: 'painting', label: 'Painting' },
              { id: 'facade', label: 'Facades' },
            ].map((btn) => (
              <button
                key={btn.id}
                id={`project-filter-${btn.id}`}
                onClick={() => setFilter(btn.id as any)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832] ${
                  filter === btn.id
                    ? 'bg-[#141618] text-white shadow-xs'
                    : 'bg-[#F7F5F0] border border-[#DED8CB] text-[#5E646E] hover:text-[#141618]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white border border-[#DED8CB] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#141618] transition-all group"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-[#EFECE5] relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#141618]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-xs uppercase tracking-wider">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs text-[#5E646E] block font-medium">
                        {project.locationType}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-[#141618] leading-tight">
                        {project.title}
                      </h2>
                    </div>

                    <p className="text-sm text-[#5E646E] leading-relaxed">
                      {project.scopeSummary}
                    </p>

                    <div className="pt-3 border-t border-[#EFECE5] space-y-3">
                      <div>
                        <span className="text-xs font-bold text-[#141618] block">Substrate Challenge:</span>
                        <p className="text-xs text-[#5E646E] mt-0.5">{project.challenge}</p>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-[#141618] block">Execution & Method:</span>
                        <p className="text-xs text-[#5E646E] mt-0.5">{project.execution}</p>
                      </div>
                    </div>

                    {/* Materials badges */}
                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C45832] block mb-1.5">
                        Materials & Systems:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.materialsUsed.map((mat, i) => (
                          <span
                            key={i}
                            className="text-xs bg-[#F7F5F0] border border-[#DED8CB] text-[#2C2F34] px-2.5 py-1 rounded-xs"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-[#EFECE5] flex items-center justify-between">
                  <button
                    id={`view-project-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#141618] hover:text-[#C45832] flex items-center space-x-1"
                  >
                    <span>View Craft Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs text-[#5E646E] hover:text-[#141618] underline"
                  >
                    Inquire Similar Scope
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Project Details Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141618]/70 backdrop-blur-xs">
              <div className="bg-white border border-[#DED8CB] rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-lg">
                <button
                  id="close-project-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 text-[#5E646E] hover:text-[#141618] rounded-sm focus:outline-none"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2 pr-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C45832]">
                    {selectedProject.category} · {selectedProject.locationType}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141618]">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="aspect-16/9 overflow-hidden rounded-xs bg-[#EFECE5]">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-sm text-[#494F56] leading-relaxed">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#141618] mb-1">
                      Project Scope
                    </h4>
                    <p>{selectedProject.scopeSummary}</p>
                  </div>

                  <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] rounded-xs space-y-2 text-xs">
                    <div>
                      <strong className="text-[#141618]">Initial Challenge: </strong>
                      <span>{selectedProject.challenge}</span>
                    </div>
                    <div>
                      <strong className="text-[#141618]">Craft Execution: </strong>
                      <span>{selectedProject.execution}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#141618] mb-2">
                      Specified Materials & Binders
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.materialsUsed.map((mat, i) => (
                        <span key={i} className="text-xs bg-[#EFECE5] text-[#141618] px-3 py-1 rounded-xs font-medium">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFECE5] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-[#5E646E]">
                    Executed by Beutler AG, Heimenschwand
                  </span>
                  <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onNavigate('contact');
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#141618] text-white hover:bg-[#C45832] text-xs font-semibold rounded-sm transition-colors"
                    >
                      Discuss Your Property
                    </button>
                    <a
                      href={COMPANY.phone.cleanTel}
                      className="w-full sm:w-auto px-4 py-2.5 bg-white border border-[#DED8CB] text-xs font-semibold rounded-sm flex items-center justify-center space-x-1.5 hover:border-[#141618]"
                    >
                      <Phone className="w-3 h-3 text-[#C45832]" />
                      <span>033 453 10 36</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Banner */}
          <div className="p-8 bg-[#141618] text-white rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-normal">
                Looking to refresh or restore your building surfaces?
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">
                We provide on-site inspections and transparent project quotes.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-[#C45832] text-white hover:bg-[#9E4120] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shrink-0"
            >
              Contact Beutler AG
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
