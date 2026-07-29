import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tectaseal.com"),
  title: {
    default: "TECTASEAL | PVC & TPO Roofing Systems",
    template: "%s | TECTASEAL",
  },
  description:
    "PVC and TPO single-ply roofing membranes, prefabricated details, drains, fasteners and project-specific export supply.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/tectaseal-mark.png",
    shortcut: "/assets/tectaseal-mark.png",
  },
  openGraph: {
    title: "TECTASEAL | PVC & TPO Roofing Systems",
    description:
      "Project-ready single-ply roofing supply, from membrane to final detail.",
    type: "website",
    images: [
      {
        url: "https://www.tectaseal.com/og.png",
        width: 1732,
        height: 909,
        alt: "TECTASEAL PVC and TPO roofing systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECTASEAL | PVC & TPO Roofing Systems",
    description:
      "Project-ready single-ply roofing supply, from membrane to final detail.",
    images: ["https://www.tectaseal.com/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
