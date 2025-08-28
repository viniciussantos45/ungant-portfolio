# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is an Astro-based portfolio website for Ungant, featuring a modern design with React components, Tailwind CSS, and responsive navigation. The project showcases photography/visual work with a clean, professional layout.

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
- `src/pages/index.astro` - Main landing page
- `src/layouts/Layout.astro` - Base HTML layout with global styles
- `src/components/Welcome.astro` - Main content wrapper
- `src/components/react/` - React components (nav.tsx, test.tsx)
- `src/components/ui/` - Reusable UI components (button.tsx)
- `src/styles/global.css` - Global styles with CSS custom properties
- `src/utils/index.ts` - Utility functions (cn for className merging)
- `src/assets/` - Static assets (logos, icons)
- `public/projects/` - Project images

### Key Components
- **Nav** (`src/components/react/nav.tsx`) - Responsive navigation with mobile menu overlay
- **TestReactComponent** (`src/components/react/test.tsx`) - Main portfolio showcase component
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

### Image Assets
- Logo variants (black, white, orange) in SVG format
- Project images stored in `public/projects/first/` directory
- Background images referenced from public directory