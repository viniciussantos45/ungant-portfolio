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
- **Package Manager**: pnpm (lockfile present)

### Project Structure

#### Pages
- `src/pages/index.astro` - Home page with project showcase
- `src/pages/projetos.astro` - Projects page (dedicated project showcase)
- `src/pages/sobre-nos.astro` - About us page with company information
- `src/pages/contato.astro` - Contact page with form and contact details

#### Layouts
- `src/layouts/Layout.astro` - Base HTML layout with global styles
- `src/layouts/PrincipalLayout.astro` - Principal layout with integrated navigation

#### Components
- `src/components/Welcome.astro` - Main content wrapper
- `src/components/react/` - React components for project showcase
  - `nav.tsx` - Responsive navigation with mobile menu overlay (routes: /projetos, /sobre-nos, /contato)
  - `ProjectShowcase.tsx` - Main project showcase container
  - `HeroSection.tsx` - Hero section with title and CTA
  - `ProjectGrid.tsx` - Grid layout for project cards
  - `ProjectCard.tsx` - Individual project card component
- `src/components/ui/` - Reusable UI components (button.tsx)

#### Assets & Styles
- `src/styles/global.css` - Global styles with CSS custom properties
- `src/utils/index.ts` - Utility functions (cn for className merging)
- `src/assets/` - Static assets (logos, icons)
- `public/projects/` - Project media assets (images, videos)

### Key Components

#### Layout Components
- **PrincipalLayout** (`src/layouts/PrincipalLayout.astro`) - Main layout with integrated navigation
- **Nav** (`src/components/react/nav.tsx`) - Responsive navigation with mobile menu overlay

#### Project Showcase Components
- **ProjectShowcase** (`src/components/react/ProjectShowcase.tsx`) - Main container for project display
- **HeroSection** (`src/components/react/HeroSection.tsx`) - Hero section with main title and CTA
- **ProjectGrid** (`src/components/react/ProjectGrid.tsx`) - Grid layout container for projects
- **ProjectCard** (`src/components/react/ProjectCard.tsx`) - Individual project card with media preview

#### UI Components
- **Button** (`src/components/ui/button.tsx`) - Styled button component with variants

### Styling Approach
- Uses Tailwind CSS 4.x with Vite plugin integration
- Custom CSS variables defined in `src/styles/global.css` for theming
- Design system includes primary/secondary colors, shadows, and spacing
- Responsive design with mobile-first approach
- Custom color scheme with yellow/orange primary colors

### React Integration
- Components use `client:load` directive for hydration
- React 19.1.1 with TypeScript support
- State management with useState for mobile menu toggle
- Uses modern React patterns and hooks

### Media Assets
- Logo variants (black, white, orange) in SVG format
- Project media stored in `public/projects/` directory structure
- Background images referenced from public directory
- Project structure supports both video (.mp4) and photo (.jpg) assets

### Project Data Structure
Each project contains:
```typescript
interface MediaItem {
  src: string;
}

interface ProjectItem {
  title: string;
  description: string;
  subtitle: string;
  image: string;        // Cover/thumbnail image
  videos: MediaItem[];  // Array of video sources
  photos: MediaItem[];  // Array of photo sources
}
```

### Component Architecture
- **Modular Design**: Components are broken down by responsibility
- **Type Safety**: Full TypeScript interfaces for all data structures
- **Reusable Components**: ProjectCard can display any project type
- **Scalable Structure**: Easy to add new project types or media formats
- **Layout Separation**: Navigation and content are properly separated at layout level

### Page Structure
- **Home (/)**: Landing page with ProjectShowcase component
- **Projetos (/projetos)**: Dedicated projects page showcasing all video/photo work
- **Sobre Nós (/sobre-nos)**: About page with company mission and story
- **Contato (/contato)**: Contact page with form and contact information

### Navigation System
- **Responsive Design**: Desktop horizontal nav + mobile overlay menu
- **Clean Routes**: `/projetos`, `/sobre-nos`, `/contato`
- **Consistent Styling**: Matches design system across all states