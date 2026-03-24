import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://arpanpandey.dev",
  ),
  title: {
    default: "Arpan Pandey",
    template: "%s | Arpan Pandey",
  },
  description:
    "Developer portfolio of Arpan Pandey. Projects, writing, and contact information.",
  applicationName: "Arpan Pandey",
  authors: [{ name: "Arpan Pandey" }],
  generator: "Next.js",
  keywords: [
    "Arpan Pandey",
    "portfolio",
    "developer",
    "software engineer",
    "projects",
    "writing",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Arpan Pandey",
    title: "Arpan Pandey",
    description:
      "Developer portfolio of Arpan Pandey. Projects, writing, and contact information.",
    images: [
      {
        url: "/screenshots/1.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpan Pandey",
    description:
      "Developer portfolio of Arpan Pandey. Projects, writing, and contact information.",
    images: ["/screenshots/1.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.0.0/files/jetbrains-mono-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="45f2d98a-df6c-4c68-8c56-215354e04fa9"
        ></script>
      </head>
      <body className={mono.className}>{children}</body>
    </html>
  );
}
