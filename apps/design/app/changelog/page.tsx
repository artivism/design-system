export default function ChangelogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Changelog</h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">v0.1.0</h2>
          <p className="text-sm text-text-muted mb-4">2026-01-28</p>
          <ul className="list-disc list-inside space-y-2 text-text-muted">
            <li>Initial monorepo setup</li>
            <li>@artivism/tokens: CSS-first design tokens</li>
            <li>@artivism/ui: Button and Card components</li>
            <li>Living spec documentation</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
