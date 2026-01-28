import { Button } from "@artivism/ui/button";
import { Card } from "@artivism/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-text mb-4">
        Artivism Design System
      </h1>
      <p className="text-lg text-text-muted mb-12">
        Reusable design system for the Artivism ecosystem
      </p>

      <nav className="flex gap-6 mb-16 pb-6 border-b border-border">
        <Link
          href="/tokens"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          Tokens
        </Link>
        <Link
          href="/components"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          Components
        </Link>
        <Link
          href="/patterns"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          Patterns
        </Link>
        <Link
          href="/changelog"
          className="text-accent hover:text-accent-hover transition-colors"
        >
          Changelog
        </Link>
      </nav>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Quick Demo</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-semibold mb-2">Default Card</h3>
            <p className="text-text-muted">Card with default shadow</p>
          </Card>
          <Card variant="bordered">
            <h3 className="text-xl font-semibold mb-2">Bordered Card</h3>
            <p className="text-text-muted">Card with border</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
        <pre className="bg-surface-muted p-4 rounded-md overflow-x-auto">
          <code>{`npm install @artivism/tokens @artivism/ui
import { Button } from "@artivism/ui/button";

<Button variant="primary">Click me</Button>`}</code>
        </pre>
      </section>
    </main>
  );
}
