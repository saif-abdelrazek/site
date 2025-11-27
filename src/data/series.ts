export interface SeriesData {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  total_parts: number;
  color: string;
  icon: string;
  status: 'ongoing' | 'completed' | 'planned';
  launch_date: string;
  category: string;
  slug: string;
}

export const seriesConfig: Record<string, SeriesData> = {
  'a8k-signature': {
    slug: 'a8k-signature',
    title: 'A8K Signature',
    titleAr: 'بصمة A8K',
    description: 'Everything about the A8K developer signature and branding',
    descriptionAr: 'كل شيء عن بصمة A8K ومعرف المطور',
    total_parts: 2,
    color: '#3B82F6',
    icon: 'mdi:signature-freehand',
    status: 'completed',
    launch_date: '2025-11-24',
    category: 'career'
  },
  'digital-self-defense': {
    slug: 'digital-self-defense',
    title: 'Digital Self-Defense',
    titleAr: 'الدفاع الرقمي الذاتي',
    description: 'Practical privacy and security guides that don\'t require a computer science degree',
    descriptionAr: 'أدلة عملية للخصوصية والأمان لا تتطلب شهادة في علوم الحاسوب',
    total_parts: 8,
    color: '#8B5CF6',
    icon: 'mdi:shield-lock',
    status: 'planned',
    launch_date: '2025-12-01',
    category: 'technology'
  }
};

export function getSeriesData(slug: string): SeriesData | undefined {
  return seriesConfig[slug];
}

export function getAllSeries(): SeriesData[] {
  return Object.values(seriesConfig);
}
