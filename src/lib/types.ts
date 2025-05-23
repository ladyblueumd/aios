// Core data types for Sadie OS website

export interface WorkOrder {
  id: string;
  serviceDate: string;
  title: string;
  typeOfWork: string;
  city: string;
  state: string;
  country: string;
  company: string; // Anonymized/generalized
  rating?: number;
  buyerRating?: number;
  distance?: number;
  // Private fields excluded for public display
}

export interface TileProps {
  title: string;
  subtitle?: string;
  icon: string;
  bgColor: 'deep-sky-blue' | 'navy-blue' | 'orange-peel' | 'emerald-green' | 'purple';
  href: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: TileProps['bgColor'];
  features: string[];
  callToAction: string;
}

export interface ExperienceSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: TileProps['bgColor'];
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface FilterOptions {
  typeOfWork: string[];
  states: string[];
  dateRange: {
    start: string;
    end: string;
  };
  searchTerm: string;
}

export interface MapMarker {
  id: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  count: number;
  workOrders: WorkOrder[];
}

export interface TechSkill {
  category: string;
  skills: string[];
  icon: string;
  description: string;
}

export interface ClientTestimonial {
  id: string;
  company: string; // Anonymized
  project: string;
  rating: number;
  comment: string;
  date: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// Color theme type
export type ColorTheme = 'deep-sky-blue' | 'navy-blue' | 'orange-peel' | 'emerald-green' | 'purple';

// Page metadata type
export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}