import { Button } from "@artivism/ui/button";
import { Card } from "@artivism/ui/card";

export default function ComponentsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Components</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Button</h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">States</h3>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        <div className="bg-surface-muted p-4 rounded-md">
          <h3 className="text-sm font-semibold mb-2">Usage</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`import { Button } from "@artivism/ui/button";

<Button variant="primary" size="md">
  Click me
</Button>`}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Card</h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Variants</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h4 className="font-semibold mb-2">Default Card</h4>
              <p className="text-text-muted">With shadow</p>
            </Card>
            <Card variant="bordered">
              <h4 className="font-semibold mb-2">Bordered Card</h4>
              <p className="text-text-muted">With border</p>
            </Card>
          </div>
        </div>

        <div className="bg-surface-muted p-4 rounded-md">
          <h3 className="text-sm font-semibold mb-2">Usage</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`import { Card } from "@artivism/ui/card";

<Card variant="default">
  <h3>Title</h3>
  <p>Content</p>
</Card>`}</code>
          </pre>
        </div>
      </section>
    </main>
  );
}
