export default function PatternsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Patterns</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Layout</h2>
        <p className="text-text-muted mb-4">
          Use max-w-7xl container with responsive padding for consistent
          layouts.
        </p>
        <div className="bg-surface-muted p-4 rounded-md">
          <code className="text-sm">max-w-7xl mx-auto px-4</code>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Focus States</h2>
        <p className="text-text-muted mb-4">
          All interactive components support focus states for accessibility.
        </p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-accent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
            Focus me
          </button>
          <input
            type="text"
            placeholder="Focus input"
            className="px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Spacing System</h2>
        <p className="text-text-muted mb-4">
          Use spacing scale for consistent margins and padding (4px base unit).
        </p>
        <div className="space-y-2">
          <div>
            <code>spacing-1</code> = 0.25rem (4px)
          </div>
          <div>
            <code>spacing-2</code> = 0.5rem (8px)
          </div>
          <div>
            <code>spacing-4</code> = 1rem (16px)
          </div>
          <div>
            <code>spacing-8</code> = 2rem (32px)
          </div>
        </div>
      </section>
    </main>
  );
}
