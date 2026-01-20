# Architecture Documentation

## System Overview

Alex Korn's portfolio is a high-performance static website built with Astro's Static Site Generation (SSG) approach. The architecture prioritizes performance, SEO, and maintainability through a data-driven design.

### Core Architecture Principles

1. **Static Site Generation (SSG)**: All pages are pre-rendered at build time
2. **Zero JavaScript by Default**: Leverages Astro's "island architecture" (though currently no islands)
3. **Single Source of Truth**: All content centralized in `/src/data/info.ts`
4. **Component-Based UI**: Reusable Astro components with TypeScript
5. **Utility-First Styling**: Tailwind CSS for consistent, maintainable styles

## Application Structure

```
akorn-astro-portfolio/
├── src/
│   ├── components/          # UI Components
│   │   ├── general/         # Global reusable components
│   │   │   ├── BaseLayout.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navbar.astro
│   │   │   ├── Logo.astro
│   │   │   └── SocialLinks.astro
│   │   └── home/            # Home page sections
│   │       ├── Hero.astro
│   │       ├── Experience.astro
│   │       ├── Education.astro
│   │       ├── Projects.astro
│   │       ├── Technologies.astro
│   │       └── About.astro
│   ├── data/
│   │   └── info.ts          # ⭐ Content database
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout
│   ├── pages/
│   │   └── index.astro      # Home page (only page)
│   ├── styles/
│   │   ├── global.css       # Global base styles
│   │   ├── custom-styles.css # Custom animations/gradients
│   │   └── nav-footer.css   # Navigation/footer specific
│   ├── types/
│   │   └── info.ts          # TypeScript interfaces
│   └── utils/
│       └── helpers.ts       # Utility functions
├── public/                  # Static assets
│   └── assets/
│       └── images/          # Project thumbnails, etc.
├── dist/                    # Build output (generated)
└── [config files]
```

## Data Flow

### Content Pipeline

```
┌─────────────────────┐
│  /src/data/info.ts  │  ← Single source of truth
│  (TypeScript object)│
└──────────┬──────────┘
           │
           │ Import
           ▼
┌─────────────────────┐
│   Home Components   │  ← Read from info object
│  (Experience, etc.) │
└──────────┬──────────┘
           │
           │ Render
           ▼
┌─────────────────────┐
│  /pages/index.astro │  ← Compose sections
└──────────┬──────────┘
           │
           │ Build
           ▼
┌─────────────────────┐
│  Static HTML (dist/)│  ← Deployed to Netlify
└─────────────────────┘
```

### Component Hierarchy

```
Layout.astro (Base HTML structure)
└── index.astro (Home page)
    ├── Navbar
    ├── Hero
    ├── About
    ├── Experience
    │   └── ExperienceCard (renders each job)
    ├── Education  
    │   └── EducationCard (renders each school)
    ├── Projects
    │   └── ProjectCard (renders each project)
    ├── Technologies
    │   └── TechnologyIcon (renders each tech)
    └── Footer
        └── SocialLinks
```

## Key Design Patterns

### 1. Data-Driven Components

**Pattern**: Components consume data from `info.ts` instead of receiving props from parent

```typescript
// Component reads data directly
---
import { info } from '@/data/info';

const technologies = info.technologies;
---

<div>
  {technologies.map((tech) => (
    <span>{tech.name}</span>
  ))}
</div>
```

**Benefits**:
- Content updates don't require component changes
- Single file to edit for all content changes
- Reduces prop drilling
- Type safety from TypeScript definitions

### 2. Section-Based Layout

**Pattern**: Home page is composed of semantic sections

```astro
<Layout title="Portfolio">
  <Navbar />
  <main>
    <Hero />
    <About />
    <Experience />
    <Education />
    <Projects />
    <Technologies />
  </main>
  <Footer />
</Layout>
```

**Benefits**:
- Clear separation of concerns
- Easy to reorder sections
- Semantic HTML for SEO
- Modular development

### 3. Utility-First Styling

**Pattern**: Tailwind CSS utilities compose all styling

```astro
<div class="container mx-auto px-4 py-12 md:py-20">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
    Section Title
  </h2>
</div>
```

**Benefits**:
- Consistent spacing/sizing
- Responsive by default
- Minimal CSS bloat (Tailwind purges unused)
- Fast development iteration

### 4. TypeScript Type Safety

**Pattern**: Strict typing throughout the application

```typescript
// /src/types/info.ts
export interface Experience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

// /src/data/info.ts
export const info: {
  experience: Experience[];
  // ...
} = {
  // TypeScript ensures correctness
};
```

## Build Process

### Development Flow

```
npm run dev
    ↓
Astro Dev Server
    ↓
Hot Module Reloading
    ↓
Browser (localhost:4321)
```

### Production Build Flow

```
npm run build
    ↓
Astro Build Process
    ├── TypeScript Compilation
    ├── Component Rendering (SSG)
    ├── Tailwind CSS Processing & Purging
    ├── Asset Optimization
    └── Sitemap Generation
    ↓
Output to dist/
    ├── index.html (fully rendered)
    ├── _astro/ (optimized assets)
    └── sitemap.xml
```

### Deployment Pipeline

```
Git Push (main branch)
    ↓
GitHub Webhook
    ↓
Netlify Build Trigger
    ├── Clone repository
    ├── Install dependencies (npm install)
    ├── Run build (npm run build)
    └── Deploy dist/ to CDN
    ↓
Live Site (https://akorn.netlify.app)
```

## Styling System

### Three-Layer Approach

1. **Tailwind Utilities** (Primary)
   - Responsive design
   - Spacing, typography, colors
   - Most component styling

2. **Custom CSS** (`/src/styles/custom-styles.css`)
   - Complex animations
   - Gradient patterns
   - Glassmorphism effects
   - Reusable visual patterns

3. **Global Styles** (`/src/styles/global.css`)
   - CSS resets
   - Base typography
   - Default link styles

### Responsive Strategy

**Mobile-First Breakpoints**:
- Base: 0-639px (mobile)
- `sm:` 640px+ (large mobile/small tablet)
- `md:` 768px+ (tablet)
- `lg:` 1024px+ (desktop)
- `xl:` 1280px+ (large desktop)
- `2xl:` 1536px+ (extra large)

**Pattern**:
```css
/* Mobile first: base styles apply to mobile */
.element {
  @apply text-sm p-4;
}

/* Then override for larger screens */
@media (min-width: 768px) {
  .element {
    @apply text-base p-6;
  }
}
```

## Performance Optimizations

### Current Implementations

1. **Static Site Generation**
   - Zero server-side rendering overhead
   - Instant page loads from CDN
   - No client-side routing JavaScript

2. **Minimal JavaScript**
   - Only Astro's minimal hydration framework
   - No framework JavaScript (React, Vue, etc.)
   - Interactive elements use native HTML/CSS

3. **Optimized CSS**
   - Tailwind purges unused classes
   - Critical CSS inlined
   - Non-critical CSS deferred

4. **Image Optimization**
   - Astro's built-in image optimization
   - Automatic format selection (WebP, AVIF)
   - Lazy loading for below-fold images

5. **Asset Optimization**
   - Minified HTML/CSS/JS
   - Compressed assets
   - CDN delivery via Netlify

### Performance Targets

- **Lighthouse Performance**: 100
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.0s

## SEO Architecture

### On-Page SEO

1. **Semantic HTML**
   - `<header>`, `<main>`, `<section>`, `<article>` tags
   - Proper heading hierarchy (h1 → h2 → h3)
   - Descriptive alt text on images

2. **Meta Tags** (in Layout.astro)
   - Title tags (unique per page in future)
   - Meta descriptions
   - Open Graph tags (social sharing)
   - Canonical URLs

3. **Structured Data**
   - Potential for JSON-LD schema markup
   - Person/Professional schema

4. **Technical SEO**
   - Sitemap.xml (auto-generated)
   - Robots.txt
   - Fast loading speeds
   - Mobile-friendly design

## Technology Stack Deep Dive

### Astro (v5.16.11)
- **Purpose**: Static site generator framework
- **Benefits**: 
  - Zero JS by default
  - Multiple framework support (not used here)
  - Excellent DX with hot reloading
  - Built-in optimizations

### TypeScript
- **Configuration**: Strict mode in `tsconfig.json`
- **Usage**: Component props, data structures, utilities
- **Benefits**: Type safety, better IDE support, prevents runtime errors

### Tailwind CSS (v6.0.2)
- **Configuration**: `tailwind.config.cjs`
- **Customization**: Extended color palette, custom utilities
- **Benefits**: Rapid development, consistent design system, automatic purging

### Netlify
- **Features Used**:
  - Automatic deployments from Git
  - CDN distribution
  - HTTPS/SSL certificates
  - Form handling (if added)
  - Environment variables (if needed)

## Scalability Considerations

### Current Architecture Supports

✅ Adding new pages (create in `/src/pages/`)
✅ Adding content (edit `/src/data/info.ts`)
✅ Adding components (create in `/src/components/`)
✅ Blog functionality (create `/src/content/` with Astro Content Collections)
✅ Multi-language (i18n with Astro i18n integration)

### Future Enhancements

- **Content Collections**: For blog posts, case studies
- **Dynamic Routes**: For individual project pages
- **API Integration**: Fetch GitHub stats, blog posts from CMS
- **Dark Mode**: Theme toggle with Tailwind dark: variants
- **Analytics**: Privacy-focused analytics integration
- **Search**: Client-side search with Fuse.js or similar

## Security Considerations

### Current Implementation

- **No User Input**: Static site with no forms (low risk)
- **HTTPS**: Enforced by Netlify
- **No Backend**: No server-side vulnerabilities
- **Dependency Updates**: Regular updates via npm

### Best Practices

- Keep dependencies updated
- Use Netlify's built-in security headers
- Validate any future form inputs
- Sanitize any dynamic content from external sources

## Development Workflow

### Local Development
1. Clone repository
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Edit content in `/src/data/info.ts`
5. Modify components as needed
6. Test responsiveness
7. Build locally: `npm run build`
8. Preview: `npm run preview`

### Deployment
1. Commit changes to Git
2. Push to `main` branch on GitHub
3. Netlify auto-builds and deploys
4. Verify live site

### Maintenance
- Update dependencies monthly
- Monitor Lighthouse scores
- Review and update content quarterly
- Check broken links
- Update portfolio projects as completed
