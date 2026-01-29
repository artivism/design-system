import { Button } from "@artivism/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@artivism/ui/card";
import { Input } from "@artivism/ui/input";
import { Badge } from "@artivism/ui/badge";

export default function ComponentsPage() {
  return (
    <div className="container mx-auto py-12 space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-2">Components</h1>
        <p className="text-muted-foreground">@artivism/ui component library</p>
      </div>

      {/* Button */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Button</h2>
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>Multiple button styles for different contexts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Input */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Input</h2>
        <Card>
          <CardHeader>
            <CardTitle>Input Field</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Default input..." />
            <Input placeholder="Disabled input..." disabled />
          </CardContent>
        </Card>
      </section>

      {/* Badge */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Badge</h2>
        <Card>
          <CardHeader>
            <CardTitle>Badge Variants</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
