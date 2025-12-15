/**
 * Technology category types - organized by skill domain
 */
export type TechCategory = 
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools"
  | "design"
  | "os"
  | "deployment"
  | "cssFramework"
  | "dns"
  | "browser"
  | "cms"
  | "markup"
  | "codeEditor"
  | "other";

/**
 * Skill level for technologies
 */
export type TechLevel = "Expert" | "Advanced" | "Intermediate" | "Beginner" | "Novice";

/**
 * Technology item interface
 */
export interface Technology {
  name: string;
  slug: string;
  icon?: string;
  level?: TechLevel;
  category: TechCategory;
  favorite?: boolean;
  description?: string;
  link?: string;
  resources?: Array<{ label: string; url: string }>;
  details?: string;
}

/**
 * Category configuration for the tech page
 */
export interface TechCategoryConfig {
  label: string;
  labelAr: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
}

/**
 * Category badge/tag configuration
 */
export const TECH_CATEGORY_CONFIG: Record<TechCategory, TechCategoryConfig> = {
  language: {
    label: "Languages",
    labelAr: "لغات البرمجة",
    color: "text-purple-700 dark:text-purple-300",
    bgColor: "bg-purple-100 dark:bg-purple-900/40",
    borderColor: "border-purple-500 dark:border-purple-600",
    icon: "mdi:code-braces",
  },
  frontend: {
    label: "Frontend",
    labelAr: "الواجهات الأمامية",
    color: "text-blue-700 dark:text-blue-300",
    bgColor: "bg-blue-100 dark:bg-blue-900/40",
    borderColor: "border-blue-500 dark:border-blue-600",
    icon: "mdi:monitor",
  },
  backend: {
    label: "Backend",
    labelAr: "الخوادم",
    color: "text-green-700 dark:text-green-300",
    bgColor: "bg-green-100 dark:bg-green-900/40",
    borderColor: "border-green-500 dark:border-green-600",
    icon: "mdi:server",
  },
  database: {
    label: "Databases",
    labelAr: "قواعد البيانات",
    color: "text-orange-700 dark:text-orange-300",
    bgColor: "bg-orange-100 dark:bg-orange-900/40",
    borderColor: "border-orange-500 dark:border-orange-600",
    icon: "mdi:database",
  },
  devops: {
    label: "DevOps & Cloud",
    labelAr: "DevOps والسحابة",
    color: "text-cyan-700 dark:text-cyan-300",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/40",
    borderColor: "border-cyan-500 dark:border-cyan-600",
    icon: "mdi:cloud-outline",
  },
  tools: {
    label: "Tools & Utilities",
    labelAr: "الأدوات",
    color: "text-gray-700 dark:text-gray-300",
    bgColor: "bg-gray-100 dark:bg-gray-900/40",
    borderColor: "border-gray-500 dark:border-gray-600",
    icon: "mdi:wrench",
  },
  design: {
    label: "Design",
    labelAr: "التصميم",
    color: "text-pink-700 dark:text-pink-300",
    bgColor: "bg-pink-100 dark:bg-pink-900/40",
    borderColor: "border-pink-500 dark:border-pink-600",
    icon: "mdi:palette",
  },
  os: {
    label: "Operating Systems",
    labelAr: "أنظمة التشغيل",
    color: "text-lime-700 dark:text-lime-300",
    bgColor: "bg-lime-100 dark:bg-lime-900/40",
    borderColor: "border-lime-500 dark:border-lime-600",
    icon: "mdi:linux",
  },
  deployment: {
    label: "Deployment & Hosting",
    labelAr: "النشر والاستضافة",
    color: "text-indigo-700 dark:text-indigo-300",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/40",
    borderColor: "border-indigo-500 dark:border-indigo-600",
    icon: "mdi:cloud-upload-outline",
  },
  cssFramework: {
    label: "CSS Frameworks",
    labelAr: "أطر CSS",
    color: "text-cyan-700 dark:text-cyan-300",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/40",
    borderColor: "border-cyan-500 dark:border-cyan-600",
    icon: "mdi:tailwind",
  },
  dns: {
    label: "DNS Services",
    labelAr: "خدمات DNS",
    color: "text-yellow-700 dark:text-yellow-300",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/40",
    borderColor: "border-yellow-500 dark:border-yellow-600",
    icon: "mdi:dns-outline",
  },
  browser: {
    label: "Web Browsers",
    labelAr: "متصفحات الويب",
    color: "text-blue-700 dark:text-blue-300",
    bgColor: "bg-blue-50 dark:bg-blue-900/40",
    borderColor: "border-blue-500 dark:border-blue-600",
    icon: "mdi:web",
  },
  cms: {
    label: "Content Management",
    labelAr: "أنظمة إدارة المحتوى",
    color: "text-rose-700 dark:text-rose-300",
    bgColor: "bg-rose-100 dark:bg-rose-900/40",
    borderColor: "border-rose-500 dark:border-rose-600",
    icon: "mdi:application-cog-outline",
  },
  markup: {
    label: "Markup Languages",
    labelAr: "لغات الترميز",
    color: "text-fuchsia-700 dark:text-fuchsia-300",
    bgColor: "bg-fuchsia-100 dark:bg-fuchsia-900/40",
    borderColor: "border-fuchsia-500 dark:border-fuchsia-600",
    icon: "mdi:xml",
  },
  codeEditor: {
    label: "Code Editors",
    labelAr: "محررات الأكواد",
    color: "text-sky-700 dark:text-sky-300",
    bgColor: "bg-sky-100 dark:bg-sky-900/40",
    borderColor: "border-sky-500 dark:border-sky-600",
    icon: "mdi:code-tags",
  },
  other: {
    label: "Other",
    labelAr: "أخرى",
    color: "text-slate-700 dark:text-slate-300",
    bgColor: "bg-slate-100 dark:bg-slate-900/40",
    borderColor: "border-slate-500 dark:border-slate-600",
    icon: "mdi:dots-horizontal",
  },
};

/**
 * Level order for sorting (best to worst)
 */
export const LEVEL_ORDER: TechLevel[] = ["Expert", "Advanced", "Intermediate", "Beginner", "Novice"];

/**
 * Get level configuration for display
 */
export const LEVEL_CONFIG: Record<TechLevel, { color: string; bgColor: string }> = {
  Expert: {
    color: "text-emerald-700 dark:text-emerald-300",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/40",
  },
  Advanced: {
    color: "text-blue-700 dark:text-blue-300",
    bgColor: "bg-blue-100 dark:bg-blue-900/40",
  },
  Intermediate: {
    color: "text-yellow-700 dark:text-yellow-300",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/40",
  },
  Beginner: {
    color: "text-orange-700 dark:text-orange-300",
    bgColor: "bg-orange-100 dark:bg-orange-900/40",
  },
  Novice: {
    color: "text-gray-700 dark:text-gray-300",
    bgColor: "bg-gray-100 dark:bg-gray-900/40",
  },
};
