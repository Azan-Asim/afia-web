# Afia Investor Overview

Afia is a Next.js investor landing page for an AI-driven preventive health
platform. The app is built as a single polished marketing experience with a
modular section architecture, typed content, and reusable UI primitives.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

- `src/app`: App router entry points and global styles
- `src/components/branding`: Brand-specific UI like the Afia logo
- `src/components/icons`: Reusable line icon set
- `src/components/sections`: Navbar, page shell, shared primitives, and page sections
- `src/data`: Typed investor content used to drive the page
- `src/types`: Shared TypeScript models

## Notes

- Home page content is centralized in `src/content/home/HomeContent.ts`.
- Large page sections are split into reusable components in
  `src/components/sections`.
- Generic create-next-app boilerplate has been removed in favor of
  project-specific structure and copy.
