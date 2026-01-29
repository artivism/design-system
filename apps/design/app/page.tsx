// apps/design/app/page.tsx
import Link from "next/link"
import { Button } from "@artivism/ui/button"
import { Badge } from "@artivism/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@artivism/ui/card"
import {
  Palette,
  Code2,
  Zap,
  Package,
  ArrowRightIcon,
  Github,
  BookOpen,
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" />
        <div className="container relative mx-auto px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <Badge variant="outline" className="mb-4">
              <Package className="w-3 h-3 mr-1" />
              v0.1.2 - 54 Components
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Artivism Design System
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive multimodal design system for the artivism ecosystem.
              Built with React, TypeScript, Tailwind CSS, and shadcn/ui.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/docs">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Documentation
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://github.com/artivism/design-system"
                  target="_blank"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Palette className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Design Tokens</CardTitle>
              <CardDescription>
                Centralized color, spacing, and typography tokens for consistent
                theming across your projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                @artivism/tokens
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code2 className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>UI Components</CardTitle>
              <CardDescription>
                54 production-ready components with full TypeScript support and
                accessibility features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                @artivism/ui
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Turborepo Monorepo</CardTitle>
              <CardDescription>
                Optimized workspace setup with fast builds and efficient
                development workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                npm workspaces
              </code>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Start */}
      <section className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Quick Start
              </h2>
              <p className="text-muted-foreground">
                Install the packages and start building beautiful interfaces
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">
                      Install packages:
                    </p>
                    <pre className="bg-background border rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm">
                        npm install @artivism/ui @artivism/tokens
                      </code>
                    </pre>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Import and use:</p>
                    <pre className="bg-background border rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm">
                        {`import { Button } from "@artivism/ui/button"

export default function App() {
  return <Button>Click me</Button>
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-4">
              <Button size="lg" asChild>
                <Link href="/docs">
                  Explore All Components
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              artivism® designed by Chry in outer space
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/artivism/design-system"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://design.artivism.it"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="https://www.npmjs.com/package/@artivism/ui"
                className="text-sm text-muted-foreground hover:text-foreground tansition-colors"
              >
                npm
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
