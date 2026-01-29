import { Button } from "@artivism/ui/button";
import { Card } from "@artivism/ui/card";
import { Input } from "@artivism/ui/input";
import { Badge } from "@artivism/ui/badge";

export default function ComponentsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Components</h1>

      {/* Button Section */}
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
      </section>

      {/* Card Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Card</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold mb-2">Default Card</h3>
            <p className="text-text-muted">
              This is a basic card component with default styling.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Content Card</h3>
            <p className="text-text-muted">
              Cards can contain any content you need.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Another Card</h3>
            <p className="text-text-muted">
              They automatically adapt to the grid layout.
            </p>
          </Card>
        </div>
      </section>

      {/* Input Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Input</h2>

        <div className="mb-8 max-w-md">
          <h3 className="text-lg font-medium mb-4">Variants</h3>
          <div className="space-y-4">
            <Input placeholder="Default input" variant="default" />
            <Input placeholder="Error state" variant="error" />
          </div>
        </div>

        <div className="mb-8 max-w-md">
          <h3 className="text-lg font-medium mb-4">Full Width</h3>
          <Input placeholder="Full width input" fullWidth />
        </div>

        <div className="mb-8 max-w-md">
          <h3 className="text-lg font-medium mb-4">States</h3>
          <div className="space-y-4">
            <Input placeholder="Normal input" />
            <Input placeholder="Disabled input" disabled />
          </div>
        </div>
      </section>

      {/* Badge Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Badge</h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Usage Examples</h3>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">New</Badge>
            <Badge variant="success">Active</Badge>
            <Badge variant="error">Deprecated</Badge>
            <Badge variant="warning">Beta</Badge>
          </div>
        </div>
      </section>
    </main>
  );
}
