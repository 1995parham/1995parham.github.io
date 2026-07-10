// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://1995parham.github.io",
	integrations: [sitemap()],
	markdown: {
		// Shiki is Astro's built-in, zero-runtime syntax highlighter.
		// `github-light` keeps the look of the old highlight.js theme.
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "github-light",
			wrap: true,
		},
	},
});
