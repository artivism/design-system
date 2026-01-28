# apps/design

Living documentation per Artivism Design System.
Deploy: design.artivism.it via Vercel.

## What it owns

- Documentazione tokens
- Showcase componenti con esempi live
- Pattern library
- Changelog

## Dependencies

- @artivism/tokens (workspace)
- @artivism/ui (workspace)
- Next.js 14 (App Router)

## Development

npm run dev da monorepo root

## Critical: Single Entry CSS

Tutti gli stili Tailwind via app/globals.css.
**Mai** importare CSS nei componenti → duplicazione.

## Deploy (rcel)

- Root Directory: apps/design
- Build Command: cd ../.. && npm run build:design
- Install Command: cd ../.. && npm install
- Output Directory: .next

## Gotchas

- Serve @source in globals.css per cross-package scanning
- Import da @artivism/ui, non path relativi
