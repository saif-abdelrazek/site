// ========================
// PERSONAL INFORMATION
// ========================

export const LANGUAGE_DIRECTION = "ltr";

export const SITE_CONFIG = {
  name: 'Saif Abdelrazek',
  title: 'Saif Abdelrazek | Website',
  shortName: 'Saif Abdelrazek | Website',
  description: 'Personal website of Saif Abdelrazek || Not just a website',
  keywords: 'Saif Abdelrazek, Saif, Abdelrazek, Saif Dev, Saif Developer, Abdelrazek Portfolio, Saif Portfolio, Saif Dev Portfolio, Saif Abdelrazek Portfolio, Saif Abdelrazek Website, Saif Dev Website, Saif Abdelrazek Blog, Saif Dev Blog, Saif Blog, Saif Amr, Saif Amr Samy',
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
// SITE URLS & LINKS
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
// NAVIGATION & ROUTES
// ========================

export const NAV_ITEMS = [
  { label: 'Blog', href: '/blog', icon: 'blog' },
  { label: 'Repos', href: '/repos', icon: 'github' },
  { label: 'Now', href: '/now', icon: 'clock' },
  { label: 'Contact', href: '/contact', icon: 'envelope' },
] as const;

export const REDIRECTS = {
  projects: '/#projects',
  technologies: '/#technologies',
  about: '/#about',
  post: '/blog',
  posts: '/blog',
  edu: '/education',
  github: SOCIAL_LINKS.github,
  linkedin: SOCIAL_LINKS.linkedin,
} as const;

// ========================
// PAGE TITLES & DESCRIPTIONS
// ========================

export const PAGE_TITLES = {
  home: 'Saif Abdelrazek | Website',
  blog: 'Saif Abdelrazek | Blog',
  blogPage: 'Saif Abdelrazek\'s Blog',
  repos: 'Saif Abdelrazek | Repositories',
  tech: 'Saif Abdelrazek | Technologies & Tools',
  contact: 'Saif Abdelrazek | Contact',
  biolink: 'Saif Abdelrazek | BioLink Tree',
  now: 'Saif Abdelrazek | Now Page',
  notFound: '404: Lost in Space | Saif Abdelrazek',
  rss: 'Saif Abdelrazek Blog',
} as const;

export const PAGE_DESCRIPTIONS = {
  home: 'Saif Abelrazek – Full Stack Developer. High School Student. Explore my portfolio, blog, projects, and more.',
  blog: 'Saif Abdelrazek\'s blog featuring articles on technology, programming, and personal insights.',
  blogPage: 'Latest articles and updates from Saif Abdelrazek.',
  repos: 'Saif Abdelrazek\'s repositories on GitHub and coding stats, showcasing latest projects and contributions.',
  tech: 'Saif Abdelrazek\'s technology stack, showcasing programming languages, frameworks, tools, and more.',
  contact: 'Saif Abdelrazek\'s contact page for inquiries and feedback. Get in touch via email or social media.',
  biolink: 'Saif Abdelrazek\'s personal biolink page, showcasing social links and contact information.',
  now: 'Saif Abdelrazek\'s current focus and projects.',
  rss: 'Personal blog of Saif Abdelrazek',
} as const;

// ========================
// BLOG CONFIGURATION
// ========================

export const BLOG_CONFIG = {
  title: "Saif Abdelrazek's Blog",
  postsPerPage: 6,
  recentPostsCount: 3,
  featuredPostsCount: 3,
  rssTitle: PAGE_TITLES.rss,
  rssDescription: PAGE_DESCRIPTIONS.rss,
  rssPath: '/blog/rss.xml',
  feedTitle: 'Saif Abdelrazek Blog RSS Feed',
  categories: [
    'Web Development',
    'JavaScript',
    'React',
    'TypeScript',
    'Tutorial',
    'Career',
    'Tools',
    'Performance',
    'Welcome',
  ],
  defaultImage: '/images/blog-default.jpg',
  defaultAuthor: SITE_CONFIG.author,
} as const;

// ========================
// PROJECTS CONFIGURATION
// ========================

export const PROJECTS_CONFIG = {
  featuredCount: 6,
  categories: [
    'Web Application',
    'E-commerce',
    'Portfolio',
    'Dashboard',
    'API',
    'Mobile App',
    'Open Source',
    'Client Work',
    'Backend Development',
    'Full Stack Development',
    'Portfolio Website',
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
  statuses: ['completed', 'in-progress', 'planning', 'archived'] as const,
} as const;

// ========================
// EDUCATION CONFIGURATION
// ========================

export const EDUCATION_CONFIG = {
  types: ['Formal Education', 'Self Learning', 'Others'] as const,
  categories: ['education'],
  institutions: {
    elzero: 'Elzero Web School',
    jonas: 'Jonas Schmedtmann (Udemy)',
    jsm: 'JavaScript Mastery (YouTube)',
    safir: 'Safir El Tafawok',
    sibirbai: 'Sibirbai Language School',
    stem: 'Gharbiya STEM High School',
  },
} as const;

// ========================
// CONTACT CONFIGURATION
// ========================

export const CONTACT_CONFIG = {
  emailService: {
    host: 'smtp.zoho.com',
    port: 587,
  },
  replyTo: SITE_CONFIG.email,
  fromName: 'Your Site Contact Form',
  senderName: SITE_CONFIG.name,
  successMessage: 'Thank you for contacting us!',
  errorMessage: 'Error sending message. Please try again.',
  automatedFooter: `— Automated Notification from ${SITE_URLS.main.replace('https://', '')}`,
  responseTime: 'Usually responds within 24 hours',
  availability: 'Available for freelance projects',
} as const;

// ========================
// EMAIL TEMPLATES
// ========================

export const EMAIL_TEMPLATES = {
  subjects: {
    contact: (subject: string) => `New Contact Form Submission: ${subject}`,
    confirmation: (name: string) => `Thank you for contacting us, ${name}!`,
  },
  signatures: {
    light: `Best regards,<br>${SITE_CONFIG.name}`,
    dark: `Best regards,<br>${SITE_CONFIG.name}`,
  },
} as const;

// ========================
// PWA CONFIGURATION
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
  language: 'en',
  icons: {
    favicon96: '/favicon-96x96.png',
    faviconSvg: '/favicon.svg',
    faviconIco: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  manifestIcons: [
    {
      src: '/favicon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
    },
    {
      src: '/favicon.svg',
      sizes: 'any',
      type: 'image/svg+xml',
    },
    {
      src: '/favicon.ico',
      sizes: '48x48 32x32 16x16',
      type: 'image/x-icon',
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'any',
    },
  ],
} as const;

// ========================
// API CONFIGURATION
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
// SEARCH CONFIGURATION
// ========================

export const SEARCH_CONFIG = {
  collections: ['posts'],
  fields: ['title', 'description', 'content'],
  indexPath: '/collection-search/minisearch-index.json',
  workerPath: '/collection-search/minisearch-worker.mjs',
} as const;

// ========================
// ANALYTICS & MONITORING
// ========================

export const ANALYTICS_CONFIG = {
  speedInsights: true,
  vercelAnalytics: true,
  domain: SITE_URLS.main,
} as const;

// ========================
// UI/UX CONSTANTS
// ========================

export const UI_CONFIG = {
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  spacing: {
    section: 'py-20',
    container: 'mx-auto max-w-6xl px-4',
  },
  colors: {
    primary: {
      light: '#186faf',
      dark: '#0ea5e9',
    },
    background: {
      light: '#f8fafc',
      dark: '#0f172a',
    },
  },
} as const;

// ========================
// THEME CONFIGURATION
// ========================

export const THEME_CONFIG = {
  default: 'dark',
  storageKey: 'theme',
  classes: {
    light: 'light',
    dark: 'dark',
  },
  transitions: 'transition-colors duration-300',
} as const;

// ========================
// ERROR MESSAGES
// ========================

export const ERROR_MESSAGES = {
  notFound: {
    title: 'Lost in Space',
    message: 'Houston, we have a problem! This page seems to have drifted away into the digital void.',
    action: 'Take me back to Earth',
  },
  contact: {
    noData: 'No data provided',
    invalidBody: 'Invalid request body',
    missingEmail: 'Email configuration is not set. Please check your environment variables.',
    sendError: 'Error sending email',
  },
  general: {
    somethingWrong: 'Something went wrong',
    tryAgain: 'Please try again later',
  },
  // Contact form specific errors
  emailConfigNotSet: 'Email configuration is not set. Please check your environment variables.',
  invalidRequestBody: 'Invalid request body',
  nameRequired: 'Name is required',
  invalidEmail: 'Invalid email address',
  subjectRequired: 'Subject is required',
  messageMinLength: 'Message must be at least 50 characters long',
} as const;

// ========================
// SUCCESS MESSAGES
// ========================

export const SUCCESS_MESSAGES = {
  contact: {
    sent: 'Message sent successfully!',
    willReply: 'Thank you for your message. I will get back to you soon.',
  },
  emailSent: 'Email sent successfully',
} as const;

// ========================
// PORTFOLIO CONTENT
// ========================

export const PORTFOLIO_CONTENT = {
  hero: {
    title: 'Saif Abdelrazek',
    subtitle: 'Full Stack Developer & HighSchooler',
    description: 'Building modern web apps, APIs, and tools. Passionate about open source, and sharing knowledge.',
    image: '/src/assets/profile.jpg',
  },
  about: {
    title: 'About Me',
    fullName: 'Saif Amr Samy Abdelrazek',
    image: '/src/assets/about.jpg',
    content: `I am Saif Abdelrazek, a passionate high schooler, fullstack developer, instructor, and problem-solver dedicated to building modern web experiences and tackling real-world challenges. My toolkit includes HTML5, JavaScript, TypeScript, React, Astro, Next.js, Node.js, Express.js, NestJS, EJS, BunJS, MongoDB, PostgreSQL, Prisma, Docker, Linux, VS Code, NPM, Git, GitHub, Cloudflare, Netlify, Vercel, Vite, Postman, DecapCMS, OctoDNS, and even Tailwind CSS and CSS3 (though I'm a self-proclaimed "Hater" of those last two!). I enjoy leading teams, innovating for a better world, and turning ideas into impactful digital experiences. Whether I'm teaching STEM, volunteering, or competing in global tech challenges, I believe technology and education go hand in hand in shaping a better future.`,
  },
  technologies: {
    title: 'Technologies & Tools',
    description: 'Explore a comprehensive list of technologies and tools I use for web development, backend services, databases, deployment, and productivity. Each entry highlights my proficiency level, from novice to expert, across modern frameworks, languages, platforms, and utilities.',
    items: [
      {
        name: 'HTML5',
        icon: 'logos:html-5',
        level: 'Expert',
        category: 'language',
        favorite: false,
        description: 'HTML5 is the foundational markup language for the web, enabling the creation of structured, accessible, and semantic web pages. It introduces new elements and APIs for multimedia, graphics, and offline capabilities. Its versatility ensures compatibility across devices and platforms, making it essential for modern web development.',
        slug: 'html5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        name: 'JavaScript',
        icon: 'logos:javascript',
        level: 'Expert',
        category: 'language',
        favorite: false,
        description: 'JavaScript is a dynamic scripting language that powers interactive and responsive web experiences. It enables client-side logic, DOM manipulation, and asynchronous operations for rich user interfaces. With its vast ecosystem, JavaScript is indispensable for both frontend and backend development.',
        slug: 'javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'TypeScript',
        icon: 'logos:typescript-icon',
        level: 'Advanced',
        category: 'language',
        favorite: true,
        description: 'TypeScript is a strongly typed superset of JavaScript, designed for building scalable and maintainable codebases. It adds static typing, interfaces, and advanced tooling for improved developer productivity. TypeScript helps catch errors early and facilitates large-scale application development.',
        slug: 'typescript',
        link: 'https://www.typescriptlang.org/',
      },
      {
        name: 'React',
        icon: 'logos:react',
        level: 'Advanced',
        category: 'frontend',
        favorite: false,
        description: 'React is a component-based library for building fast, interactive user interfaces. It leverages a virtual DOM for efficient rendering and state management. React\'s modular architecture and ecosystem support the development of complex, reusable UI components.',
        slug: 'react',
        link: 'https://react.dev/',
      },
      {
        name: 'Astro',
        icon: 'logos:astro-icon',
        level: 'Intermediate',
        category: 'frontend',
        favorite: true,
        description: 'Astro is a modern static site builder focused on speed and optimized web delivery. It enables developers to use multiple frameworks and ship zero JavaScript by default. Astro\'s architecture is ideal for building fast, content-driven websites with minimal overhead.',
        slug: 'astro',
        link: 'https://astro.build/',
      },
      {
        name: 'Next.js',
        icon: 'logos:nextjs-icon',
        level: 'novice',
        category: 'frontend',
        favorite: false,
        description: 'Next.js is a React framework for server-side rendering, static generation, and seamless routing. It simplifies building performant web applications with built-in API routes and image optimization. Next.js supports incremental static regeneration and hybrid rendering strategies.',
        slug: 'nextjs',
        link: 'https://nextjs.org/',
      },
      {
        name: 'Node.js',
        icon: 'logos:nodejs-icon',
        level: 'Intermediate',
        category: 'backend',
        favorite: false,
        description: 'Node.js is a JavaScript runtime for building scalable backend services and APIs. It uses an event-driven, non-blocking I/O model for high performance. Node.js powers real-time applications and microservices, making it a popular choice for server-side development.',
        slug: 'nodejs',
        link: 'https://nodejs.org/',
      },
      {
        name: 'Express.js',
        icon: 'simple-icons:express',
        level: 'Intermediate',
        category: 'backend',
        favorite: true,
        description: 'Express.js is a minimalist web framework for Node.js, ideal for RESTful APIs and microservices. It provides robust routing, middleware support, and extensibility for rapid backend development. Express.js is widely adopted for its simplicity and flexibility.',
        slug: 'expressjs',
        link: 'https://expressjs.com/',
      },
      {
        name: 'NestJS',
        icon: 'logos:nestjs',
        level: 'Beginner',
        category: 'backend',
        favorite: false,
        description: 'NestJS is a progressive Node.js framework for building efficient, scalable server-side applications. It leverages TypeScript and modular architecture inspired by Angular. NestJS supports dependency injection, testing, and integration with various libraries and databases.',
        slug: 'nestjs',
        link: 'https://nestjs.com/',
      },
      {
        name: 'EJS',
        icon: 'simple-icons:ejs',
        level: 'Beginner',
        category: 'backend',
        favorite: false,
        description: 'EJS is an embedded JavaScript templating engine for dynamic HTML generation. It allows developers to inject data and logic directly into templates. EJS is lightweight, easy to integrate, and suitable for server-side rendering in Node.js applications.',
        slug: 'ejs',
        link: 'https://ejs.co/',
      },
      {
        name: 'BunJS',
        icon: 'logos:bun',
        level: 'Novice',
        category: 'backend',
        favorite: false,
        description: 'BunJS is a high-performance JavaScript runtime and toolkit for modern web development. It offers fast startup times, native bundling, and package management. BunJS aims to streamline development workflows and improve efficiency for JavaScript projects.',
        slug: 'bunjs',
        link: 'https://bun.sh/',
      },
      {
        name: 'MongoDB',
        icon: 'logos:mongodb-icon',
        level: 'Intermediate',
        category: 'database',
        favorite: true,
        description: 'MongoDB is a flexible NoSQL database for storing and querying JSON-like documents. It supports horizontal scaling, high availability, and rich querying capabilities. MongoDB is well-suited for applications requiring rapid development and schema flexibility.',
        slug: 'mongodb',
        link: 'https://www.mongodb.com/',
      },
      {
        name: 'PostgreSQL',
        icon: 'logos:postgresql',
        level: 'Beginner',
        category: 'database',
        favorite: false,
        description: 'PostgreSQL is a robust open-source relational database with advanced features and reliability. It supports complex queries, ACID compliance, and extensibility through custom functions. PostgreSQL is trusted for mission-critical applications and data integrity.',
        slug: 'postgresql',
        link: 'https://www.postgresql.org/',
      },
      {
        name: 'Prisma',
        icon: 'simple-icons:prisma',
        level: 'Beginner',
        category: 'database',
        favorite: false,
        description: 'Prisma is a type-safe ORM for Node.js and TypeScript, streamlining database workflows. It provides intuitive schema modeling, migrations, and query building. Prisma enhances developer productivity and ensures consistency across database operations.',
        slug: 'prisma',
        link: 'https://www.prisma.io/',
      },
      {
        name: 'React Router',
        icon: 'logos:react-router',
        level: 'Intermediate',
        category: 'frontend',
        favorite: false,
        description: 'React Router is a powerful routing library for React applications, enabling dynamic navigation and rendering of components based on URL paths. It supports nested routes, route parameters, and declarative navigation, making it essential for building single-page applications with complex routing needs.',
        slug: 'react-router',
        link: 'https://reactrouter.com/',
      },
      {
        name: 'Docker',
        icon: 'logos:docker-icon',
        level: 'Intermediate',
        category: 'tool',
        favorite: false,
        description: 'Docker is a containerization platform for consistent, scalable application deployment. It enables packaging applications with dependencies for portability across environments. Docker simplifies DevOps workflows, CI/CD pipelines, and microservices architecture.',
        slug: 'docker',
        link: 'https://www.docker.com/',
      },
      {
        name: 'Linux',
        icon: 'logos:linux-tux',
        level: 'Intermediate',
        category: 'os',
        favorite: true,
        description: 'Linux is a stable, open-source operating system for development and server environments. It offers robust security, flexibility, and a rich ecosystem of tools. Linux powers cloud infrastructure, web servers, and embedded systems worldwide.',
        slug: 'linux',
        link: 'https://www.linux.org/',
      },
      {
        name: 'VS Code',
        icon: 'logos:visual-studio-code',
        level: 'Expert',
        category: 'code editor',
        favorite: true,
        description: 'VS Code is a feature-rich code editor',
        slug: 'vs-code',
        link: 'https://code.visualstudio.com/',
      },
      {
        name: 'Netlify',
        icon: 'logos:netlify-icon',
        level: 'Intermediate',
        category: 'deployment',
        favorite: false,
        description: 'Netlify is a modern platform for deploying, hosting, and automating static sites and web apps. It provides continuous deployment, serverless functions, and instant rollbacks. Netlify streamlines the development workflow for frontend teams.',
        slug: 'netlify',
        link: 'https://www.netlify.com/',
      },
      {
        name: 'Vercel',
        icon: 'simple-icons:vercel',
        level: 'Intermediate',
        category: 'deployment',
        favorite: true,
        description: 'Vercel is a cloud platform for deploying frontend frameworks and static websites with ease. It offers instant previews, global CDN, and seamless integration with Git. Vercel is optimized for performance and developer experience.',
        slug: 'vercel',
        link: 'https://vercel.com/',
      },
      {
        name: 'Vite',
        icon: 'logos:vitejs',
        level: 'Intermediate',
        category: 'tool',
        favorite: false,
        description: 'Vite is a lightning-fast build tool for modern web development workflows. It features instant server start, hot module replacement, and optimized bundling. Vite enhances productivity and speeds up development cycles for frontend projects.',
        slug: 'vite',
        link: 'https://vitejs.dev/',
      },
      {
        name: 'Postman',
        icon: 'logos:postman-icon',
        level: 'Intermediate',
        category: 'tool',
        favorite: false,
        description: 'Postman is a comprehensive tool for designing, testing, and documenting APIs. It supports automated testing, environment management, and collaboration. Postman simplifies API development and ensures reliable integrations across services.',
        slug: 'postman',
        link: 'https://www.postman.com/',
      },
      {
        name: 'DecapCMS',
        icon: 'simple-icons:decapcms',
        level: 'Intermediate',
        category: 'cms',
        favorite: false,
        description: 'DecapCMS is an open-source content management system for streamlined publishing. It provides a user-friendly interface for editing and managing content. DecapCMS integrates with static site generators and supports flexible workflows.',
        slug: 'decapcms',
        link: 'https://decapcms.org/',
      },
      {
        name: 'Markdown',
        icon: 'simple-icons:markdown',
        level: 'Advanced',
        category: 'markup',
        favorite: false,
        description: 'Markdown is a lightweight markup language for easy and readable text formatting. It enables rapid documentation, note-taking, and content creation with simple syntax. Markdown is widely used for README files, blogs, and technical writing.',
        slug: 'markdown',
        link: 'https://www.markdownguide.org/',
      },
      {
        name: 'MDX',
        icon: 'simple-icons:mdx',
        level: 'Intermediate',
        category: 'markup',
        favorite: false,
        description: 'MDX is a Markdown format enhanced with embedded JSX components for dynamic content. It allows developers to combine markdown with interactive React components. MDX is ideal for documentation, blogs, and content-driven web applications.',
        slug: 'mdx',
        link: 'https://mdxjs.com/',
      },
      {
        name: 'Cloudflare',
        icon: 'logos:cloudflare-icon',
        level: 'Intermediate',
        category: 'dns',
        favorite: true,
        description: 'Cloudflare is a global network platform providing CDN, security, and performance optimization for websites and APIs. It offers DDoS protection, DNS management, and edge computing solutions to enhance reliability and speed. Cloudflare simplifies web infrastructure and improves user experience worldwide.',
        slug: 'cloudflare',
        link: 'https://www.cloudflare.com/',
      },
      {
        name: 'Porkbun',
        icon: 'simple-icons:porkbun',
        level: 'Intermediate',
        category: 'dns',
        favorite: false,
        description: 'Porkbun is a domain registrar known for affordable pricing, user-friendly management, and reliable DNS services. It offers easy domain transfers, SSL certificates, and privacy protection, making it a popular choice for developers and businesses.',
        slug: 'porkbun',
        link: 'https://porkbun.com/',
      },
      {
        name: 'Namecheap',
        icon: 'logos:namecheap',
        level: 'Intermediate',
        category: 'dns',
        favorite: false,
        description: 'Namecheap is a leading domain registrar and DNS provider offering competitive pricing, robust security, and intuitive management tools. It supports domain registration, SSL certificates, and DNS hosting for individuals and organizations.',
        slug: 'namecheap',
        link: 'https://www.namecheap.com/',
      },
      {
        name: 'OctoDNS',
        icon: 'logos:octodns',
        level: 'Intermediate',
        category: 'tool',
        favorite: false,
        description: 'OctoDNS is an infrastructure-as-code tool for managing DNS configurations efficiently. It supports multiple providers, version control, and automated deployments. OctoDNS streamlines DNS management for complex, multi-cloud environments.',
        slug: 'octodns',
        link: 'https://github.com/octodns/octodns',
      },
      {
        name: 'Tailwind',
        icon: 'logos:tailwindcss-icon',
        level: 'Intermediate',
        category: 'css framework',
        favorite: true,
        description: 'Tailwind is a utility-first CSS framework for rapid and consistent UI development. It provides low-level utility classes for building custom designs without leaving HTML. Tailwind accelerates prototyping and enforces design consistency across projects.',
        slug: 'tailwind',
        link: 'https://tailwindcss.com/',
      },
      {
        name: 'CSS3',
        icon: 'logos:css-3',
        level: 'Advanced',
        category: 'language',
        favorite: false,
        description: 'CSS3 is a modern stylesheet language enabling responsive and visually appealing web design. It introduces new selectors, animations, and layout modules for enhanced user experiences. CSS3 is fundamental for crafting adaptive, engaging interfaces.',
        slug: 'css3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        name: 'Librewolf',
        icon: 'simple-icons:librewolf',
        level: 'Intermediate',
        category: 'browser',
        favorite: true,
        description: 'A custom and independent version of Firefox, with the primary goals of privacy, security and user freedom.',
        slug: 'librewolf',
        link: 'https://librewolf.net',
      },
    ],
  },
} as const;

// ========================
// COPYRIGHT & LEGAL
// ========================

export const COPYRIGHT_CONFIG = {
  year: new Date().getFullYear(),
  holder: SITE_CONFIG.name,
  statement: `© ${new Date().getFullYear()} ${SITE_CONFIG.name}. All rights reserved.`,
  blogStatement: `© ${new Date().getFullYear()} ${SITE_CONFIG.name} Blog. All rights reserved.`,
} as const;

// ========================
// BIO LINK CONFIGURATION
// ========================

export const BIO_CONFIG = {
  title: SITE_CONFIG.name,
  subtitle: 'Full Stack Developer & Tech Enthusiast',
  description: 'Building modern web experiences with code and creativity.',
  avatar: {
    src: '/avatar.jpg',
    alt: SITE_CONFIG.name,
    size: 144,
  },
  links: [
    {
      title: 'Portfolio Website',
      url: '/',
      icon: '🌐',
    },
    {
      title: 'GitHub',
      url: SOCIAL_LINKS.github,
      icon: '💻',
    },
    {
      title: 'LinkedIn',
      url: SOCIAL_LINKS.linkedin,
      icon: '💼',
    },
    {
      title: 'Email',
      url: SOCIAL_LINKS.email,
      icon: '📧',
    },
  ],
} as const;

// ========================
// ROBOTS.TXT CONFIGURATION
// ========================

export const ROBOTS_CONFIG = {
  userAgent: '*',
  allow: '/',
  sitemapPath: 'sitemap-index.xml',
} as const;