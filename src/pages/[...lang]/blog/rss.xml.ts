import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { languages, defaultLang, showDefaultLang, getLangFromUrl } from "@i18n/utils";
import { useTranslations } from "@i18n/translations";
import type { APIContext } from "astro";

const parser = new MarkdownIt();

export function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({
    params: {
      lang: lang === defaultLang && !showDefaultLang ? undefined : lang,
    },
  }));
}

export async function GET(context: APIContext) {
  const lang = getLangFromUrl(context.url);
  const t = useTranslations(lang);
  
  const allPosts = await getCollection("posts");
  // Filter posts for current language
  const langPosts = allPosts.filter(post => post.id.startsWith(`${lang}/`)).sort(
    (a, b) => (b.data.date?.getTime?.() ?? 0) - (a.data.date?.getTime?.() ?? 0),
  );
  
  const langPrefix = lang === defaultLang && !showDefaultLang ? '' : `/${lang}`;
  const stylesheet = lang === 'ar' ? '/rss/styles-ar.xsl' : '/rss/styles.xsl';
  
  return rss({
    stylesheet,
    title: t('blog.feedTitle'),
    description: t('page.rss.description'),
    trailingSlash: false,
    site: context.site,
    items: langPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${langPrefix}/blog/${post.id.replace(`${lang}/`, '')}/`,
      content: sanitizeHtml(
        parser.render(typeof post?.body === "string" ? post.body : ""),
        {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        },
      ),
    })),
    // (optional) inject custom xml
    customData: `<language>${lang === 'ar' ? 'ar' : 'en-us'}</language>`,
  });
}
