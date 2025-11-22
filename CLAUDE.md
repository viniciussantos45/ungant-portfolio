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

## Architecture

### Tech Stack
- **Framework**: Astro 5.13.2 with React integration
- **Styling**: Tailwind CSS 4.1.12 with custom CSS variables
- **Icons**: Phosphor Icons React
- **UI Components**: Custom components using Radix UI primitives
- **Gallery**: LightGallery 2.9.0-beta.1 for enhanced image and video display
- **Carousel**: Embla Carousel 8.6.0 for custom carousel components
- **Package Manager**: pnpm (lockfile present)

### Project Structure

#### Pages
- `src/pages/index.astro` - Home page with project showcase
- `src/pages/projetos.astro` - Projects page (dedicated project showcase)
- `src/pages/sobre-nos.astro` - About us page with company information
- `src/pages/contato.astro` - Contact page with form and contact details
- `src/pages/gallery/[id].astro` - Dynamic gallery route for individual projects with separate image and video sections

#### Layouts
- `src/layouts/Layout.astro` - Base HTML layout with global styles and dark mode support
- `src/layouts/PrincipalLayout.astro` - Principal layout with integrated navigation and server-side path detection

#### Components
- `src/components/react/` - React components for project showcase
  - `nav.tsx` - Responsive navigation with mobile menu overlay (routes: /projetos, /sobre-nos, /contato)
  - `ProjectShowcase.tsx` - Main project showcase container
  - `HeroSection.tsx` - Hero section with title and CTA
  - `ProjectGrid.tsx` - Grid layout for project cards
  - `ProjectCard.tsx` - Individual project card component
- `src/components/ui/` - Reusable UI components
  - `button.tsx` - Styled button component with variants
  - `carousel/` - Embla carousel components (index.tsx, arrow-buttons.tsx, dot-buttons.tsx)
  - `images-gallery.tsx` - LightGallery React component for images with Embla carousel integration
  - `videos-gallery.tsx` - LightGallery React component for HTML5 videos with Embla carousel integration

#### Data Layer
- `src/data/projects.ts` - Centralized project data with TypeScript interfaces for all project information

#### Assets & Styles
- `src/styles/global.css` - Global styles with CSS custom properties and dark mode theming
- `src/utils/index.ts` - Utility functions (cn for className merging)
- `src/assets/` - Static assets (logos: logotipo-black.svg, logotipo-white.svg, logotipo-orange.svg)
- `public/projects/` - Project media assets organized by project (images, videos)

### Key Architectural Patterns

#### Data-Driven Content
Projects are centrally managed in `src/data/projects.ts` with TypeScript interfaces:
```typescript
interface MediaItem {
  src: string;
}

export interface ProjectItem {
  id: string;           // Unique identifier for routing
  title: string;
  description: string;
  subtitle: string;
  image: string;        // Cover/thumbnail image
  videos: MediaItem[];  // Array of video sources
  photos: MediaItem[];  // Array of photo sources
}
```

#### Dynamic Routing
- **Project Cards**: Navigate to `/gallery/{project-id}` when clicked
- **Static Generation**: `/gallery/[id].astro` uses `getStaticPaths()` to pre-render all project pages
- **Gallery Pages**: Separate "Photos" and "Videos" sections using ImagesGallery and VideosGallery components

#### Gallery System Integration
- **LightGallery**: Handles lightbox functionality with zoom, thumbnails, and video playback
- **Embla Carousel**: Provides responsive carousel navigation for gallery items
- **Configuration**:
  - Images: Use `data-src` attribute and `.gallery-item` selector
  - Videos: Use `data-video` attribute (JSON with source array) and `.video-gallery-item` selector
  - Both integrate with Carousel component for responsive grid navigation

#### Navigation Pattern
- **Server-Side Path Detection**: `PrincipalLayout.astro` passes `Astro.url.pathname` to Nav component
- **Active State Management**: Nav component uses `currentPath` prop to highlight active page
- **Responsive Design**: Desktop horizontal nav + mobile fullscreen overlay
- **Logo Variants**: Orange logo (`logotipo-orange.svg`) for desktop/mobile nav, black logo (`logotipo-black.svg`) for mobile overlay contrast

#### Styling System
- **CSS Variables**: Defined in `src/styles/global.css` with separate `:root` and `.dark` themes
- **Tailwind Integration**: Vite plugin for Tailwind CSS 4.x (@tailwindcss/vite)
- **Color Tokens**: Primary (orange), secondary, background, foreground, etc. mapped to CSS custom properties
- **Dark Mode**: Class-based theming with `.dark` class on html element
- **Typography**: Acumin Pro font for dark mode, system fonts for light mode

#### React Integration
- **Hydration**: Components use `client:load` directive for interactive elements (Nav, galleries, carousels)
- **Modern React**: Version 19.1.1 with TypeScript support
- **State Management**: useState for local component state (e.g., mobile menu toggle)

### Component Patterns

#### Layout Components
- **PrincipalLayout**: Wraps pages with Nav component and provides proper spacing (pt-20 mobile, pt-24 desktop) for fixed navigation
- **Fixed Navigation**: Backdrop blur effect (`backdrop-blur-md bg-background/80`) with z-40 for nav, z-50 for mobile overlay

#### Button Component
- Central component used throughout (navigation, CTAs, forms)
- Variants: `default`, `secondary`, `outline`, `ghost`
- Built with Radix UI Slot and class-variance-authority

#### Gallery Components
- **ImagesGallery**: Displays images in carousel with LightGallery integration
  - Square aspect ratio (`aspect-square`)
  - Configurable slides to scroll (default: 4)
- **VideosGallery**: Displays videos with play button overlay
  - Video aspect ratio (`aspect-video`)
  - Configurable slides to scroll (default: 3)
  - Uses `data-video` attribute with JSON configuration for proper video playback

#### Carousel Component
- Embla-based carousel with prev/next buttons and dot navigation
- Configurable `slidesToScroll` via options prop
- CSS custom property `--slides-to-show` for responsive grid layout
