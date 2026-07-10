import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
	const posts = await getCollection("blog");
	return rss({
		title: "Parham Alvani | Blog",
		description:
			"Technical blog posts by Parham Alvani covering IoT platforms, software development, cloud engineering, and programming tutorials.",
		site: context.site,
		items: posts
			.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
			.map((post) => ({
				title: post.data.title,
				pubDate: post.data.date,
				categories: post.data.tags,
				link: `/blog/${post.id}/`,
			})),
	});
}
