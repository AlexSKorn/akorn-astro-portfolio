# Alex Korn's Astro Portfolio

High-performance portfolio website built with Astro, TypeScript, and Tailwind CSS.

**Live**: https://akorn.netlify.app/  
**Stack**: Astro 7 • TypeScript (strict) • Tailwind CSS 4 • Node 24

## Project Structure

```
src/
├── data/info.ts          # ⭐ Single source of truth for ALL content
├── components/           # Astro components (general/ and home/)
├── pages/index.astro     # Main page (composes sections)
├── layouts/Layout.astro  # Base HTML wrapper
└── styles/              # Global + custom CSS
```

## Core Principle: Data-Driven

**All portfolio content lives in `/src/data/info.ts`**

- Experience, education, strengths, technologies, social links
- Update content → edit one file
- Components read from `info` object and render

## Key Constraints

1. **Zero JavaScript**: Astro renders everything at build time (SSG); the only JS is the tiny inline theme script
2. **TypeScript Strict Mode**: Always type props, no `any`
3. **Tailwind First**: Use utilities, custom CSS only for animations/gradients
4. **100% Lighthouse Score**: Maintain performance

## Development

```bash
npm run dev      # Start dev server (localhost:4321)
npm run check    # Type-check (astro check, strict)
npm run build    # Build for production
npm run preview  # Preview production build
```

**Node Version**: Use `nvm use` (reads `.nvmrc` for v24)

## Additional Documentation

Before making changes to unfamiliar areas, read the relevant docs in `.ai/`:

- **[.ai/architecture.md](file:///.ai/architecture.md)** - System design, data flow, build process
- **[.ai/components.md](file:///.ai/components.md)** - Component catalog with examples

## Common Tasks

<details>
<summary>Adding a new technology</summary>

Edit `/src/data/info.ts` → `technologies` array:
```typescript
{ name: "Tech Name", category: "Frameworks" }
```
`category` must be one of the `TechCategory` values in `src/types/index.ts`.
</details>

<details>
<summary>Modifying UI/components</summary>

1. Components in `/src/components/`
2. Use existing Astro patterns (see [.ai/components.md](file:///.ai/components.md))
3. Type props with interfaces
4. Test responsive design (mobile → desktop)
</details>

## Don't

- ❌ Add heavy JavaScript (defeats Astro's purpose)
- ❌ Hardcode content in components (use `info.ts`)
- ❌ Break TypeScript strict mode
- ❌ Use inline styles (Tailwind or CSS files only)

## Deployment

Netlify auto-deploys from `main` branch. Build command: `npm run build`
