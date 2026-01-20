# Alex Korn's Astro Portfolio

High-performance portfolio website built with Astro, TypeScript, and Tailwind CSS.

**Live**: https://akorn.netlify.app/  
**Stack**: Astro 5.16 • TypeScript (strict) • Tailwind CSS 6 • Node 22

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

- Experience, education, projects, technologies, social links
- Update content → edit one file
- Components read from `info` object and render

## Key Constraints

1. **Zero JavaScript**: Astro renders everything at build time (SSG)
2. **TypeScript Strict Mode**: Always type props, no `any`
3. **Tailwind First**: Use utilities, custom CSS only for animations/gradients
4. **100% Lighthouse Score**: Maintain performance

## Development

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

**Node Version**: Use `nvm use` (reads `.nvmrc` for v22)

## Additional Documentation

Before making changes to unfamiliar areas, read the relevant docs in `.ai/`:

- **[.ai/architecture.md](file:///.ai/architecture.md)** - System design, data flow, build process
- **[.ai/components.md](file:///.ai/components.md)** - Component catalog with examples

## Common Tasks

<details>
<summary>Adding a new technology</summary>

Edit `/src/data/info.ts` → `technologies` array:
```typescript
{ name: "Tech Name", icon: "devicon-tech-plain" }
```
Icons: [devicon.dev](https://devicon.dev/) or [simpleicons.org](https://simpleicons.org/) (use `si si-iconname`)
</details>

<details>
<summary>Adding a new project</summary>

Edit `/src/data/info.ts` → `projects` array:
```typescript
{
  title: "Project Name",
  isFeatured: true,
  thumbnail: "/assets/images/project.png",
  githubUrl: "https://github.com/...",
  liveUrl: "", // empty if no live demo
  description: "Brief description",
  technologies: ["Tech1", "Tech2"],
  achievements: ["Achievement 1", "Achievement 2"]
}
```
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
