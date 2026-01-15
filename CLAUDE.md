# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is an Astro-based portfolio website for Ungant, featuring a modern design with React components, Tailwind CSS, and responsive navigation. The project showcases video and photo projects with a clean, professional layout and modular component architecture.

## Development Commands
- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally
- `pnpm astro ...` - Run Astro CLI commands (e.g., `pnpm astro add`, `pnpm astro check`)
- `pnpm download-projects` - Download project media from Google Drive and regenerate `src/data/projects.ts`
  - Requires: `gdown` (pip install gdown), optionally `ffmpeg` for video optimization
  - Flags: `--force` to re-download, `--keep-temp` to preserve temp files

## Architecture

### Tech Stack
- **Framework**: Astro 5.x with React integration
- **Styling**: Tailwind CSS 4.x via Vite plugin (@tailwindcss/vite)
- **Icons**: Phosphor Icons React
- **UI Components**: Custom components using Radix UI primitives (Slot) + class-variance-authority
- **Gallery**: LightGallery for lightbox functionality with zoom, thumbnails, and video playback
- **Carousel**: Embla Carousel for responsive carousel navigation
- **Package Manager**: pnpm

### Project Structure

#### Pages
- `src/pages/index.astro` - Home page (Welcome component)
- `src/pages/projetos.astro` - Projects page with ProjectShowcase grid
- `src/pages/sobre-nos.astro` - About us page
- `src/pages/contato.astro` - Contact page
- `src/pages/gallery/[id].astro` - Dynamic gallery route for individual projects (uses `getStaticPaths()`)

#### Layouts
- `src/layouts/Layout.astro` - Base HTML layout with global styles, dark mode class on `<html>`
- `src/layouts/PrincipalLayout.astro` - Wraps pages with Nav component, passes `Astro.url.pathname` for active state

#### Components
- `src/components/react/` - React components (hydrated with `client:load`)
  - `nav.tsx` - Responsive navigation with mobile fullscreen overlay
  - `ProjectShowcase.tsx`, `ProjectGrid.tsx`, `ProjectCard.tsx` - Project display components
  - `HeroSection.tsx`, `ProjectInfo.tsx`, `AboutStats.tsx` - Section components
- `src/components/ui/` - Reusable UI components
  - `button.tsx` - Button with variants (default, secondary, outline, ghost)
  - `carousel/` - Embla carousel (index.tsx, arrow-buttons.tsx, dot-buttons.tsx)
  - `images-gallery.tsx` - LightGallery for images (selector: `.gallery-item`, attr: `data-src`)
  - `videos-gallery.tsx` - LightGallery for videos (selector: `.video-gallery-item`, attr: `data-video` with JSON)

#### Data Layer
- `src/data/projects.ts` - Project data array with TypeScript interfaces
- Media hosted on external CDN (r2-ungant.whitecommand.com) - URLs stored in project data

### Key Architectural Patterns

#### Data-Driven Content
Projects managed in `src/data/projects.ts`:
```typescript
interface MediaItem { src: string; }
export interface ProjectItem {
  id: string;           // URL slug for routing
  title: string;
  description: string;
  subtitle: string;
  image: string;        // Cover/thumbnail
  videos: MediaItem[];
  photos: MediaItem[];
}
```

#### Dynamic Routing
- Project cards link to `/gallery/{project-id}`
- Gallery pages use `getStaticPaths()` for static generation
- Gallery displays separate "Videos" and "Fotos" sections

#### Gallery System
- **LightGallery** handles lightbox with zoom, thumbnails, video playback
- **Embla Carousel** provides navigation with prev/next buttons and dots
- Images: `data-src` attribute, `.gallery-item` selector, `slidesToScroll: 4`
- Videos: `data-video` attribute (JSON format), `.video-gallery-item` selector, `slidesToScroll: 3`

#### Styling System
- CSS variables in `src/styles/global.css` with `:root` and `.dark` themes
- Color tokens: primary (orange), secondary, background, foreground
- Dark mode via `.dark` class on `<html>` element
- Acumin Pro font (dark mode), system fonts fallback
- Custom animations: `animate-blob`, `animate-fadeInUp`, `animate-scaleIn`

#### React Integration
- Components use `client:load` for hydration
- Local state with useState (e.g., mobile menu toggle)
- Utility: `cn()` function from `src/utils/index.ts` for className merging (clsx + tailwind-merge)
