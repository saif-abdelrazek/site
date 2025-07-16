import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context: { site: any }) {
  const posts = (await getCollection("posts")).sort(
    (a, b) => (b.data.date?.getTime?.() ?? 0) - (a.data.date?.getTime?.() ?? 0),
  );
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "Saif Abdelrazek Blog",
    description: "Personal blog of Saif Abdelrazek",
    trailingSlash: false,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      content: sanitizeHtml(
        parser.render(typeof post?.body === "string" ? post.body : ""),
        {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        },
      ),
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
