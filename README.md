# Minimal Portfolio — Next.js + Tailwind

## Develop
```bash
npm install
npm run dev
```

## Build

```bash
npm run build && npm start
```

## Content

* Posts: `content/posts/*.mdx` (frontmatter: title, description, date, tags?, published)
* Projects: `data/projects.ts`
* Experience: `data/experience.ts`

## Customize

* Edit `lib/seo.ts` for site title, description, and URLs.
* Replace `public/og.png` and favicon.

## Deploy

* Recommended: Vercel. Set framework to Next.js.

## Variables to Personalize (replace in code)

* `Your Name` → your name
* `you@example.com` → your email
* `@your` → your handles
* `site.url` in `lib/seo.ts`
* Accent color in `styles/tokens.css`
