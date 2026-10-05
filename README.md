# Alex Korn's Portfolio

High-performance personal portfolio website showcasing professional experience, projects, and technical skills.

**Live Site**: [akorn.netlify.app](https://akorn.netlify.app/)

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) 5.16 - Static Site Generation
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Deployment**: Netlify
- **Node**: v24 (see `.nvmrc`)

## 📋 Features

- ✅ 100% Lighthouse performance score
- ✅ SEO optimized with sitemap generation
- ✅ Fully responsive design (mobile-first)
- ✅ Zero JavaScript runtime (Astro SSG)
- ✅ TypeScript strict mode
- ✅ Data-driven content architecture

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 📁 Project Structure

```
/
├── src/
│   ├── data/
│   │   └── info.ts          # ⭐ Single source of truth for all content
│   ├── components/
│   │   ├── general/         # Reusable components (Footer, Navbar, etc.)
│   │   └── home/            # Home page sections
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout
│   ├── pages/
│   │   └── index.astro      # Home page
│   ├── styles/              # Global and custom CSS
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets (images, icons)
└── .ai/                     # AI assistant documentation
```

## 🤖 AI-Friendly Documentation

This repository includes comprehensive documentation for AI coding assistants:

- **[`.claude.md`](./.claude.md)** - Quick reference for Claude Code and other AI assistants
- **[`.cursorrules`](./.cursorrules)** - Cursor AI-specific rules and conventions
- **[`.github/copilot-instructions.md`](./.github/copilot-instructions.md)** - GitHub Copilot instructions
- **[`.ai/architecture.md`](./.ai/architecture.md)** - System architecture and design patterns
- **[`.ai/components.md`](./.ai/components.md)** - Component catalog and usage guide

These files help AI assistants understand the codebase, follow conventions, and provide more accurate suggestions.

## 🛠️ Development

### Prerequisites

- Node.js v24 (use `nvm use` to load from `.nvmrc`)
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Making Changes

**To update content** (experience, projects, technologies):
- Edit `/src/data/info.ts` - this is the single source of truth for all portfolio content

**To modify UI/components**:
- Edit files in `/src/components/`
- Follow existing Astro component patterns
- Use Tailwind CSS utilities for styling

## 📈 Performance

- Lighthouse Score: 100/100
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🚢 Deployment

The site automatically deploys to Netlify when changes are pushed to the `main` branch.

**Build settings**:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 24 (from `.nvmrc`)

## 📝 License

[MIT](./LICENSE)

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
