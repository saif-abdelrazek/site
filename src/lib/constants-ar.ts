// ========================
// المعلومات الشخصية
// ========================

export const LANGUAGE_DIRECTION = "rtl";

export const SITE_CONFIG = {
  name: 'سيف عبدالرازق',
  title: 'سيف عبدالرازق | الموقع',
  shortName: 'سيف عبدالرازق | الموقع',
  description: 'الموقع الشخصي لسيف عبدالرازق | ليس مجرد موقع',
  keywords: 'سيف عبدالرازق, سيف, عبدالرازق, Saif, Abdelrazek, مطور, بورتفوليو, موقع شخصي, مدونة',
  tagline: 'مطوّر ويب متكامل وشغوف بالتقنية',
  subtitle: 'مطوّر متكامل وطالب ثانوي',
  author: 'سيف عبدالرازق',
  email: 'saif@saifabdelrazek.com',
  location: 'الغربية، مصر',
  timezone: 'GMT+2',
  avatar: '/avatar.jpg',
  profileImage: './images/profile.jpg',
  aboutImage: './images/about.jpg',
  experience: '5+',
  projectsCompleted: '50+',
  clientSatisfaction: '100%',
  technologiesMastered: '15+',
  founded: '2024',
  languages: ['en', 'ar'] as const,
  defaultLanguage: 'ar' as const,
  siteUrl: 'https://saifabdelrazek.com',
} as const;

// ========================
// الروابط العامة
// ========================

export const SITE_URLS = {
  main: 'https://saifabdelrazek.com',
  saifMarks: 'https://marks.saifdev.org',
  saifUrls: 'https://urls.saifdev.org',
  saifApiDemo: 'https://saifapi.vercel.app',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/saif-abdelrazek',
  linkedin: 'https://linkedin.com/in/saifabdelrazek',
  email: 'mailto:saif@saifabdelrazek.com',
  twitter: 'https://twitter.com/saifabdelrazek',
} as const;

export const REPOSITORY_LINKS = {
  site: 'https://github.com/saif-abdelrazek/site',
  saifApi: 'https://github.com/saif-abdelrazek/saifapi',
  saifMarks: 'https://github.com/saif-abdelrazek/saifmarks',
  saifUrls: 'https://github.com/saif-abdelrazek/saifurl',
} as const;

// ========================
// عناصر التنقّل والمسارات
// ========================

export const NAV_ITEMS = [
  { label: 'المدوّنة', href: '/ar/blog', icon: 'blog' },
  { label: 'المستودعات', href: '/ar/repos', icon: 'github' },
  { label: 'الآن', href: '/ar/now', icon: 'clock' },
  { label: 'تواصل', href: '/ar/contact', icon: 'envelope' },
] as const;

export const REDIRECTS = {
  projects: '/ar/#projects',
  technologies: '/ar/#technologies',
  about: '/ar/#about',
  post: '/ar/blog',
  posts: '/ar/blog',
  edu: '/ar/education',
  github: SOCIAL_LINKS.github,
  linkedin: SOCIAL_LINKS.linkedin,
} as const;

// ========================
// عناوين الصفحات والأوصاف
// ========================

export const PAGE_TITLES = {
  home: 'سيف عبدالرازق | الموقع',
  blog: 'سيف عبدالرازق | المدوّنة',
  blogPage: 'مدوّنة سيف عبدالرازق',
  repos: 'سيف عبدالرازق | المستودعات',
  tech: 'سيف عبدالرازق | التقنيات والأدوات',
  contact: 'سيف عبدالرازق | تواصل',
  biolink: 'سيف عبدالرازق | روابط مختصرة',
  now: 'سيف عبدالرازق | صفحة الآن',
  notFound: '404: تائه في الفضاء | سيف عبدالرازق',
  rss: 'مدوّنة سيف عبدالرازق',
} as const;

export const PAGE_DESCRIPTIONS = {
  home: 'سيف عبدالرازق – مطوّر متكامل وطالب ثانوي. تصفّح أعمالي ومدونتي ومشاريعي والمزيد.',
  blog: 'مدوّنة سيف عبدالرازق عن التقنية والبرمجة وتجاربه الشخصية.',
  blogPage: 'أحدث المقالات والتحديثات من سيف عبدالرازق.',
  repos: 'مستودعات سيف عبدالرازق على GitHub وإحصائيات البرمجة وأحدث المشاريع والمساهمات.',
  tech: 'مكدّس التقنيات لدى سيف عبدالرازق، لغات وأطر وأدوات العمل.',
  contact: 'صفحة التواصل مع سيف عبدالرازق. راسلني عبر البريد أو شبكات التواصل.',
  biolink: 'صفحة الروابط الخاصة بسيف عبدالرازق — روابط اجتماعية وتواصل.',
  now: 'ما أعمل عليه الآن من أهداف ومشاريع.',
  rss: 'المدوّنة الشخصية لسيف عبدالرازق',
} as const;

// ========================
// إعدادات المدوّنة
// ========================

export const BLOG_CONFIG = {
  title: 'مدوّنة سيف عبدالرازق',
  postsPerPage: 6,
  recentPostsCount: 3,
  featuredPostsCount: 3,
  rssTitle: PAGE_TITLES.rss,
  rssDescription: PAGE_DESCRIPTIONS.rss,
  rssPath: '/blog/rss.xml',
  feedTitle: 'خلاصة RSS لمدوّنة سيف عبدالرازق',
  categories: [
    'تطوير الويب',
    'جافاسكربت',
    'ريأكت',
    'تايب سكربت',
    'شروحات',
    'مسار مهني',
    'أدوات',
    'الأداء',
    'ترحيب',
  ],
  defaultImage: '/images/blog-default.jpg',
  defaultAuthor: SITE_CONFIG.author,
} as const;

// ========================
// إعدادات المشاريع
// ========================

export const PROJECTS_CONFIG = {
  featuredCount: 6,
  categories: [
    'تطبيق ويب',
    'متجر إلكتروني',
    'بورتفوليو',
    'لوحة تحكّم',
    'واجهة برمجية (API)',
    'تطبيق جوّال',
    'مفتوح المصدر',
    'أعمال للعملاء',
    'تطوير خلفي',
    'تطوير متكامل',
    'موقع شخصي',
  ],
  technologies: [
    'React',
    'TypeScript',
    'Astro',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'Python',
    'FastAPI',
    'JavaScript',
    'Express.js',
    'EJS',
    'NestJS',
    'Prisma',
    'MDX',
    'Vercel',
  ],
  statuses: ['مكتمل', 'قيد التنفيذ', 'تخطيط', 'مؤرشف'] as const,
} as const;

// ========================
// إعدادات التعليم
// ========================

export const EDUCATION_CONFIG = {
  types: ['التعليم النظامي', 'التعلم الذاتي', 'أخرى'] as const,
  categories: ['education'],
  institutions: {
    elzero: 'Elzero Web School',
    jonas: 'Jonas Schmedtmann (Udemy)',
    jsm: 'JavaScript Mastery (YouTube)',
    safir: 'سفير التفوّق',
    sibirbai: 'مدرسة سيبيرباي للغات',
    stem: 'مدرسة ستيم للعلوم - الغربية',
  },
} as const;

// ========================
// إعدادات التواصل
// ========================

export const CONTACT_CONFIG = {
  emailService: {
    host: 'smtp.zoho.com',
    port: 587,
  },
  replyTo: SITE_CONFIG.email,
  fromName: 'نموذج تواصل الموقع',
  senderName: SITE_CONFIG.name,
  successMessage: 'شكرًا لتواصلك معنا! سيتم الرد قريبًا.',
  errorMessage: 'حدث خطأ أثناء الإرسال. حاول مرة أخرى.',
  automatedFooter: `— إشعار آلي من ${SITE_URLS.main.replace('https://', '')}`,
  responseTime: 'عادةً ما يتم الرد خلال 24 ساعة',
  availability: 'متاح لأعمال حرّة',
} as const;

// ========================
// قوالب البريد الإلكتروني
// ========================

export const EMAIL_TEMPLATES = {
  subjects: {
    contact: (subject: string) => `رسالة جديدة من نموذج التواصل: ${subject}`,
    confirmation: (name: string) => `شكرًا لتواصلك معنا، ${name}!`,
  },
  signatures: {
    light: `أطيب التحيات،<br>${SITE_CONFIG.name}`,
    dark: `أطيب التحيات،<br>${SITE_CONFIG.name}`,
  },
} as const;

// ========================
// إعدادات PWA
// ========================

export const PWA_CONFIG = {
  name: SITE_CONFIG.title,
  shortName: SITE_CONFIG.shortName,
  description: PAGE_DESCRIPTIONS.home,
  startUrl: '/',
  scope: '/',
  display: 'standalone',
  orientation: 'portrait',
  backgroundColor: '#f8fafc',
  themeColor: '#186faf',
  language: 'ar',
  icons: {
    favicon96: '/favicon-96x96.png',
    faviconSvg: '/favicon.svg',
    faviconIco: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  manifestIcons: [
    { src: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    { src: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
    { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
  ],
} as const;

// ========================
// إعدادات واجهات البرمجة
// ========================

export const API_CONFIG = {
  github: {
    baseUrl: 'https://api.github.com',
    reposEndpoint: '/users/saif-abdelrazek/repos?per_page=100',
  },
  hackatime: {
    baseUrl: 'https://hackatime.hackclub.com/api/v1',
    statsEndpoint: (userId: string) => `/users/${userId}/stats`,
  },
  wtfIsMyIp: {
    baseUrl: 'https://wtfismyip.com/json',
    ipv4Fallback: 'https://ipv4.myip.wtf/text',
  },
} as const;

// ========================
// إعدادات البحث
// ========================

export const SEARCH_CONFIG = {
  collections: ['posts'],
  fields: ['title', 'description', 'content'],
  indexPath: '/collection-search/minisearch-index.json',
  workerPath: '/collection-search/minisearch-worker.mjs',
} as const;

// ========================
// التحليلات والمراقبة
// ========================

export const ANALYTICS_CONFIG = {
  speedInsights: true,
  vercelAnalytics: true,
  domain: SITE_URLS.main,
} as const;

// ========================
// إعدادات الواجهة
// ========================

export const UI_CONFIG = {
  animations: {
    duration: { fast: '150ms', normal: '300ms', slow: '500ms' },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
  spacing: { section: 'py-20', container: 'mx-auto max-w-6xl px-4' },
  colors: {
    primary: { light: '#186faf', dark: '#0ea5e9' },
    background: { light: '#f8fafc', dark: '#0f172a' },
  },
} as const;

// ========================
// إعدادات السمة
// ========================

export const THEME_CONFIG = {
  default: 'dark',
  storageKey: 'theme',
  classes: { light: 'light', dark: 'dark' },
  transitions: 'transition-colors duration-300',
} as const;

// ========================
// رسائل الأخطاء
// ========================

export const ERROR_MESSAGES = {
  notFound: {
    title: 'تائه في الفضاء',
    message: 'لدينا مشكلة! يبدو أن هذه الصفحة انجرفت بعيدًا في الفضاء الرقمي.',
    action: 'أعدني إلى الصفحة الرئيسية',
  },
  contact: {
    noData: 'لا توجد بيانات',
    invalidBody: 'بيانات الطلب غير صالحة',
    missingEmail: 'إعدادات البريد غير مضبوطة. الرجاء التحقق من المتغيرات.',
    sendError: 'حدث خطأ أثناء إرسال البريد',
  },
  general: {
    somethingWrong: 'حدث خطأ ما',
    tryAgain: 'يرجى المحاولة لاحقًا',
  },
  emailConfigNotSet: 'إعدادات البريد غير مضبوطة. الرجاء التحقق من المتغيرات.',
  invalidRequestBody: 'بيانات الطلب غير صالحة',
  nameRequired: 'الاسم مطلوب',
  invalidEmail: 'البريد الإلكتروني غير صالح',
  subjectRequired: 'الموضوع مطلوب',
  messageMinLength: 'يجب أن لا تقل الرسالة عن 50 حرفًا',
} as const;

// ========================
// رسائل النجاح
// ========================

export const SUCCESS_MESSAGES = {
  contact: {
    sent: 'تم إرسال الرسالة بنجاح!',
    willReply: 'شكرًا لرسالتك. سأعاود التواصل معك قريبًا.',
  },
  emailSent: 'تم إرسال البريد بنجاح',
} as const;

// ========================
// محتوى البورتفوليو
// ========================

export const PORTFOLIO_CONTENT = {
  hero: {
    title: 'سيف عبدالرازق',
    subtitle: 'مطوّر متكامل وطالب ثانوي',
    description: 'أبني تطبيقات ويب عصرية وواجهات برمجية وأدوات. شغوف بالمصادر المفتوحة ومشاركة المعرفة.',
    image: '/src/assets/profile.jpg',
  },
  about: {
    title: 'نبذة عني',
    fullName: 'سيف عمرو سامي عبدالرازق',
    image: '/src/assets/about.jpg',
    content: `أنا سيف عبدالرازق، طالب ثانوي ومطوّر متكامل ومدرّس ومحلّل مشاكل، شغوف ببناء تجارب ويب حديثة وحل التحديات الواقعية...`,
  },
  technologies: {
    title: 'التقنيات والأدوات',
    description: 'تعرّف على مجموعة التقنيات والأدوات التي أستخدمها في تطوير الويب والخدمات الخلفية وقواعد البيانات والنشر والإنتاجية.',
    items: [],
  },
} as const;

// ========================
// حقوق النشر
// ========================

export const COPYRIGHT_CONFIG = {
  year: new Date().getFullYear(),
  holder: SITE_CONFIG.name,
  statement: `© ${new Date().getFullYear()} ${SITE_CONFIG.name}. جميع الحقوق محفوظة.`,
  blogStatement: `© ${new Date().getFullYear()} مدوّنة ${SITE_CONFIG.name}. جميع الحقوق محفوظة.`,
} as const;

// ========================
// صفحة الروابط المختصرة
// ========================

export const BIO_CONFIG = {
  title: SITE_CONFIG.name,
  subtitle: 'مطوّر متكامل وشغوف بالتقنية',
  description: 'أبني تجارب ويب حديثة بإبداع واهتمام بالتفاصيل.',
  avatar: { src: '/avatar.jpg', alt: SITE_CONFIG.name, size: 144 },
  links: [
    { title: 'الموقع الشخصي', url: '/', icon: '🌐' },
    { title: 'GitHub', url: SOCIAL_LINKS.github, icon: '💻' },
    { title: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: '💼' },
    { title: 'Email', url: SOCIAL_LINKS.email, icon: '📧' },
  ],
} as const;

// ========================
// إعدادات robots.txt
// ========================

export const ROBOTS_CONFIG = {
  userAgent: '*',
  allow: '/',
  sitemapPath: 'sitemap-index.xml',
} as const;
