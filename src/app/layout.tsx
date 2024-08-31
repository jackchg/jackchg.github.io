import React from "react";

import "../styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
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
