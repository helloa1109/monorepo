
import type { Metadata } from "next";
import "./globals.css";
import React from 'react'

import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Monorepo Web App",
  description: "Modern monorepo with Next.js, TypeScript, and Turborepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}