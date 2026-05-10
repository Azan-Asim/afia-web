// Root app shell that defines metadata, global styles, and the shared document structure.
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Afia AI",
  title: {
    default: "Afia AI | Investor Overview",
    template: "%s | Afia AI",
  },
  description:
    "Investor overview for Afia, an AI-driven preventive health platform turning wearable signals into actionable decisions.",
  category: "technology",
  keywords: [
    "Afia",
    "Afia AI",
    "investor overview",
    "digital health",
    "preventive health",
    "wearables",
    "health AI",
  ],
  authors: [{ name: "Afia AI" }],
  creator: "Afia AI",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Afia AI | Investor Overview",
    description:
      "Explore Afia's investor overview for an AI-driven preventive health platform.",
    type: "website",
    siteName: "Afia AI",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afia AI | Investor Overview",
    description:
      "Explore Afia's investor overview for an AI-driven preventive health platform.",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
