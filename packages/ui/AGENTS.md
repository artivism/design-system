# @artivism/ui

React UI components library. Consumes @artivism/tokens.

## What it owns

- Reusable React components (Button, Card, etc.)
- Component API: variant, size, disabled, className passthrough

## Dependencies

- @artivism/tokens (CSS tokens)
- React 18+ (peer)

## Build

npm run build → tsup generates ESM + type definitions

## Code Style

- Use forwardRef for DOM components
- Props: variant, size, className, ...rest pattern
- Tailwind utilities only (no inline styles, no hardcoded colors)
- See Button component for canonical structure

## Gotchas

- Breaking prop change → major version
- New variant on existing component → minor
- All components must support disabled and focues
