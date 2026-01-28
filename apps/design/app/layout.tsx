import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artivism Design System",
  description: "Living documentation per Artivism Design System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-surface text-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
