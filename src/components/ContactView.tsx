import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Calendar,
  Layers,
  Paintbrush
} from 'lucide-react';
import { PageId, ConsultationFormState } from '../types';
import { COMPANY } from '../data/company';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ConsultationFormState>({
    fullName: '',
    phone: '',
    email: '',
    locality: '',
    serviceCategory: 'plastering',
    projectScope: 'interior',
    estimatedTimeline: '1-2-months',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationFormState | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultationFormState, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact telephone number.';
    } else if (!/^[0-9+()\s-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.locality.trim()) {
      newErrors.locality = 'Please specify the project location or municipality (e.g., Heimenschwand, Thun).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your surfaces, wall conditions, or required work.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief description (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      locality: '',
      serviceCategory: 'plastering',
      projectScope: 'interior',
      estimatedTimeline: '1-2-months',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-[#DED8CB] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#EFECE5] border border-[#DED8CB] rounded-sm text-xs text-[#141618]">
              <span className="w-2 h-2 rounded-full bg-[#C45832]" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                Direct Contact & Enquiry
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-[#141618] tracking-tight leading-tight">
              Contact Beutler AG
            </h1>

            <p className="text-base sm:text-lg text-[#5E646E] leading-relaxed">
              We welcome your enquiry for plastering, interior finishing, or exterior facade painting in Heimenschwand and across the Bernese region. Reach us by phone or submit the project details below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Company Information */}
            <div className="lg:col-span-5 space-y-8">
              {/* Telephone Card */}
              <div className="bg-white border border-[#DED8CB] p-6 sm:p-8 rounded-sm space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold block">
                  Telephone Contact
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#141618]">
                  Speak Directly With Us
                </h2>
                <p className="text-xs text-[#5E646E] leading-relaxed">
                  For immediate questions regarding scheduled work, substrate assessments, or site visit coordination:
                </p>

                <div className="pt-2">
                  <a
                    id="contact-page-phone-btn"
                    href={COMPANY.phone.cleanTel}
                    className="inline-flex items-center space-x-3 px-6 py-3.5 bg-[#141618] hover:bg-[#C45832] text-white rounded-sm transition-colors group w-full justify-center text-center"
                    title={`Call ${COMPANY.phone.display}`}
                  >
                    <Phone className="w-5 h-5 text-[#C45832] group-hover:text-white transition-colors" />
                    <span className="font-serif text-lg font-bold tracking-wide">
                      {COMPANY.phone.display}
                    </span>
                  </a>
                  <p className="text-[11px] text-center text-[#5E646E] mt-2">
                    Click to dial on phone or mobile device
                  </p>
                </div>
              </div>

              {/* Physical Address & Hours */}
              <div className="bg-white border border-[#DED8CB] p-6 sm:p-8 rounded-sm space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold block">
                    Business Address
                  </span>
                  <div className="flex items-start space-x-3 text-sm text-[#141618]">
                    <MapPin className="w-5 h-5 text-[#C45832] shrink-0 mt-0.5" />
                    <div className="leading-relaxed">
                      <strong className="block font-bold text-base">{COMPANY.name}</strong>
                      <p>{COMPANY.address.street}</p>
                      <p>{COMPANY.address.postalCode} {COMPANY.address.locality}</p>
                      <p>Switzerland</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFECE5] space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#5E646E] font-semibold block">
                    Operating Hours
                  </span>
                  <div className="flex items-start space-x-3 text-xs text-[#494F56]">
                    <Clock className="w-4 h-4 text-[#C45832] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p><strong>Workdays:</strong> {COMPANY.operatingHours.workdays}</p>
                      <p className="text-[#5E646E]"><strong>Weekends:</strong> {COMPANY.operatingHours.weekend}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFECE5] space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#5E646E] font-semibold block">
                    Primary Service Region
                  </span>
                  <p className="text-xs text-[#5E646E] leading-relaxed">
                    {COMPANY.serviceRegion}.
                  </p>
                </div>
              </div>

              {/* Geographic Reference Area */}
              <div className="bg-white border border-[#DED8CB] p-6 rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#141618]">
                    Location Reference
                  </span>
                  <span className="text-[11px] text-[#C45832] font-semibold">Canton of Bern</span>
                </div>
                <div className="p-4 bg-[#F7F5F0] border border-[#DED8CB] rounded-xs space-y-2 text-xs text-[#5E646E]">
                  <p>
                    <strong>Coordinates:</strong> 46.8286° N, 7.6978° E
                  </p>
                  <p>
                    <strong>Elevation / Setting:</strong> Heimenschwand is situated in the high hills of the Bernese Prealps, between the Aare Valley and the Emmental.
                  </p>
                  <p className="text-[11px] text-[#5E646E] pt-1">
                    On-site inspections and substrate evaluations arranged throughout Thun, Steffisburg, Oberdiessbach, Konolfingen, and surrounding districts.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Frontend-Validated Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#DED8CB] p-6 sm:p-10 rounded-sm shadow-xs">
                {isSubmitted && submittedData ? (
                  <div className="space-y-6 text-center py-8">
                    <div className="w-14 h-14 bg-[#FAEEE9] text-[#C45832] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141618]">
                        Enquiry Received
                      </h3>
                      <p className="text-sm text-[#5E646E] leading-relaxed">
                        Thank you, <strong>{submittedData.fullName}</strong>. Your project enquiry for <strong>{submittedData.locality}</strong> has been logged. We will review your requirements and reach out by telephone or email to coordinate next steps.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-[#F7F5F0] border border-[#DED8CB] p-5 rounded-xs text-left max-w-lg mx-auto text-xs space-y-2 text-[#2C2F34]">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C45832] block">
                        Submission Summary
                      </span>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <span className="text-[#5E646E] block">Service Type:</span>
                          <strong className="capitalize">{submittedData.serviceCategory}</strong>
                        </div>
                        <div>
                          <span className="text-[#5E646E] block">Project Scope:</span>
                          <strong className="capitalize">{submittedData.projectScope}</strong>
                        </div>
                        <div>
                          <span className="text-[#5E646E] block">Contact Phone:</span>
                          <span>{submittedData.phone}</span>
                        </div>
                        <div>
                          <span className="text-[#5E646E] block">Contact Email:</span>
                          <span>{submittedData.email}</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-[#DED8CB]">
                        <span className="text-[#5E646E] block">Notes:</span>
                        <p className="text-[#5E646E] italic mt-0.5">{submittedData.message}</p>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        id="submit-another-enquiry-btn"
                        onClick={handleResetForm}
                        className="px-6 py-2.5 bg-white border border-[#DED8CB] text-[#141618] hover:border-[#141618] text-xs font-semibold rounded-sm transition-colors"
                      >
                        Submit Another Enquiry
                      </button>
                      <a
                        href={COMPANY.phone.cleanTel}
                        className="px-6 py-2.5 bg-[#141618] text-white hover:bg-[#C45832] text-xs font-semibold rounded-sm transition-colors"
                      >
                        Call 033 453 10 36
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="space-y-2 pb-4 border-b border-[#EFECE5]">
                      <span className="text-xs uppercase tracking-widest text-[#C45832] font-semibold">
                        Project Consultation
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#141618] font-bold">
                        Request an Inspection or Estimate
                      </h2>
                      <p className="text-xs sm:text-sm text-[#5E646E] leading-relaxed">
                        Fill out the form below with your surface specifications. We review all submissions carefully.
                      </p>
                    </div>

                    {/* Personal & Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="text-xs font-semibold text-[#141618]">
                          Full Name <span className="text-[#C45832]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g., Hans Müller"
                          className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                            errors.fullName ? 'border-[#C45832] bg-[#FAEEE9]' : 'border-[#DED8CB] focus:border-[#141618]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-[#C45832] flex items-center mt-1">
                            <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Locality */}
                      <div className="space-y-1.5">
                        <label htmlFor="locality" className="text-xs font-semibold text-[#141618]">
                          Project Location / Municipality <span className="text-[#C45832]">*</span>
                        </label>
                        <input
                          id="locality"
                          type="text"
                          value={formData.locality}
                          onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                          placeholder="e.g., Heimenschwand, Thun, Steffisburg"
                          className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                            errors.locality ? 'border-[#C45832] bg-[#FAEEE9]' : 'border-[#DED8CB] focus:border-[#141618]'
                          }`}
                        />
                        {errors.locality && (
                          <p className="text-xs text-[#C45832] flex items-center mt-1">
                            <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                            {errors.locality}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold text-[#141618]">
                          Telephone Number <span className="text-[#C45832]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g., 033 453 10 36 or mobile"
                          className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                            errors.phone ? 'border-[#C45832] bg-[#FAEEE9]' : 'border-[#DED8CB] focus:border-[#141618]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-[#C45832] flex items-center mt-1">
                            <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-[#141618]">
                          Email Address <span className="text-[#C45832]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.ch"
                          className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                            errors.email ? 'border-[#C45832] bg-[#FAEEE9]' : 'border-[#DED8CB] focus:border-[#141618]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-[#C45832] flex items-center mt-1">
                            <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Trade Categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="space-y-1.5">
                        <label htmlFor="serviceCategory" className="text-xs font-semibold text-[#141618]">
                          Primary Trade Service
                        </label>
                        <select
                          id="serviceCategory"
                          value={formData.serviceCategory}
                          onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value as any })}
                          className="w-full px-3 py-2.5 text-xs bg-[#F7F5F0] border border-[#DED8CB] rounded-sm focus:bg-white focus:border-[#141618] focus:outline-none"
                        >
                          <option value="plastering">Plastering & Skim Coating</option>
                          <option value="painting">Painting & Surface Coating</option>
                          <option value="both">Both Plastering & Painting</option>
                          <option value="restoration">Substrate Repair / Crack Remediation</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="projectScope" className="text-xs font-semibold text-[#141618]">
                          Project Scope
                        </label>
                        <select
                          id="projectScope"
                          value={formData.projectScope}
                          onChange={(e) => setFormData({ ...formData, projectScope: e.target.value as any })}
                          className="w-full px-3 py-2.5 text-xs bg-[#F7F5F0] border border-[#DED8CB] rounded-sm focus:bg-white focus:border-[#141618] focus:outline-none"
                        >
                          <option value="interior">Interior Walls & Ceilings</option>
                          <option value="exterior">Exterior Facade & Plinth</option>
                          <option value="single-room">Single Room or Accent Area</option>
                          <option value="complete">Entire Property Renovation</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="estimatedTimeline" className="text-xs font-semibold text-[#141618]">
                          Estimated Timeline
                        </label>
                        <select
                          id="estimatedTimeline"
                          value={formData.estimatedTimeline}
                          onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value as any })}
                          className="w-full px-3 py-2.5 text-xs bg-[#F7F5F0] border border-[#DED8CB] rounded-sm focus:bg-white focus:border-[#141618] focus:outline-none"
                        >
                          <option value="1-2-months">Within 1–2 Months</option>
                          <option value="urgent">Prompt Attention (Under 4 Weeks)</option>
                          <option value="planning">General Planning / Next Season</option>
                          <option value="flexible">Flexible Timing</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-[#141618]">
                        Project Description & Surface Conditions <span className="text-[#C45832]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe the approximate size, existing condition (e.g. cracks, peeling paint, bare drywall), room type, or any specific finish requests..."
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F5F0] border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                          errors.message ? 'border-[#C45832] bg-[#FAEEE9]' : 'border-[#DED8CB] focus:border-[#141618]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-[#C45832] flex items-center mt-1">
                          <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        id="submit-enquiry-form-btn"
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#141618] hover:bg-[#C45832] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C45832]"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Project Enquiry</span>
                      </button>

                      <div className="text-xs text-[#5E646E]">
                        Or call directly: <a href={COMPANY.phone.cleanTel} className="font-bold text-[#141618] hover:text-[#C45832]">{COMPANY.phone.display}</a>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
