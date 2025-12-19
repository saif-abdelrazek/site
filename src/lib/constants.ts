import { useTranslations } from '../i18n/translations';
import type { Language } from '../i18n/utils';

// ========================
// Localized Constants Factory
// ========================

export function createLocalizedConstants(lang: Language): any {
  const t = useTranslations(lang);

  return {
    LANGUAGE_DIRECTION: lang === 'ar' ? 'rtl' : 'ltr',

    SITE_CONFIG: {
      name: t('site.name'),
      title: t('site.title'),
      shortName: t('site.shortName'),
      description: t('site.description'),
      keywords: lang === 'ar' 
        ? 'سيف عبدالرازق, سيف, عبدالرازق, Saif, Abdelrazek, مطور, بورتفوليو, موقع شخصي, مدونة'
        : 'Saif Abdelrazek, Saif, Abdelrazek, Saif Dev, Saif Developer, Abdelrazek Portfolio, Saif Portfolio, Saif Dev Portfolio, Saif Abdelrazek Portfolio, Saif Abdelrazek Website, Saif Dev Website, Saif Abdelrazek Blog, Saif Dev Blog, Saif Blog, Saif Amr, Saif Amr Samy',
      tagline: t('site.tagline'),
      subtitle: t('site.subtitle'),
      author: t('site.author'),
      email: 'saif@saifabdelrazek.com',
      location: t('site.location'),
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
      defaultLanguage: 'en' as const,
      siteUrl: 'https://saifabdelrazek.com',
    },

    // ========================
    // Navigation Items
    // ========================

    NAV_ITEMS: [
      { 
        label: t('nav.blog'), 
        href: lang === 'ar' ? '/ar/blog' : '/blog', 
        icon: 'blog' 
      },
      { 
        label: t('nav.projects'), 
        href: lang === 'ar' ? '/ar/projects' : '/projects', 
        icon: 'github' 
      },
      { 
        label: t('nav.technologies'), 
        href: lang === 'ar' ? '/ar/technologies' : '/technologies', 
        icon: 'layers' 
      },
      { 
        label: t('nav.now'), 
        href: lang === 'ar' ? '/ar/now' : '/now', 
        icon: 'clock' 
      },
      { 
        label: t('nav.contact'), 
        href: lang === 'ar' ? '/ar/contact' : '/contact', 
        icon: 'envelope' 
      },
    ],

    // ========================
    // Page Titles and Descriptions
    // ========================

    PAGE_TITLES: {
      home: t('page.home.title'),
      blog: t('page.blog.title'),
      blogPage: t('page.blogPage.title'),
      repos: t('page.repos.title'),
      technologies: t('page.tech.title'),
      contact: t('page.contact.title'),
      biolink: t('page.biolink.title'),
      now: t('page.now.title'),
      notFound: t('page.notFound.title'),
      rss: t('page.rss.title'),
    },

    PAGE_DESCRIPTIONS: {
      home: t('page.home.description'),
      blog: t('page.blog.description'),
      blogPage: t('page.blogPage.description'),
      repos: t('page.repos.description'),
      technologies: t('page.tech.description'),
      contact: t('page.contact.description'),
      biolink: t('page.biolink.description'),
      now: t('page.now.description'),
      rss: t('page.rss.description'),
    },

    // ========================
    // Blog Configuration
    // ========================

    BLOG_CONFIG: {
      title: t('blog.title'),
      postsPerPage: 6,
      recentPostsCount: 3,
      featuredPostsCount: 3,
      rssTitle: t('page.rss.title'),
      rssDescription: t('page.rss.description'),
      rssPath: '/blog/rss.xml',
      feedTitle: t('blog.feedTitle'),
      categories: [
        t('blog.categories.webDev'),
        t('blog.categories.javascript'),
        t('blog.categories.react'),
        t('blog.categories.typescript'),
        t('blog.categories.tutorial'),
        t('blog.categories.career'),
        t('blog.categories.tools'),
        t('blog.categories.performance'),
        t('blog.categories.welcome'),
      ],
      defaultImage: '/images/blog-default.jpg',
      defaultAuthor: t('site.author'),
    },

    // ========================
    // Projects Configuration
    // ========================

    PROJECTS_CONFIG: {
      featuredCount: 6,
      categories: [
        t('projects.categories.webApp'),
        t('projects.categories.ecommerce'),
        t('projects.categories.portfolio'),
        t('projects.categories.dashboard'),
        t('projects.categories.api'),
        t('projects.categories.mobileApp'),
        t('projects.categories.openSource'),
        t('projects.categories.clientWork'),
        t('projects.categories.backend'),
        t('projects.categories.fullStack'),
        t('projects.categories.portfolioSite'),
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
      statuses: [
        t('projects.status.completed'),
        t('projects.status.inProgress'),
        t('projects.status.planning'),
        t('projects.status.archived'),
      ] as const,
    },

    // ========================
    // Education Configuration
    // ========================

    EDUCATION_CONFIG: {
      types: [
        t('education.types.formal'),
        t('education.types.selfLearning'),
        t('education.types.other'),
      ] as const,
      categories: ['education'],
      institutions: {
        elzero: 'Elzero Web School',
        jonas: 'Jonas Schmedtmann (Udemy)',
        jsm: 'JavaScript Mastery (YouTube)',
        safir: t('education.institutions.safir'),
        sibirbai: t('education.institutions.sibirbai'),
        stem: t('education.institutions.stem'),
      },
    },

    // ========================
    // Contact Configuration
    // ========================

    CONTACT_CONFIG: {
      emailService: {
        host: 'smtp.zoho.com',
        port: 587,
      },
      replyTo: 'saif@saifabdelrazek.com',
      fromName: t('contact.fromName'),
      senderName: t('site.name'),
      successMessage: t('contact.successMessage'),
      errorMessage: t('contact.errorMessage'),
      automatedFooter: `— ${t('contact.automatedFooter')} saifabdelrazek.com`,
      responseTime: t('contact.responseTime'),
      availability: t('contact.availability'),
    },

    // ========================
    // Email Templates
    // ========================

    EMAIL_TEMPLATES: {
      subjects: {
        contact: (subject: string) => t('email.subjects.contact').replace('{subject}', subject),
        confirmation: (name: string) => t('email.subjects.confirmation').replace('{name}', name),
      },
      signatures: {
        light: t('email.signatures.light').replace('{name}', t('site.name')),
        dark: t('email.signatures.dark').replace('{name}', t('site.name')),
      },
    },

    // ========================
    // Error Messages
    // ========================

    ERROR_MESSAGES: {
      notFound: {
        title: t('error.404.title'),
        message: t('error.404.message'),
        action: t('error.404.action'),
      },
      contact: {
        noData: t('error.contact.noData'),
        invalidBody: t('error.contact.invalidBody'),
        missingEmail: t('error.contact.missingEmail'),
        sendError: t('error.contact.sendError'),
      },
      general: {
        somethingWrong: t('error.general.somethingWrong'),
        tryAgain: t('error.general.tryAgain'),
      },
      emailConfigNotSet: t('error.emailConfigNotSet'),
      invalidRequestBody: t('error.invalidRequestBody'),
      nameRequired: t('error.nameRequired'),
      invalidEmail: t('error.invalidEmail'),
      subjectRequired: t('error.subjectRequired'),
      messageMinLength: t('error.messageMinLength'),
    },

    // ========================
    // Success Messages
    // ========================

    SUCCESS_MESSAGES: {
      contact: {
        sent: t('success.contact.sent'),
        willReply: t('success.contact.willReply'),
      },
      emailSent: t('success.emailSent'),
    },

    // ========================
    // Portfolio Content
    // ========================

    PORTFOLIO_CONTENT: {
      hero: {
        title: t('portfolio.hero.title'),
        subtitle: t('portfolio.hero.subtitle'),
        description: t('portfolio.hero.description'),
        image: '/@assets/profile.jpg',
      },
      about: {
        title: t('portfolio.about.title'),
        fullName: t('portfolio.about.fullName'),
        image: '/@assets/about.jpg',
        content: t('portfolio.about.content'),
      },
      technologies: {
        title: t('portfolio.technologies.title'),
        description: t('portfolio.technologies.description'),
        items: [
          {
            name: 'HTML5',
            icon: 'logos:html-5',
            level: 'Expert',
            category: 'language',
            favorite: false,
            description: lang === 'ar' 
              ? 'HTML5 هي لغة الترميز الأساسية للويب، تمكّن من إنشاء صفحات ويب مُنظَّمة وسهلة الوصول ودلالية. تقدّم عناصر جديدة وواجهات برمجية للوسائط المتعددة والرسوميات والعمل دون اتصال. تعدّد استخداماتها يضمن التوافق عبر الأجهزة والمنصّات، ما يجعلها أساسية لتطوير الويب الحديث.'
              : 'HTML5 is the foundational markup language for the web, enabling the creation of structured, accessible, and semantic web pages. It introduces new elements and APIs for multimedia, graphics, and offline capabilities. Its versatility ensures compatibility across devices and platforms, making it essential for modern web development.',
            slug: 'html5',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          },
          {
            name: 'JavaScript',
            icon: 'logos:javascript',
            level: 'Expert',
            category: 'language',
            favorite: false,
            description: lang === 'ar'
              ? 'جافاسكربت لغة برمجة نصّية ديناميكية تشغّل تجارب ويب تفاعلية وسريعة الاستجابة. تمكّن من منطق جهة العميل، والتعامل مع DOM، والعمليات غير المتزامنة لواجهات غنية. بفضل نظامها البيئي الواسع، تُعد جافاسكربت لا غنى عنها لتطوير الواجهات الأمامية والخلفية.'
              : 'JavaScript is a dynamic scripting language that powers interactive and responsive web experiences. It enables client-side logic, DOM manipulation, and asynchronous operations for rich user interfaces. With its vast ecosystem, JavaScript is indispensable for both frontend and backend development.',
            slug: 'javascript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          },
          {
            name: 'TypeScript',
            icon: 'logos:typescript-icon',
            level: 'Advanced',
            category: 'language',
            favorite: true,
            description: lang === 'ar'
              ? 'تايب سكربت امتداد قوي النوعية لجافاسكربت، مُصمَّم لبناء قواعد شيفرة قابلة للتوسّع وسهلة الصيانة. تضيف كتابةً ثابتة وواجهات وأدوات متقدّمة لرفع إنتاجية المطوّر. تساعد تايب سكربت على اكتشاف الأخطاء مبكرًا وتسهّل تطوير التطبيقات على نطاق واسع.'
              : 'TypeScript is a strongly typed superset of JavaScript, designed for building scalable and maintainable codebases. It adds static typing, interfaces, and advanced tooling for improved developer productivity. TypeScript helps catch errors early and facilitates large-scale application development.',
            slug: 'typescript',
            link: 'https://www.typescriptlang.org/',
          },
          {
            name: 'React',
            icon: 'logos:react',
            level: 'Advanced',
            category: 'frontend',
            favorite: false,
            description: lang === 'ar'
              ? 'ريأكت مكتبة مبنية على المكوّنات لبناء واجهات مستخدم سريعة وتفاعلية. تستفيد من DOM افتراضي لتحقيق تصيير فعّال وإدارة حالة. يتيح معمارها المعياري ونظامها البيئي تطوير مكوّنات معقّدة قابلة لإعادة الاستخدام.'
              : 'React is a component-based library for building fast, interactive user interfaces. It leverages a virtual DOM for efficient rendering and state management. React\'s modular architecture and ecosystem support the development of complex, reusable UI components.',
            slug: 'react',
            link: 'https://react.dev/',
          },
          {
            name: 'Astro',
            icon: 'logos:astro-icon',
            level: 'Intermediate',
            category: 'frontend',
            favorite: true,
            description: lang === 'ar'
              ? 'أسترو مُنشئ مواقع ثابتة حديث يركّز على السرعة وتسليم الويب المُحسّن. يمكّن المطوّرين من استخدام أُطر متعددة وشحن صفر جافاسكربت افتراضيًا. معمارية أسترو مثالية لبناء مواقع محتوى سريعة بحدّ أدنى من الحمل.'
              : 'Astro is a modern static site builder focused on speed and optimized web delivery. It enables developers to use multiple frameworks and ship zero JavaScript by default. Astro\'s architecture is ideal for building fast, content-driven websites with minimal overhead.',
            slug: 'astro',
            link: 'https://astro.build/',
          },
          {
            name: 'Next.js',
            icon: 'logos:nextjs-icon',
            level: 'Novice',
            category: 'frontend',
            favorite: false,
            description: lang === 'ar'
              ? 'نيكست.جي إس إطار عمل لريأكت يوفّر التصيير على الخادم، والتوليد الساكن، وتوجيهًا سلسًا. يبسّط بناء تطبيقات ويب عالية الأداء مع مسارات API مدمجة وتحسين الصور. يدعم التجديد الساكن المتزايد واستراتيجيات التصيير الهجينة.'
              : 'Next.js is a React framework for server-side rendering, static generation, and seamless routing. It simplifies building performant web applications with built-in API routes and image optimization. Next.js supports incremental static regeneration and hybrid rendering strategies.',
            slug: 'nextjs',
            link: 'https://nextjs.org/',
          },
          {
            name: 'Node.js',
            icon: 'logos:nodejs-icon',
            level: 'Intermediate',
            category: 'backend',
            favorite: false,
            description: lang === 'ar'
              ? 'نود.جي إس بيئة تشغيل لجافاسكربت لبناء خدمات خلفية وواجهات برمجية قابلة للتوسّع. تستخدم نموذج إدخال/إخراج غير حاجب قائمًا على الأحداث لأداء عالٍ. تشغّل التطبيقات اللحظية والميكروسيرفس، ما يجعلها خيارًا شائعًا للتطوير على الخادم.'
              : 'Node.js is a JavaScript runtime for building scalable backend services and APIs. It uses an event-driven, non-blocking I/O model for high performance. Node.js powers real-time applications and microservices, making it a popular choice for server-side development.',
            slug: 'nodejs',
            link: 'https://nodejs.org/',
          },
          {
            name: 'Express.js',
            icon: 'simple-icons:express',
            level: 'Intermediate',
            category: 'backend',
            favorite: true,
            description: lang === 'ar'
              ? 'إكسبريس.جي إس إطار ويب مُصغّر لنود.جي إس، مثالي لواجهات REST والميكروسيرفس. يوفّر توجيهًا قويًا، ودعم الوسائط الوسطية، وقابلية للامتداد لتسريع التطوير الخلفي. يُعتمد عليه على نطاق واسع لبساطته ومرونته.'
              : 'Express.js is a minimalist web framework for Node.js, ideal for RESTful APIs and microservices. It provides robust routing, middleware support, and extensibility for rapid backend development. Express.js is widely adopted for its simplicity and flexibility.',
            slug: 'expressjs',
            link: 'https://expressjs.com/',
          },
          {
            name: 'MongoDB',
            icon: 'logos:mongodb-icon',
            level: 'Intermediate',
            category: 'database',
            favorite: true,
            description: lang === 'ar'
              ? 'MongoDB قاعدة بيانات NoSQL مرنة لتخزين واستعلام مستندات شبيهة بـ JSON. تدعم التوسّع الأفقي، والتوافرية العالية، وإمكانات استعلام غنيّة. مناسبة للتطبيقات التي تتطلب تطويرًا سريعًا ومرونة في المخطط.'
              : 'MongoDB is a flexible NoSQL database for storing and querying JSON-like documents. It supports horizontal scaling, high availability, and rich querying capabilities. MongoDB is well-suited for applications requiring rapid development and schema flexibility.',
            slug: 'mongodb',
            link: 'https://www.mongodb.com/',
          },
          {
            name: 'Linux',
            icon: 'logos:linux-tux',
            level: 'Intermediate',
            category: 'os',
            favorite: true,
            description: lang === 'ar'
              ? 'لينكس نظام تشغيل مفتوح المصدر ومستقر لبيئات التطوير والخوادم. يقدّم أمنًا قويًا ومرونة ونظامًا بيئيًا غنيًا من الأدوات. يشغّل البنى السحابية وخوادم الويب والأنظمة المُضمّنة حول العالم.'
              : 'Linux is a stable, open-source operating system for development and server environments. It offers robust security, flexibility, and a rich ecosystem of tools. Linux powers cloud infrastructure, web servers, and embedded systems worldwide.',
            slug: 'linux',
            link: 'https://www.linux.org/',
          },
      {
        name: 'VS Code',
        icon: 'logos:visual-studio-code',
        level: 'Expert',
        category: 'codeEditor',
        favorite: true,
        description: lang === 'ar'
          ? 'VS Code محرّر شيفرة غني بالميزات.'
          : 'VS Code is a feature-rich code editor.',
        slug: 'vs-code',
        link: 'https://code.visualstudio.com/',
      },
      {
        name: 'Vercel',
        icon: 'simple-icons:vercel',
        level: 'Intermediate',
        category: 'deployment',
            favorite: true,
            description: lang === 'ar'
              ? 'Vercel منصة سحابية لنشر أُطر الواجهة الأمامية والمواقع الساكنة بسهولة. توفّر معاينات فورية، وشبكة CDN عالمية، وتكاملًا سلسًا مع Git. مُحسّنة للأداء وتجربة المطوّر.'
              : 'Vercel is a cloud platform for deploying frontend frameworks and static websites with ease. It offers instant previews, global CDN, and seamless integration with Git. Vercel is optimized for performance and developer experience.',
            slug: 'vercel',
            link: 'https://vercel.com/',
          },
          {
            name: 'Tailwind',
            icon: 'logos:tailwindcss-icon',
            level: 'Intermediate',
            category: 'cssFramework',
            favorite: true,
            description: lang === 'ar'
              ? 'Tailwind إطار CSS قائم على الأدوات المساعدة لتطوير واجهات سريعة ومتسقة. يوفّر أصنافًا منخفضة المستوى لبناء تصاميم مخصّصة من دون مغادرة HTML. يسرّع النمذجة الأولية ويفرض اتساق التصميم عبر المشاريع.'
              : 'Tailwind is a utility-first CSS framework for rapid and consistent UI development. It provides low-level utility classes for building custom designs without leaving HTML. Tailwind accelerates prototyping and enforces design consistency across projects.',
            slug: 'tailwind',
            link: 'https://tailwindcss.com/',
          },
          {
            name: 'CSS3',
            icon: 'logos:css-3',
            level: 'Advanced',
            category: 'language',
            favorite: false,
            description: lang === 'ar'
              ? 'CSS3 لغة أنماط حديثة تمكّن تصميم ويب متجاوبًا وجذابًا بصريًا. تقدّم محدّدات جديدة ورسومًا متحركة ووحدات تخطيط لتعزيز تجربة المستخدم. تُعد أساسية لصياغة واجهات تكيّفية وجذّابة.'
              : 'CSS3 is a modern stylesheet language enabling responsive and visually appealing web design. It introduces new selectors, animations, and layout modules for enhanced user experiences. CSS3 is fundamental for crafting adaptive, engaging interfaces.',
            slug: 'css3',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            name: 'Cloudflare',
            icon: 'logos:cloudflare-icon',
            level: 'Intermediate',
            category: 'dns',
            favorite: true,
            description: lang === 'ar'
              ? 'Cloudflare منصة شبكة عالمية توفّر CDN وأمانًا وتحسين أداء للمواقع وواجهات API. تقدّم حماية من هجمات DDoS وإدارة DNS وحوسبة طرفية لتعزيز الاعتمادية والسرعة. تُبسّط Cloudflare بنية الويب التحتية وتحسّن تجربة المستخدم حول العالم.'
              : 'Cloudflare is a global network platform providing CDN, security, and performance optimization for websites and APIs. It offers DDoS protection, DNS management, and edge computing solutions to enhance reliability and speed. Cloudflare simplifies web infrastructure and improves user experience worldwide.',
            slug: 'cloudflare',
            link: 'https://www.cloudflare.com/',
          },
          {
            name: 'Librewolf',
            icon: 'simple-icons:librewolf',
            level: 'Intermediate',
            category: 'browser',
            favorite: true,
            description: lang === 'ar'
              ? 'نسخة مخصّصة ومستقلة من فايرفوكس، بأهداف أساسية تتمثّل في الخصوصية والأمان وحرّية المستخدم.'
              : 'A custom and independent version of Firefox, with the primary goals of privacy, security and user freedom.',
            slug: 'librewolf',
            link: 'https://librewolf.net',
          },
          {
            name: 'BunJS',
            icon: 'logos:bun',
            level: 'Novice',
            category: 'backend',
            favorite: false,
            description: lang === 'ar'
              ? 'BunJS بيئة تشغيل وأدوات جافاسكربت عالية الأداء لتطوير الويب الحديث. توفّر أوقات بدء سريعة، وتجميعًا أصليًا، وإدارة حزم. تهدف BunJS إلى تبسيط سير العمل وتحسين الكفاءة لمشاريع جافاسكربت.'
              : 'BunJS is a high-performance JavaScript runtime and toolkit for modern web development. It offers fast startup times, native bundling, and package management. BunJS aims to streamline development workflows and improve efficiency for JavaScript projects.',
            slug: 'bunjs',
            link: 'https://bun.sh/',
          },
          {
            name: 'EJS',
            icon: 'simple-icons:ejs',
            level: 'Beginner',
            category: 'backend',
            favorite: false,
            description: lang === 'ar'
              ? 'EJS محرك قوالب جافاسكربت مضمّن لتوليد HTML ديناميكي. يسمح بحقن البيانات والمنطق مباشرة في القوالب. EJS خفيف وسهل الدمج ومناسب للتصيير على الخادم في تطبيقات Node.js.'
              : 'EJS is an embedded JavaScript templating engine for dynamic HTML generation. It allows developers to inject data and logic directly into templates. EJS is lightweight, easy to integrate, and suitable for server-side rendering in Node.js applications.',
            slug: 'ejs',
            link: 'https://ejs.co/',
          },
          {
            name: 'NestJS',
            icon: 'logos:nestjs',
            level: 'Beginner',
            category: 'backend',
            favorite: false,
            description: lang === 'ar'
              ? 'NestJS إطار Node.js تقدّمي لبناء تطبيقات خادم فعّالة وقابلة للتوسّع. يستفيد من تايب سكربت ومعمارية معيارية مستوحاة من Angular. يدعم الحقن التبعي والاختبار والتكامل مع مكتبات وقواعد بيانات متنوعة.'
              : 'NestJS is a progressive Node.js framework for building efficient, scalable server-side applications. It leverages TypeScript and modular architecture inspired by Angular. NestJS supports dependency injection, testing, and integration with various libraries and databases.',
            slug: 'nestjs',
            link: 'https://nestjs.com/',
          },
          {
            name: 'PostgreSQL',
            icon: 'logos:postgresql',
            level: 'Beginner',
            category: 'database',
            favorite: false,
            description: lang === 'ar'
              ? 'PostgreSQL قاعدة بيانات علائقية مفتوحة المصدر وموثوقة بميزات متقدمة واعتمادية. تدعم استعلامات معقدة، والامتثال لمبادئ ACID، وقابلية التوسعة عبر الدوال المخصصة. تُعتمد PostgreSQL للتطبيقات الحرجة وسلامة البيانات.'
              : 'PostgreSQL is a robust open-source relational database with advanced features and reliability. It supports complex queries, ACID compliance, and extensibility through custom functions. PostgreSQL is trusted for mission-critical applications and data integrity.',
            slug: 'postgresql',
            link: 'https://www.postgresql.org/',
          },
          {
            name: 'Prisma',
            icon: 'simple-icons:prisma',
            level: 'Beginner',
            category: 'database',
            favorite: false,
            description: lang === 'ar'
              ? 'Prisma ORM آمن النوعية لـ Node.js وTypeScript، يسهّل سير عمل قواعد البيانات. يوفّر نمذجة مخطط بديهية، وهجرات، وبناء استعلامات. يعزّز إنتاجية المطوّر ويضمن الاتساق عبر العمليات.'
              : 'Prisma is a type-safe ORM for Node.js and TypeScript, streamlining database workflows. It provides intuitive schema modeling, migrations, and query building. Prisma enhances developer productivity and ensures consistency across database operations.',
            slug: 'prisma',
            link: 'https://www.prisma.io/',
          },
          {
            name: 'React Router',
            icon: 'logos:react-router',
            level: 'Intermediate',
            category: 'frontend',
            favorite: false,
            description: lang === 'ar'
              ? 'React Router مكتبة توجيه قوية لتطبيقات React، تمكّن التنقل الديناميكي وتصيير المكوّنات بناءً على المسارات. تدعم المسارات المتداخلة والمعاملات والتوجيه التصريحي، ما يجعلها أساسية لتطبيقات الصفحة الواحدة ذات الاحتياجات المعقدة.'
              : 'React Router is a powerful routing library for React applications, enabling dynamic navigation and rendering of components based on URL paths. It supports nested routes, route parameters, and declarative navigation, making it essential for building single-page applications with complex routing needs.',
            slug: 'react-router',
            link: 'https://reactrouter.com/',
          },
          {
            name: 'Docker',
            icon: 'logos:docker-icon',
            level: 'Intermediate',
            category: 'tools',
            favorite: false,
            description: lang === 'ar'
              ? 'Docker منصة حاويات لتوزيع التطبيقات بشكل متسق وقابل للتوسّع. تمكّن من تجميع التطبيقات مع التبعيات للنقل عبر البيئات. تبسّط Docker سير عمل DevOps وخطوط CI/CD وبنية الميكروسيرفس.'
              : 'Docker is a containerization platform for consistent, scalable application deployment. It enables packaging applications with dependencies for portability across environments. Docker simplifies DevOps workflows, CI/CD pipelines, and microservices architecture.',
            slug: 'docker',
            link: 'https://www.docker.com/',
          },
          {
            name: 'Netlify',
            icon: 'logos:netlify-icon',
            level: 'Intermediate',
            category: 'deployment',
            favorite: false,
            description: lang === 'ar'
              ? 'Netlify منصة حديثة لنشر واستضافة وأتمتة المواقع الساكنة وتطبيقات الويب. توفّر نشرًا مستمرًا، ودوال خالية من الخادم، واسترجاعًا فوريًا. تبسّط Netlify سير عمل التطوير لفرق الواجهة الأمامية.'
              : 'Netlify is a modern platform for deploying, hosting, and automating static sites and web apps. It provides continuous deployment, serverless functions, and instant rollbacks. Netlify streamlines the development workflow for frontend teams.',
            slug: 'netlify',
            link: 'https://www.netlify.com/',
          },
          {
            name: 'Vite',
            icon: 'logos:vitejs',
            level: 'Intermediate',
            category: 'tools',
            favorite: false,
            description: lang === 'ar'
              ? 'Vite أداة بناء فائقة السرعة لتطوير الويب الحديث. توفّر بدء خادم فوري، واستبدال وحدات ساخن، وتجميعًا محسّنًا. تعزّز Vite الإنتاجية وتسرّع دورات التطوير لمشاريع الواجهة الأمامية.'
              : 'Vite is a lightning-fast build tool for modern web development workflows. It features instant server start, hot module replacement, and optimized bundling. Vite enhances productivity and speeds up development cycles for frontend projects.',
            slug: 'vite',
            link: 'https://vitejs.dev/',
          },
          {
            name: 'Postman',
            icon: 'logos:postman-icon',
            level: 'Intermediate',
            category: 'tools',
            favorite: false,
            description: lang === 'ar'
              ? 'Postman أداة شاملة لتصميم واختبار وتوثيق واجهات API. تدعم الاختبار الآلي، وإدارة البيئات، والتعاون. تبسّط Postman تطوير واجهات API وتضمن تكاملًا موثوقًا بين الخدمات.'
              : 'Postman is a comprehensive tool for designing, testing, and documenting APIs. It supports automated testing, environment management, and collaboration. Postman simplifies API development and ensures reliable integrations across services.',
            slug: 'postman',
            link: 'https://www.postman.com/',
          },
          {
            name: 'DecapCMS',
            icon: 'simple-icons:decapcms',
            level: 'Intermediate',
            category: 'cms',
            favorite: false,
            description: lang === 'ar'
              ? 'DecapCMS نظام إدارة محتوى مفتوح المصدر للنشر السلس. يوفّر واجهة سهلة الاستخدام لتحرير وإدارة المحتوى. يندمج مع منشئي المواقع الساكنة ويدعم سير عمل مرن.'
              : 'DecapCMS is an open-source content management system for streamlined publishing. It provides a user-friendly interface for editing and managing content. DecapCMS integrates with static site generators and supports flexible workflows.',
            slug: 'decapcms',
            link: 'https://decapcms.org/',
          },
          {
            name: 'Markdown',
            icon: 'simple-icons:markdown',
            level: 'Advanced',
            category: 'markup',
            favorite: false,
            description: lang === 'ar'
              ? 'Markdown لغة ترميز خفيفة الوزن لتنسيق النص بسهولة ووضوح. تمكّن من التوثيق السريع وتدوين الملاحظات وإنشاء المحتوى بصياغة بسيطة. تُستخدم Markdown على نطاق واسع لملفات README والمدونات والكتابة التقنية.'
              : 'Markdown is a lightweight markup language for easy and readable text formatting. It enables rapid documentation, note-taking, and content creation with simple syntax. Markdown is widely used for README files, blogs, and technical writing.',
            slug: 'markdown',
            link: 'https://www.markdownguide.org/',
          },
          {
            name: 'MDX',
            icon: 'simple-icons:mdx',
            level: 'Intermediate',
            category: 'markup',
            favorite: false,
            description: lang === 'ar'
              ? 'MDX صيغة Markdown معزّزة بمكوّنات JSX مضمّنة لمحتوى ديناميكي. تتيح الجمع بين markdown ومكوّنات React التفاعلية. مثالية للتوثيق والمدونات وتطبيقات الويب المعتمدة على المحتوى.'
              : 'MDX is a Markdown format enhanced with embedded JSX components for dynamic content. It allows developers to combine markdown with interactive React components. MDX is ideal for documentation, blogs, and content-driven web applications.',
            slug: 'mdx',
            link: 'https://mdxjs.com/',
          },
          {
            name: 'Porkbun',
            icon: 'simple-icons:porkbun',
            level: 'Intermediate',
            category: 'dns',
            favorite: false,
            description: lang === 'ar'
              ? 'Porkbun مسجّل نطاقات معروف بأسعاره المعقولة وإدارة سهلة وخدمات DNS موثوقة. يوفّر نقل نطاقات سهلًا وشهادات SSL وحماية الخصوصية، ما يجعله خيارًا شائعًا للمطورين والشركات.'
              : 'Porkbun is a domain registrar known for affordable pricing, user-friendly management, and reliable DNS services. It offers easy domain transfers, SSL certificates, and privacy protection, making it a popular choice for developers and businesses.',
            slug: 'porkbun',
            link: 'https://porkbun.com/',
          },
          {
            name: 'Namecheap',
            icon: 'logos:namecheap',
            level: 'Intermediate',
            category: 'dns',
            favorite: false,
            description: lang === 'ar'
              ? 'Namecheap مسجّل نطاقات ومزوّد DNS رائد يقدّم أسعارًا تنافسية وأمانًا قويًا وأدوات إدارة بديهية. يدعم تسجيل النطاقات وشهادات SSL واستضافة DNS للأفراد والمؤسسات.'
              : 'Namecheap is a leading domain registrar and DNS provider offering competitive pricing, robust security, and intuitive management tools. It supports domain registration, SSL certificates, and DNS hosting for individuals and organizations.',
            slug: 'namecheap',
            link: 'https://www.namecheap.com/',
          },
          {
            name: 'OctoDNS',
            icon: 'logos:octodns',
            level: 'Intermediate',
            category: 'tools',
            favorite: false,
            description: lang === 'ar'
              ? 'OctoDNS أداة بنية تحتية ككود لإدارة إعدادات DNS بكفاءة. تدعم مزوّدين متعددين، والتحكم بالإصدارات، والنشر الآلي. تبسّط OctoDNS إدارة DNS لبيئات سحابية متعددة ومعقدة.'
              : 'OctoDNS is an infrastructure-as-code tool for managing DNS configurations efficiently. It supports multiple providers, version control, and automated deployments. OctoDNS streamlines DNS management for complex, multi-cloud environments.',
            slug: 'octodns',
            link: 'https://github.com/octodns/octodns',
          },
        ],
      },
    },

    // ========================
    // Copyright
    // ========================

    COPYRIGHT_CONFIG: {
      year: new Date().getFullYear(),
      holder: t('site.name'),
      statement: t('copyright.statement')
        .replace('{year}', new Date().getFullYear().toString())
        .replace('{name}', t('site.name')),
      blogStatement: t('copyright.blogStatement')
        .replace('{year}', new Date().getFullYear().toString())
        .replace('{name}', t('site.name')),
    },

    // ========================
    // Bio Configuration
    // ========================

    BIO_CONFIG: {
      title: t('bio.title'),
      subtitle: t('bio.subtitle'),
      description: t('bio.description'),
      avatar: { src: '/avatar.jpg', alt: t('site.name'), size: 144 },
      links: [
        { title: t('bio.links.website'), url: '/', icon: '🌐' },
        { title: t('bio.links.github'), url: 'https://github.com/saif-abdelrazek', icon: '💻' },
        { title: t('bio.links.linkedin'), url: 'https://linkedin.com/in/saifabdelrazek', icon: '💼' },
        { title: t('bio.links.email'), url: 'mailto:saif@saifabdelrazek.com', icon: '📧' },
      ],
    },
  } as const;
}


// ========================
// Static Constants for Build-time Usage (Astro Config)
// ========================

export const SITE_CONFIG = {
  name: 'Saif Abdelrazek',
  title: 'Saif Abdelrazek | Website',
  shortName: 'Saif Abdelrazek | Website',
  description: 'Personal website of Saif Abdelrazek || Not just a website',
  keywords: 'Saif Abdelrazek, Saif, Abdelrazek, Saif Dev, Saif Developer, Portfolio, Website, Blog',
  tagline: 'Full Stack Developer & Tech Enthusiast',
  subtitle: 'Full Stack Developer & HighSchooler',
  author: 'Saif Abdelrazek',
  email: 'saif@saifabdelrazek.com',
  location: 'Gharbiya, Egypt',
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
  defaultLanguage: 'en' as const,
  siteUrl: 'https://saifabdelrazek.com',
} as const;

// ========================
// Static Configuration (Language Independent)
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
  website: 'https://saifabdelrazek.com',
} as const;

export const COPYRIGHT_CONFIG = {
  owner: 'Saif Abdelrazek',
  startYear: 2025,
  website: 'https://saifabdelrazek.com',
  statement: {
    en: 'All rights reserved',
    ar: 'جميع الحقوق محفوظة'
  }
} as const;

export const REPOSITORY_LINKS = {
  site: 'https://github.com/saif-abdelrazek/site',
  saifApi: 'https://github.com/saif-abdelrazek/saifapi',
  saifMarks: 'https://github.com/saif-abdelrazek/saifmarks',
  saifUrls: 'https://github.com/saif-abdelrazek/saifurl',
} as const;

export const PWA_CONFIG = {
  name: 'Saif Abdelrazek | Website',
  shortName: 'Saif Abdelrazek | Website',
  description: 'Personal website of Saif Abdelrazek || Not just a website',
  startUrl: '/',
  scope: '/',
  display: 'standalone',
  orientation: 'portrait',
  backgroundColor: '#f8fafc',
  themeColor: '#186faf',
  language: 'en',
  icons: {
    faviconSvg: '/favicon.svg',
    faviconIco: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  manifestIcons: [
    { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    { src: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
    { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
  ],
} as const;

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

export const SEARCH_CONFIG = {
  collections: ['posts'],
  fields: ['title', 'description', 'content'],
  indexPath: '/collection-search/minisearch-index.json',
  workerPath: '/collection-search/minisearch-worker.mjs',
} as const;

export const ANALYTICS_CONFIG = {
  speedInsights: true,
  vercelAnalytics: true,
  domain: SITE_URLS.main,
} as const;

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

export const THEME_CONFIG = {
  default: 'dark',
  storageKey: 'theme',
  classes: { light: 'light', dark: 'dark' },
  transitions: 'transition-colors duration-300',
} as const;

export const ROBOTS_CONFIG = {
  userAgent: '*',
  allow: '/',
  sitemapPath: 'sitemap-index.xml',
} as const;