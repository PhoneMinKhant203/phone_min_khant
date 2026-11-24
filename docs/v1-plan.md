# Phone Min Khant — V1 Product & Design Plan

## 1. Product goal

Build a public, recruiter-friendly home for Phone Min Khant that works as a clear 30-second introduction and a deeper proof-of-work library. The story connects business analysis, fintech and payments, software engineering, applied AI research, teaching, and community work through one idea: making complex systems useful and understandable.

Primary goal: inbound professional conversations. The site should create confidence through specific work and evidence, with a calm invitation to make contact.

## 2. Existing portfolio audit

### Content found and migrated

The attached HTML contains 14 dated milestones, 14 thumbnail paths, 48 gallery image paths, external research and partner links, and detailed `What I Did / How I Did It / Success & Impact` text. The image paths and all three storytelling sections are preserved in `data/timeline.json`; project pages adapt the same model.

| Date in source | Milestone |
| --- | --- |
| Mar 2026 | Myanmar Agri-Med AI |
| Dec 2025 | Sarthin Platform Launch |
| Aug 2025 | Social Enterprise Evolution & Grant |
| Apr 2025 | EdTech Innovation & Ideation |
| Mar 2025 | IoT Robotics Research |
| Jun 2024 | Global Program Management |
| May 2024 | Open Mic 2024: Advocacy & Inclusion |
| Jan–Feb 2024 | Life Skills for Street Children |
| Dec 2023–Mar 2024 | Generative AI Capacity Building |
| Oct 2023–Jan 2024 | Corporate Wellness & Trauma Healing |
| Aug 2023 | ASEAN Economic Roundtable |
| Jul 2023 | Youth Entrepreneurship Award |
| Mar–Aug 2023 | NextGen Impact Initiatives |
| Apr 2020–Mar 2021 | Youth Conversation Club (MMU) |

Additional current context supplied in this conversation/profile is represented in static data: ThitsaWorks Business Analyst, Phaung Daw Oo International University Tutor / Lecturer, University of Sunderland degree, 42 Bangkok, and six 42 projects.

### Strengths to retain

- The dark, restrained visual direction.
- The chronological story and detailed project writing.
- The `What I Did / How I Did It / Success & Impact` structure.
- Research and partner links that let visitors inspect evidence.
- The inclusion of community, youth, education, and social-impact work.

### What changes

- The timeline becomes one route among focused home, current-work, experience, teaching, project, 42, content, résumé, and contact routes.
- Important work gets crawlable pages and readable URLs instead of depending on a JavaScript modal.
- Static portfolio content is moved into small, named data files.
- The homepage prioritizes current professional identity and selected evidence.
- SEO placeholders, embedded scripts, modal-only details, and generic image alt text are replaced with route metadata, structured data, a sitemap, semantic elements, and keyboard-friendly interactions.
- The original HTML references image folders that were not included in the attachment. Those references remain in the data; the new site uses editorial placeholders until the image files are supplied.

## 3. V1 requirements

1. Explain current identity, work, strengths, proof, direction, and contact path on the homepage.
2. Show current focus on `/now`.
3. Describe fintech work at a safe portfolio level on `/work` and `/experience/thitsaworks`.
4. Give teaching a visible route, including `/teaching/phaung-daw-oo-international-university`.
5. Provide project index and detail routes for AI, IoT, Sarthin, AI literacy, and community initiatives.
6. Provide an index and detail page for Libft, ft_printf, get_next_line, push_swap, pipex, and so_long.
7. Preserve the 14 original milestone details in a chronological `/timeline` route.
8. Keep videos on YouTube; show metadata, searchable notes, and click-to-load embeds on the site.
9. Support search across title, description, summary, category, and tags; filter by category, topic, and year; sort by newest, oldest, featured, and relevance during search.
10. Include a readable résumé page with print-to-PDF and a prepared location for a downloadable PDF.
11. Include contact links, social metadata, canonical URLs when configured, Open Graph images, structured data, `robots.txt`, and `sitemap.xml`.
12. Keep the site usable by keyboard and on small screens, respect reduced motion, and avoid adding unnecessary analytics or video hosting.

## 4. Sitemap and route map

| Route | Purpose |
| --- | --- |
| `/` | Curated recruiter overview, selected proof, current role, latest content, career direction, contact CTA |
| `/now` | Current work, study, engineering, teaching, learning, and content creation |
| `/work` | Professional experience and education overview |
| `/experience/[slug]` | Individual experience pages; currently ThitsaWorks and YSSW |
| `/teaching` | Teaching approach and teaching overview |
| `/teaching/phaung-daw-oo-international-university` | Dedicated Tutor / Lecturer page |
| `/projects` | Curated project index |
| `/projects/[slug]` | Project story, technology, impact, links, and related work |
| `/42` | 42 Bangkok overview and project list |
| `/42/[slug]` | Individual 42 project and learning notes, with optional GitHub link |
| `/content` | Searchable video and article library |
| `/content/[slug]` | Individual video/article, summary, tags, links, transcript/notes |
| `/timeline` | Chronological milestones and original story details |
| `/resume` | Web résumé and print/save-as-PDF path |
| `/contact` | Email and professional contact links |
| `/studio` | Sanity editor for videos and articles |

## 5. Technical architecture

- **Frontend:** Next.js App Router + TypeScript, mostly server-rendered or statically generated pages.
- **Hosting:** Vercel. The project is prepared for deployment but is not connected to an account or public domain yet.
- **CMS:** Sanity, only for videos/articles. The Studio is mounted at `/studio`; public published entries are read-only from the frontend.
- **Refresh:** Published content is revalidated on a 60-second interval. The first request after a published item is available can refresh the pages without editing code.
- **Video:** YouTube remains the host. The site stores links/metadata and loads the privacy-enhanced embed only after a visitor presses play.
- **Search:** Client-side over the relatively small published-content result set. No paid search service.
- **Analytics:** No tracking package in V1. If desired later, evaluate Vercel Web Analytics against the current plan before enabling it; no recurring analytics cost is introduced now.
- **Secrets:** No API keys or private tokens are needed for public published-content reads. Keep any future private token server-side and out of `NEXT_PUBLIC_*` variables.

## 6. Content/data architecture

Static data lives outside React components:

- `data/site.ts` — identity, contact channels, site URL, navigation.
- `data/experience.ts` — work history and skills.
- `data/teaching.ts` — teaching institutions and approach.
- `data/education.ts` — degrees and study focus.
- `data/projects.ts` — project pages and relationships.
- `data/42-projects.ts` — 42 project pages and optional repository URLs.
- `data/now.ts` — current focus statements.
- `data/timeline.json` — complete migration of the 14 source milestones, external links, and old asset paths.
- `sanity/schemaTypes/contentItem.ts` — the only editable CMS document model in V1.

Components handle presentation. Route files compose page data and metadata. This makes an AI-assisted update as small as changing one named data record for most portfolio updates.

## 7. Sanity schema

Document type: `contentItem` (Video / Article).

| Field | Type | Use |
| --- | --- | --- |
| `title` | string | Display and page title |
| `slug` | slug | Stable shareable route |
| `format` | `video` / `article` | Controls YouTube presentation |
| `publishedAt` | datetime | Publication, ordering, and year filter |
| `youtubeUrl` | URL | YouTube watch page; videos remain hosted there |
| `youtubeVideoId` | string, optional | Override when the ID cannot be parsed from URL |
| `description` | short text | Card copy and search |
| `summary` | text | Searchable written notes and page body |
| `category` | predefined string | One of six broad categories |
| `tags` | string array | Topic search/filter |
| `thumbnail` | image, optional | Sanity-hosted thumbnail with alt text |
| `featured` | boolean | Featured sorting and homepage selection |
| `externalLinks` | label + URL array | Links to other platforms/resources |
| `relatedContent` | references, max 4 | Related lessons |
| `transcript` | text, optional | Transcript or expanded notes |

Categories: AI & Machine Learning; Software Engineering; Computer Science; Fintech & Product; Teaching & Learning; Career & General Learning.

## 8. Homepage structure

1. Hero: positioning, plain-language introduction, work and résumé CTAs, current role.
2. Three proof areas: fintech delivery, applied AI research, technical education.
3. Three selected project stories.
4. Connecting narrative: how community work, engineering, fintech, and AI fit together.
5. Latest video/note slots or a clear first-episode state.
6. Three recent career milestones with a timeline link.
7. Education proof.
8. Tasteful opportunity CTA and direct contact.

Everything beyond the selected proof has its own index/detail route.

## 9. Design system

- Near-black charcoal background, warm off-white text, muted grey secondary copy, restrained sage accent.
- Editorial serif for display headlines; system sans-serif for navigation, controls, and body copy.
- Wide margins, thin rules, asymmetric editorial layouts, clear content hierarchy, and few bordered panels.
- No purple AI gradients, glow effects, unnecessary 3D, or decorative animation.
- CSS-only hover/focus states; no scroll-triggered animation in V1. Respect `prefers-reduced-motion`.
- Mobile-first reflow: stacked hero, collapsing navigation, single-column project/content lists, large tap targets, and responsive filter controls.
- Visible keyboard focus, skip link, semantic headings, labels for search controls, and accessible video buttons.

## 10. Important gaps before launch

- **Domain:** set `NEXT_PUBLIC_SITE_URL` before production so canonicals and the sitemap use the real site origin.
- **Images:** the HTML attachment did not include its `images/` folder, project screenshots, or a portrait. Add the original files under `public/images/` and set the associated data paths.
- **GitHub:** provide the public repository URL for each 42 project and the public profile URL. Repository buttons appear automatically when a URL is added to `data/42-projects.ts`.
- **YouTube:** provide the channel URL and start adding published video metadata through Sanity. The content pages are ready; the initial library is intentionally empty.
- **Résumé PDF:** add the final reviewed PDF at `public/resume.pdf`; the web résumé already includes print/save-as-PDF.
- **Teaching details:** confirm dates, subjects, and whether other teaching institutions should appear alongside Phaung Daw Oo International University.
- **Graduate-study status:** formal programme/admission details are left as a clearly marked next step rather than described as current enrollment.
- **Career dates:** confirm exact ThitsaWorks and prior-role dates if you want month-level accuracy.
- **Social profiles:** add Facebook/TikTok links only if you want those channels public.
- **Public claims:** the impact numbers and research acceptance language are migrated from your source. Confirm you are comfortable publishing each claim and link.

## 11. Confidentiality and privacy

The ThitsaWorks page describes skills and responsibilities without naming financial-service-provider clients, systems, production flows, incidents, customer data, credentials, or internal architecture. No personal address, birth date, or private identifiers are included. Public profile links are limited to the supplied email and LinkedIn until more are provided.
