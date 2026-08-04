# CLAUDE.md — 1995parham.github.io

Parham Alvani's personal homepage (`1995parham.me`). Astro 7 + TypeScript,
statically built and served from GitHub Pages. Migrated from Next.js in
`8d9261c`; anything describing `pages/*.tsx` is pre-migration and stale.

## Build

```sh
just dev      # astro dev
just build    # astro build
just check    # astro check — type-checks .astro files
just lint     # biome check .
just format   # biome check --write .
```

pnpm is the package manager. Linting/formatting is **Biome**, not ESLint or
Prettier (migrated in `6fe5ae1`).

## Layout

- `src/pages/index.astro` — "Who am I?": headline, summary, interests, key
  skills, and the CV download button.
- `src/pages/experience.astro` — work history.
- `src/pages/education.astro` — degrees.
- `src/pages/lecture.astro` — course links.
- `src/pages/blog/` — blog index and `[slug].astro`.
- `src/layouts/Layout.astro`, `src/components/` — shared shell and UI.

## The CV download link

`src/pages/index.astro` fetches the latest release tag from the GitHub API and
links to

```
https://github.com/1995parham/1995parham.pdf/releases/download/<tag>/parham.pdf
```

That asset name is **literal**. The resume repo builds region-specific variants
(`parham-spain.pdf`, `parham-iran.pdf`) and additionally publishes the default
variant as `parham.pdf` purely so this link keeps resolving. If that asset stops
being published, this button silently 404s.

## Cross-repo alignment (important)

`1995parham.pdf` is the **source of truth** for Parham's professional facts.
Three repos state the same information publicly and must agree:

| Repo | What it states |
|---|---|
| `1995parham.pdf` | Full resume — authoritative |
| `1995parham.github.io` (here) | `src/pages/index.astro`, `experience.astro`, `education.astro` |
| `1995parham` | GitHub profile README "About Me" |

Before editing any employer, title, date range, headline, summary, or location
here, read the corresponding file in `1995parham.pdf` (`src/shared/*.typ`,
`src/profile_spain/metadata.toml`) and match it. This site legitimately shows a
**curated subset** of the resume — not every job needs an entry — but anything it
does show must not contradict the resume.

The failure mode to watch for: an employer left as `Present` here after the
resume has moved on. That reads as two different current jobs, and it survived
the whole Next.js-to-Astro migration unnoticed.
