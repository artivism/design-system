export default function TokensPage() {
  const artivisMColors = [
    { name: "blackout", var: "--artivism-blackout", hex: "#121212" },
    { name: "guerrilla", var: "--artivism-guerrilla", hex: "#1c1c1c" },
    { name: "hijack", var: "--artivism-hijack", hex: "#212121" },
    { name: "detour", var: "--artivism-detour", hex: "#2a2a2a" },
    { name: "spoof", var: "--artivism-spoof", hex: "#333333" },
    { name: "pasteup", var: "--artivism-pasteup", hex: "#666666" },
    { name: "stickerbomb", var: "--artivism-stickerbomb", hex: "#a1a1aa" },
    { name: "flashmob", var: "--artivism-flashmob", hex: "#d4d4d8" },
    { name: "wheatpaste", var: "--artivism-wheatpaste", hex: "#ffffff" },
    { name: "green", var: "--artivism-green", hex: "#66ff99" },
    { name: "alert-red", var: "--artivism-alert-red", hex: "#ef4444" },
    { name: "success-green", var: "--artivism-success-green", hex: "#22c55e" },
  ];

  const semanticColors = [
    { name: "canvas", var: "--color-canvas", maps: "blackout" },
    { name: "surface", var: "--color-surface", maps: "guerrilla" },
    { name: "accent", var: "--color-accent", maps: "green" },
    { name: "text", var: "--color-text", maps: "wheatpaste" },
    { name: "border", var: "--color-border", maps: "detour" },
    { name: "error", var: "--color-error", maps: "alert-red" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Design Tokens</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Artivism Palette</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {artivisMColors.map((color) => (
            <div key={color.name} className="border rounded-md overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
              <div className="p-8 text-center font-semibold" style={{ backgroundColor: `var(${color.var})`, color: color.name.includes("wheatpaste") || color.name.includes("flashmob") || color.name === "green" ? "#000" : "#fff" }}>
                {color.name}
              </div>
              <div className="p-3" style={{ backgroundColor: "var(--color-surface)" }}>
                <code className="text-sm">{color.var}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Semantic Tokens</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {semanticColors.map((color) => (
            <div key={color.name} className="border rounded-md overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
              <div className="p-8 text-center" style={{ backgroundColor: `var(${color.var})` }}>
                {color.name} → {color.maps}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
