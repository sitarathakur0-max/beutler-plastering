export type PageId = 'home' | 'services' | 'about' | 'projects' | 'faq' | 'contact';

export interface CompanyInfo {
  name: string;
  category: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    postalCode: string;
    locality: string;
    canton: string;
    country: string;
    fullFormatted: string;
  };
  phone: {
    display: string;
    raw: string; // for tel: links
    cleanTel: string;
  };
  serviceRegion: string;
  operatingHours: {
    workdays: string;
    weekend: string;
  };
}

export interface ServiceItem {
  id: string;
  category: 'plastering' | 'painting' | 'preparation';
  title: string;
  shortDesc: string;
  fullDesc: string;
  materialCharacteristics: string[];
  recommendedApplications: string[];
  features: string[];
  imageUrl?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  focus: string;
  description: string;
  details: string[];
}

export interface PreparationBenefit {
  id: string;
  title: string;
  principle: string;
  explanation: string;
  impact: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'plastering' | 'painting' | 'facade' | 'interior';
  locationType: string;
  scopeSummary: string;
  materialsUsed: string[];
  challenge: string;
  execution: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'plastering' | 'painting' | 'preparation' | 'logistics';
}

export interface ConsultationFormState {
  fullName: string;
  phone: string;
  email: string;
  locality: string;
  serviceCategory: 'plastering' | 'painting' | 'both' | 'restoration' | 'unspecified';
  projectScope: 'interior' | 'exterior' | 'complete' | 'single-room';
  estimatedTimeline: 'urgent' | '1-2-months' | 'flexible' | 'planning';
  message: string;
}
