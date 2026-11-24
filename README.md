# phoneminkhant_v1.2

An editorial portfolio and proof-of-work site built with Next.js, TypeScript, Sanity, and CSS. Static career/project content lives in `data/`; Sanity is used only for videos and articles.

## Local setup

1. Install Node.js 22.12 or later. Node.js 22.14 with npm 10.9.2 is supported.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add `NEXT_PUBLIC_SITE_URL` once you have chosen your domain.
5. Run `npm run dev` and open `http://localhost:3000`.

You do not need to update npm globally to install or run this project. npm 12.2.3 requires Node.js 22.22.2 or later, so keep the npm version bundled with Node 22.14 unless you also update Node.

The website works without Sanity credentials. The 15 YouTube videos already shared are stored as lightweight metadata in `data/content.ts`; video files remain hosted by YouTube. New content can be published through Sanity after the project is connected.

## Connect Sanity

1. Create or select a Sanity project.
2. Copy its project ID into `NEXT_PUBLIC_SANITY_PROJECT_ID`; keep the dataset as `production` unless you choose another name.
3. In Sanity project settings, allow the local and deployed site origins in CORS.
4. Run the Next.js app and open `/studio`. The schema in `sanity/schemaTypes/contentItem.ts` provides the video/article editor.
5. Create a published item. Published content appears in the site library and on the homepage; the server refresh window is 60 seconds. Sanity items are combined with the starter library by slug, so a CMS entry can replace a local starter entry without duplicating it.

No private read token is required for published content in a public dataset. Do not expose a Sanity write token in a `NEXT_PUBLIC_*` variable.

### Publishing an episode

In Sanity Studio, create a **Video / Article**, set format to **YouTube video**, add a title and slug, publication date, YouTube URL, short description, written summary, one category, and topic tags. Add a thumbnail or external links if useful, then publish. The site does not upload or store the video file.

## Add or change static portfolio content

- Experience: `data/experience.ts`
- Education: `data/education.ts`
- Teaching: `data/teaching.ts`
- Projects: `data/projects.ts`
- 42 projects and GitHub links: `data/42-projects.ts`
- Starter YouTube videos: `data/content.ts`
- Current focus: `data/now.ts`
- Timeline migration: `data/timeline.json`
- Contact links, site origin, and navigation: `data/site.ts`

The original portfolio images are migrated and optimized as WebP files under `public/images/`. Brand logos, the degree certificate image, and résumé PDF are also included under `public/`. Project cover images and galleries are configured in `data/projects.ts`; timeline image references remain in `data/timeline.json` and are shown with their milestones. Add future project screenshots under `public/images/` and add them to that project's optional `gallery` array (`src`, descriptive `alt`, and optional `caption`).

## Deploy to Vercel

1. Put this project in a GitHub repository.
2. Import the repository into Vercel using the default Next.js settings.
3. Add `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SANITY_PROJECT_ID`, and `NEXT_PUBLIC_SANITY_DATASET` in Vercel project settings.
4. Allow the production domain in Sanity CORS settings, then deploy.

The canonical domain defaults to the website listed in the current résumé (`https://www.mgphone.me`); override `NEXT_PUBLIC_SITE_URL` if this version will use a different production domain. Analytics are not enabled yet.

## Key routes

`/now` · `/work` · `/experience/thitsaworks` · `/teaching` · `/projects` · `/projects/[slug]` · `/42` · `/42/[slug]` · `/content` · `/content/[slug]` · `/timeline` · `/resume` · `/contact` · `/studio`

See [`docs/v1-plan.md`](docs/v1-plan.md) for the migration audit, content model, design system, sitemap, and launch gaps.
