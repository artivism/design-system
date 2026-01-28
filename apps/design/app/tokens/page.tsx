export default function TokensPage() {
  const colors = [
    {
      name: "surface",
      var: "--color-surface",
      bg: "bg-surface",
      text: "text-text",
    },
    {
      name: "surface-muted",
      var: "--color-surface-muted",
      bg: "bg-surface-muted",
      text: "text-text",
    },
    {
      name: "accent",
      var: "--color-accent",
      bg: "bg-accent",
      text: "text-white",
    },
    {
      name: "accent-hover",
      var: "--color-accent-hover",
      bg: "bg-accent-hover",
      text: "text-white",
    },
    { name: "text", var: "--color-text", bg: "bg-text", text: "text-white" },
    {
      name: "text-muted",
      var: "--color-text-muted",
      bg: "bg-text-muted",
      text: "text-white",
    },
    {
      name: "border",
      var: "--color-border",
      bg: "bg-border",
      text: "text-text",
    },
    { name: "error", var: "--color-error", bg: "bg-error", text: "text-white" },
    {
      name: "success",
      var: "--color-success",
      bg: "bg-success",
      text: "text-white",
    },
  ];

  const spacing = [1, 2, 3, 4, 6, 8];
  const typography = ["xs", "sm", "base", "lg", "xl", "2xl"];
  const radius = ["sm", "md", "lg", "full"];

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Design Tokens</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Colors</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {colors.map((color) => (
            <div
              key={color.name}
              className="border border-border rounded-md overflow-hidden"
            >
              <div
                className={`${color.bg} ${color.text} p-8 text-center font-semibold`}
              >
                {color.name}
              </div>
              <div className="p-3 bg-surface-muted">
                <code className="text-sm">{color.var}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Typography Scale</h2>
        <div className="space-y-4">
          {typography.map((size) => (
            <div
              key={size}
              className="flex items-center gap-6 border-b border-border pb-4"
            >
              <code className="text-sm text-text-muted w-20">{size}</code>
              <p className={`text-${size}`}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Spacing</h2>
        <div className="space-y-4">
          {spacing.map((space) => (
            <div key={space} className="flex items-center gap-6">
              <code className="text-sm text-text-muted w-20">
                spacing-{space}
              </code>
              <div
                className="bg-accent h-6"
                style={{ width: `${space * 0.25}rem` }}
              ></div>
              <span className="text-sm text-text-muted">
                ({space * 0.25}rem)
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Border Radius</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {radius.map((r) => (
            <div key={r} className="text-center">
              <div className={`bg-accent h-24 rounded-${r} mb-2`}></div>
              <code className="text-sm">rounded-{r}</code>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
