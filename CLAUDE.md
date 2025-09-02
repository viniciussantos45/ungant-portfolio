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
- **PrincipalLayout** (`src/layouts/PrincipalLayout.astro`) - Main layout with integrated navigation and server-side path detection
- **Layout** (`src/layouts/Layout.astro`) - Base HTML layout with dark mode support and transition animations
- **Nav** (`src/components/react/nav.tsx`) - Responsive navigation with active page highlighting using Button components

#### Project Showcase Components
- **ProjectShowcase** (`src/components/react/ProjectShowcase.tsx`) - Main container with background styling (background image disabled)
- **HeroSection** (`src/components/react/HeroSection.tsx`) - Hero section using Button component for CTA
- **ProjectGrid** (`src/components/react/ProjectGrid.tsx`) - Grid layout container for projects
- **ProjectCard** (`src/components/react/ProjectCard.tsx`) - Individual project card with media preview

#### UI Components
- **Button** (`src/components/ui/button.tsx`) - Styled button component with variants (used throughout navigation and CTAs)

### Styling Approach
- Uses Tailwind CSS 4.x with Vite plugin integration
- Custom CSS variables defined in `src/styles/global.css` for theming
- **Dark mode support** with class-based theming (`class="dark"` on html element)
- Design system includes primary/secondary colors, shadows, and spacing
- Responsive design with mobile-first approach
- **Orange logo variant** used in navigation (`logotipo-orange.svg`)
- **Backdrop blur effects** used in page sections for visual depth
- **Smooth transitions** with duration-500 for color changes

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
- **Active Page Highlighting**: Server-side path detection with instant visual feedback
- **Button-Based Navigation**: Uses Button component with `default`/`outline` variants for active/inactive states
- **Performance Optimized**: No client-side path detection, eliminates flash/delay on page load
- **Consistent Styling**: Matches design system across all states
- **Mobile Menu Enhancement**: Improved mobile overlay layout with proper logo positioning and contrast
- **Fixed Position**: Navigation stays fixed at top with backdrop blur for modern glass effect
- **Proper Z-Index**: Navigation at z-40, mobile overlay at z-50 for correct layering

### Recent Technical Improvements
- **Server-Side Navigation**: PrincipalLayout passes `Astro.url.pathname` to Nav component
- **Component Consistency**: Button component used throughout (navigation, CTAs, forms)
- **Dark Mode Integration**: Full dark mode support with smooth transitions
- **Background Optimization**: ProjectShowcase background image disabled for performance
- **Form Styling**: Contact page uses consistent Button styling
- **Logo System**: Desktop navigation uses orange logo variant, mobile overlay uses black logo for contrast
- **Button Variant Update**: Navigation buttons now use 'outline' variant for inactive states (better visual hierarchy)
- **Mobile Navigation Redesign**: Enhanced mobile overlay with improved layout, logo contrast, and removed bottom CTA
- **Color System Refinement**: Updated secondary color variable for better contrast and readability
- **Fixed Navigation Enhancement**: Added fixed positioning with backdrop blur effect and semi-transparent background
- **Layout Spacing Updates**: Added proper padding-top to main content (pt-20 mobile, pt-36 desktop) to account for fixed navigation
- **Page Layout Optimization**: Removed redundant padding from contato and sobre-nos pages as spacing is now handled by layout