import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import SEO from "@/components/SEO";
import Layout from "@/layouts";
import { SiteMetadata } from "@/data";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SiteMetadata.site_url),

  ...SEO({
    title: SiteMetadata.title,
  }),

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SiteMetadata.title,
  },

  formatDetection: {
    telephone: false,
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  other: {
    charSet: "utf-8",
    lang: "en",
  },

  archives: [SiteMetadata.github_url],
  category: "technology",

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* TODO: Add Analytics */}</head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
