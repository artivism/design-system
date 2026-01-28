# @artivism/tokens

Design tokens package. Source of truth for colors, typography, spacing, radius.

## What it owns

- CSS custom properties in @theme directive
- Semantic naming convention (role-based, not color names)

## Build

npm run build → copies src/\*.css to dist/

## Gotchas

- Never use literal color values (e.g., #3b82f6). All values must be semantic variables.
- Breakingoken changes → major version bump
- New token variable → minor version bump
