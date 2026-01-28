# Artivism Design System - Agent Instructions

Monorepo for design system. Read before making changes.

## Commands

- npm run dev: Start living spec
- npm run build: Build all workspaces
- npm run changeset: Create version changeset

## Rules

1. Always typecheck before commit
2. Changes to packages/ require changeset
3. Never hardcode values, use Tailwind tokens
4. Single CSS entry per app

## Semver

- Major: Breaking changes
- Minor: New features
- Patch: Bug fixes
