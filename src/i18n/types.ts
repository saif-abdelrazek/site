/**
 * Type-safe i18n translation keys interface
 * All translation keys must be defined here
 */
export interface I18nStrings {
  // Time units
  'stats.hrs': string;

  // Site Info
  'site.name': string;
  'site.title': string;
  'site.shortName': string;
  'site.description': string;
  'site.tagline': string;
  'site.subtitle': string;
  'site.author': string;
  'site.location': string;

  // Navigation
  'nav.blog': string;
  'nav.repos': string;
  'nav.now': string;
  'nav.contact': string;
  'nav.home': string;
  'nav.projects': string;
  'nav.education': string;
  'nav.tech': string;
  'nav.technologies': string;
  'nav.about': string;
  'nav.more': string;

  // Page titles
  'page.home.title': string;
  'page.home.viewProjects': string;
  'page.blog.title': string;
  'page.blogPage.title': string;
  'page.contact.title': string;
  'page.projects.title': string;
  'page.projects.header.subtitle': string;
  'page.projects.header.title': string;
  'page.projects.header.description': string;
  'page.projects.section.projects': string;
  'page.projects.section.repos': string;
  'page.projects.section.stats': string;
  'page.projects.stats.totalProjects': string;
  'page.projects.stats.totalRepos': string;
  'page.projects.stats.codingHours': string;
  'page.education.title': string;
  'page.education.header.subtitle': string;
  'page.education.header.title': string;
  'page.education.header.description': string;
  'page.tech.title': string;
  'page.tech.header.subtitle': string;
  'page.tech.header.title': string;
  'page.tech.header.description': string;
  'page.about.title': string;
  'page.repos.title': string;
  'page.now.title': string;
  'page.notFound.title': string;
  'page.error.title': string;
  'page.biolink.title': string;
  'page.rss.title': string;
  'page.a8k.title': string;

  // Page descriptions
  'page.home.description': string;
  'page.home.tagline': string;
  'page.home.contactMe': string;
  'page.blog.description': string;
  'page.blogPage.description': string;
  'page.contact.description': string;
  'page.projects.description': string;
  'page.education.description': string;
  'page.tech.description': string;
  'page.repos.description': string;
  'page.biolink.description': string;
  'page.now.description': string;
  'page.rss.description': string;
  'page.a8k.description': string;

  // Now page content
  'now.title': string;
  'now.lastUpdated': string;
  'now.studying.title': string;
  'now.studying.highschool': string;
  'now.asciiNote': string;
  'now.aboutNowPages': string;

  // Repos page content
  'repos.title': string;
  'repos.description': string;
  'repos.codingStats': string;
  'repos.lastHalfYear': string;
  'repos.totalCodingTime': string;
  'repos.dailyAverage': string;
  'repos.topLanguage': string;
  'repos.topLanguages': string;
  'repos.topProject': string;
  'repos.hackatimeUnavailable': string;
  'repos.noCodingStats': string;
  'repos.failedToLoad': string;
  'repos.noReposFound': string;

  // Blog Config
  'blog.title': string;
  'blog.feedTitle': string;
  'blog.categories.webDev': string;
  'blog.categories.javascript': string;
  'blog.categories.react': string;
  'blog.categories.typescript': string;
  'blog.categories.tutorial': string;
  'blog.categories.career': string;
  'blog.categories.tools': string;
  'blog.categories.performance': string;
  'blog.categories.welcome': string;

  // Projects Config
  'projects.categories.webApp': string;
  'projects.categories.ecommerce': string;
  'projects.categories.portfolio': string;
  'projects.categories.dashboard': string;
  'projects.categories.api': string;
  'projects.categories.mobileApp': string;
  'projects.categories.openSource': string;
  'projects.categories.clientWork': string;
  'projects.categories.backend': string;
  'projects.categories.fullStack': string;
  'projects.categories.portfolioSite': string;
  'projects.status.completed': string;
  'projects.status.inProgress': string;
  'projects.status.planning': string;
  'projects.status.archived': string;
  'projects.description': string;
  'projects.noProjects': string;
  'projects.moreProjects': string;

  // Education Config
  'education.types.formal': string;
  'education.types.selfLearning': string;
  'education.types.other': string;
  'education.description': string;
  'page.education.heroDescription': string;
  'education.noRecords': string;
  'education.moreEducation': string;
  'education.institutions.safir': string;
  'education.institutions.sibirbai': string;
  'education.institutions.stem': string;

  // Contact Config
  'contact.fromName': string;
  'contact.successMessage': string;
  'contact.errorMessage': string;
  'contact.responseTime': string;
  'contact.availability': string;

  // Email Templates
  'email.subjects.contact': string;
  'email.subjects.confirmation': string;
  'email.signatures.light': string;
  'email.signatures.dark': string;

  // Error Messages
  'error.contact.noData': string;
  'error.contact.invalidBody': string;
  'error.contact.missingEmail': string;
  'error.contact.sendError': string;
  'error.general.somethingWrong': string;
  'error.general.tryAgain': string;
  'error.emailConfigNotSet': string;
  'error.invalidRequestBody': string;
  'error.nameRequired': string;
  'error.invalidEmail': string;
  'error.subjectRequired': string;
  'error.messageMinLength': string;

  // Success Messages
  'success.contact.sent': string;
  'success.contact.willReply': string;
  'success.emailSent': string;

  // Portfolio Content
  'portfolio.hero.title': string;
  'portfolio.hero.subtitle': string;
  'portfolio.hero.description': string;
  'portfolio.about.title': string;
  'about.fullName': string;
  'portfolio.about.fullName': string;
  'portfolio.about.content': string;
  'portfolio.technologies.title': string;
  'portfolio.technologies.description': string;

  // Copyright
  'copyright.statement': string;
  'copyright.blogStatement': string;
  'copyright.allRightsReserved': string;

  // Bio Config
  'bio.title': string;
  'bio.subtitle': string;
  'bio.description': string;
  'bio.links.website': string;
  'bio.links.github': string;
  'bio.links.linkedin': string;
  'bio.links.email': string;

  // Section fallback messages
  'section.unavailable.home': string;
  'section.unavailable.about': string;
  'section.unavailable.technologies': string;
  'section.unavailable.projects': string;
  'section.unavailable.education': string;
  'section.unavailable.footer': string;

  // Common UI elements
  'ui.readMore': string;
  'ui.viewProject': string;
  'ui.viewDemo': string;
  'ui.sourceCode': string;
  'ui.backToTop': string;
  'ui.darkMode': string;
  'ui.lightMode': string;
  'ui.switchTheme': string;
  'ui.menu': string;
  'ui.close': string;
  'ui.loading': string;
  'ui.error': string;
  'ui.retry': string;
  'ui.learnmore': string;
  'ui.arrow': string;
  'ui.showMore': string;
  'ui.showLess': string;
  'ui.current': string;
  'ui.favorite': string;
  'ui.comingSoon': string;
  'ui.educationalInstitutions': string;
  'ui.momentsMilestones': string;
  'ui.officialSite': string;
  'ui.noMomentsYet': string;
  'ui.backToEducation': string;
  'page.tech.descriptionLong': string;
  'page.tech.heroDescription': string;
  'ui.technologies': string;
  'ui.technology': string;
  'ui.advancedPlus': string;
  'ui.favorites': string;
  'ui.institutions': string;
  'ui.moments': string;
  'ui.sections': string;
  'ui.project': string;
  'ui.projects': string;
  'ui.repository': string;
  'ui.repositories': string;
  'nav.formalEducation': string;
  'nav.selfLearning': string;
  'nav.languages': string;
  'nav.frontend': string;
  'nav.backend': string;
  'nav.databases': string;
  'nav.devops': string;
  'nav.tools': string;
  'nav.design': string;
  'education.formal.title': string;
  'education.formal.narrative': string;
  'education.selfLearning.title': string;
  'education.selfLearning.narrative': string;
  'tech.technologies': string;
  'tech.advancedPlus': string;

  // Blog
  'blog.readTime': string;
  'blog.publishedOn': string;
  'blog.by': string;
  'blog.tags': string;
  'blog.relatedPosts': string;
  'blog.allPosts': string;
  'blog.latestPosts': string;
  'blog.searchPlaceholder': string;
  'blog.noResults': string;
  'blog.author.posts': string;
  'blog.category': string;
  'blog.series': string;
  'blog.seriesParts': string;
  'blog.explore': string;
  'blog.article': string;
  'blog.articles': string;
  'blog.post': string;
  'blog.posts': string;
  'blog.about': string;
  'blog.of': string;
  'blog.parts': string;
  'blog.noPostsInCategory': string;
  'blog.comingSoon': string;
  'blog.status.completed': string;
  'blog.status.ongoing': string;
  'blog.status.planned': string;

  // Blog Categories
  'category.career': string;
  'category.technology': string;
  'category.web-development': string;
  'category.programming': string;
  'category.tutorial': string;

  // Contact form
  'contact.title': string;
  'contact.name': string;
  'contact.email': string;
  'contact.subject': string;
  'contact.message': string;
  'contact.send': string;
  'contact.sending': string;
  'contact.success': string;
  'contact.error': string;
  'contact.correctErrors': string;
  'contact.sendMessage': string;
  'contact.messagePlaceholder': string;
  'contact.minLength': string;
  'contact.tryAgain': string;
  'contact.cooldown': string;
  'contact.successFallback': string;
  'contact.formSaved': string;
  'contact.clearForm': string;
  'contact.confirmClearTitle': string;
  'contact.confirmClearDesc': string;
  'contact.cancel': string;
  'contact.continue': string;
  'contact.otherWays': string;
  'contact.dontHesitate': string;
  'contact.automatedFooter': string;
  'contact.description': string;
  'contact.locationAvailability': string;
  'contact.remoteWork': string;
  'contact.languages': string;
  'contact.helpWith': string;
  'contact.webDev.title': string;
  'contact.webDev.description': string;
  'contact.freelance.title': string;
  'contact.freelance.description': string;
  'contact.collaboration.title': string;
  'contact.collaboration.description': string;
  'contact.techDiscussions.title': string;
  'contact.techDiscussions.description': string;

  // Email templates
  'email.newContactSubmission': string;
  'email.thankYouMessage': string;
  'email.receivedMessage': string;
  'email.receivedAt': string;
  'email.ifNotYou': string;
  'email.automatedResponse': string;
  'email.bestRegards': string;
  'email.senderInfo': string;
  'email.name': string;
  'email.email': string;
  'email.subject': string;
  'email.message': string;
  'email.thankYouForUsing': string;
  'email.replyClickEmail': string;

  // Projects
  'projects.title': string;
  'projects.tech': string;
  'projects.liveDemo': string;
  'projects.github': string;
  'projects.comingSoon': string;

  // Technologies
  'tech.title': string;
  'tech.description': string;
  'tech.level.expert': string;
  'tech.level.advanced': string;
  'tech.level.intermediate': string;
  'tech.level.beginner': string;
  'tech.level.novice': string;
  'tech.level.label': string;
  'tech.experience': string;
  'tech.category': string;
  'tech.favorite': string;
  'tech.favorite.badge': string;
  'tech.moreInfo': string;
  'tech.categories.language': string;
  'tech.categories.frontend': string;
  'tech.categories.backend': string;
  'tech.categories.database': string;
  'tech.categories.tool': string;
  'tech.categories.os': string;
  'tech.categories.codeEditor': string;
  'tech.categories.deployment': string;
  'tech.categories.cssFramework': string;
  'tech.categories.dns': string;
  'tech.categories.browser': string;
  'tech.categories.cms': string;
  'tech.categories.markup': string;

  // Short category names for cards
  'tech.categories.short.language': string;
  'tech.categories.short.frontend': string;
  'tech.categories.short.backend': string;
  'tech.categories.short.database': string;
  'tech.categories.short.tool': string;
  'tech.categories.short.os': string;
  'tech.categories.short.codeEditor': string;
  'tech.categories.short.deployment': string;
  'tech.categories.short.cssFramework': string;
  'tech.categories.short.dns': string;
  'tech.categories.short.browser': string;
  'tech.categories.short.cms': string;
  'tech.categories.short.markup': string;
  'tech.noFavorites': string;
  'tech.moreTechnologies': string;

  // Education
  'education.title': string;
  'education.completed': string;
  'education.inProgress': string;
  'education.certificate': string;
  'education.viewCertificate': string;
  'education.backToSection': string;
  'education.backToAll': string;
  'education.backToInstitution': string;
  'education.noRecordsFound': string;
  'education.backToTop': string;

  // Footer
  'footer.rights': string;
  'footer.builtWith': string;
  'footer.designedBy': string;

  // Error pages
  'error.404.title': string;
  'error.404.message': string;
  'error.404.action': string;
  'error.404.button': string;
  'error.404.description': string;
  'error.404.goHome': string;
  'error.500.title': string;
  'error.500.description': string;
  'error.500.errorDetails': string;
  'error.500.unknownError': string;
  'error.500.goHome': string;
  'error.500.persistsMessage': string;
  'error.500.contactMe': string;

  // Pagination
  'pagination.previous': string;
  'pagination.next': string;
  'pagination.page': string;
  'pagination.of': string;
  'pagination.first': string;
  'pagination.last': string;

  'nav.arrow.previous': string;
  'nav.arrow.next': string;

  // Language switcher
  'language.switch': string;
  'language.current': string;

  // Search
  'search.button': string;
  'search.close': string;

  // A8K Brand Page
  'page.a8k.header.title': string;
  'page.a8k.header.subtitle': string;
  'page.a8k.header.description': string;
  'page.a8k.navigation.whatIs': string;
  'page.a8k.navigation.howUsed': string;
  'page.a8k.navigation.why': string;
  'a8k.hero.title': string;
  'a8k.subtitle': string;
  'a8k.heroDescription': string;
  'a8k.whatIs.title': string;
  'a8k.whatIs.intro': string;
  'a8k.whatIs.letters': string;
  'a8k.whatIs.explanation': string;
  'a8k.whatIs.surname': string;
  'a8k.whatIs.plus': string;
  'a8k.howUsed.title': string;
  'a8k.howUsed.signature.title': string;
  'a8k.howUsed.signature.description': string;
  'a8k.howUsed.domain.title': string;
  'a8k.howUsed.domain.description': string;
  'a8k.howUsed.username.title': string;
  'a8k.howUsed.username.description': string;
  'a8k.why.title': string;
  'a8k.why.memorable.title': string;
  'a8k.why.memorable.description': string;
  'a8k.why.professional.title': string;
  'a8k.why.professional.description': string;
  'a8k.why.consistent.title': string;
  'a8k.why.consistent.description': string;
  'a8k.why.inspired.title': string;
  'a8k.why.inspired.description': string;
  'a8k.cta.title': string;
  'a8k.cta.description': string;
  'a8k.cta.button': string;
  'a8k.cta.blogLink': string;
  'a8k.stats.signature': string;
  'a8k.stats.birth': string;
  'a8k.stats.potential': string;

  // Blog components
  'blog.footer.siteName': string;
  'blog.footer.rights': string;
  'blog.footer.rssFeed': string;
  'blog.untitledPost': string;
  'blog.postHeaderImage': string;
  'blog.unknownDate': string;
  'blog.readMore': string;
  'blog.more': string;
  'blog.writtenBy': string;
  'blog.returnToBlog': string;

  // Education components
  'education.currentlyEnrolled': string;
  'education.present': string;
  'education.additionalInformation': string;
  'education.externalLink': string;
  'education.moreInfo': string;

  // Project components
  'projects.live': string;
  'projects.repo': string;
  'projects.website': string;
  'projects.githubRepo': string;
  'projects.mainLanguage': string;
  'projects.noDescription': string;
  'projects.archived': string;
  'projects.backToSection': string;
}

/**
 * Type for all valid translation keys
 */
export type I18nKeys = keyof I18nStrings;
