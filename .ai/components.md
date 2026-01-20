# Component Guide

Comprehensive guide to all Astro components in this portfolio.

## Component Categories

### General Components (`/src/components/general/`)

Reusable UI components used across pages.

---

#### BaseLayout.astro
Base wrapper component providing consistent structure.

**Location**: `/src/components/general/BaseLayout.astro`

**Usage**:
```astro
<BaseLayout>
  <YourContent />
</BaseLayout>
```

**Features**:
- Provides container and padding
- Ensures consistent spacing
- Responsive width constraints

---

#### Footer.astro
Site footer with social links and copyright.

**Location**: `/src/components/general/Footer.astro`

**Data Source**: Reads `info.socialMedia` from `/src/data/info.ts`

**Features**:
- Social media link icons
- Email contact
- GitHub and LinkedIn links
- Copyright notice

**Styling**:
- Dark background with light text
- Centered layout
- Icon hover effects

---

#### Navbar.astro
Main navigation component.

**Location**: `/src/components/general/Navbar.astro`

**Features**:
- Sticky navigation
- Glass morphism effect
- Scroll-based shadow
- Mobile responsive
- Logo component integration

**Styling**:
- Backdrop blur effect
- Smooth transitions
- Fixed positioning

---

#### Logo.astro
Site logo/brand component.

**Location**: `/src/components/general/Logo.astro`

**Data Source**: Reads `info.name` from `/src/data/info.ts`

**Usage**: Embedded in Navbar

---

#### SocialLinks.astro
Social media icon links.

**Location**: `/src/components/general/SocialLinks.astro`

**Data Source**: Reads `info.socialMedia` from `/src/data/info.ts`

**Features**:
- GitHub, LinkedIn, Email icons
- Hover animations
- Accessible ARIA labels

---

### Home Page Components (`/src/components/home/`)

Section components specific to the home page.

---

#### Hero.astro
Landing section with name and title.

**Location**: `/src/components/home/Hero.astro`

**Data Source**: 
- `info.name`
- `info.jobDescription`

**Features**:
- Large heading with name
- Animated gradient text effect
- Job title display
- Call-to-action buttons
- Scroll indicator

**Styling**:
- Full viewport height
- Centered content
- Gradient text animations
- Fade-in animations

**Code Pattern**:
```astro
---
import { info } from '@/data/info';
---

<section class="min-h-screen flex items-center justify-center">
  <h1 class="text-5xl md:text-7xl font-bold">
    {info.name}
  </h1>
  <p class="text-xl md:text-2xl text-gray-600">
    {info.jobDescription}
  </p>
</section>
```

---

#### About.astro
Personal story and background section.

**Location**: `/src/components/home/About.astro`

**Data Source**: Uses hardcoded content (currently not from `info.ts`)

**Features**:
- Two-column layout (desktop)
- Personal journey narrative
- Skills and expertise list
- "Beyond Code" highlights
- Icon bullet points

**Styling**:
- Grid layout
- Custom SVG icons
- Fade-in animations with stagger
- Glass card effects

**Content Sections**:
1. My Journey - Career overview
2. What I Bring - Key skills (6 items)
3. Beyond Code - Personal interests

---

#### Experience.astro
Work experience timeline.

**Location**: `/src/components/home/Experience.astro`

**Props Interface**:
```typescript
interface IExperiences {
  title: string;
  details: Array<{
    name: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    skills: string[];
  }>;
}
```

**Data Source**: Called with `info.experience` from index.astro

**Features**:
- Vertical timeline design
- Timeline connector line (gradient)
- Timeline dots for each role
- Collapsible description bullets
- Technology badges per role
- Date ranges with calendar icons

**Styling**:
- Two-column layout (title + timeline)
- Gradient timeline connector
- Staggered fade-in animations
- Skill tags with blue badges

**Code Pattern**:
```astro
<Experience 
  title="EXPERIENCE"
  details={info.experience}
/>
```

---

#### Contact.astro
Contact section with email and social links.

**Location**: `/src/components/home/Contact.astro`

**Data Source**: Reads `info.socialMedia` from `/src/data/info.ts`

**Features**:
- Email mailto link
- Social media icons
- Gradient background
- Call-to-action text

---

#### TechnicalSkills.astro
Certifications and skills section.

**Location**: `/src/components/home/TechnicalSkills.astro`

**Data Source**: Reads `info.skills` from `/src/data/info.ts`

**Features**:
- Displays certifications
- Simple list format

**Note**: Currently only shows AWS Solutions Architect certification

---

#### Technologies.astro
Technology stack showcase with categorization.

**Location**: `/src/components/home/Technologies.astro`

**Props Interface**:
```typescript
interface ITechnologies {
  title: string;
  technologies: Array<{
    name: string;
    icon: string;
  }>;
}
```

**Data Source**: Called with `info.technologies` from index.astro

**Features**:
- **Auto-categorized** based on array position:
  - Languages (0-4)
  - Frameworks (5-10)
  - Databases & Caching (11-16)
  - Artificial Intelligence (17-22)
  - Cloud & Infrastructure (23-28)
  - Monitoring & CI/CD (29+)
- Grid layout with cards per category
- Technology icons (Devicon + Simple Icons)
- Hover effects
- Responsive grid

**Styling**:
- Glass card effect per category
- 3-column grid (desktop)
- 2-column icons within each card
- Gradient accent dots
- Staggered animations

**Code Pattern**:
```astro
<Technologies 
  title="TECHNOLOGIES"
  technologies={info.technologies}
/>
```

**Adding Technologies**:
Order matters! Add to specific position in `info.technologies` array based on category:
```typescript
technologies: [
  // Languages (0-4)
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  // ... add at position 0-4 for Languages
  
  // Frameworks (5-10)
  { name: "React", icon: "devicon-react-original-wordmark" },
  // ... add at position 5-10 for Frameworks
  
  // etc.
]
```

---

## Component Patterns

### Standard Astro Component Structure

```astro
---
// 1. Imports
import { info } from '@/data/info';
import type { SomeType } from '@/types';

// 2. Props interface (if accepting props)
interface Props {
  title: string;
  items?: Array<SomeType>;
}

// 3. Destructure props with defaults
const { title, items = [] } = Astro.props;

// 4. Component logic (if needed)
const processedItems = items.map(/* ... */);
---

<!-- 5. Template -->
<section class="container mx-auto px-4 py-12">
  <h2 class="text-3xl font-bold mb-6">{title}</h2>
  
  {items.map((item) => (
    <div class="card">
      {item.name}
    </div>
  ))}
</section>

<style>
  /* 6. Scoped styles (if needed, prefer Tailwind) */
</style>
```

### Data Flow Pattern

```
/src/data/info.ts (data)
        ↓
/src/pages/index.astro (imports components)
        ↓
/src/components/home/Experience.astro (receives props)
        ↓
Renders HTML (static at build time)
```

### Responsive Design Pattern

```astro
<div class="
  text-sm       /* mobile */
  md:text-base  /* tablet */
  lg:text-lg    /* desktop */
">
  Content
</div>

<div class="
  grid 
  grid-cols-1      /* mobile: 1 column */
  md:grid-cols-2   /* tablet: 2 columns */
  lg:grid-cols-3   /* desktop: 3 columns */
">
```

### Animation Pattern

Uses custom CSS animations defined in `/src/styles/custom-styles.css`:

```astro
<div class="fade-in-up">            <!-- Fades in from bottom -->
<div class="fade-in-up stagger-1">  <!-- Delayed animation -->
<div class="fade-in-up stagger-2">  <!-- More delay -->
<!-- ... stagger-6 -->
```

## Creating New Components

### Step-by-Step Process

1. **Determine Component Type**
   - Reusable across pages? → `/src/components/general/`
   - Home page specific? → `/src/components/home/`

2. **Create File**
   - Use PascalCase: `ComponentName.astro`
   - Example: `ProjectCard.astro`

3. **Define TypeScript Interface** (if accepting props)
   ```typescript
   interface Props {
     title: string;
     description: string;
     imageUrl?: string;
   }
   ```

4. **Import Data** (if needed)
   ```astro
   ---
   import { info } from '@/data/info';
   ---
   ```

5. **Build Template**
   - Use semantic HTML5
   - Apply Tailwind classes
   - Ensure mobile-first responsive design

6. **Test**
   - Check in dev server
   - Verify responsive breakpoints
   - Validate accessibility

### Example: Creating a New Section

```astro
---
// NewSection.astro
import { info } from '@/data/info';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<section class="py-10">
  <div class="flex items-center mb-8 fade-in-up">
    <div class="section-title-bar mr-4"></div>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">
      {title}
    </h2>
  </div>
  
  <div class="space-y-6 fade-in-up stagger-1">
    <!-- Your content here -->
  </div>
</section>
```

Then use in `/src/pages/index.astro`:
```astro
import NewSection from '@components/home/NewSection.astro';

<Layout title="Portfolio">
  <!-- ... other sections ... -->
  <NewSection title="NEW SECTION" />
</Layout>
```

## Styling Guidelines

### Tailwind Utility Classes

**Spacing**:
- `p-4`, `px-6`, `py-8` - Padding
- `m-4`, `mx-auto`, `my-8` - Margin
- `space-y-4` - Vertical spacing between children

**Typography**:
- `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` - Font sizes
- `font-semibold`, `font-bold` - Font weights
- `text-gray-800`, `text-blue-500` - Text colors

**Layout**:
- `flex`, `flex-col`, `items-center`, `justify-between`
- `grid`, `grid-cols-3`, `gap-6`
- `container`, `mx-auto`

**Responsive**:
- `md:text-lg` - Tablet and up
- `lg:grid-cols-3` - Desktop and up

### Custom Classes

Defined in `/src/styles/custom-styles.css`:

- `.fade-in-up` - Fade in from bottom animation
- `.stagger-1` to `.stagger-6` - Animation delays
- `.glass-card` - Glassmorphism effect
- `.section-title-bar` - Accent bar for section titles
- `.timeline-dot` - Animated dot for timeline

### Dark Mode

Use Tailwind's dark mode variants:
```astro
<div class="
  bg-white dark:bg-gray-800
  text-gray-900 dark:text-gray-100
">
```

## Common Modifications

### Changing Section Order

Edit `/src/pages/index.astro`:
```astro
<Layout title="...">
  <Navbar />
  <Hero />
  <About />
  <Experience title="EXPERIENCE" details={info.experience} />
  <Technologies title="TECHNOLOGIES" technologies={info.technologies} />
  <!-- Reorder these as needed -->
  <Footer />
</Layout>
```

### Adding Animation to Elements

```astro
<div class="fade-in-up">         <!-- Basic fade in -->
<div class="fade-in-up stagger-2"> <!-- Delayed 200ms -->
<!-- Increase stagger number for more delay -->
```

### Creating Responsive Layouts

```astro
<!-- Stack on mobile, side-by-side on desktop -->
<div class="flex flex-col lg:flex-row gap-6">
  <div class="flex-1">Left content</div>
  <div class="flex-1">Right content</div>
</div>
```

## Icon Usage

### Devicon Icons
For mainstream technologies: https://devicon.dev/
```typescript
{ name: "TypeScript", icon: "devicon-typescript-plain" }
{ name: "React", icon: "devicon-react-original-wordmark" }
```

### Simple Icons
For newer/niche technologies: https://simpleicons.org/
```typescript
{ name: "GitHub Copilot", icon: "si si-githubcopilot" }
{ name: "Cursor", icon: "si si-cursor" }
```

### Using in Components
```astro
<i class={tech.icon} aria-hidden="true"></i>
```

## Troubleshooting

**TypeScript errors**: Check prop interfaces match what's passed
**Styles not applying**: Ensure Tailwind class names are complete strings (not template literals)
**Content not updating**: Check if data is coming from `info.ts`, restart dev server
**Timeline/animations broken**: Verify custom CSS is imported in Layout.astro
