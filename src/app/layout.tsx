import type { Metadata } from "next";
// src/app/layout.tsx
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Yellow Lane",
  description: "attention is currency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="max-w-5xl mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
