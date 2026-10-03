// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://1995parham.github.io",
	integrations: [sitemap()],
	// Inter is fetched at build time and self-hosted from /_astro, so the
	// page never calls out to Google Fonts. Rendered via <Font /> in Layout.
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-inter",
			weights: ["400 700"],
			styles: ["normal"],
			subsets: ["latin", "latin-ext"],
			fallbacks: ["system-ui", "sans-serif"],
		},
	],
	markdown: {
		// Shiki is Astro's built-in, zero-runtime syntax highlighter. Both
		// themes are emitted as CSS variables and post.css picks one per
		// colour scheme, so code blocks follow the light/dark toggle.
		syntaxHighlight: "shiki",
		shikiConfig: {
			themes: { light: "github-light", dark: "github-dark" },
			defaultColor: false,
			wrap: true,
		},
	},
});
