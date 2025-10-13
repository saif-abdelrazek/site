import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { ui } from "@i18n/ui";
const parser = new MarkdownIt();

export async function GET(context: { site: any }) {
  // Use Arabic for this RSS feed
  const t = ui.ar;
  
  const allPosts = await getCollection("posts");
  // Filter Arabic posts only
  const arabicPosts = allPosts.filter(post => post.id.startsWith('ar/')).sort(
    (a, b) => (b.data.date?.getTime?.() ?? 0) - (a.data.date?.getTime?.() ?? 0),
  );
  
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: t['blog.feedTitle'],
    description: t['page.rss.description'],
    trailingSlash: false,
    site: context.site,
    items: arabicPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/ar/blog/${post.id.replace('ar/', '')}/`,
      content: sanitizeHtml(
        parser.render(typeof post?.body === "string" ? post.body : ""),
        {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        },
      ),
    })),
    // (optional) inject custom xml
    customData: `<language>ar</language>`,
  });
}
