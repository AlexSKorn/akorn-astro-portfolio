# Component Guide

All components are `.astro` files rendered at build time. Content comes from `src/data/info.ts`; components never hardcode copy.

## General (`src/components/general/`)

| Component | Purpose |
| --- | --- |
| `MetaHead.astro` | Charset, viewport, favicons, title, description, canonical, Open Graph/Twitter tags, Person JSON-LD, font preloads. Props: `IMetaHead` (`title`, `description`, `ogImageUrl?`). Each page passes it into Layout's `head` slot. |
| `Navbar.astro` | Sticky header: initials logo, Experience / Contact / Resume links, and the theme toggle. Both sun and moon icons are in the markup; CSS shows the right one. The small inline script only flips `data-theme` and saves it to `localStorage`. |
| `Footer.astro` | Copyright line. |

## Home sections (`src/components/home/`)

| Component | Data | Notes |
| --- | --- | --- |
| `Hero.astro` | `info.name`, `info.jobDescription`, `info.experience` | Name, title, CTAs, "Currently / Previously" card (company names come from `experience[].name` before ` - `). The primary CTA opens the resume PDF. |
| `About.astro` | `info.about`, `info.strengths` | Summary paragraph and "What I Bring" list. |
| `Experience.astro` | `IExperiences` props | Reused for Experience and Education. Takes `id` (section anchor; heading gets `${id}-title`), `title`, `details`, and optional `detailedCount` (entries after that collapse into "Earlier Roles"). |
| `Technologies.astro` | `info.technologies` | Grouped by `TechCategory`. |
| `Contact.astro` | `info.contactBlurb`, `info.socialMedia` | Email, LinkedIn, GitHub, Resume links. |

## Patterns

- **Props**: type with an interface from `src/types/index.ts` and import it with `import type`.
- **Section heading**: `section-title-bar` accent plus an `h2` with an id that the section's `aria-labelledby` points to.
- **Dark mode**: `dark:` variants, driven by `data-theme` on `<html>` (set before first paint in `Layout.astro`).
- **Colors**: use `text-blue-600` or darker for blue text on white so it passes WCAG AA; `blue-500` is fine for icons and decoration.
- **Animation**: no scroll-reveal. Content must be visible without JS and when printed.
