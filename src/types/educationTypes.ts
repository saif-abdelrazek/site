import type { ImageMetadata } from "astro";

/**
 * Education section types - matches the 2 thematic sections
 */
export type EducationSection = 
  | "formal"           // Formal Academic Foundation
  | "self-learning";   // Autodidact & Developer Journey

/**
 * Institution represents a school, platform, or learning resource
 */
export interface Institution {
  /** Unique slug identifier */
  slug: string;
  /** Display name */
  name: string;
  /** Short name for compact displays */
  shortName?: string;
  /** Period of engagement (e.g., "2023 - Present") */
  period: string;
  /** Role/relationship (e.g., "Student", "Learner", "Self-Learner") */
  role: string;
  /** Brief description */
  description: string;
  /** Logo image */
  logo?: ImageMetadata;
  /** External URL */
  url?: string;
  /** Location (e.g., "Gharbiya, Egypt", "Online") */
  location?: string;
  /** Associated section */
  section: EducationSection;
  /** Display order within section */
  order?: number;
  /** Whether currently active */
  current?: boolean;
}

/**
 * Moment represents a key learning event, achievement, or milestone
 */
export interface Moment {
  /** Unique slug identifier */
  slug: string;
  /** Display title */
  title: string;
  /** Date of the moment */
  date: Date;
  /** Markdown content */
  content?: string;
  /** Brief excerpt for cards */
  excerpt: string;
  /** Parent institution slug */
  institutionSlug: string;
  /** Section this moment belongs to */
  section: EducationSection;
  /** Featured image */
  image?: ImageMetadata;
  /** Tags for categorization */
  tags?: string[];
  /** Whether this is a featured/highlighted moment */
  featured?: boolean;
  /** Display order */
  order?: number;
}

/**
 * Section configuration for the education page
 */
export interface EducationSectionConfig {
  id: EducationSection;
  title: string;
  description: string;
  narrative?: string;
  icon?: string;
  colorClass?: string;
  bgClass?: string;
}

/**
 * Props for the unified EducationCard component
 */
export interface EducationCardProps {
  institution: Institution;
  moment?: Moment;
  variant?: "compact" | "detailed" | "featured";
  showSection?: boolean;
  class?: string;
}

/**
 * Section badge/tag configuration
 */
export const SECTION_CONFIG: Record<EducationSection, {
  label: string;
  labelAr: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
}> = {
  formal: {
    label: "Formal Education",
    labelAr: "التعليم النظامي",
    color: "text-blue-700 dark:text-blue-300",
    bgColor: "bg-blue-100 dark:bg-blue-900/40",
    borderColor: "border-blue-500 dark:border-blue-600",
    icon: "mdi:school",
  },
  "self-learning": {
    label: "Self Learning",
    labelAr: "التعلم الذاتي",
    color: "text-teal-700 dark:text-teal-300",
    bgColor: "bg-teal-100 dark:bg-teal-900/40",
    borderColor: "border-teal-500 dark:border-teal-600",
    icon: "mdi:book-open-page-variant",
  },
};
