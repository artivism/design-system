import { Button } from "@artivism/ui/button";
import { Card } from "@artivism/ui/card";
import { Input } from "@artivism/ui/input";

export default function Home() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Artivism Design System</h1>
        <p className="text-xl text-muted-foreground">
          Reusable design system for the Artivism ecosystem
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Button asChild>
            <a href="/tokens">Tokens</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/components">Components</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/patterns">Patterns</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/changelog">Changelog</a>
          </Button>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-6">Quick Demo</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button disabled>Disabled</Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Default Card</h3>
          <Card className="p-6">
            <p>Card with default shadow</p>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Bordered Card</h3>
          <Card className="p-6 border-2">
            <p>Card with border</p>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Get Started</h2>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>{`npm install @artivism/tokens @artivism/ui
import { Button } from "@artivism/ui/button";

<Button variant="default">Click me</Button>`}</code>
        </pre>
      </section>
    </div>
  );
}
